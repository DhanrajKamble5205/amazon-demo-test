

export async function waitForVisible(page:any, locator:any, timeout = 5000) {
    await page.locator(locator).waitFor({ state: 'visible', timeout });
}

/*
Inside a test:
import { waitForVisible } from '../utils/waitUtil.js';

await waitForVisible(page, '#loginButton');


✔ Cleaner
✔ Reusable
✔ Easier to maintain
*/