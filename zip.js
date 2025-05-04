import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';

import { getColorText } from './messages.js';

export const compressFile = async (pathToFile, pathToDestination) => {
  try {
    await pipeline(
      createReadStream(pathToFile),
      createBrotliCompress(),
      createWriteStream(pathToDestination)
    );

    console.log(`File compressed successfully to ${getColorText('yellow', pathToDestination)} \n`);
  } catch (error) {
    console.error('Error compressing file:', error.message);
  }
};

export const decompressFile = async (pathToFile, pathToDestination) => {
  try {
    await pipeline(
      createReadStream(pathToFile),
      createBrotliDecompress(),
      createWriteStream(pathToDestination)
    );
    console.log(`File decompressed successfully to ${getColorText('yellow', pathToDestination)} \n`);
} catch (error) {
  console.error('Error decompressing file:', error.message);
}
};