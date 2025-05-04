import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';

export const compressFile = async (pathToFile, pathToDestination) => {
  try {
    await pipeline(
      createReadStream(pathToFile),
      createBrotliCompress(),
      createWriteStream(pathToDestination)
    );

    console.log(`File compressed successfully to \x1b[33m${pathToDestination}\x1b[0m`);
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
    console.log(`File decompressed successfully to \x1b[33m${pathToDestination}\x1b[0m`);
} catch (error) {
  console.error('Error decompressing file:', error.message);
}
};