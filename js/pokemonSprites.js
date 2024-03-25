/** @format */
// Starting index (the first Pokémon, which is bulbasaur:3)
let index = 1;

// This function fetches the sprite for a Pokémon
export function fetchPokemonSprite(pokemonId) {
	// pokeApi repo to sprite of og games
	const selectionSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
	return fetch(selectionSpriteUrl)
		.then(function (response) {
			return response.blob();
		})

		.then((blob) => URL.createObjectURL(blob)) //fetch size and type of images
		.catch((error) => {
			console.log(`Error fetching sprite for Pokemon ID ${pokemonId}:`, error);
			return null;
		});
}

// This creates the list of Pokémon and displays it to the user. See if there's a way to condense it.
export function displayPokemonList(pokemonList) {
	//These are the Pokemon to that list section in the HTML
	pokemonList.forEach(async (pokemon, index) => {
		//fetch the Pokemon API directly.
		const description = await fetch(
			`https://pokeapi.co/api/v2/characteristic/${index}`
		)
			.then((res) => {
				return res.json();
			})
			.then((obj) => {
				return obj;
			});
		console.log(description.descriptions[7]); //Needs to display on page
		const pokemonId = pokemon.url.split('/')[6];
		// This calls for pokemon 1-20 (limit 6)
		//Creating HTML elements to hold the Pokemon
		const pokemonEl = document.query('pokemonEl');
		const pokemonImage = document.getElementById('poke-img');
		const pokemonName = document.getElementById('poke-name');
		const pokemonSelect = document.getElementById(index);
		const radioInput = document.getElementById('pokemon-radio');

		//Make sure that name and image matches
		pokemonName.textContent = pokemon.name;
		//Grab index of Pokemon. If image exists, then it's added to the list
		fetchPokemonSprite(pokemonId).then((selectionSpriteUrl) => {
			//calls the blob
			if (selectionSpriteUrl) {
				pokemonImage.src = selectionSpriteUrl;
				pokemonEl.appendChild(pokemonImage);
			}
		});
		//Adds Pokemon to the list when selected
		pokemonEl.appendChild(pokemonName);
		//Names
		pokemonImage.addEventListener('click', () => {
			//Calvin: Prevent the image from being a button to the battle page
			// pokemonImage.onclick('click', () => {});

			selectPokemon(pokemon);
		});

		//radio buttons to name and image
	});
} //How to make this display the description within the URL in English?
//Calvin working from here
// This function fetches the list of Pokémon from the API

export async function fetchPokemonList() {
	fetch('https://pokeapi.co/api/v2/pokemon')
		.then((response) => response.json())
		.then((data) => {
			displayPokemonList(data.results);
			//console.log(data.results[19].name);
			//Calvin: Adding selection buttons to the names

			//console.log(data.results)
			//var pokemonSelection = document.createElement('p');
			//pokemonSelection.setAttribute('type', 'radio');
			//Calvin: How to append to the names?
			//pokemonName.append(pokemonSelection);
			//pokemonSelection.type = "radio";
			//console.log(pokemonSelection);
			//pokemonSelection.setAttribute('name');
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
