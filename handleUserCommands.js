

import { navigateUp, navigateTo, showDirectoryContent } from './navigation.js';
import {
  readFile,
  addEmptyFile,
  createDirectory,
  renameFile,
  copyFile,
  moveFile,
} from './fileOperations.js'

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

    case 'add':
      if (args.length !== 1) throwInvalidInputError();
      await addEmptyFile(args[0]);

      break;

    case 'mkdir':
      if (args.length !== 1) throwInvalidInputError();
      await createDirectory(args[0]);

      break;

    case 'rn':
      if (args.length !== 2) throwInvalidInputError();
      await renameFile(args[0], args[1]);

      break;

    case 'cp':
      if (args.length !== 2) throwInvalidInputError();
      await copyFile(args[0], args[1]);

      break;

    case 'mv':
      if (args.length !== 2) throwInvalidInputError();
      await moveFile(args[0], args[1]);

      break;

    default:
      throwInvalidInputError();
  }
}