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
}

module.exports = LoginQuestions;