/** @format */

import { hider, healthbar, reset } from './utils.js';
import { typingAnim } from './typingAnim.js';

// Retrieve the selected Pokémon from local storage
// const selectedPokemon = JSON.parse(localStorage.getItem('selectedPokemon'));
// Player setup
export const player = 'Red';
export const playerLevel = 5;
export const playerPokemon = {
	name: 'Pikachu',
	hp: 35,
	atk: 70,
	def: 30,
};

// Foe setup
export const foe = 'Blue';
export const foePokemon = {
	name: 'Eevee',
	hp: 40,
	atk: 55,
	def: 50,
};

// Foe pokemon setup
export const hpPlayerTotal = playerPokemon.hp;
export const hpFoeFull = foePokemon.hp;
let hpFoe = hpFoeFull;
let foeBaseDefense = foePokemon.def;
let hpPlayer = hpPlayerTotal;

// Enemy turn
export const attackEnd = async () => {
	if (hpFoe <= 0) {
		$('.window.menu').hide();
		$('.foe .hp-bar-active').css('width', '0%');
		await window.setTimeout(async () => {
			$('.foe .images').delay(500).animate(
				{
					bottom: '-35em',
				},
				1000
			);
			$('.text1').text(`${foePokemon.name.toUpperCase()} fainted!`);
			$('.text2').text('');
			typingAnim();
			await window.setTimeout(async () => {
				$('.foe .stats').hide();
				$('.text1').text(`Got $${Math.floor(playerLevel * 2.5)} for`);
				$('.text2').text('winning!');
				typingAnim();
				window.setTimeout(() => {
					$('.text1').text(`${foe.toUpperCase()}: I can't`);
					$('.text2').text('believe it!');
					typingAnim();
					window.setTimeout(() => {
						$('.text1').text('I chose the');
						$('.text2').text('wrong POKéMON!');
						typingAnim();
					}, 2000);
				}, 2000);
			}, 2000);
		}, 2000);
	} else {
		window.setTimeout(() => {
			$('.text1').text(`${foePokemon.name.toUpperCase()} used`);
			$('.text2').text('TACKLE!');
			typingAnim();
			$('.foe .images')
				.animate(
					{
						right: '0em',
					},
					100,
					'linear'
				)
				.animate(
					{
						right: '1.8em',
					},
					50,
					'linear'
				)
				.delay(100)
				.animate(
					{
						right: '0.8em',
					},
					10,
					'linear'
				);
			window.setTimeout(() => {
				$('.player .images').css('opacity', 0);
				window.setTimeout(() => {
					$('.player .images').css('opacity', 1);
					window.setTimeout(() => {
						$('.player .images').css('opacity', 0);
						window.setTimeout(() => {
							$('.player .images').css('opacity', 1);
							window.setTimeout(() => {
								$('.player .images').css('opacity', 0);
								window.setTimeout(() => {
									$('.player .images').css('opacity', 1);
									window.setTimeout(() => {
										const basePower = 40;
										const baseDamage =
											Math.floor(
												Math.floor(
													Math.floor((2 * playerLevel) / 5 + 2) *
														basePower *
														(foePokemon.atk / playerPokemon.def)
												) / 50
											) + 2;
										// TODO: Remove SetTimeouts
										// console.log(hpPlayer);
										hpPlayer -= baseDamage;
										// console.log(hpPlayer);
										if (hpPlayer <= 0) {
											$('.window.menu').hide();
											$('.player .hp').text('0');
											$('.player .hp-bar-active').css('width', '0%');
											$('.player .stats').hide();
											window.setTimeout(() => {
												$('.player .images').delay(500).animate(
													{
														bottom: '-35.714em',
													},
													1000
												);
												$('.text1').text(
													`${playerPokemon.name.toUpperCase()} fainted...`
												);
												$('.text2').text('');
												typingAnim();
												window.setTimeout(() => {
													$('.text1').text(`${player.toUpperCase()} is out of`);
													$('.text2').text('useable POKéMON...');
													typingAnim();
													window.setTimeout(() => {
														$('.text1').text(
															`${player.toUpperCase()} whited out!`
														);
														$('.text2').text('');
														typingAnim();
													}, 2000);
												}, 2000);
											}, 2000);
										} else {
											$('.player .hp').text(hpPlayer);
											$('.player .hp-bar-active').animate(
												{
													width: `${healthbar(hpPlayer, hpPlayerTotal)}%`,
												},
												500
											);
											window.setTimeout(() => {
												reset();
											}, 2400);
										}
									}, 100);
								}, 100);
							}, 100);
						}, 100);
					}, 100);
				}, 100);
			}, 100);
		}, 2000);
	}
};

// Growl
export const growl = () => {
	hider();
	$('.text1').text(playerPokemon.name.toUpperCase());
	$('.text2').text('used GROWL!');
	typingAnim();
	window.setTimeout(() => {
		if (foeBaseDefense < foePokemon.def - 20) {
			$('.text1').text(`${foePokemon.name.toUpperCase()}'s defense`);
			$('.text2').text("can't drop lower!");
			typingAnim();
			window.setTimeout(() => {
				attackEnd();
			}, 2000);
		} else {
			$('.text1').text(`${foePokemon.name.toUpperCase()}'s defense`);
			$('.text2').text('dropped by 2!');
			foeBaseDefense -= 2;
			typingAnim();
			window.setTimeout(() => {
				attackEnd();
			}, 2000);
		}
	}, 2000);
};

export const attack = (moveName) => {
	hider();
	$('.text1').text(`${playerPokemon.name.toUpperCase()} used`);
	$('.text2').text(`${moveName.toUpperCase()}!`);
	typingAnim();
	$('.player .images')
		.animate(
			{
				left: '0em',
			},
			100,
			'linear'
		)
		.animate(
			{
				left: '1.8em',
			},
			50,
			'linear'
		)
		.delay(100)
		.animate(
			{
				left: '0.8em',
			},
			10,
			'linear'
		);
	window.setTimeout(() => {
		$('.foe .images').css('opacity', 0);
		window.setTimeout(() => {
			$('.foe .images').css('opacity', 1);
			window.setTimeout(() => {
				$('.foe .images').css('opacity', 0);
				window.setTimeout(() => {
					$('.foe .images').css('opacity', 1);
					window.setTimeout(() => {
						$('.foe .images').css('opacity', 0);
						window.setTimeout(() => {
							$('.foe .images').css('opacity', 1);
							const basePower = 40;
							const baseDamage =
								Math.floor(
									Math.floor(
										Math.floor((2 * playerLevel) / 5 + 2) *
											basePower *
											(playerPokemon.atk / foePokemon.def)
									) / 50
								) + 2;
							hpFoe -= baseDamage;
							$('.foe .hp-bar-active').animate(
								{
									width: `${healthbar(hpFoe, hpFoeFull)}%`,
								},
								500
							);
							attackEnd();
						}, 100);
					}, 100);
				}, 100);
			}, 100);
		}, 100);
	}, 100);
};
