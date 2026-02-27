import { State } from "./state.js"

export async function commandPokedex(state: State) {
  const pokedex = state.pokedex;

  if (Object.keys(pokedex).length === 0){
    console.log("Your pokedex is empty, go catch some pokemon!");
    return;
  }

  console.log("Your pokedex:")
  for (const pokemon in pokedex){
    console.log(` - ${pokemon}`);
  }

  return;
}