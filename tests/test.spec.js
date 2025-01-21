const { test, expect } = require('@playwright/test');
const {examplePage} = require ('./utils/beforeAfter');
const ExamplePage = require('./pages/examplePage');

test.describe('Example.com Tests', () => {
  let examplePage;

  test.beforeEach(async ({ page }) => {
    examplePage = new ExamplePage(page);
    await examplePage.goto();
  });

  test('Verify Title, Heading, and Click More Info [Tag1][tagtest]', async ({ page }) => {
    // await examplePage.verifyTitle();
    // await examplePage.verifyHeadingText();
    // await examplePage.clickMoreInfo();
    await page.waitForTimeout(2000);
    // await page.waitForLoadState('load');
    // await expect(page).toHaveURL(/iana.org/);
  });

  test('Verify Navigation to More Information Page[Tag2] [tagtest]', async ({ page }) => {
    // await examplePage.clickMoreInfo();
    // await page.waitForTimeout(2000);
    // await page.waitForLoadState('load');
    // await expect(page).toHaveURL(/iana.org/);
    // const title = await page.title();
    // expect(title).toContain('Example Domains');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  //npm test -- --grep "\[Tagtest\]"
  //npm test

});
