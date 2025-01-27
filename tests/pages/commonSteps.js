const { expect } = require('@playwright/test');

class CommonPage {
    constructor(page) {
      this.page = page;
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
      }
}

module.exports = CommonPage;
