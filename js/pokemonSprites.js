/** @format */

let index = 1;
// Api for in-game sprites
const battleSpriteUrl = `https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_${index}.png`;

// This function fetches the sprite for a Pokémon
export function fetchPokemonSprite(pokemonId) {
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
	const pokemonListElement = document.getElementById('pokemon-list');

	pokemonList.forEach((pokemon, index) => {
		const pokemonId = pokemon.url.split('/')[6];
		const pokemonEl = document.createElement('div');
		const pokemonImage = document.createElement('img');
		const pokemonName = document.createElement('span');

		pokemonName.textContent = pokemon.name;

		fetchPokemonSprite(pokemonId).then((selectionSpriteUrl) => {
			if (selectionSpriteUrl) {
				pokemonImage.src = selectionSpriteUrl;
				pokemonEl.appendChild(pokemonImage);
			}
		});

		pokemonEl.appendChild(pokemonName);
		pokemonEl.addEventListener('click', () => {
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
