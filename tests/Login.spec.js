const { test } = require('@playwright/test');
const { commonPage, appPage} = require('./utils/beforeAfter');
const { wait } = require('./utils/wait');
const { readYaml } = require('./utils/readYaml');
const LoginPage = require('./pages/loginPage');

const testData = readYaml('../data/testData.yml');

test.describe('Test Login page', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });

  test('Login to the application with valid credentials [Login_1] [Login]', async ({ page }) => {
    await wait(2000);
    await loginPage.usernameFieldIsDisplayed();
    await loginPage.enterUsername(testData.Users.Valid.userName);
    await loginPage.passwordFieldIsDisplayed();
    await loginPage.enterPassword(testData.Users.Valid.password);
    await loginPage.inputButtonIsAvailable();
    await loginPage.clickLoginButton();
    await wait(2000);
  });

  test('Login to the application with invalid credentials [Login_2] [Login]', async ({ page }) => {
    await wait(2000);
    await loginPage.usernameFieldIsDisplayed();
    await loginPage.enterUsername(testData.Users.Invalid.userName);
    await loginPage.passwordFieldIsDisplayed();
    await loginPage.enterPassword(testData.Users.Invalid.password);
    await loginPage.inputButtonIsAvailable();
    await loginPage.clickLoginButton();
    await wait(2000);
  });
});