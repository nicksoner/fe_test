import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';


test.describe('Home page', () => {
  let homePage: HomePage
test.beforeEach(async ({ page }) => {
  await page.goto('https://automationexercise.com');
  homePage = new HomePage(page);
});
test('layout тест', async ({}) => {
  await expect(homePage.products).toBeVisible();
  await expect(homePage.login).toBeVisible();
  await expect(homePage.logo).toBeVisible();
});
test('переход в Products', async ({ page }) => {
  
  await homePage.goToProducts();
  await expect(page).toHaveURL(/products/);
});
test('переход в Login', async ({ page }) => {

  await homePage.goToLogin();
  await expect(page).toHaveURL(/login/);
});
});