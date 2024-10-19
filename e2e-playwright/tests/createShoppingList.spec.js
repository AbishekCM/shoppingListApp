const { test, expect } = require("@playwright/test");

test("Can create a list.", async ({ page }) => {
  const listName = `My list: ${Math.random()}`;

  await page.goto("/lists");
  await page.locator("input[type=text]").type(listName);
  await page.locator('input[type=submit][value="Create shopping list!"]')
    .click();

  await expect(page.locator(`a:has-text("${listName}")`).first()).toHaveText(
    listName,
  );
});
