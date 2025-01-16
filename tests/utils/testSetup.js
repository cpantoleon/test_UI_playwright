const { chromium } = require('@playwright/test');

class TestSetup {
  static async initBrowser() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    return { browser, page };
  }
}

module.exports = TestSetup;
