[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Pokedex Lab

Using the [PokéApi](https://pokeapi.co/), create a Pokédex where users can not
only browse a list of Pokémon characters, but also search for their favorites!

Starter code is provided for you, which includes some HTML and CSS.

![Pokédex](img/screenshot2.png)

## Prerequisites

- React
- APIs & AJAX

## Instructions

1. Clone this repository
1. cd `pokedex-lab/pokedex-starter`
1. In the directory for the project, run `npm i`
1. Install axios: `npm i axios`

## Requirements

1. When the page loads, make a request to the PokéApi and have it display information about Pikachu.
2. Add an input field/search bar. Track what the user has typed in that input as an attribute in state.
3. Add a submit button. When the user clicks submit a second API request should be made to retrieve all the information about the pokemon whose name was typed in the search bar.

## Bonus

- Make the home page initially render a list of all the Pokemon. When they click on one, have it display information about just that pokemon. **Hint**: Look into conditional rendering. Also, you can have more than one useEffect!
- Add a dropdown that includes the following options: Name, Move, Ability, and
  Location. Focus the search based on the option the user selects for the dropdown menu.
  When the Search button is clicked, make a request to the PokéApi to search
  the Pokémon property that matches the selected option for what is in the
  input field. If the input does match any data from the PokéApi, create an alert that says
  "No matches! Try something else!"
- Use [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction) to style your form input and
  pokemon search results
- Make your Pokédex responsive using the
  [Bootstrap grid](https://react-bootstrap.netlify.com/layout/grid/#grid)!

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
2.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
