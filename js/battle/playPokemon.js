/** @format */
import { typingAnim } from './typingAnim.js';
import {
	player,
	playerLevel,
	playerPokemon,
	foe,
	foePokemon,
} from './attacks.js';
import { reset } from './utils.js';

// Start animation
export const playPokemon = () => {
	$('.foe .images').css('right', '16em');
	$('.player .images').css('left', '16em');
	$(
		'.player .pokemon, .foe .pokemon, .stats, .balls, .window.item, .window.pkmn, .window.fight, .window.menu'
	).hide();
	window.setTimeout(() => {
		$('.foe .images').animate(
			{
				right: '0.8em',
			},
			800,
			'linear'
		);
		$('.player .images').animate(
			{
				left: '0.8em',
			},
			800,
			'linear'
		);
		window.setTimeout(() => {
			$('.trainer, .balls').show();
			window.setTimeout(() => {
				$('.text1').text(`${foe.toUpperCase()} wants`);
				$('.text2').text('to fight!');
				typingAnim();
				window.setTimeout(() => {
					$('.balls').hide();
					$('.foe .images').animate(
						{
							right: '-21em',
						},
						400,
						'linear'
					);
					window.setTimeout(() => {
						$('.text1').text(`${foe.toUpperCase()} sent`);
						$('.text2').text(`out ${foePokemon.name.toUpperCase()}!`);
						typingAnim();
						$('.foe .pokemon').show();
						$('.foe .trainer').hide();
						$('.foe .images').animate(
							{
								right: '0.8em',
							},
							700,
							'linear'
						);
						window.setTimeout(() => {
							$('.foe .stats').show();
							$('.player .images').animate(
								{
									left: '-21em',
								},
								400,
								'linear'
							);
							window.setTimeout(() => {
								$('.player .trainer').hide();
								$('.player .pokemon').show();
								$('.player .images').animate(
									{
										left: '0.8em',
									},
									700,
									'linear'
								);
								$('.text1').text(`Go! ${playerPokemon.name.toUpperCase()}!`);
								$('.text2').text('');
								typingAnim();
								$('.player .stats').show();
								window.setTimeout(() => {
									reset();
								}, 2000);
							}, 800);
						}, 1500);
					}, 1000);
				}, 2500);
			}, 400);
		}, 800);
	}, 600);
};
