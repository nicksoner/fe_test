import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
  });

  test('layout: форма логина отображается', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('логин с неверными данными показывает ошибку', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('test@test.com', 'wrongpassword');

  });
});