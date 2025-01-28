const { test } = require('@playwright/test');
const { commonPage } = require('./utils/beforeAfter');
const { wait } = require('./utils/wait');
const { readYaml } = require('./utils/readYaml');
const LoginPage = require('./pages/loginPage'); // Import LoginPage class
const CommonPage = require('./pages/commonSteps');

const testData = readYaml('../data/testData.yml');

test.describe('Test Login page', () => {
  let commonSteps;
  let loginPage;

  test.beforeEach(async ({ page }) => {
    commonSteps = new CommonPage(page);
    loginPage = new LoginPage(page);
  });

  test('Login to the application with valid credentials [Login_1] [Login]', async ({ page }) => {
    await commonSteps.loginWithCredentials(loginPage, testData, 'Valid');
    await wait(2000);
  });

  test('Login to the application with invalid credentials [Login_2] [Login]', async ({ page }) => {
    await commonSteps.loginWithCredentials(loginPage, testData, 'Invalid');
    await wait(2000);
  });

  test('User Logout successfully [Login_3] [Login]', async ({ page }) => {
    await commonSteps.loginWithCredentials(loginPage, testData, 'Valid');
    await wait(2000);
    // Add logout steps here
  });
});