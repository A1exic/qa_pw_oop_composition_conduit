import { Page, Locator } from '@playwright/test';

export class PopularTags {
  readonly page: Page;
  readonly tags: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tags = page.locator('.tag-list a');
  }

  async clickTag(tagName: string) {
    await this.tags.filter({ hasText: tagName }).click();
  }

  async getTagsList(): Promise<string[]> {
    return this.tags.allTextContents();
  }
}
