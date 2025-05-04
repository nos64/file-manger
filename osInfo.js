import { EOL, cpus } from 'os';

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