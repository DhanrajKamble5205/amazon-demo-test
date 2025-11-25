import { Page } from "@playwright/test";
import config from "../config/config.json";

export class Urls {
  constructor(private page: Page) {}

  async openAmazonUrl() {
    await this.page.goto(config.BASE_AMZ_URL, { timeout: 60000 });
  }

  async openGmailUrl() {
  const newTab = await this.page.context().newPage();
  await newTab.goto(config.BASE_GMAIL_URL, { timeout: 60000 });
  return newTab;
}

}
