const { expect } = require('@playwright/test');
const { examplePageSelectors } = require('../locators/application');

class AppPage {
  constructor(page) {
    this.page = page;
    this.locators = examplePageSelectors;
  }

  async verifyTitle() {
    await expect(this.page).toHaveTitle(/Example Domain/);
  }

  async verifyHeadingText() {
    const heading = await this.page.textContent(this.locators.heading);
    expect(heading).toBe('Example Domain');
  }

  async clickMoreInfo() {
    await this.page.click(this.locators.moreInfoLink);
  }
}

module.exports = AppPage;
