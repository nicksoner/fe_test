import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    const loginForm = page.locator('form').filter({ hasText: 'Login' });
    this.emailInput = loginForm.getByPlaceholder('Email Address');
    this.passwordInput = loginForm.getByPlaceholder('Password');
    this.loginButton = loginForm.getByRole('button', { name: 'Login' });
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyLayout() {
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }
}