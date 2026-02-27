import type { State } from "./state.js"

export async function startREPL(state: State){

  const rl = state.rl;
  const commands = state.commands;

  rl.prompt();

  rl.on('line', async (input) => {
    const cleanedInput:string[] = cleanInput(input);

    if (cleanedInput.length < 1) {
      rl.prompt();
      return;
    }

    const commandName = cleanedInput[0];
    const args = cleanedInput.slice(1);

    const cmd = commands[commandName];

    if (!cmd){
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`,
      );
      rl.prompt();
      return;
    }

    try{
      await cmd.callback(state, ...args);
    } catch (err) {
      console.log((err as Error).message)
    }

    rl.prompt();
  })
}

export function cleanInput(input: string): string[] {
  let result: string[] = [];
  result = input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");

  return result;
}