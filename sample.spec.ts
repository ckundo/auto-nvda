import { nvda } from "@guidepup/guidepup";
import { test, expect } from "@playwright/test";
import itemTextSnapshot from "./itemTextSnapshot.json";

test.describe("Playwright NVDA", () => {
  test("I can navigate the Guidepup Github page", async ({
    page,
  }) => {
    await nvda.start();
    await page.goto("https://github.com/guidepup/guidepup", {
      waitUntil: "domcontentloaded",
    });

    // Wait for page to be ready and interact
    await expect(page.locator('header[role="banner"]')).toBeVisible();

    await nvda.perform(nvda.keyboardCommands.moveToNextHeading);

    const itemTextLog = await nvda.itemTextLog();

    expect(itemTextLog[0]).toMatch("heading")
  });
});
