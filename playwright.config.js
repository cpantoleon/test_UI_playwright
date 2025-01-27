const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    trace: 'on-first-retry',
  },
  //globalSetup: require.resolve('./tests/globals/global-setup.js'),
  globalTeardown: require.resolve('./tests/globals/global-teardown.js'),
  workers: 2, // Number of parallel workers
  timeout: 30000, // Timeout for each test in milliseconds
  reporter: [['list'], ['json', { outputFile: 'results.json' }]], // Reporters
});