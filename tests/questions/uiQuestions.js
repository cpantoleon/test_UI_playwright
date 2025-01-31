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

  async verifyOrderIsPlaced() {
    const actualMessage = await this.page.locator(this.locators.thankYouMessage).textContent();
    await expect(actualMessage.trim()).toBe(expectedMessage);
  }
}

module.exports = LoginQuestions;