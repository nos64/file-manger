import { cwd } from 'node:process';

export const showCurrentDirectory = () => {
  console.log(`You are currently in \x1b[32m${cwd()}\x1b[0m`);
};