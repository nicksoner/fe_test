import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationexercise.com');
});

test('переход в Products', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goToProducts();

  await expect(page).toHaveURL(/products/);
});
test('переход в Login', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goToLogin();

  await expect(page).toHaveURL(/login/);
});