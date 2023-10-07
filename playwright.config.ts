import { voConfig } from "@guidepup/playwright";
import { devices, PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  ...voConfig,
  reportSlowTests: null,
  timeout: 3 * 60 * 1000,
  retries: 2,
  projects: [
    {
      name: "chrome",
      use: { ...devices["Desktop Chrome"], headless: false, video: "on" },
    },
  ],
};

export default config;
