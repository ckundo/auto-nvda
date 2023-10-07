import { test as base } from "@playwright/test";
import { nvda, NVDA } from "@guidepup/guidepup";

export const test = base.extend<{ nvda: NVDA }>({
    nvda: async({ page }, use) => {
      try {
        await nvda.start();
        use(nvda);
      } catch(e: any) {
         process.stderr.write(e.message);
        throw e;
      } finally {
        await nvda.stop();
      }
    }
});
