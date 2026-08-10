import 'dotenv/config';
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
  });

  test('layout: форма логина отображается', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifyLayout();
  });

  test('логин с неверными данными показывает ошибку', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('test@test.com', 'wrongpassword');
  });
});