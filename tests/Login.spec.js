const { test } = require('./utils/fixture');
const { wait } = require('./utils/wait');
const { readYaml } = require('./utils/readYaml');

const testData = readYaml('../data/testData.yml');

test.describe('Test Login page', () => {
  test('Login to the application with valid credentials [Login_1] [Login]', async ({ commonSteps, loginPage, uiQuestions, loginQuestions }) => {
    await commonSteps.loginWithCredentials(loginQuestions,loginPage, testData, 'Valid');
    await uiQuestions.verifyUserLoggedInSuccessfully();
    await wait(2000)
  });

  test('Login to the application with invalid credentials [Login_2] [Login]', async ({ commonSteps, loginPage,loginQuestions }) => {
    await commonSteps.loginWithCredentials(loginQuestions, loginPage, testData, 'Invalid');
    await loginQuestions.assertInvalidLoginMessage(testData.Messages.InvalidLogin.message);
    await wait(2000)
  });

  test('User Logout successfully [Login_3] [Login]', async ({ commonSteps, loginPage, uiQuestions, loginQuestions, appPage }) => {
    await commonSteps.loginWithCredentials(loginQuestions, loginPage, testData, 'Valid');
    await uiQuestions.verifyUserLoggedInSuccessfully();
    await appPage.clickMenuBarButton();
    await uiQuestions.verifyLogoutButtonIsVisible();
    await appPage.clickLogoutButton();
    await loginQuestions.usernameFieldIsDisplayed();
    await wait(2000)
  });
  
});