const { test } = require('@playwright/test');
const CommonPage = require('../pages/commonSteps');

let commonPage;

test.beforeEach(async ({ page }) => {
  commonPage = new CommonPage(page);
  await commonPage.goto();
});

test.afterEach(async ({ page }) => {
  await page.close();
});

module.exports = { commonPage };

//To Be Removed