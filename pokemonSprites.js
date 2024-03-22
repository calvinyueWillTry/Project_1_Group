/** @format */
// Starting index (the first Pokémon, which is bulbasaur:3)
let index = 1;
// Api for in-game sprites
//const battleSpriteUrl = `https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_${index}.png`;
const pokemonDescribeURL = `https://pokeapi.co/api/v2/characteristic/${index}/`
//console.log(pokemonDescribeURL);

// This function fetches the sprite for a Pokémon
export function fetchPokemonSprite(pokemonId) {
	// pokeApi repo to sprite of og games

	const selectionSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
	return fetch(selectionSpriteUrl)


		.then(function (response) {
			return response.blob();

		})


		.then((blob) => URL.createObjectURL(blob))//fetch size and type of images
		.catch((error) => {
			console.log(`Error fetching sprite for Pokemon ID ${pokemonId}:`, error);
			return null;
		});

}

// This creates the list of Pokémon and displays it to the user. See if there's a way to condense it.
export function displayPokemonList(pokemonList) {
	//const pokeApiUrl = `https://pokeapi.co/api/v2/pokemon/${index}/`;
	//const pokemonListElement = document.getElementById('poke-slot');
	//const pokemonDescInfo = await fetch(`https://pokeapi.co/api/v2/characteristic/${index}/descriptions/description/`);
	//These are the Pokemon to that list section in the HTML
	//console.log(pokemonDescInfo);
	// adds elements for each Pokémon up to the end of the list
	pokemonList.forEach((pokemon, index) => {
		//fetch the Pokemon API directly. 
		fetch(`https://pokeapi.co/api/v2/characteristic/${index + 1}`)
			.then((res) => {
				return res.json()
			})
			.then((description) => {
				//return obj


				console.log(description.descriptions[7]);
				const pokemonId = pokemon.url.split('/')[6];
				
				console.log(pokemonId);
				let i = index+1;
				// This calls for pokemon 1-20 (limit 6)
				//Creating HTML elements to hold the Pokemon 
				const pokemonEl = document.createElement('div');
				const pokemonImage = document.createElement('img');
				const pokemonName = document.createElement('span');
				const pokemonSelect = document.getElementById(i);
				
				console.log(i);
				var pokeDescription = description.descriptions[7].description;
				var pokemonDescription = document.getElementById("pokeDescription"+i);
				pokemonDescription.textContent = pokeDescription;
				console.log(pokeDescription);
				//bottom half shows, and HTML text didn't show up. why? 
				pokemonName.textContent = pokemon.name;
				//pokemonName.appendChild(pokeDescription);
				//Grab index of Pokemon. If image exists, then it's added to the list
				fetchPokemonSprite(pokemonId).then((selectionSpriteUrl) => {
					//calls the blob
					console.log(selectionSpriteUrl);
					if (selectionSpriteUrl) {
						pokemonImage.src = selectionSpriteUrl;
						pokemonEl.appendChild(pokemonImage);
					}
				});
				//Adds Pokemon to the list when selected
				pokemonEl.appendChild(pokemonName);
				pokemonSelect.appendChild(pokemonName);
				pokemonSelect.appendChild(pokemonDescription);//appends description sections to Pokemon index
				//console.log(pokemonDescription);
				//1-10, the pokeDescription is different than what's being outputted. Why?

				//Names 
				//pokemonImage.appendChild(pokemonDescription);
				pokemonImage.addEventListener('click', () => {
					//Calvin: Prevent the image from being a button to the battle page
					var imageButton = document.getElementById(pokemonImage);
					imageButton.onclick = null;

					selectPokemon(pokemon);//function where?

				});
				pokemonSelect.appendChild(pokemonEl);//radio buttons to name and image
				//Attached to the element for image.  
			});
	}) //47
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
