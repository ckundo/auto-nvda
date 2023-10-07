import { test as base } from "@playwright/test";
import { nvda, NVDA } from "@guidepup/guidepup";

export const test = base.extend<{ nvda: NVDA }>({
    nvda: async({ page }, use) => {
      try {
        await nvda.start();
        use(nvda);
      } finally  {
        await nvda.stop();
      }
    }
});
