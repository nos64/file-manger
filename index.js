class FileManager {
  constructor(username) {
    this.username = username;
  }

  async start() {
    console.log(`Welcome to the File Manager, ${this.username}!`);
  }
}

const usernameFromArg = process.argv.find(arg => arg.startsWith('--username='));
const username = usernameFromArg ? usernameFromArg.split('=')[1] : 'User';


const fileManager = new FileManager(username);
fileManager.start().catch(console.error);