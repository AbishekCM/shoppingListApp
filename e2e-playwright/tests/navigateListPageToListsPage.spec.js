const { test, expect } = require("@playwright/test");

test("Can navigate to lists page from list page", async ({ page }) => {
  const listName = `My list: ${Math.random()}`;

  await page.goto("/lists");

  await page.locator("input[type=text]").type(listName);

  await page.locator('input[type=submit][value="Create shopping list!"]')
    .click();

  await page.locator(`a:has-text("${listName}")`).click();

  await page.locator('a:has-text("Shopping lists")').click();

  await expect(page.locator("h2")).toHaveText("Shoping lists");

  await expect(page.locator("h3")).toHaveText([
    "Add a shopping list",
    "Active shoping lists",
  ]);
});
