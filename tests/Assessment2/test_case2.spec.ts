//TS_10 :- Validate the selected subject line link is open.
//1. Open 'Chrome' web browser.   
//2. Enter the url in search bar "https://onlinelibrary.wiley.com/
//3. Click the selected subjet line("Art & Applied").     
//4. Click the "Art & Photography" link

import { test, expect } from '@playwright/test';

test.only("Validate the selected subject line link is open.",async ({ page }) => {

    await test.step("Open the browser using given link", async () => {
        await page.goto("https://onlinelibrary.wiley.com/")
    });

    await test.step("Click the selected subjet line", async () =>  {
        await page.locator("//a[@id='accordionHeader-3']").click();
        await page.waitForTimeout(2000);
    })

    await test.step("Click the Art & Photography link", async () => {
        await page.getByRole('link', { name: 'Art & Photography' }).click();
        await page.waitForTimeout(2000);
    })
})
