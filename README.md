# Pokedex CLI

Node.js + TypeScript CLI that consumes the [PokeAPI](https://pokeapi.co/) to explore locations, catch and inspect Pokémon via an interactive REPL.

## Requirements

- Node.js 18+
- npm

## Installation

```bash
npm install
```

## Usage

Build and run:

```bash
npm run build
npm start
```

Or in one step (build + run):

```bash
npm run dev
```

At the `Pokedex >` prompt you can use:

| Command | Description |
|--------|-------------|
| `help` | List available commands |
| `map` | Next page of locations |
| `mapb` | Previous page of locations |
| `explore <location_name>` | Explore a location and list Pokémon |
| `catch <pokemon_name>` | Attempt to catch a Pokémon |
| `inspect <pokemon_name>` | Inspect a Pokémon (must be in your pokedex) |
| `pokedex` | List captured Pokémon |
| `exit` | Exit the program |

## Scripts

- `npm run build` — compile TypeScript to `dist/`
- `npm start` — run `dist/main.js`
- `npm run dev` — build + start
- `npm test` — run tests (Vitest)

## Structure

- `src/main.ts` — entry point and REPL initialization
- `src/state.ts` — global state (readline, commands, PokeAPI, pokedex)
- `src/repl.ts` — REPL loop and input parsing
- `src/commands.ts` — command registry
- `src/command_*.ts` — implementation of each command
- `src/pokeapi.ts` — PokeAPI client with cache
- `src/pokecache.ts` — in-memory cache with TTL

## License

ISC
