import { createReadStream } from 'node:fs';
import { writeFile, mkdir } from 'node:fs/promises';
import { cwd } from 'node:process';

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