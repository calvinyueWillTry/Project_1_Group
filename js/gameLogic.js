/** @format */

// Pokémon data retrieval and storage
let pokemonData = [];

// Function to fetch Pokémon data from the PokeAPI
export async function fetchPokemonData() {
	try {
		const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
		const data = await response.json();
		pokemonData = data.results;
	} catch (error) {
		console.log('Error fetching Pokémon data:', error);
	}
}

// Function to retrieve a specific Pokémon's details
export async function getPokemonDetails(pokemonName) {
	try {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(`Error fetching details for ${pokemonName}:`, error);
		return null;
	}
}

// Battle logic and mechanics
export default function calculateDamage(attackerStats, defenderStats, move) {
	// Implement damage calculation based on Pokémon stats and move power
	// You can expand this function to include type advantages, status effects, etc.
	const damage = Math.floor(
		(attackerStats.attack / defenderStats.defense) * move.power
	);
	return damage;
}

export default function applyDamage(pokemonStats, damage) {
	pokemonStats.hp -= damage;
	if (pokemonStats.hp < 0) {
		pokemonStats.hp = 0;
	}
}

// UI interaction and update functions
export default function updatePokemonDetails(pokemonName, elementId) {
	getPokemonDetails(pokemonName)
		.then((data) => {
			if (data) {
				const pokemonElement = document.getElementById(elementId);
				pokemonElement.innerHTML = `
          <h3>${data.name}</h3>
          <img src="${data.sprites.front_default}" alt="${data.name}">
          <p>Type: ${data.types.map((type) => type.type.name).join(', ')}</p>
          <p>HP: ${data.stats[0].base_stat}</p>
          <p>Attack: ${data.stats[1].base_stat}</p>
          <p>Defense: ${data.stats[2].base_stat}</p>
        `;
			}
		})
		.catch((error) => {
			console.log(`Error updating ${pokemonName} details:`, error);
		});
}

export default function handleMoveSelection(move) {
	// Implement the logic for handling move selection during battle
	// You can update the UI, initiate animations, and calculate damage here
	console.log(`Selected move: ${move}`);
}

export default function handleBattleAction(action) {
	// Implement the logic for handling battle actions (e.g., fight, run, use item)
	// You can update the UI, perform necessary calculations, and update game state
	console.log(`Battle action: ${action}`);
}
