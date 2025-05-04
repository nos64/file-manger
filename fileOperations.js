import { createReadStream, createWriteStream } from 'fs';
import { writeFile, mkdir, rename, unlink } from 'fs/promises';
import { cwd } from 'process';
import { join } from 'path';
import { pipeline } from 'stream/promises';

import { getColorText } from './messages.js';

export const readFile = async filePath => {
  const stream = createReadStream(filePath, { encoding: "utf-8" });

  stream.pipe(process.stdout);
  stream.on("end", () => {
    console.log("\n");
  });
};

export const addEmptyFile = async fileName => {
  try {
    await writeFile(fileName, '');

    console.log(`The file ${getColorText('green', fileName)} was created in  ${getColorText('yellow', cwd())} \n`);
  } catch (error) {
    console.error(`Error creating file ${getColorText('green', fileName)} was created in ${getColorText('yellow', cwd())}:`, error);
  }
};

export const createDirectory = async dirName => {
  try {
    await mkdir(dirName);
    console.log(`Directory ${getColorText('yellow', dirName)} created successfully. \n`);
  } catch (error) {
    console.error(`Error creating directory ${dirName}:`, error);
  }
};

export const renameFile = async (pathToFile, newFilename) => {
  try {
    const newPath = join(cwd(), newFilename);

    await rename(pathToFile, newPath);

    console.log(`The file ${getColorText('yellow', pathToFile)} in ${getColorText('green', pathToFile)} renamed to ${getColorText('yellow', newFilename)} successfully. \n`);
  } catch (error) {
    console.error(`Error rename file ${pathToFile} in ${pathToFile}:`, error);
  }
  
};

export const copyFile = async (pathToFile, pathToNewDirectory) => {
  const fileName = pathToFile.split('/').pop();
  const destinationPath = join(pathToNewDirectory, fileName);
  
  try {
    await pipeline(
      createReadStream(pathToFile),
      createWriteStream(destinationPath)
    );
    console.log(`File ${getColorText('yellow', fileName)} copied successfully to ${getColorText('green', pathToNewDirectory)}. \n`);
  } catch (error) {
    console.error(`Error copying file "${fileName}":`, error);
  }
};

export const moveFile = async (pathToFile, pathToNewDirectory) => {
  try {
    await copyFile(pathToFile, pathToNewDirectory);
    
    await unlink(pathToFile);
    
    console.log(`File moved successfully from ${getColorText('yellow', pathToFile)} to ${getColorText('green', pathToNewDirectory)}. \n`);
  } catch (error) {
    console.error(`Error moving file from "${pathToFile}" to "${pathToNewDirectory}":`, error);
  }
};

export const deleteFile = async pathToFile => {
  try {
    await unlink(pathToFile);
    console.log(`File ${getColorText('yellow', pathToFile)} deleted successfully. \n`);
  } catch (error) {
    console.error(`Error deleting file "${pathToFile}":`, error);
  }
};