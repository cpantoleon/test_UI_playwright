const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
  },
});
