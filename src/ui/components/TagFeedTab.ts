import { Page, Locator } from '@playwright/test';
import { ArticleFeedItem } from './ArticleFeedItem';

export class TagFeedTab {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getArticleByTitle(title: string): ArticleFeedItem {
    return new ArticleFeedItem(this.page, title);
  }
}
