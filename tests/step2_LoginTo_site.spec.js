const { test, expect } = require('@playwright/test');

test('locator',async function ({ page}) {


await page.goto("https://www.amazon.in/");


 await page.locator('id=nav-link-accountList-nav-line-1').click()
 
await page.fill('#ap_email','7987976004')


await page.click('id=continue');
  })