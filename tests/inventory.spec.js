import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage.js";
import { InventoryPage } from "../pages/inventoryPage.js";

let loginPage;
let inventoryPage;

test.describe("Inventory Tests", () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    await loginPage.open();
    await loginPage.login(
      process.env.SAUCE_USERNAME,
      process.env.SAUCE_PASSWORD,
    );
  });

  test("add backpack to cart", async () => {
    await inventoryPage.addBackpackToCart();

    await expect(inventoryPage.cartBadge).toHaveText("1");
  });

  test("remove backpack from cart", async () => {
    await inventoryPage.addBackpackToCart();
    await inventoryPage.removeBackpackFromCart();

    await expect(inventoryPage.cartBadge).toBeHidden();
  });
});
