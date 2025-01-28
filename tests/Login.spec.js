const { test } = require('./utils/fixture');
const { wait } = require('./utils/wait');
const { readYaml } = require('./utils/readYaml');

const testData = readYaml('../data/testData.yml');

test.describe('Test Login page', () => {
  test('Login to the application with valid credentials [Login_1] [Login]', async ({ commonSteps, loginPage, uiQuestions }) => {
    await commonSteps.loginWithCredentials(loginPage, testData, 'Valid');
    await wait(2000);
    await uiQuestions.verifyUserLoggedInSuccessfully();
  });

  test('Login to the application with invalid credentials [Login_2] [Login]', async ({ commonSteps, loginPage, loginQuestions }) => {
    await commonSteps.loginWithCredentials(loginPage, testData, 'Invalid');
    await wait(2000);
    await loginQuestions.assertInvalidLoginMessage(testData.Messages.InvalidLogin.message);
  });

  test('User Logout successfully [Login_3] [Login]', async ({ commonSteps, loginPage, uiQuestions }) => {
    await commonSteps.loginWithCredentials(loginPage, testData, 'Valid');
    await wait(2000);
    await uiQuestions.verifyUserLoggedInSuccessfully();
    // Add logout steps here
  });
});