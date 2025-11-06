import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Test_login'; // import the login page by class name

test('test', async ({ page }) => {
  const login = new LoginPage(page) // ceating instance/object of the class to access the properties.

  await login.login_url()
  await login.login('tomsmith','SuperSecretPassword!')
  
});