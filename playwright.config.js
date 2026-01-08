import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.test.js",
  retries: 1,
  reporter: [["html"], ["list"]],
  use: {
    trace: "on-first-retry",
  },
});