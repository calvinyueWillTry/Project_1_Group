<!-- @format -->

# Pokemon Yellow Online

## Description

This is a pokemon selection and battle site that uses pokeApi, Javascript, CSS, local storage and HTML.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Deployed Application](#deployed-application)
- [Screenshot](#screenshot)
- [License](#license)
- [HTML](#html)

## Installation

No installation required. You can access the application by clicking on the following link: [Pokemon Online](https://github.com/calvinyueWillTry/Project_1_Group)

## Usage

To use the application, click on the link provided in the installation section. Once the application is open, click on the "Generate Password" button. You will be prompted to enter the length of the password you would like to generate. You will then be prompted to select the criteria for the password. You can choose to include lowercase letters, uppercase letters, numbers, and special characters. Once you have selected the criteria, the password will be generated and displayed on the screen.

## Deployed Application

The deployed application can be accessed by clicking on the following link: [Pokemon Online](https://calvinyuewilltry.github.io/Project_1_Group/)

## Screenshot

![Pokemon Online](./imgs/pokemonOnline.png)

## License

MIT License

## HTML

Mainpage: We start with the head, and then the links that we are using for everything, from fonts to CSS. At the top of the page, we added links to the Battle and Pokemon selection pages (the pokeball).
<img width="1280" alt="HTML mainpage 1 " src="https://github.com/calvinyueWillTry/Project_1_Group/assets/158237430/40caca0d-e118-47ca-a193-ca5a97f79a53">
Then there's the title in the header, along with links in the navigation bar, as well as the audio in an autoplay loop. We also added the links to the API links that we used for this project as "resources and credits."
<img width="1280" alt="HTML mainpage 2" src="https://github.com/calvinyueWillTry/Project_1_Group/assets/158237430/768e9882-094a-4782-a88e-69e68acbd0b5">
At the footer of the page is a link to our Github page, and a link to change to the Pokemon selection page, as well as sourcing the JS page for this.
<img width="1280" alt="HTML mainpage 3" src="https://github.com/calvinyueWillTry/Project_1_Group/assets/158237430/d739c15d-0255-4637-b4de-5dba2a7c9439">
Pokemon Selection Page: We start with the title in the header, and that's followed by having the "pokemon-list" and "pok-img" to get the Pokemon pictures from the API (in the JS). Then the list of hard-coded spots for allowing the Pokemon to appear on the page are below.
<img width="1280" alt="HTML Pokemon Selection 1 " src="https://github.com/calvinyueWillTry/Project_1_Group/assets/158237430/71191dc5-305d-46a1-91b8-32e9cb7bfb7b">
Every spot for the Pokemon is also hard-coded with an element for the <div> section, A place on the page for the image, name and description. Because it's an array, the array is also hard-coded, albeit from 1-20 instead of 0-19.
At the footer, There are buttons to either navigate to the battle page, or return to the homepage.
<img width="1280" alt="HTML Pokemon Selection 2" src="https://github.com/calvinyueWillTry/Project_1_Group/assets/158237430/4ea483fc-3b8d-477c-9c63-17fb909f2d77">
HTML BattlePage: With a font and CSS style, as well as the autoplay loop audio track. For the Pokemon <div>, within "layer foe," there's "info" for the opponent's Pokemon's name, level and HP, and the "image" for the Eevee.
For the "layer player," it starts with the "images" section, first the player's trainer, then switches to their Pokemon.
<img width="1280" alt="HTML Battle 1" src="https://github.com/calvinyueWillTry/Project_1_Group/assets/158237430/ce9093d4-338f-4a19-837f-15341cc1f04d">
Under "windows," there are window texts to establish fonts, then the "button," which are as follows under "window menu:" "window fight" 4 buttons; "window item" potion (hit points) or cancel, "PKMN" to select other Pokemon, and "Run" to display a message.
<img width="1280" alt="HTML Battle 2" src="https://github.com/calvinyueWillTry/Project_1_Group/assets/158237430/0e8e014d-cea1-4d1b-a039-df3e57fdca25">
<img width="1280" alt="HTML Battle 3" src="https://github.com/calvinyueWillTry/Project_1_Group/assets/158237430/35db5980-b68e-43f2-b119-355cc081d32a">
<img width="1280" alt="HTML Battle 4" src="https://github.com/calvinyueWillTry/Project_1_Group/assets/158237430/7067ec9e-2c9c-4f16-aab6-588010a9ffa8">
Underneath those, there is also a button to "Return" to the homepage. In addition, there are sources for the jQuery, audio volume level control, and the JS.
<img width="1280" alt="HTML Battle 5" src="https://github.com/calvinyueWillTry/Project_1_Group/assets/158237430/d342f54a-c06b-4a01-907f-9caf738a26e2">
