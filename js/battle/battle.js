/** @format */
import { attackEnd, growl, attack } from './attacks.js';
import { playPokemon } from './playPokemon.js';
import { typingAnim } from './typingAnim.js';

$(document).ready(() => {
	// Retrieve the selected Pokémon from local storage
	const selectedPokemon = JSON.parse(localStorage.getItem('selectedPokemon'));

	// Player setup
	const player = 'Red';
	const playerLevel = 5;
	const playerPokemon = selectedPokemon || {
		name: 'Pikachu',
		hp: 35,
		atk: 70,
		def: 30,
	};

	const hpPlayerTotal = playerPokemon.hp;

	let hpPlayer = hpPlayerTotal;
	$('.player .level').text(playerLevel);
	$('.player .hp').text(hpPlayerTotal);
	$('.player .hpTotal').text(hpPlayerTotal);
	$('.player .name').text(playerPokemon.name.toUpperCase());
	$('#move0').html('TACKLE');
	$('#move1').html('TAIL WHIP');
	$('#move2').html('-');

	// Foe setup
	var foe = 'Blue';
	var foePokemon = {
		name: 'Eevee',
		hp: 40,
		atk: 55,
		def: 50,
	};
	const hpFoeFull = foePokemon.hp;
	let hpFoe = hpFoeFull;
	let foeBaseDefense = foePokemon.def;
	$('.foe .level').text(playerLevel);
	$('.foe .name').text(foePokemon.name.toUpperCase());

	// Hide all menus except dialog
	const hider = () => {
		$('.window.menu').hide();
		$('.window.item').hide();
		$('.window.pkmn').hide();
		$('.window.fight').hide();
	};

	// Reset to battle ready mode for turn or cancel
	const reset = () => {
		$('.text1').text('');
		$('.text2').text('');
		$('.window.item').hide();
		$('.window.pkmn').hide();
		$('.window.fight').hide();
		$('.window.menu').show();
	};

	// Health bar width calculation and health numbers
	const healthbar = (current, total) => {
		const hpCurrent = current;
		const hpTotal = total;
		const percentTotal = 100;
		const percentCurrent = (hpCurrent * percentTotal) / hpTotal;
		return percentCurrent;
	};

	// Use potion
	let potionCount = 1;

	$('.potionCount').text(potionCount);
	const potion = (potionType) => {
		let strength;
		hider();
		if (potionType === 'normal') {
			strength = 20;
		} else if (potionType === 'super') {
			strength = 50;
		} else if (potionType === 'hyper') {
			strength = 200;
		} else {
			strength = 999;
		}
		if (hpPlayer >= hpPlayerTotal) {
			$('.text1').text('HP already');
			$('.text2').text('full!');
			typingAnim();
			window.setTimeout(() => {
				reset();
			}, 1000);
		} else {
			$('.text1').text('Used POTION!');
			$('.text2').text('');
			typingAnim();
			hpPlayer += strength;
			if (hpPlayer >= hpPlayerTotal) {
				hpPlayer = hpPlayerTotal;
			}
			$('.player .hp').text(hpPlayer);
			$('.player .hp-bar-active').animate(
				{
					width: `${healthbar(hpPlayer, hpPlayerTotal)}%`,
				},
				500
			);
			potionCount--;
			attackEnd();
		}
		$('.potionCount').text(potionCount);
		if (potionCount <= 0) {
			$('.potion').hide();
		}
	};
}, 1000);
playPokemon();
