/** @format */
// Import required modules and functions
import {
	fetchPokemonList,
	displayPokemonList,
	selectPokemon,
} from './pokemonSprites.js';

// Event listeners and initialization
document.addEventListener('DOMContentLoaded', () => {
	// Initialize the game
	initializeGame();
});

function initializeGame() {
	// Fetch Pokémon data and update the UI
	fetchPokemonList()
		.then(() => {
			updatePokemonDetails('pikachu', 'player-pokemon');
			updatePokemonDetails('eevee', 'foe-pokemon');
		})
		.catch((error) => {
			console.log('Error initializing Pokémon data:', error);
		});
	// Start fetching and displaying the Pokémon list
	fetchPokemonList();

	// Start the game loop
	gameLoop();
}

const selectedPokemon = JSON.parse(localStorage.getItem('selectedPokemon'));
if (selectedPokemon) {
	console.log('Selected Pokémon:', selectedPokemon);
}
