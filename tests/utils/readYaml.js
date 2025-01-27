const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const readYaml = (filePath) => {
  try {
    const fileContents = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8');
    return yaml.load(fileContents);
  } catch (error) {
    console.error(`Error reading YAML file: ${error.message}`);
    return null;
  }
};

module.exports = { readYaml };