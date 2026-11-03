import { expect } from "@playwright/test";
import { test } from "../fixtures/pages.fixture.js";

test.describe("Inventory Tests", () => {
  test.beforeEach(async ({ inventoryPage }) => {
    await inventoryPage.open();
  });

  test("add backpack to cart", async ({ inventoryPage }) => {
    await inventoryPage.addBackpackToCart();

    await expect(inventoryPage.cartBadge).toHaveText("1");
  });

  test("remove backpack from cart", async ({ inventoryPage }) => {
    await inventoryPage.addBackpackToCart();
    await inventoryPage.removeBackpackFromCart();

    await expect(inventoryPage.cartBadge).toBeHidden();
  });

  test("every product card has a price", async ({ inventoryPage }) => {
    const productCards = await inventoryPage.productCards.all();

    for (const productCard of productCards) {
      await expect(inventoryPage.getProductPrice(productCard)).toBeVisible();
    }
  });
});
