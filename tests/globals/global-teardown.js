const fs = require('fs');
const path = require('path');

const cleanup = () => {
  const testResultsPath = path.join(__dirname, '../../test-results');
  
  try {
    if (fs.existsSync(testResultsPath)) {
      fs.rmSync(testResultsPath, { recursive: true, force: true });
    }
  } catch (error) {
    console.error(`Error deleting test-results directory: ${error.message}`);
  }
};

module.exports = async () => {
  cleanup();
};

const handleExit = (signal) => {
  cleanup();
  process.exit(signal);
};

process.on('SIGINT', handleExit);
process.on('SIGTERM', handleExit);
process.on('exit', handleExit);