import { createReadStream, createWriteStream } from 'fs';
import { writeFile, mkdir, rename, unlink } from 'fs/promises';
import { cwd } from 'process';
import { join } from 'path';
import { pipeline } from 'stream/promises';

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

    console.log(`The file \x1b[33m${fileName}\x1b[0m was created in \x1b[32m${cwd()}\x1b[0m \n`);
  } catch (error) {
    console.error(`Error creating file \x1b[33m${fileName}\x1b[0m was created in \x1b[32m${cwd()}\x1b[0m:`, error);
  }
};

export const createDirectory = async (dirName) => {
  try {
    await mkdir(dirName);
    console.log(`Directory \x1b[32m${dirName}\x1b[0m created successfully.`);
  } catch (error) {
    console.error(`Error creating directory ${dirName}:`, error);
  }
};

export const renameFile = async (pathToFile, newFilename) => {
  try {
    const newPath = join(cwd(), newFilename);

    await rename(pathToFile, newPath);

    console.log(`The file \x1b[33m${pathToFile}\x1b[0m in ${pathToFile} renamed to \x1b[33m${newFilename}\x1b[0m successfully.`);
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
    console.log(`File \x1b[33m${fileName}\x1b[0m copied successfully to \x1b[32m${pathToNewDirectory}\x1b[0m.`);
  } catch (error) {
    console.error(`Error copying file "${fileName}":`, error);
  }
};

export const moveFile = async (pathToFile, pathToNewDirectory) => {
  try {
    await copyFile(pathToFile, pathToNewDirectory);
    
    await unlink(pathToFile);
    
    console.log(`File moved successfully from \x1b[33m${pathToFile}\x1b[0m to \x1b[32m${pathToNewDirectory}\x1b[0m.`);
  } catch (error) {
    console.error(`Error moving file from "${pathToFile}" to "${pathToNewDirectory}":`, error);
  }
};

export const deleteFile = async (pathToFile) => {
  try {
    await unlink(pathToFile);
    console.log(`File \x1b[33m${pathToFile}\x1b[0m deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting file "${pathToFile}":`, error);
  }
};