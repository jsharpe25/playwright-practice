import { expect } from "@playwright/test";
import { test } from "../fixtures/pages.fixture.js";

test('successful login', async ({ page, loginPage, inventoryPage }) => {
  await loginPage.open();
  await loginPage.login(
    process.env.SAUCE_USERNAME,
    process.env.SAUCE_PASSWORD,
  );

  await expect(page).toHaveURL(/inventory/);
  await expect(inventoryPage.title).toHaveText('Products');
});
