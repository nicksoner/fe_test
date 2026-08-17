import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly products: Locator;
  readonly login: Locator;
  readonly logo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = page.getByRole('link', { name: 'Products' });
    this.login = page.getByRole('link', { name: 'Signup / Login' });
    this.logo = page.getByRole('img', { name: 'Website for automation practice' });
  }

  async goToProducts() {
    await this.products.click();
  }

  async goToLogin() {
    await this.login.click();
  }

  async goToAutomationPracticeSite() {
    await this.logo.click();
  }

  async verifyLayout() {
    await expect(this.products).toBeVisible();
    await expect(this.login).toBeVisible();
    await expect(this.logo).toBeVisible();
  }
}