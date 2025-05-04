import { EOL, cpus, homedir, userInfo, arch } from 'os';

export const getEOL = () => {
  try {
    console.log(`End of Line (EOL): \x1b[33m${JSON.stringify(EOL)}\x1b[0m`);
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
    
    console.log(`Overall amount of CPUs: \x1b[33m${cpuInfo.length}\x1b[0m`);
    console.table(cpuInfo);
  } catch (error) {
    console.error('Error retrieving CPU information:', error.message);
  }
};

export const getHomeDir = () => {
  try {
    const homeDirectory = homedir();
    console.log(`Home directory: \x1b[33m${homeDirectory}\x1b[0m`);
  } catch (error) {
    console.error('Error retrieving home directory:', error.message);
  }
};

export const getCurrentSystemUsername = () => {
  try {
    console.log(`Current System Username: \x1b[33m${userInfo().username}\x1b[0m`);
  } catch (error) {
    console.error('Error retrieving current system username:', error.message);
  }
}

export const getCPUArchitecture = () => {
  try {
    const architecture = arch();
    console.log(`CPU architecture: \x1b[33m${architecture}\x1b[0m`);
  } catch (error) {
    console.error('Error retrieving CPU architecture:', error.message);
  }
};