const { test: base } = require('@playwright/test');
const CommonPage = require('../pages/commonSteps');
const LoginPage = require('../pages/loginPage');

// Define custom fixtures
exports.test = base.extend({
  commonSteps: async ({ page }, use) => {
    const commonSteps = new CommonPage(page);
    await commonSteps.goto();
    await use(commonSteps);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});