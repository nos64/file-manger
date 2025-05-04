import { chdir } from 'node:process';
import { homedir } from 'node:os';
import { stdin as input, stdout as output } from 'node:process';
import { createInterface } from 'node:readline/promises';

import { handleUserCommands } from './handleUserCommands.js'
import { showCurrentDirectory } from './navigation.js';
import { showInvalidInput, showOperationFailed, getColorText } from './messages.js';

const username = process.argv
  .find(arg => arg.startsWith('--username='))
  ?.split('=')[1]
  ?? 'User';

console.log(`Welcome to the File Manager, ${getColorText('yellow', username)}! \n`);

chdir(homedir());
showCurrentDirectory();

console.log('Please enter your command...');

const rl = createInterface({ input, output });

rl.on('line', async (input) => {
  try {
    if (input === '.exit') {
      rl.close();
      return;
    }

    const [command, ...args] = input.trim().split(/\s+/);
    await handleUserCommands(command, args);

  } catch (error) {
    if (error.message === 'Invalid input') {
      showInvalidInput();
    } else {
      showOperationFailed();
    }
  } finally {
    showCurrentDirectory();
  }
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${getColorText('yellow', username)}, goodbye!`);
  process.exit(0);
});