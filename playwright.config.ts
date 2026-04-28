import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,

  expect: {
    timeout: 5000,
  },

  retries: process.env.CI ? 2 : 0,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: process.env.BASE_URL || 'https://practice.expandtesting.com/',

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    actionTimeout: 10000,
    navigationTimeout: 15000,
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    }
  ],

  fullyParallel: true,

  forbidOnly: !!process.env.CI,
});