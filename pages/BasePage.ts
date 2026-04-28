import { Page } from '@playwright/test';

export class BasePage {
  // Properties
  protected page: Page;

  // Constructor
  constructor(page: Page) {
    this.page = page;
  }
  // Method
  async navigateTo(path: string) {
    await this.page.goto(path);
  }
}