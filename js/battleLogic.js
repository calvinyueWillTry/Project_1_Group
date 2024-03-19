/** @format */

// Game variables
let player;
let pokemon;
let gameMap;

// Game initialization
export default function initGame() {
	// Initialize player, pokemon, and game map
	player = new Player();
	pokemon = new Pokemon();
	gameMap = new GameMap();

	// Set up event listeners and start the game loop
	document.addEventListener('keydown', handleKeyDown);
}

// Select a Pokémon and fetch its details
export default function selectPokemon(pokemonUrl) {
	fetch(pokemonUrl)
		.then((response) => response.json())
		.then((pokemonData) => {
			// Store the selected Pokémon data
			const selectedPokemon = {
				name: pokemonData.name,
				moves: pokemonData.moves.map((move) => move.move.name),
				// Add other relevant data (e.g., stats, types)
			};

			// Allow the user to select moves for battle
			displayMoveSelection(selectedPokemon);
		})
		.catch((error) => {
			console.log('Error fetching Pokémon details:', error);
		});
}

// Display move selection for the selected Pokémon
export default function displayMoveSelection(pokemon) {
	const moveSelectionElement = document.getElementById('move-selection');

	pokemon.moves.forEach((move) => {
		const moveElement = document.createElement('div');
		moveElement.textContent = move;
		moveElement.addEventListener('click', () => {
			// Handle move selection for battle
			selectMoveForBattle(pokemon, move);
		});
		moveSelectionElement.appendChild(moveElement);
	});
}

// Handle move selection for battle
export default function selectMoveForBattle(pokemon, move) {
	// Set the selected move for the Pokémon
	pokemon.selectedMove = move;
}
