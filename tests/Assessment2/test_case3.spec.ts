//TS_08 :- Validate the 'Individual Login' button is working
//1. Open 'Chrome' web browser.   
//2. Enter the url in search bar "https://onlinelibrary.wiley.com/
//3. Click the 'Login/Register' button  
//4. Display the window.  
//5. Display the window.  

import { test, expect } from '@playwright/test';

test.only("Validate the Individual Login link is working.", async ({ page }) => {

    await test.step("Open the browser using given link", async () => {
        await page.goto("https://onlinelibrary.wiley.com/")
    });

    await test.step("Click Login/Register button", async () => {
        await page.locator("//span[@class='sign-in-label']").click();
        await page.waitForTimeout(2000);
    });

    await test.step("Click Individual Login link", async () => {
        await page.getByText('Individual login').click();
        await page.waitForTimeout(1000);
    });
})