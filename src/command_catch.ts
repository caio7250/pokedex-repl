import type { State } from "./state.js"
import type { Pokemon } from "./pokeapi.js"

export async function commandCatch(state: State, pokemonName: string) {
  const baseURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  let pokemon: Pokemon;
  try {
    const response = await fetch(baseURL);
    pokemon = await response.json();
  } catch (err) {
    throw Error(`Error fetching pokemon api: ${err}`);
  }

  console.log(`Throwing a Pokeball at ${pokemonName}...`);

  if (getRandomNumber(330) >= pokemon.base_experience){
    console.log("Pokemon successfully captured! Adding it to your pokedex...");
    console.log("You may now inspect it with the inspect command.")
    state.pokedex[pokemonName.toLowerCase()] = pokemon;
    return;
  }

  console.log(`Failed to capture ${pokemonName}`);
  return
}

function getRandomNumber(max: number){
  return Math.floor(Math.random() * max);
}

