/** @format */
// Starting index (the first Pokémon, which is bulbasaur:3)
let index = 1;

// This function fetches the sprite for a Pokémon
export function fetchPokemonSprite(pokemonId) {
	// pokeApi repo to sprite of og games
	const selectionSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
	return fetch(selectionSpriteUrl)
		.then((response) => response.blob())
		.then((blob) => URL.createObjectURL(blob))
		.catch((error) => {
			console.log(`Error fetching sprite for Pokemon ID ${pokemonId}:`, error);
			return null;
		});
}

// This creates the list of Pokémon and displays it to the user
export function displayPokemonList(pokemonList) {
	const pokeApiUrl = `https://pokeapi.co/api/v2/pokemon/${index}/`;
	const pokemonListElement = document.getElementById('pokemon-list');
	const pokemonDescInfo = `https://pokeapi.co/api/v2/characteristic/${index}/descriptions/description/`;

	console.log(pokemonDescInfo);
	// adds elements for each Pokémon up to the end of the list
	pokemonList.forEach((pokemon, index) => {
		const pokemonId = pokemon.url.split('/')[6];
		const pokemonEl = document.createElement('div');
		const pokemonImage = document.createElement('img');
		const pokemonName = document.createElement('span');
		const pokemonDescription = document.createElement('span');

		pokemonDescription.textContent = pokemon.descriptions;

		pokemonName.textContent = pokemon.name;

		fetchPokemonSprite(pokemonId).then((selectionSpriteUrl) => {
			if (selectionSpriteUrl) {
				pokemonImage.src = selectionSpriteUrl;
				pokemonEl.appendChild(pokemonImage);
			}
		});

		pokemonEl.appendChild(pokemonName);
		pokemonEl.appendChild(pokemonDescription);
		pokemonImage.addEventListener('click', () => {
			selectPokemon(pokemon);
		});
		pokemonListElement.appendChild(pokemonEl);
	});
}

// This function fetches the list of Pokémon from the API
export async function fetchPokemonList() {
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
export function selectPokemon(pokemonIndex) {
	console.log('this is not working', pokemonIndex);
	localStorage.setItem('selectedPokemonIndex', JSON.stringify(pokemonIndex));
	console.log('Selected Pokémon Index:', pokemonIndex);

	window.location.href = '/battleScene/index.html';
}
