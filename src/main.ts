import { startREPL } from "./repl.js"
import { InitState } from "./state.js"

async function main(){
  const state = InitState();
  await startREPL(state);
}

main();