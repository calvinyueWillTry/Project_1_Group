/** @format */
import { attackEnd, growl, attack } from './attacks.js';
import { playPokemon } from './playPokemon.js';
import { typingAnim } from './typingAnim.js';
import { reset, healthbar, hider } from './utils.js';
import {
	player,
	playerLevel,
	playerPokemon,
	foe,
	foePokemon,
	hpPlayerTotal,
} from './attacks.js';

$(document).ready(() => {
	$('.player .level').text(playerLevel);
	$('.player .hp').text(hpPlayerTotal);
	$('.player .hpTotal').text(hpPlayerTotal);
	$('.player .name').text(playerPokemon.name.toUpperCase());
	$('#move0').html('TACKLE');
	$('#move1').html('TAIL WHIP');
	$('#move2').html('-');

	$('.foe .level').text(playerLevel);
	$('.foe .name').text(foePokemon.name.toUpperCase());

	hider();

	reset();

	healthbar();

	// TODO: Promise Constructor
	// Use potion, initialize potion count
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
