import { EOL } from 'os';

export const getEOL = () => {
  try {
    console.log(`End of Line (EOL): \x1b[33m${JSON.stringify(EOL)}\x1b[0m`);
  } catch (error) {
    console.error('Error retrieving End of Line (EOL):', error.message);
  }
};
