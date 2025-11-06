import { Page } from "@playwright/test";

export class Urls {
  constructor(private page: Page) {}

  async openAmazonUrl() {
    await this.page.goto('https://www.amazon.in/');
  }

  async openGmailUrl() {
    const newTab = await this.page.context().newPage();
    await newTab.goto("https://accounts.google.com/signin", { timeout: 60000 });
    await newTab.pause();
  }
}
