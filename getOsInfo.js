import { throwInvalidInputError } from './messages.js'
import {
  getEOL,
  getCPUs,
  getHomeDir,
  getCurrentSystemUsername,
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

    case '--username':
      getCurrentSystemUsername();
      
      break;

    default:
      throwInvalidInputError();
  }
};