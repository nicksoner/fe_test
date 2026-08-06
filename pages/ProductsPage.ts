import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly productCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByRole('heading', { name: 'All Products', level: 2 });
    this.productCards = page.locator('.product-image-wrapper');
  }

  async getProductsCount(): Promise<number> {
    return await this.productCards.count();
  }
}