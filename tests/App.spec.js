const { test } = require('./utils/fixture');
const { wait } = require('./utils/wait');
const { readYaml } = require('./utils/readYaml');

const testData = readYaml('../data/testData.yml');

test.describe('User Purchase an item', () => {
  test('User Purchase an item [App_1] [App]', async ({ commonSteps, loginPage, uiQuestions, loginQuestions, appPage }) => {
    await commonSteps.loginWithCredentials(loginQuestions,loginPage, testData, 'Valid');
    await uiQuestions.verifyUserLoggedInSuccessfully(testData.Messages.Application.message);
    await appPage.clickOnProduct();
    await appPage.clickAddToCart();
    await appPage.clickOnCart();
    await appPage.clickOnCheckout();
    await appPage.enterFirstName(testData.CheckOutInformation.FirstNameValues.firstName1);
    await appPage.enterLastName(testData.CheckOutInformation.LastNameValues.lastName1);
    await appPage.enterZipCode(testData.CheckOutInformation.ZipCodeValues.zipCode1);
    await appPage.clickOnContinue();
    await appPage.clickOnFinish();
  });
});