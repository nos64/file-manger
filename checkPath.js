
import { access, constants } from 'node:fs/promises';
import { getColorText } from './messages.js';

export const checkFileExists = async filePath => {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

export const verifyFileExists = async (filePath, operationName = 'operation', { isDirectory = false } = {}) => {
  try {
    const exists = await checkFileExists(filePath);
    if (!exists) {
      const type = isDirectory ? 'Directory' : 'File';
      console.log(`${type} ${getColorText('red', filePath)} does not exist (${operationName}) \n`);
      return false;
    }
    return true;
} catch (error) {
  console.error(`Error checking if path exists: ${getColorText('red', filePath)}`, error.message);
  return false;
}
};

export const verifyFileNotExists = async (filePath, operationName = 'operation', { isDirectory = false } = {}) => {
  try {
    const exists = await checkFileExists(filePath);
    if (exists) {
      const type = isDirectory ? 'Directory' : 'File';
      console.log(`${type} ${getColorText('red', filePath)} already exists (${operationName})\n`);
      return false;
    }
    return true;
  } catch (error) {
    console.error(`Error checking if path exists: ${getColorText('red', filePath)}`, error.message);
    return false;
  }
};