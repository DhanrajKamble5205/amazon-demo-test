import { Page, Locator } from '@playwright/test';

export class LoginPage {

  readonly page: Page;
  readonly log_username: Locator;
  readonly log_password: Locator;
  readonly login_button: Locator;
  readonly logout_button: Locator;

  constructor(page: Page) {
    this.page = page;
    this.log_username = page.getByRole('textbox', { name: 'Username' });
    this.log_password = page.getByRole('textbox', { name: 'Password' });
    this.login_button = page.getByRole('button', { name: ' Login' });
    this.logout_button = page.getByRole('link', { name: 'Logout' });
  }

  async openLoginPage() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(username: string, password: string) {
    await this.log_username.fill(username);
    await this.log_password.fill(password);
    await this.login_button.click();
  }

  async logout() {
    await this.logout_button.click();
  }
}
