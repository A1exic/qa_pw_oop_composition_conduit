import { BaseArticleContentBlock } from './BaseArticleContentBlock';
import { Page } from '@playwright/test';

export class ArticleContentBlock extends BaseArticleContentBlock {
  constructor(page: Page) {
    super(page);
  }
}

export class AuthorsArticleContentBlock extends BaseArticleContentBlock {
  constructor(page: Page) {
    super(page);
  }

  async editArticle() {
    await this.page.locator('text=Edit Article').click();
  }

  async deleteArticle() {
    await this.page.locator('text=Delete Article').click();
  }
}
