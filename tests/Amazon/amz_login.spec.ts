import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/amz-login'; // import the login page by class name
import { Urls } from '../../pages/url';


test.describe('Amazon Login Tests', () => {
        
    test('Amazon Page login', async ({ page, browser }) => {
        const login = new LoginPage(page);
        const url = new Urls(page);

        await url.openAmazonUrl();
        await login.AmzLoginAction('kdhanraj21@gmail.com', 'Open@121Pass');     
        await browser.close() 
       // await login.AmzLoginVerify();
        //await login.AmzLogoff();  
    });

    test("verify amazon login successfully", async ({ page}) => {   
        const login = new LoginPage(page);
     
        await login.AmzLoginVerify();
    });

});