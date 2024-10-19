const { test, expect } = require("@playwright/test");

test("Can create a list item.", async ({ page }) => {
  const listName = `My list: ${Math.random()}`;

  await page.goto("/lists");

  await page.locator("input[type=text]").type(listName);

  await page.locator('input[type=submit][value="Create shopping list!"]')
    .click();

  await page.locator(`a:has-text("${listName}")`).click();

  const itemName = `My item: ${Math.random()}`;

  await page.locator("input[type=text]").type(itemName);
  await page.locator('input[type=submit][value="Add item"]')
    .click();

  await expect(page.locator(`li:has-text("${itemName}")`).first()).toHaveText(
    itemName,
  );
});
