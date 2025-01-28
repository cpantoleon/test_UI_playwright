const { expect } = require('@playwright/test');
const { loginLocators } = require('../locators/login');

class LoginQuestions {
    constructor(page) {
        this.page = page;
        this.locators = loginLocators;
      }

  async assertInvalidLoginMessage(expectedMessage) {
    const actualMessage = await this.page.locator(this.locators.invalidLoginMessage).textContent();
    await expect(actualMessage.trim()).toBe(expectedMessage);
  }

  async usernameFieldIsDisplayed() {
    await expect(this.page.locator(this.locators.usernameField)).toBeVisible();
  }

  async passwordFieldIsDisplayed() {
    await expect(this.page.locator(this.locators.passwordField)).toBeVisible();
  }

  async inputButtonIsAvailable() {
    await expect(this.page.locator(this.locators.inputButton)).toBeEnabled();
  }
}

module.exports = LoginQuestions;