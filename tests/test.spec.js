const { test, expect } = require('@playwright/test');
const ExamplePage = require('./pages/examplePage');

test.describe('Example.com Tests', () => {
  let examplePage;

  test.beforeEach(async ({ page }) => {
    examplePage = new ExamplePage(page);
    await examplePage.goto();
  });

  test('Verify Title, Heading, and Click More Info', async ({ page }) => {
    await examplePage.verifyTitle();
    await examplePage.verifyHeadingText();
    await examplePage.clickMoreInfo();
    await page.waitForTimeout(5000);
    await page.waitForLoadState('load');
    await expect(page).toHaveURL(/iana.org/);
  });
});
