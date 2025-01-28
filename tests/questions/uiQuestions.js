const { expect } = require('@playwright/test');
const { applicationLocators } = require('../locators/application'); // Correct the import path

class LoginQuestions {
    constructor(page) {
        this.page = page;
        this.locators = applicationLocators;
      }

  async verifyUserLoggedInSuccessfully() {
    await expect(this.page.locator(this.locators.menuBar)).toBeVisible();
  }
}

module.exports = LoginQuestions;