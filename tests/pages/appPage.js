const { expect } = require('@playwright/test');
const { applicationLocators } = require('../locators/application');

class AppPage {
  constructor(page) {
    this.page = page;
    this.locators = applicationLocators;
  }

  async clickMenuBarButton() {
    await this.page.click(this.locators.menuBar);
  }

  async clickLogoutButton() {
    await this.page.click(this.locators.logoutButton);
  }
}

module.exports = AppPage;