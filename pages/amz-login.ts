import { Page, Locator, expect } from '@playwright/test';
import { console } from 'inspector';
//import { Urls } from './url';

export class LoginPage {

    readonly page: Page;
    readonly logUsername: Locator;
    readonly logPassword: Locator;
    readonly continueButton: Locator;
    readonly sendOtp: Locator;
    readonly selectLoginOption: Locator;
    readonly logEmail: Locator;
    readonly nextButton: Locator;
    readonly gmailPassword: Locator;
    readonly updateOption: Locator;
    readonly gmailText: Locator;
    readonly copyOtp: Locator;
    readonly enterOtp: Locator;
    readonly AmzSingIn: Locator;
    readonly verifyLoggedIn: Locator;
    readonly loggedOff: Locator;


    constructor(page: Page) {
        this.page = page;

        //Amazon Login Locators
        this.selectLoginOption = page.getByRole('link', { name: 'Hello, sign in' });
        this.logUsername = page.getByRole('textbox', { name: 'email' });
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.logPassword = page.getByRole('textbox', { name: 'password' });
        this.sendOtp = page.getByRole('button', { name: 'Send OTP' });
        this.enterOtp = page.getByRole('textbox', { name: 'Enter OTP' });
        this.AmzSingIn = page.getByRole('button', { name: 'Sign in' });
        this.verifyLoggedIn = page.locator('#nav-link-accountList-nav-line-1');
        this.loggedOff = page.getByRole('link', { name: 'Sign Out' });

        
        //Gamil Locators
        //this.logEmail = page.getByRole('textbox', { name: 'Email or phone' });
        this.logEmail = page.locator('.whsOnd.zHQkBf').first();
        this.nextButton = page.locator('button:has-text("Next")');
        this.gmailPassword = page.locator('input[type="password"]');
        this.updateOption = page.getByText('Updates');
        this.gmailText = page.getByText('Amazon password assistance');
        this.copyOtp = page.getByRole('cell')
    }

    async AmzLoginAction(username: string, password: string) {
        await this.selectLoginOption.click();
        await this.logUsername.fill(username);
        await this.continueButton.click();
        await this.logPassword.fill(password);
        await this.AmzSingIn.click();
        await this.page.waitForTimeout(5000);
        
    }
    
    async AmzLoginVerify() {
        const loginText = (await this.verifyLoggedIn.innerText()).trim()
        console.log("Logged in user is: ", loginText);
        // const expected = "Dhanraj";  

        // if (loginText == expected) {
        //     console.log("Amazon Login Successful: ", expected);
        // } else {
        //     console.log("Amazon Login Failed. Found text:", loginText);
        // }
    }
        
    async AmzLogoff() {
        await this.verifyLoggedIn.click();
        await this.loggedOff.click();
    }

    async gmailAccount(browser: any) {
        //EmailID: string, gmailPass: string
  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  await page.goto('https://accounts.google.com/signin');
  await page.locator('input[type="email"]').fill('kdhanraj21@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('input[type="password"]').fill('Anurag@21');
  await page.getByRole('button', { name: 'Next' }).click();

  await page.waitForURL('https://mail.google.com/*');
  await context.storageState({ path: 'gmail-session.json' });

 /*
        await this.logEmail.fill(EmailID);
        await this.nextButton.click();
        await this.gmailPassword.fill(gmailPass);
        await this.nextButton.click();
        await this.updateOption.click();
        await this.gmailText.first().click();
        const OTP = await this.copyOtp.innerText();
        console.log("OTP is copied from Gmail", OTP);

        // AmzEnterOTPLogin(OTP);
        await this.page.bringToFront();// bring Amazon tab to front
        await this.selectLoginOption.click();
        await this.enterOtp.fill(OTP);
        await this.continueButton.click();     
 */
    }
 /*
    async AmzEnterOTPLogin(otp: string) {
        await this.selectLoginOption.click();
        await this.enterOtp.fill(otp);
        await this.continueButton.click();
    }  
*/
}
