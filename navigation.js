import { chdir, cwd } from 'node:process';
import { join } from 'node:path';

export const showCurrentDirectory = () => {
  console.log(`You are currently in \x1b[32m${cwd()}\x1b[0m \n`);
};

export const navigateUp = () => {
  const currentDir = cwd();
  const parentDir = join(currentDir, '..');
  
  if (parentDir !== currentDir) {
    chdir(parentDir);
  }
};

export const navigateTo = (path) => {
  chdir(path);
};