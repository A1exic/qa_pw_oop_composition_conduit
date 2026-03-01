import { Page } from '@playwright/test';

export class BaseArticleContentBlock {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getTitle(): Promise<string | null> {
    return this.page.locator('h1').textContent();
  }

  async getBody(): Promise<string | null> {
    return this.page.locator('.article-content').textContent();
  }

  async getTags(): Promise<string[]> {
    return this.page.locator('.tag-list >> span').allTextContents();
  }
}
