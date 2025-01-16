const { expect } = require('@playwright/test');

class ExamplePage {
  constructor(page) {
    this.page = page;
    this.heading = page.locator('h1');
    this.moreInfoLink = page.locator('a:has-text("More information")');
  }

  async goto() {
    await this.page.goto('https://example.com');
  }

  async verifyTitle() {
    await expect(this.page).toHaveTitle(/Example Domain/);
  }

  async verifyHeadingText() {
    await expect(this.heading).toHaveText('Example Domain');
  }

  async clickMoreInfo() {
    await this.moreInfoLink.click();
  }
}

module.exports = ExamplePage;
