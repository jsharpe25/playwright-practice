export class InventoryPage {
  constructor(page) {
    this.page = page;

    this.title = page.locator('[data-test="title"]');
    this.backpackAddToCartButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]',
    );
    this.cartBadge = page.locator(
      '[data-test="shopping-cart-badge"]',
    );
    this.backpackRemoveButton = page.locator(
      '[data-test="remove-sauce-labs-backpack"]',
    );
    this.productCards = page.locator(
      '[data-test="inventory-item-description"]',
    );
    this.productPrices = page.locator(
      '[data-test="inventory-item-price"]',
    );
  }

  async addBackpackToCart() {
    await this.backpackAddToCartButton.click();
  }

  async removeBackpackFromCart() {
    await this.backpackRemoveButton.click();
  }

  getProductPrice(productCard) {
    return productCard.locator(this.productPrices);
  }
}
