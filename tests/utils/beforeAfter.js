const { test } = require('@playwright/test');
const CommonPage = require('../pages/commonSteps');
const AppPage = require('../pages/appPage');

let commonPage, appPage;

test.beforeEach(async ({ page }) => {
  commonPage = new CommonPage(page);
  appPage = new AppPage(page);
  await commonPage.goto();
});

test.afterEach(async ({ page }) => {
  await page.close();
});

module.exports = { commonPage, appPage };