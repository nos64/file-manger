

import { navigateUp, navigateTo, showDirectoryContent } from './navigation.js';
import { readFile } from './fileOperations.js'

const throwInvalidInputError = () => {
  throw new Error('Invalid input');
}

export const handleUserCommands = async (command, args) => {
  switch (command) {
    case 'up':
      if (args.length !== 0) throwInvalidInputError();
      navigateUp();

      break;

    case 'cd':
      if (args.length !== 1) throwInvalidInputError();
      navigateTo(args[0]);

      break;

    case 'ls':
      if (args.length !== 0) throwInvalidInputError();
      await showDirectoryContent();
      break;

    case 'cat':
      if (args.length !== 1) throwInvalidInputError();
      await readFile(args[0]);
      break;

    default:
      throwInvalidInputError();
  }
}