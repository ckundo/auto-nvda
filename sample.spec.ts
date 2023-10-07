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

    await expect(page.locator('header[role="banner"]')).toBeVisible();
    await nvda.perform(nvda.keyboardCommands.reportCurrentFocus);
    await nvda.perform(nvda.keyboardCommands.reportTitle);
    await nvda.perform(nvda.keyboardCommands.exitFocusMode);
    await nvda.perform(nvda.keyboardCommands.moveToNextHeading);

    const itemTextLog = await nvda.itemTextLog();

    process.stdout.write(JSON.stringify(itemTextLog));
    expect(JSON.stringify(itemTextLog)).toEqual("heading")
  });
});
