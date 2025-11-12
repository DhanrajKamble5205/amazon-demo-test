import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/amz-login'; // import the login page by class name
import { Urls } from '../pages/url';

test.describe('Amazon Samsung Mobile phones are visible', () => {

    test('Check Samsung Mobile phones are visible on Amazon', async ({ page }) => {
        const url = new Urls(page);
        await url.openAmazonUrl();
        await page.fill('input[id="twotabsearchtextbox"]', 'Samsung Mobile phones');
        await page.click('input[id="nav-search-submit-button"]');
        const firstMobile = page.locator('(//span[@class="a-size-medium a-color-base a-text-normal"])[1]');
        await expect(firstMobile).toBeVisible();
    });
}); 