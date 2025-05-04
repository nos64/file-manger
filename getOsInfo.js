import { throwInvalidInputError } from './messages.js'
import {
  getEOL,
} from './osInfo.js';

export const getOsInfo = arg => {
  switch (arg) {
    case '--EOL':
      getEOL();

      break;

    default:
      throwInvalidInputError();
  }
};