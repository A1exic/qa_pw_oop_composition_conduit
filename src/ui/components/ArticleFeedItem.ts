import { Page, Locator } from '@playwright/test';

export class ArticleFeedItem {
  readonly page: Page;
  readonly root: Locator;

  constructor(page: Page, articleTitle: string) {
    this.page = page;
    this.root = page.locator(`.article-preview:has-text("${articleTitle}")`);
  }

  async open() {
    await this.root.locator('h1, h2, h3, h4, h5, h6').first().click();
  }

  async getTitle(): Promise<string | null> {
    return await this.root
      .locator('h1, h2, h3, h4, h5, h6')
      .first()
      .textContent();
  }

  async getAuthor(): Promise<string | null> {
    return await this.root.locator('.author').textContent();
  }
}
