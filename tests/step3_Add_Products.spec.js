const { test, expect } = require('@playwright/test');

test('locator',async function ({ page}) {

// goto to site--
await page.goto("https://www.amazon.in/?ref_=nav_ya_signin");


//search product on search bar--iphone 15
await page.fill('#twotabsearchtextbox','iphone 15 ');

// click on search button--
await page.click('id=nav-search-submit-button')


// click on add to cart button--product 1
await page.click('id=a-autoid-1-announce')


//search product on search bar--iphone 14
await page.fill('#twotabsearchtextbox','iphone 14 ');

// click on search button--
await page.click('id=nav-search-submit-button')


// click on add to cart button--product 2
await page.click('text=Add to cart')

//search product on search bar--samsung s24 ultra 5g
await page.fill('#twotabsearchtextbox','samsung s24 ultra 5g ');

// click on search button--
await page.click('id=nav-search-submit-button')


// click on add to cart button--product 3
await page.click('id=a-autoid-3-announce')

await page.close();




  })

