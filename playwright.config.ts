import { AssistivePlaywrightTestConfig } from "assistive-playwright-test";

const config: AssistivePlaywrightTestConfig = {
    timeout: 60000,
    forbidOnly: !!process.env.CI,
    retries: 5,
    use: {
        vmSettings: {
            type: "virtualbox",
            vm: "win10-chromium-nvda",
            snapshot: "nvda"
        },
        baseURL: "https://www.example.com/",
        viewport: null
    }
};

export default config;
