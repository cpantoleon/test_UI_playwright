const { test } = require('./utils/fixture');
const { wait } = require('./utils/wait');
const { readYaml } = require('./utils/readYaml');

const testData = readYaml('../data/testData.yml');

test.describe('User Purchase an item', () => {
  test('User Purchase an item [App_1] [App]', async ({ commonSteps, loginPage, uiQuestions, loginQuestions }) => {
    await commonSteps.loginWithCredentials(loginQuestions,loginPage, testData, 'Valid');
    await uiQuestions.verifyUserLoggedInSuccessfully();
    await wait(2000)
  });
});