import { defineConfig } from 'cypress'

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      // modify config values examples
      // config.defaultCommandTimeout = 10000
      config.defaultCommandTimeout = 30000
      config.responseTimeout = 30000

      // IMPORTANT return the updated config object
      return config
    }
  }
})

