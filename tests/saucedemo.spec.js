const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const testData = require('../config/testData');

test.describe('SauceDemo', () => {
  let loginPage;
  let inventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
  });

  test('user can log in, add an item to the cart, and log out', async ({ page }) => {
    await loginPage.navigate();

    const { username, password } = testData.credentials.validUser;
    await loginPage.login(username, password);

    const isInventoryLoaded = await inventoryPage.isLoaded();
    expect(isInventoryLoaded).toBe(true);
    expect(page.url()).toContain('/inventory.html');
    await expect(inventoryPage.pageTitle).toHaveText('Products');

    const itemName = testData.items.backpack;
    await inventoryPage.addItemToCartByName(itemName);

    const cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe(1);

    await inventoryPage.logout();

    const isLoginVisible = await loginPage.isVisible();
    expect(isLoginVisible).toBe(true);
    expect(page.url()).toBe('https://www.saucedemo.com/');
  });
});
