import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login(
    process.env.SAUCE_USERNAME,
    process.env.SAUCE_PASSWORD
  );

  await expect(page).toHaveURL(/inventory/);
});