import type { State } from "./state.js"

export async function commandMapForward(state: State) {
  const locations = await state.pokeApi.fetchLocations(state.nextLocationsURL);

  if (!locations) {
    throw new Error()
  }

  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;

  for (const city of locations.results) {
    console.log(city.name);
  }
}

export async function commandMapBack(state: State) {
  if (!state.prevLocationsURL){
    throw new Error("you're on the first page");
  }

  const locations = await state.pokeApi.fetchLocations(state.prevLocationsURL);

  if (!locations) {
    throw new Error()
  }

  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;

  for (const city of locations.results) {
    console.log(city.name);
  }
}