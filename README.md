🧩 Amazon.in – Playwright Automation Test Suite Design
🎯 Goal

To verify key user workflows and critical UI/functional components on the Amazon India site.

🧪 1. Smoke Tests (Basic Functionality)
Test Case	Description	Expected Result
TC001 – Verify Homepage Load	Launch https://www.amazon.in and wait for logo and search bar.	Page loads successfully; Amazon logo and search bar are visible.
TC002 – Verify Navigation Menu Items	Verify top menu tags: “Fresh”, “MX Player”, “Sell”, etc. (from your JSON file).	All expected navigation tags are visible and clickable.
TC003 – Verify Footer Links	Scroll down and validate presence of “About Us”, “Careers”, “Help” links.	Footer section loads, all key links visible.
🧭 2. Search and Filter Scenarios
Test Case	Steps	Expected Result
TC004 – Product Search	Search for “laptop” and wait for results.	Product grid appears, contains keyword “laptop”.
TC005 – Apply Filter and Sort	After search, apply filter (e.g., Brand = HP) and sort “Price: Low to High”.	Results update according to filter and sort order.
TC006 – Validate Product Details Page	Click first product → navigate to detail page.	Title, price, “Add to Cart” button visible.

Playwright Techniques Used:
➡️ page.locator(), expect(), page.waitForSelector(), page.getByRole(), dynamic waits, assertion chaining.

🛒 3. Cart and Checkout Flow
Test Case	Steps	Expected Result
TC007 – Add Product to Cart	From product page, click “Add to Cart”.	Cart icon shows updated item count.
TC008 – Remove Product from Cart	Go to cart, remove item.	Cart becomes empty.

Techniques:
➡️ Multi-page handling, pop-up dismissal, conditional checks.

🔐 4. Login & Session Handling
Test Case	Steps	Expected Result
TC009 – Verify Login (Valid Credentials)	Enter username/password from .env file, click Sign In.	Greeting like “Hello, <Name>” appears.
TC010 – Invalid Login Handling	Use wrong password.	Error message “Your password is incorrect.” displayed.

Techniques:
➡️ Page Object Model (POM), .env for credentials, conditional assertions, screenshot capture on failure.

📸 5. UI Validation & Screenshot
Test Case	Steps	Expected Result
TC011 – Visual Regression Check	Capture screenshot of top banner and compare with baseline.	Images match (no major visual difference).

Techniques:
➡️ expect(await page.screenshot()).toMatchSnapshot('banner.png');

📦 6. API & Network Mocking
Test Case	Steps	Expected Result
TC012 – Mock Product API	Intercept product search API and mock custom response.	Search results show mocked data.

Techniques:
➡️ page.route(), page.request.get(), page.on('response').

🧰 7. Advanced Techniques
Feature	Description	Example
Multiple Tabs	Handle opening of new tab (e.g., clicking product opens new page).	const newTab = await context.waitForEvent('page');
File Upload	Upload a profile image (if available in Account Settings).	input.setInputFiles('tests/data/photo.png');
Keyboard and Mouse Actions	Hover menus, keyboard shortcuts.	await page.hover('text=Account & Lists');
Assertions with Soft Expect	Continue test even after minor validation fails.	expect.soft(locator).toBeVisible();
Tracing & Video	Enable trace viewer for debugging.	In config: trace: 'on-first-retry', video: 'retain-on-failure'.
⚙️ 8. Test Utilities Setup

playwright.config.ts

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  reporter: [['line'], ['html', { outputFolder: 'playwright-report' }]],
  use: {
    baseURL: 'https://www.amazon.in/',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },
});

🧱 Folder Structure Example
project/
├── tests/
│   ├── amazon-login.spec.ts
│   ├── amazon-search.spec.ts
│   ├── amazon-cart.spec.ts
│   └── amazon-nav.spec.ts
├── pages/
│   ├── amz-login.ts
│   ├── amz-search.ts
│   └── amz-cart.ts
├── data/
│   └── data.json
├── .env
└── playwright.config.ts

📊 Expected Deliverables

✅ End-to-end tests (search → add to cart → remove → logout)

✅ Modular POM design

✅ JSON & .env data usage

✅ Network mocking, screenshots, traces, and multiple reporters


Amazon.in – Playwright Automation Test Suite
(Updated with API Testing)
9■■ API Testing Scenarios
1 TC013 – Validate Product Search API: Send GET request to Amazon product search endpoint
with keyword (e.g., 'mobile'). Expected: Response 200 OK and contains results.
2 TC014 – Verify Product Details API: Validate that product details API returns correct product
title, price, and availability status. Expected: All fields present and valid.
3 TC015 – Cart Service API Validation: Mock or intercept add-to-cart API request to verify
payload and response status. Expected: Response 200 OK and correct item count.
4 TC016 – Login Authentication API: Validate login endpoint using POST request with valid
credentials from .env. Expected: Response 200 OK with session token.
5 TC017 – Error Handling for Invalid Inputs: Send malformed or unauthorized requests to
endpoints. Expected: Response 400/401 with correct error messages.
■ API Test Techniques Used
- Using Playwright’s built-in **APIRequestContext** for API calls. - Verifying response codes,
headers, and JSON schema. - Chaining API calls (e.g., login → get cart → add item → verify total).
- Mocking backend responses with `page.route()` for frontend tests. - Integration with UI tests:
Verify UI reflects backend API changes.
■ Example API Test (Playwright)
test('Verify Amazon product search API', async ({ request }) => { const response =
await request.get('https://www.amazon.in/s?k=laptop');
expect(response.status()).toBe(200); const body = await response.text();
expect(body).toContain('Laptop'); });
