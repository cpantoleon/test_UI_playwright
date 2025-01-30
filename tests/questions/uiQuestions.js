const { expect } = require('@playwright/test');
const { applicationLocators } = require('../locators/application');

class LoginQuestions {
    constructor(page) {
        this.page = page;
        this.locators = applicationLocators;
      }

  async verifyUserLoggedInSuccessfully() {
    await expect(this.page.locator(this.locators.menuBar)).toBeVisible();
  }

  async verifyLogoutButtonIsVisible() {
    await expect(this.page.locator(this.locators.logoutButton)).toBeVisible();
  }
}

module.exports = LoginQuestions;