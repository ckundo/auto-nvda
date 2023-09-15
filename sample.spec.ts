import { test } from "assistive-playwright-test";

test("should open simple page", async ({
    page,
    screenReader,
    vmKeyboard,
    vmMouse
}) => {
    await page.goto("/");
    await vmMouse.click(0, 0, {
        origin: await page.getByRole("link", { name: /more information/i })
    });
    await vmKeyboard.press("h");
    await screenReader.waitForMessage("Example Domains");
    await vmKeyboard.press("h");
    await screenReader.waitForMessage("Further Reading");
});
