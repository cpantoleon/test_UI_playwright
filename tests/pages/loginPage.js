const { expect } = require('@playwright/test');
const { loginLocators } = require('../locators/login');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.locators = loginLocators;
  }

  async enterUsername(username) {
    await this.page.fill(this.locators.usernameField, username);
  }

  async enterPassword(password) {
    await this.page.fill(this.locators.passwordField, password);
  }

  async clickLoginButton() {
    await this.page.click(this.locators.inputButton);
  }
}

module.exports = LoginPage;