import { throwInvalidInputError } from './messages.js'
import {
  getEOL,
  getCPUs,
} from './osInfo.js';

export const getOsInfo = arg => {
  switch (arg) {
    case '--EOL':
      getEOL();

      break;

    case '--cpus':
      getCPUs();

      break;
    

    default:
      throwInvalidInputError();
  }
};