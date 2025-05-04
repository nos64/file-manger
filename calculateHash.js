import { createHash } from 'crypto';
import { createReadStream } from 'fs';

export const calculateHash = async (pathToFile) => {
  try {
    const hash = createHash('sha256');
    const readStream = createReadStream(pathToFile);

    readStream.on('data', (chunk) => {
      hash.update(chunk);
    });

    readStream.on('end', () => {
      console.log(`\x1b[33m${hash.digest('hex')}\x1b[0m`);
    });

    readStream.on('error', (err) => {
      console.error('Error reading the file:', err.message);
    });
  } catch (error) {
    console.error('Error calculating hash:', error.message);
  }
};