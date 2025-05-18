import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';

import { getColorText , showOperationFailed} from './messages.js';
import { verifyFileExists, verifyFileNotExists } from './checkPath.js';

export const compressFile = async (pathToFile, pathToDestination) => {
  try {
    if (!(await verifyFileExists(pathToFile, 'compress'))) return;
    if (!(await verifyFileNotExists(pathToDestination, 'compress'))) return

    await pipeline(
      createReadStream(pathToFile),
      createBrotliCompress(),
      createWriteStream(pathToDestination)
    );

    console.log(`File compressed successfully to ${getColorText('yellow', pathToDestination)} \n`);
  } catch (error) {
    console.error('Error compressing file:', error.message);

    showOperationFailed();
  }
};

export const decompressFile = async (pathToFile, pathToDestination) => {
  try {
    if (!(await verifyFileExists(pathToFile, 'decompress'))) return;
    if (!(await verifyFileNotExists(pathToDestination, 'decompress'))) return;
    
    await pipeline(
      createReadStream(pathToFile),
      createBrotliDecompress(),
      createWriteStream(pathToDestination)
    );
    console.log(`File decompressed successfully to ${getColorText('yellow', pathToDestination)} \n`);
} catch (error) {
  console.error('Error decompressing file:', error.message);

  showOperationFailed();
}
};