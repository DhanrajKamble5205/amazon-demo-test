import { Page, Locator } from '@playwright/test';
//import { Urls } from './url';

export class LoginPage {

    readonly page: Page;
    readonly logUsername: Locator;
    readonly radioButton: Locator;
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



    constructor(page: Page) {
        this.page = page;

        //Amazon Login Locators
        this.selectLoginOption = page.getByRole('link', { name: 'Hello, sign in' });
        this.logUsername = page.getByRole('textbox', { name: 'email' });
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.radioButton = page.getByRole('radio');
        this.sendOtp = page.getByRole('button', { name: 'Send OTP' });
        this.enterOtp = page.getByRole('textbox', { name: 'Enter OTP' });

        
        //Gamil Locators
        //this.logEmail = page.getByRole('textbox', { name: 'Email or phone' });
        this.logEmail = page.locator('.whsOnd.zHQkBf').first();
        this.nextButton = page.locator('button:has-text("Next")');
        this.gmailPassword = page.locator('input[type="password"]');
        this.updateOption = page.getByText('Updates');
        this.gmailText = page.getByText('Amazon password assistance');
        this.copyOtp = page.getByRole('cell')
    }

    async AmzLoginAction(username: string) {
        await this.selectLoginOption.click();
        await this.logUsername.fill(username);
        await this.continueButton.click();
        await this.radioButton.first().click();
        await this.sendOtp.click();
    }
    
    async gmailAccount(browser: any) {
        //EmailID: string, gmailPass: string
  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  await page.goto('https://accounts.google.com/signin');
  await page.locator('input[type="email"]').fill('yourEmail@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('input[type="password"]').fill('yourPassword');
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
