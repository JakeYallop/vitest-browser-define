import { defineConfig } from 'vitest/config'

export default defineConfig({
  define: {
    __MY_DEFINE__: '"my-define"',
  },
  test: {
    workspace: [
      {
        test: {
          include: ["vitest-example/**"],
          browser: {
            enabled: true,
            provider: 'playwright',
            // https://vitest.dev/guide/browser/playwright
            instances: [
              { browser: 'chromium', headless: true },
            ],
          },
        }
      }
    ]
  },
})
