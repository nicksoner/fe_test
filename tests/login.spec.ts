import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test('логин с тестовыми данными', async ({ page }) => {
  await page.goto('https://automationexercise.com');

  const homePage = new HomePage(page);
  await homePage.goToLogin();

  const loginPage = new LoginPage(page);
  await loginPage.login('test@test.com', 'wrongpassword');

});