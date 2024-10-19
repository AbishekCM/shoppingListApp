const { test, expect } = require("@playwright/test");

test("Can navigate to lists page from main page.", async ({ page }) => {
  await page.goto("/");

  await page.locator('a:has-text("Lists")').click();

  await expect(page.locator("h2")).toHaveText("Shoping lists");

  await expect(page.locator("h3")).toHaveText([
    "Add a shopping list",
    "Active shoping lists",
  ]);
});
