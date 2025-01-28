const { test } = require('./utils/fixture');
const { wait } = require('./utils/wait');
const { readYaml } = require('./utils/readYaml');
const { commonPage } = require('./utils/beforeAfter');

const testData = readYaml('../data/testData.yml');

test.describe('Test Login page', () => {
  test('Login to the application with valid credentials [Login_1] [Login]', async ({ commonSteps, loginPage }) => {
    await commonSteps.loginWithCredentials(loginPage, testData, 'Valid');
    await wait(2000);
  });

  test('Login to the application with invalid credentials [Login_2] [Login]', async ({ commonSteps, loginPage }) => {
    await commonSteps.loginWithCredentials(loginPage, testData, 'Invalid');
    await wait(2000);
  });

  test('User Logout successfully [Login_3] [Login]', async ({ commonSteps, loginPage }) => {
    await commonSteps.loginWithCredentials(loginPage, testData, 'Valid');
    await wait(2000);
    // Add logout steps here
  });
});