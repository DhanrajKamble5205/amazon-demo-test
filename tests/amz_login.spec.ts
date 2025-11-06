import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/amz-login'; // import the login page by class name
import { Urls } from '../pages/url';


test.describe('Amazon and Gmail Login Tests', () => {

    test('Amazon Page login', async ({ page }) => {
        const login = new LoginPage(page);
        const url = new Urls(page);

        await url.openAmazonUrl();
        await login.AmzLoginAction('kdhanraj21@gmail.com')
        await url.openGmailUrl();
        await page.waitForTimeout(5000); // wait for Gmail to load
        await login.gmailAccount('kdhanraj21@gmail.com', 'Anurag@21')
    });


    test('Gmail Page login', async ({ page }) => {
        const login = new LoginPage(page);
        const url = new Urls(page)
        
       // await page.pause();
        // await page.goto('https://workspace.google.com/intl/en-US/gmail/');
        // await page.getByRole('link', { name: 'Sign in' }).click();
        await url.openGmailUrl();
        await login.gmailAccount('kdhanraj21@gmail.com', 'Anurag@21')
    });
});