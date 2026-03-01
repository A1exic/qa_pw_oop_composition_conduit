import { Page } from '@playwright/test';

export class BaseViewArticlePage {
  constructor(public page: Page) {}

  async getTitle() {
    return this.page.locator('h1').textContent();
  }

  async getBody() {
    return this.page.locator('.article-content').textContent();
  }

  async getTags() {
    return this.page.locator('.tag-list >> span').allTextContents();
  }
}
