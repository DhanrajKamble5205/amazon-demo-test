import { test } from '@playwright/test';

test('Save Gmail session', async ({ page }) => {
  await page.goto('https://accounts.google.com/signin');
  await page.locator('input[type="email"]').fill('kdhanraj21@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('input[type="password"]').fill('Anurag@21');
  await page.getByRole('button', { name: 'Next' }).click();

  // Wait for Gmail inbox or any Gmail element to load
  await page.waitForURL('https://mail.google.com/*');

  // ✅ Save cookies and local storage
  await page.context().storageState({ path: 'gmail-session.json' });
});
