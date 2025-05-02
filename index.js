import { chdir } from 'node:process';
import { homedir } from 'node:os';
import { stdin as input, stdout as output } from 'node:process';
import { createInterface } from 'node:readline/promises';

import { showCurrentDirectory } from './navigation.js';

const username = process.argv
  .find(arg => arg.startsWith('--username='))
  ?.split('=')[1]
  ?? 'User';

console.log(`Welcome to the File Manager, ${username}!`);
chdir(homedir());
showCurrentDirectory();

const rl = createInterface({ input, output });

rl.on('line', async (input) => {
  try {
    if (input === '.exit') {
      rl.close();
      return;
    }

  } catch (error) {
    if (error.message === 'Invalid input') {

    } else {
    }
  } finally {
    showCurrentDirectory();
  }
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
});