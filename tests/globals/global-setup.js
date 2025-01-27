const fs = require('fs');
const path = require('path');

module.exports = async () => {
  const testResultsPath = path.join(__dirname, '../../test-results');
  
  try {
    if (fs.existsSync(testResultsPath)) {
      fs.rmSync(testResultsPath, { recursive: true, force: true });
    }
  } catch (error) {
    console.error(`Error deleting test-results directory: ${error.message}`);
  }
};