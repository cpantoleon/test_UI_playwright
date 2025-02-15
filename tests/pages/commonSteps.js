const { expect } = require('@playwright/test');
const { loginLocators } = require('../locators/login');

class CommonPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://www.saucedemo.com/';
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async loginWithCredentials(loginQuestions,loginPage, testData, userType) {
    let userName, password;

    switch (userType) {
      case 'Valid':
        userName = testData.Users.Valid.userName;
        password = testData.Users.Valid.password;
        break;
      case 'Invalid':
        userName = testData.Users.Invalid.userName;
        password = testData.Users.Invalid.password;
        break;
      default:
        throw new Error(`Unknown user type: ${userType}`);
    }

    await loginQuestions.usernameFieldIsDisplayed();
    await loginPage.enterUsername(userName);
    await loginQuestions.passwordFieldIsDisplayed();
    await loginPage.enterPassword(password);
    await loginQuestions.inputButtonIsAvailable();
    await loginPage.clickLoginButton();
  }
}

module.exports = CommonPage;