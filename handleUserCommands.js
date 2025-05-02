import { stat } from 'node:fs/promises';
import { join } from 'node:path';

import { navigateUp, navigateTo } from './navigation.js';

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

      default:
        throwInvalidInputError();
  }
}