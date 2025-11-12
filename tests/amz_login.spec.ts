import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/amz-login'; // import the login page by class name
import { Urls } from '../pages/url';
import dotenv from 'dotenv';
dotenv.config();

test.describe('Amazon Login Functionality', () => {
    test('Amazon Page login', async ({ page, browser }) => {
        const login = new LoginPage(page);
        const url = new Urls(page);
        const username = process.env.AMZ_USERNAME!;
        const password = process.env.AMZ_PASSWORD!;

        await url.openAmazonUrl();
        await login.AmzLoginAction(username, password);
        await login.AmzLoginVerify();
        await login.AmzLogoff();  
    });
});
