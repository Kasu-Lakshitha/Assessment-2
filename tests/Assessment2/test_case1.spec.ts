//TS_02 :- Validate the serching box is working
//1. Open 'Chrome' web browser.   
//2. Enter the url in search bar "https://onlinelibrary.wiley.com/
//3. Open the wiley library page.  
//4. Click searching box and type the serching word is "Agriculture".
//5. Click search button.

import { test, expect } from '@playwright/test';

test.only("Validate the serching box is working.",async ({ page }) => {

    await test.step("Open the browser using given link", async () => {
        await page.goto("https://onlinelibrary.wiley.com/")
    });

    await test.step("Click on search button.", async () => {
        await page.locator("//input[@id='searchField1']").click();
    });

    await test.step("Click on the seach filed and enter some value", async () => {
        await page.locator("//input[@id='searchField1']").pressSequentially("Agriculture", {delay :100});
    });

    await test.step("Clicik enter key", async () => {
        await page.keyboard.press('Enter');
        await page.locator("//button[@class='btn quick-search__button icon-search']");
        await page.waitForTimeout(2000);
    });
})

