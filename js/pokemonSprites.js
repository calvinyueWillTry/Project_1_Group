/** @format */

// This function fetches the sprite for a Pokémon
export default function fetchPokemonSprite(pokemonId) {
	const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
	return fetch(spriteUrl)
		.then((response) => response.blob())
		.then((blob) => URL.createObjectURL(blob))
		.catch((error) => {
			console.log(`Error fetching sprite for Pokemon ID ${pokemonId}:`, error);
			return null;
		});
}

// This creates the list of Pokémon and displays it to the user
export default function displayPokemonList(pokemonList) {
	const pokemonListElement = document.getElementById('pokemon-list');

	pokemonList.forEach((pokemon, index) => {
		const pokemonId = pokemon.url.split('/')[6];
		const pokemonElement = document.createElement('div');
		const pokemonImage = document.createElement('img');
		const pokemonName = document.createElement('span');

		pokemonName.textContent = pokemon.name;

		fetchPokemonSprite(pokemonId).then((spriteUrl) => {
			if (spriteUrl) {
				pokemonImage.src = spriteUrl;
				pokemonElement.appendChild(pokemonImage);
			}
		});

		pokemonElement.appendChild(pokemonName);
		pokemonElement.addEventListener('click', () => {
			selectPokemon(pokemon);
		});
		pokemonListElement.appendChild(pokemonElement);
	});
}

// This function fetches the list of Pokémon from the API
export default function fetchPokemonList() {
	fetch('https://pokeapi.co/api/v2/pokemon')
		.then((response) => response.json())
		.then((data) => {
			displayPokemonList(data.results);
		})
		.catch((error) => {
			console.log('Error fetching Pokémon list:', error);
		});
}

// Stores the users selected Pokémon in local storage
export default function selectPokemon(pokemon) {
	localStorage.setItem('selectedPokemon', JSON.stringify(pokemon));
	console.log('Selected Pokémon:', pokemon);

	window.location.href = '/battleScene/battle.html';
}
