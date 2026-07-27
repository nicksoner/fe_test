import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly products: Locator;
  readonly login: Locator;
  readonly webSiteForAutomationPracticeLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = page.getByRole('link', { name: 'Products' });
    this.login = page.getByRole('link', { name: 'Signup / Login' });
    this.webSiteForAutomationPracticeLink = page.getByRole('img', { name: 'Website for automation practice' });
  }

  async goToProducts() {
    await this.products.click();
  }

async goToLogin() {
    await this.login.click();
  }

  async goToAutomationPracticeSite() {
    await this.webSiteForAutomationPracticeLink.click();
  }
}