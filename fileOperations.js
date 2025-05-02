import { createReadStream } from 'node:fs';
import { writeFile, mkdir, rename } from 'node:fs/promises';
import { cwd } from 'node:process';
import { join } from 'node:path';

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
    console.log(`Directory \x1b[33m$${dirName}\x1b[0m created successfully.`);
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