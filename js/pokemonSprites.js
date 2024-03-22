/** @format */

let index = 1;
// Api for in-game sprites
//const battleSpriteUrl = `https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_${index}.png`;
const pokemonDescribeURL = `https://pokeapi.co/api/v2/characteristic/${index}/`
//console.log(pokemonDescribeURL);

// This function fetches the sprite for a Pokémon
export function fetchPokemonSprite(pokemonId) {
	
	const selectionSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
	return fetch(selectionSpriteUrl)


		.then(function(response) {
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
	//const pokemonListElement = document.getElementById('pokemon-list');
	//These are the Pokemon to that list section in the HTML
	pokemonList.forEach(async(pokemon, index) => {
		//fetch the Pokemon API directly. 
		const description=await fetch(`https://pokeapi.co/api/v2/characteristic/${index+1}`)
									.then((res)=>{
										return res.json()
									}).then((obj)=>{
										return obj
									})
		console.log(description.descriptions[7]);//Needs to display on page
		const pokemonId = pokemon.url.split('/')[6];
		// This calls for pokemon 1-20 (limit 6)
		//Creating HTML elements to hold the Pokemon 
		const pokemonEl = document.createElement('div');
		const pokemonImage = document.createElement('img');
		const pokemonName = document.createElement('span');
		const pokemonSelect= document.getElementById(index)
		/**
		 * var radioInput = document.createElement('input');
		radioInput.setAttribute('type', 'radio');
		radioInput.setAttribute('name', name);
		 */
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
		var imageButton = document.getElementById(pokemonImage);
		imageButton.onclick = null;	

			selectPokemon(pokemon);//function where?

		});
		pokemonSelect.appendChild(pokemonEl);//radio buttons to name and image 
		//pokemon.name.append("test");
		displayPokemonDescription (pokemonDescribeURL)
	});
}//How to make this display the description within the URL in English?
//Calvin working from here
export function displayPokemonDescription (pokemonDescribeURL) {
	//return 
	fetch(pokemonDescribeURL)
	.then(function(response) {
		console.log(response);//needs loop to process other 20
		
	})
	//var responseData = pokemonDescribeURL.description;		
};
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
