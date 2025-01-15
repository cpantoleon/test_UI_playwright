const { test, expect, chromium } = require('@playwright/test');

test('basic test with headful mode', async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://example.com');
  await page.waitForTimeout(1000);
  await expect(page).toHaveTitle(/Example Domain/);

  await browser.close();
});
