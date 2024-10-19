const { test, expect } = require("@playwright/test");

test("Can navigate to main page from lists page.", async ({ page }) => {
  await page.goto("/lists");

  await page.locator('a:has-text("Main page")').click();

  await expect(page).toHaveTitle("Shopping list application!");

  await expect(page.locator("h1")).toHaveText("Shared shopping lists");

  await expect(page.locator("h3")).toHaveText("Lists");
});
