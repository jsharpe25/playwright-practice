import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/loginPage.js";
import { InventoryPage } from "../pages/inventoryPage.js";

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
});
