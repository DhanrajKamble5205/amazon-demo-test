import { Page, Locator, expect } from '@playwright/test';
import { console } from 'inspector';

export class LoginPage {

    readonly page: Page;
    readonly logUsername: Locator;
    readonly logPassword: Locator;
    readonly continueButton: Locator;
    readonly sendOtp: Locator;
    readonly selectLoginOption: Locator;
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
    }

    async AmzLoginAction(username: string, password: string) {
        await this.selectLoginOption.click();
        await this.logUsername.fill(username);
        await this.continueButton.click();
        await this.logPassword.fill(password);
        await this.AmzSingIn.click();
        //await this.page.waitForTimeout(5000);

    }

    async AmzLoginVerify() {
        await expect(this.verifyLoggedIn).toContainText('Hello, Dhanraj');
        const loginText = await this.verifyLoggedIn.textContent();
        console.log("User Logged in successfully", loginText);
    }

    async AmzLogoff() {
        await this.verifyLoggedIn.click();
        await this.loggedOff.click();
    }

}
