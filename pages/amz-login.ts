import { Page, Locator, expect } from '@playwright/test';
import { console } from 'inspector';
import data from '../test-data/data.json';

export class LoginPage {
    /* Following line defines a property named logUsername of type Locator,
which is read-only (cannot be reassigned after initialization). */
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
    readonly arrowButton: Locator;
    readonly navBar: Locator;


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
        this.arrowButton = page.getByRole('button', { name: 'Expand Account and Lists' });
        this.loggedOff = page.getByRole('link', { name: 'Sign Out' });
        this.navBar = page.locator('#nav-xshop-container, #nav-xshop');
    }

    async AmzLogin(username: string, password: string) {
        await this.selectLoginOption.click();
        await this.logUsername.fill(username);
        await this.continueButton.click();
        await this.logPassword.fill(password);
        await this.AmzSingIn.click();
        //await this.page.waitForTimeout(5000);

    }

    async AmzLoginVerify() {
        console.log("🔍 Verifying login text...");
        const actualText = await this.verifyLoggedIn.textContent();
        await expect(this.verifyLoggedIn).toContainText('Hello, Dhanraj');
        console.log("✅ Login verification passed! Actual text:", actualText?.trim());
    }

    async AmzNavigationBarItems() {
        const expectedTags = data.expectedTags;
        const actualTags = await this.navBar.locator('a').allTextContents();
        console.log('Actual Tags:', actualTags);
        for (const tag of expectedTags) {
            await expect(this.navBar.getByRole('link', { name: tag, exact: true }).filter({ hasText: tag })).toBeVisible();
        }
    }

    async AmzLogoff() {
        await this.arrowButton.hover();
        await this.loggedOff.click();
        console.log('✅ User Logged off successfully');
    }

}
