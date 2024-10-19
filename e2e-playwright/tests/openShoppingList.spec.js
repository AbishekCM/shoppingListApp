const { test, expect } = require("@playwright/test");

test("Can open a list page.", async ({ page }) => {
  const listName = `My list: ${Math.random()}`;

  await page.goto("/lists");

  await page.locator("input[type=text]").type(listName);

  await page.locator('input[type=submit][value="Create shopping list!"]')
    .click();

  await page.locator(`a:has-text("${listName}")`).click();

  await expect(page.locator("h2")).toHaveText(listName);
});
