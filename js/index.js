/** @format */
import { fetchPokemonData, getPokemonDetails } from './gameLogic.js';
import { calculateDamage, applyDamage } from './gameLogic.js';
import {
	updatePokemonDetails,
	handleMoveSelection,
	handleBattleAction,
} from './gameLogic.js';
import {
	fetchPokemonList,
	displayPokemonList,
	selectPokemon,
} from './pokemonSprites.js';
import { initGame, gameLoop } from './battleLogic.js';

// Event listeners and initialization
document.addEventListener('DOMContentLoaded', () => {
	// Initialize the game
	initializeGame();
});

function initializeGame() {
	// Fetch Pokémon data and update the UI
	fetchPokemonData()
		.then(() => {
			updatePokemonDetails('pikachu', 'player-pokemon');
			updatePokemonDetails('eevee', 'foe-pokemon');
		})
		.catch((error) => {
			console.log('Error initializing Pokémon data:', error);
		});

	// Add event listeners for move selection and battle actions
	const moveButtons = document.querySelectorAll('.move-button');
	moveButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const move = button.dataset.move;
			handleMoveSelection(move);
		});
	});

	const battleButtons = document.querySelectorAll('.battle-button');
	battleButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const action = button.dataset.action;
			handleBattleAction(action);
		});
	});

	// Start fetching and displaying the Pokémon list
	fetchPokemonList();

	// Start the game loop
	gameLoop();
}

const selectedPokemon = JSON.parse(localStorage.getItem('selectedPokemon'));
if (selectedPokemon) {
	console.log('Selected Pokémon:', selectedPokemon);
	// Use the selected Pokémon data as needed
}
