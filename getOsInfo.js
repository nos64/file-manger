import { throwInvalidInputError } from './messages.js'
import {
  getEOL,
  getCPUs,
  getHomeDir,
  getCurrentSystemUsername,
  getCPUArchitecture,
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

    case '--architecture':
      getCPUArchitecture();

      break;

    default:
      throwInvalidInputError();
  }
};