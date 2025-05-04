import { EOL, cpus, homedir, userInfo, arch } from 'os';

import { getColorText } from './messages.js';

export const getEOL = () => {
  try {
    console.log(`End of Line (EOL): ${getColorText('yellow', JSON.stringify(EOL))} \n`);
  } catch (error) {
    console.error('Error retrieving End of Line (EOL):', error.message);
  }
};

export const getCPUs = () => {
  try {
    const cpuInfo = cpus().map(cpu => ({
      'CPU model': cpu.model,
      'Clock rate (GHz)': cpu.speed / 1000
    }));
    
    console.log(`Overall amount of CPUs: ${getColorText('yellow', cpuInfo)} \n`);
    console.table(cpuInfo);
  } catch (error) {
    console.error('Error retrieving CPU information:', error.message);
  }
};

export const getHomeDir = () => {
  try {
    console.log(`Home directory: ${getColorText('yellow', homedir())} \n`);
  } catch (error) {
    console.error('Error retrieving home directory:', error.message);
  }
};

export const getCurrentSystemUsername = () => {
  try {
    console.log(`Current System Username: ${getColorText('yellow', userInfo().username)} \n`);
  } catch (error) {
    console.error('Error retrieving current system username:', error.message);
  }
}

export const getCPUArchitecture = () => {
  try {
    console.log(`CPU architecture: ${getColorText('yellow', arch())} \n`);
  } catch (error) {
    console.error('Error retrieving CPU architecture:', error.message);
  }
};