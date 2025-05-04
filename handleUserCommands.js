

import { navigateUp, navigateTo, showDirectoryContent } from './navigation.js';
import { throwInvalidInputError } from './messages.js';
import {
  readFile,
  addEmptyFile,
  createDirectory,
  renameFile,
  copyFile,
  moveFile,
  deleteFile,
} from './fileOperations.js';
import { getOsInfo } from './getOsInfo.js';
import { calculateHash } from './calculateHash.js';
import {compressFile } from './zip.js';

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

    case 'rm':
      if (args.length !== 1) throwInvalidInputError();
      await deleteFile(args[0]);

      break;

    case 'os':
      if (args.length !== 1) throwInvalidInputError();
      getOsInfo(args[0]);
      break;

      case 'hash':
        if (args.length !== 1) throwInvalidInputError();
        await calculateHash(args[0]);

        break;

      case 'compress':
        if (args.length !== 2) throw new Error('Invalid input');
        await compressFile(args[0], args[1]);
        
        break;

    default:
      throwInvalidInputError();
  }
}