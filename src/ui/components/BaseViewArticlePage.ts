import { Page } from '@playwright/test';
import { ArticleContentBlock } from './articleContent/ArticleContentBlock';

export class BaseViewArticlePage {
  readonly page: Page;
  readonly articleContent: ArticleContentBlock;

  constructor(page: Page) {
    this.page = page;
    this.articleContent = new ArticleContentBlock(page);
  }
}
