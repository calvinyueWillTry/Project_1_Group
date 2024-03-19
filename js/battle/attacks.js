/** @format */

// Enemy turn
export const attackEnd = () => {
	if (hpFoe <= 0) {
		$('.window.menu').hide();
		$('.foe .hp-bar-active').css('width', '0%');
		window.setTimeout(() => {
			$('.foe .images').delay(500).animate(
				{
					bottom: '-35em',
				},
				1000
			);
			$('.text1').text(`${foePokemon.name.toUpperCase()} fainted!`);
			$('.text2').text('');
			typer();
			window.setTimeout(() => {
				$('.foe .stats').hide();
				$('.text1').text(`Got $${Math.floor(playerLevel * 2.5)} for`);
				$('.text2').text('winning!');
				typer();
				window.setTimeout(() => {
					$('.text1').text(`${foe.toUpperCase()}: I can't`);
					$('.text2').text('believe it!');
					typer();
					window.setTimeout(() => {
						$('.text1').text('I chose the');
						$('.text2').text('wrong POKéMON!');
						typer();
					}, 2000);
				}, 2000);
			}, 2000);
		}, 2000);
	} else {
		window.setTimeout(() => {
			$('.text1').text(`${foePokemon.name.toUpperCase()} used`);
			$('.text2').text('TACKLE!');
			typer();
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
										hpPlayer -= baseDamage;
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
												typer();
												window.setTimeout(() => {
													$('.text1').text(`${player.toUpperCase()} is out of`);
													$('.text2').text('useable POKéMON...');
													typer();
													window.setTimeout(() => {
														$('.text1').text(
															`${player.toUpperCase()} whited out!`
														);
														$('.text2').text('');
														typer();
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
	typer();
	window.setTimeout(() => {
		if (foeBaseDefense < foePokemon.def - 20) {
			$('.text1').text(`${foePokemon.name.toUpperCase()}'s defense`);
			$('.text2').text("can't drop lower!");
			typer();
			window.setTimeout(() => {
				attackEnd();
			}, 2000);
		} else {
			$('.text1').text(`${foePokemon.name.toUpperCase()}'s defense`);
			$('.text2').text('dropped by 2!');
			foeBaseDefense -= 2;
			typer();
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
	typer();
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
