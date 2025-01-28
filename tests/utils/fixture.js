const { test: base } = require('@playwright/test');
const CommonPage = require('../pages/commonSteps');
const LoginPage = require('../pages/loginPage');
const LoginQuestions = require('../questions/loginQuestions');
const UIQuestions = require('../questions/uiQuestions');

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
  loginQuestions: async ({ page }, use) => {
    const loginQuestions = new LoginQuestions(page);
    await use(loginQuestions);
  },
  uiQuestions: async ({ page }, use) => {
    const uiQuestions = new UIQuestions(page);
    await use(uiQuestions);
  }
});