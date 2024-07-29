const { test, expect } = require('@playwright/test');

test('locator',async function ({ page}) {


await page.goto("https://www.amazon.in/");

const title = await page.title();
console.log('Title:', title);
expect(title).toBe('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');


const pageUrl=page.url()
console.log('page url is : ' + pageUrl)
await expect(page).toHaveURL('https://www.amazon.in/');


  })


