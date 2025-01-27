const { expect } = require('@playwright/test');
const { loginLocators } = require('../locators/login');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.locators = loginLocators;
  }

  async usernameFieldIsDisplayed() {
    await expect(this.page.locator(this.locators.usernameField)).toBeVisible();
  }

  async enterUsername(username) {
    await this.page.fill(this.locators.usernameField, username);
  }

  async passwordFieldIsDisplayed() {
    await expect(this.page.locator(this.locators.passwordField)).toBeVisible();
  }

  async enterPassword(password) {
    await this.page.fill(this.locators.passwordField, password);
  }

  async inputButtonIsAvailable() {
    await expect(this.page.locator(this.locators.inputButton)).toBeEnabled();
  }

  async clickLoginButton() {
    await this.page.click(this.locators.inputButton);
  }
}

module.exports = LoginPage;