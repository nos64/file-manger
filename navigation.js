import { chdir, cwd } from 'node:process';
import { join } from 'node:path';
import { readdir, stat } from 'node:fs/promises';

export const showCurrentDirectory = () => {
  console.log(`You are currently in \x1b[32m${cwd()}\x1b[0m \n`);
};

export const navigateUp = () => {
  const currentDir = cwd();
  const parentDir = join(currentDir, '..');
  
  if (parentDir !== currentDir) {
    chdir(parentDir);
  }
};

export const navigateTo = (path) => {
  chdir(path);
};

export const showDirectoryContent = async () => {
  const currentDir = cwd();
  const dirContent = await readdir(currentDir);
  
  const items = await Promise.all(dirContent.map(async (item) => {
    const stats = await stat(join(currentDir, item));
    return {
      name: item,
      type: stats.isDirectory() ? 'directory' : 'file',
      size: stats.isFile() ? (stats.size / 1024).toFixed(2) + ' KB' : 'N/A',
    };
  }));
  
  const directories = items
    .filter(item => item.type === 'directory')
    .toSorted((a, b) => a.name.localeCompare(b.name));
  
  const files = items
    .filter(item => item.type === 'file')
    .toSorted((a, b) => a.name.localeCompare(b.name));
  
    const tableData = [...directories, ...files].map(item => ({
      'Name': item.name,
      'Type': item.type,
      'Size': item.size,
    }));
  
    console.table(tableData);
};