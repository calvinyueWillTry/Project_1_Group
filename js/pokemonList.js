// Api imgs, pull pokemon sprite from pokeApi. change html content to those sprites
export function sprites = ()
 => fetch('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });
    .catch((error) => {
         console.log(error);
     });
    .then((data) => {
         console.log(data);
     });

     document.getElementById('poke-img').src = sprites;

// Make API request to fetch the list of Pokémon
export function fetchPokemonList() {
	fetch('https://pokeapi.co/api/v2/pokemon/generation/ids/' + generation + '/')
		.then((response) => response.json())
		.then((data) => {
			// Display the list of Pokémon to the user
			displayPokemonList(data.results);
		})
		.catch((error) => {
			console.log('Error fetching Pokémon list:', error);
		});
}

// Display the list of Pokémon to the user
export function displayPokemonList(pokemonList) {
	const pokemonListElement = document.getElementById('pokemon-list');

	pokemonList.forEach((pokemon) => {
		const pokemonElement = document.createElement('div');
		pokemonElement.textContent = pokemon.name;
		pokemonElement.addEventListener('click', () => {
			selectPokemon(pokemon.url);
		});
		pokemonListElement.appendChild(pokemonElement);
	});
}