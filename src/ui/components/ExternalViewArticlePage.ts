import { BaseViewArticlePage } from './BaseViewArticlePage';
import { Page } from '@playwright/test';

export class ExternalViewArticlePage extends BaseViewArticlePage {
  constructor(page: Page) {
    super(page);
  }
}
