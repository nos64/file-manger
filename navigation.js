import { chdir, cwd } from 'process';
import { join } from 'path';
import { readdir, stat } from 'fs/promises';

import { getColorText, showOperationFailed } from './messages.js';

export const showCurrentDirectory = () => {
  console.log(`You are currently in ${getColorText('green', cwd())} \n`);
};

export const navigateUp = () => {
  try {
    const currentDir = cwd();
    const parentDir = join(currentDir, '..');

    if (parentDir !== currentDir) {
      chdir(parentDir);
      console.log(`Changed directory to: ${getColorText('green', parentDir)} \n`);
    } else {
      console.log('You are already at the root directory. \n');
    }
  } catch (error) {
    console.error('Error navigating up:', error.message);

    showOperationFailed();
  }
};

export const navigateTo = path => {
  try {
    chdir(path);
    console.log(`Changed directory to: ${getColorText('green', path)} \n`);
  } catch (error) {
    console.error('Error navigating to the specified path:', error.message);

    showOperationFailed();
  }
};


export const showDirectoryContent = async () => {
  try {
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
      .sort((a, b) => a.name.localeCompare(b.name));
    
    const files = items
      .filter(item => item.type === 'file')
      .sort((a, b) => a.name.localeCompare(b.name));
    
    const tableData = [...directories, ...files].map(item => ({
      'Name': item.name,
      'Type': item.type,
      'Size': item.size,
    }));
    
    console.table(tableData);
    console.log();
  } catch (error) {
    console.error('Error showing directory content:', error.message);

    showOperationFailed();
  }
};