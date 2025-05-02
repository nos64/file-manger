import { createReadStream } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { chdir, cwd } from 'node:process';

export const readFile = async filePath => {
  const stream = createReadStream(filePath, { encoding: "utf-8" });

  stream.pipe(process.stdout);
  stream.on("end", () => {
    console.log("\n");
  });
};

export const addEmptyFile = async fileName => {
  await writeFile(fileName, '');

  console.log(`The file \x1b[33m${fileName}\x1b[0m was created in \x1b[32m${cwd()}\x1b[0m \n`);
};

