import { test, expect } from "@playwright/test";

test("meta is correct", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Welcome to Astro.");
});

test.describe("navigation", () => {
  test("can navigate to /about", async ({ page }) => {
    await page.goto("/");
    await page.click("text=About");

    await expect(page).toHaveTitle("About");
  });
});
