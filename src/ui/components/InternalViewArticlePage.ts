import { BaseViewArticlePage } from './BaseViewArticlePage';
import { AuthorsArticleContentBlock } from '../components/articleContent/AuthorsArticleContentBlock';
import { Page } from '@playwright/test';

export class InternalViewArticlePage extends BaseViewArticlePage {
  readonly authorArticleContent: AuthorsArticleContentBlock;

  constructor(page: Page) {
    super(page);
    this.authorArticleContent = new AuthorsArticleContentBlock(page);
  }
}
