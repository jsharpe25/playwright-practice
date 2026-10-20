export class InventoryPage {
  constructor(page) {
    this.page = page;

    this.title = page.locator('[data-test="title"]');
    this.backpackAddToCartButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async addBackpackToCart() {
    await this.backpackAddToCartButton.click();
  }
}