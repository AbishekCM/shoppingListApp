const { test, expect } = require("@playwright/test");

test("Main page has expected title and headings.", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Shopping list application!");

  await expect(page.locator("h1")).toHaveText("Shared shopping lists");

  await expect(page.locator("h3")).toHaveText("Lists");
});
