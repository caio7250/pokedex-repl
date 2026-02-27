import type { State } from "./state.js"

export async function commandExplore(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a location name");
  }

  const location = args[0];
  const result = await state.pokeApi.fetchLocation(location);


  if (!result) {
    throw new Error(`Error fetching location: ${location}`);
  }

  console.log(`Exploring ${location}...`);
  console.log("Found Pokemon:");

  for (const encounters of result.pokemon_encounters) {
    console.log(` - ${encounters.pokemon.name}`);
  }
}
