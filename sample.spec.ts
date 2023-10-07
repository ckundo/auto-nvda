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
    await nvda.next();

    while ((await nvda.itemText()) !== "Guidepup heading level 1") {
      await nvda.perform(nvda.keyboardCommands.moveToNextHeading);
    }

    // Assert that we've ended up where we expected and what we were told on
    // the way there is as expected.
    const itemTextLog = await nvda.itemTextLog();

    for (const expectedItem of itemTextSnapshot) {
      expect(!!itemTextLog.find(log => log.includes(expectedItem))).toBe(true);
    }
  });
});
