import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { getColorText, showOperationFailed } from './messages.js';

export const calculateHash = async (pathToFile) => {
  try {
    const hash = createHash('sha256');
    const readStream = createReadStream(pathToFile);

    readStream.on('data', (chunk) => {
      hash.update(chunk);
    });

    readStream.on('end', () => {
      console.log(`${getColorText('yellow', hash.digest('hex'))} \n`);
    });

    readStream.on('error', (err) => {
      console.error('Error reading the file:', err.message);
    });
  } catch (error) {
    console.error('Error calculating hash:', error.message);

    showOperationFailed();
  }
};