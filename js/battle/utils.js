/** @format */

// Reset to battle ready mode for turn or cancel
export const reset = () => {
	$('.text1').text('');
	$('.text2').text('');
	$('.window.item').hide();
	$('.window.pkmn').hide();
	$('.window.fight').hide();
	$('.window.menu').show();
};

// Health bar width calculation and health numbers
export const healthbar = (current, total) => {
	const hpCurrent = current;
	const hpTotal = total;
	const percentTotal = 100;
	const percentCurrent = (hpCurrent * percentTotal) / hpTotal;
	return percentCurrent;
};

// Hide all menus except dialog
export const hider = () => {
	$('.window.menu').hide();
	$('.window.item').hide();
	$('.window.pkmn').hide();
	$('.window.fight').hide();
};
