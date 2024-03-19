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
	initializeList();
});

function initializeList() {
	// Fetch Pokémon data and update the UI
	fetchPokemonList().catch((error) => {
		console.log('Error initializing Pokémon data:', error);
	});
}

const selectedPokemon = JSON.parse(localStorage.getItem('selectedPokemon'));
if (selectedPokemon) {
	console.log('Selected Pokémon:', selectedPokemon);
}
