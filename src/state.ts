import { createInterface, type Interface } from "readline"
import { getCommands } from "./commands.js"
import { PokeAPI, Pokedex } from "./pokeapi.js"

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  pokeApi: PokeAPI;
  pokedex: Pokedex;
  nextLocationsURL?: string;
  prevLocationsURL?: string;
}

export function InitState(): State{
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > "
  });

  const commands = getCommands();
  const pokeApi = new PokeAPI();
  const pokedex = {};

  return {
    rl,
    commands,
    pokeApi,
    pokedex
  }
}