import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Products Page', () => {
  test('layout: страница товаров отображается корректно', async ({ page }) => {
    await page.goto('https://automationexercise.com/products');

    const productsPage = new ProductsPage(page);

    await expect(productsPage.pageTitle).toBeVisible();

    const count = await productsPage.productCards.count();
    expect(count).toBeGreaterThan(0);
  });
});