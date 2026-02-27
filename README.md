# Pokedex CLI

CLI em Node.js + TypeScript que consome a [PokeAPI](https://pokeapi.co/) para explorar localizações, capturar e inspecionar Pokémons via um REPL interativo.

## Requisitos

- Node.js 18+
- npm

## Instalação

```bash
npm install
```

## Uso

Build e execução:

```bash
npm run build
npm start
```

Ou em um passo (build + run):

```bash
npm run dev
```

No prompt `Pokedex >` você pode usar:

| Comando | Descrição |
|--------|-----------|
| `help` | Lista os comandos disponíveis |
| `map` | Próxima página de localizações |
| `mapb` | Página anterior de localizações |
| `explore <nome_da_local>` | Explora uma localização e lista Pokémons |
| `catch <nome_do_pokemon>` | Tenta capturar um Pokémon |
| `inspect <nome_do_pokemon>` | Inspeciona um Pokémon (precisa estar na pokedex) |
| `pokedex` | Lista os Pokémons capturados |
| `exit` | Sai do programa |

## Scripts

- `npm run build` — compila TypeScript para `dist/`
- `npm start` — executa `dist/main.js`
- `npm run dev` — build + start
- `npm test` — roda os testes (Vitest)

## Estrutura

- `src/main.ts` — entrada e inicialização do REPL
- `src/state.ts` — estado global (readline, comandos, PokeAPI, pokedex)
- `src/repl.ts` — loop do REPL e parsing de entrada
- `src/commands.ts` — registro dos comandos
- `src/command_*.ts` — implementação de cada comando
- `src/pokeapi.ts` — cliente da PokeAPI com cache
- `src/pokecache.ts` — cache em memória com TTL

## Licença

ISC
