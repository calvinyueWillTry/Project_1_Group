/** @format */
import { attack } from './attacks.js';
import { hider, reset } from './utils.js';

// Animated typing of text
export const typingAnim = () => {
	let line;
	$('.text1, .text2').each(function () {
		$(this).text($(this).text().replace(new RegExp(' ', 'g'), ' '));
	});
	line = $('.text1, .text2');
	line
		.hide()
		.contents()
		.each(function () {
			let letters;
			letters = `<span> ${this.data.split('').join(' </span><span> ')} </span>`;
			$(this).replaceWith(letters);
		});
	line
		.find('span')
		.hide()
		.each(function () {
			if (!$.trim(this.innerHTML)) {
				$(this).remove();
			}
		});
	line
		.show()
		.find('span')
		.each(function (i) {
			$(this)
				.delay(40 * i)
				.fadeIn(0);
		});
};

// Click elements
$('.button.item').click(() => {
	$('.window.item').show();
	$('.window.menu').hide();
});
$('.button.potion').click(() => {
	potion('normal');
});
$('.button.fight').click(() => {
	$('.window.fight').show();
});
$('.button.growl').click(() => {
	growl();
});
$('.button#move0').click(() => {
	attack('tackle');
});
$('.button#move1').click(() => {
	attack('tail whip');
});
$('.button#move2').click(() => {
	attack('-');
});
$('.button.back').click(() => {
	reset();
});
$('.button.pkmn').click(() => {
	$('.window.pkmn').show();
});
$('.button.run').click(() => {
	hider();
	$('.text1').text("No! There's no");
	$('.text2').text('running from a');
	typingAnim();
	window.setTimeout(() => {
		$('.text1').text('trainer battle!');
		$('.text2').text('');
		typingAnim();
		window.setTimeout(() => {
			reset();
		}, 2000);
	}, 2000);
});
