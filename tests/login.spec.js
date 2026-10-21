import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import { InventoryPage } from '../pages/inventoryPage.js';

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.open();
  await loginPage.login(
    process.env.SAUCE_USERNAME,
    process.env.SAUCE_PASSWORD,
  );

  await expect(page).toHaveURL(/inventory/);
  await expect(inventoryPage.title).toHaveText('Products');
});
