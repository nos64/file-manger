import { throwInvalidInputError } from './messages.js'
import {
  getEOL,
  getCPUs,
  getHomeDir,
} from './osInfo.js';

export const getOsInfo = arg => {
  switch (arg) {
    case '--EOL':
      getEOL();

      break;

    case '--cpus':
      getCPUs();

      break;
    
    case '--homedir':
      getHomeDir();

      break;

    default:
      throwInvalidInputError();
  }
};