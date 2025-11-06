import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'; // import the login page by class name

test('test', async ({ page }) => {
  const login = new LoginPage(page) // ceating instance/object of the class to access the properties.

  await login.login_url()
  await login.login('tomsmith','SuperSecretPassword!')

  // await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  // await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: ' Login' }).click();
  // await page.getByRole('link', { name: 'Logout' }).click();
});