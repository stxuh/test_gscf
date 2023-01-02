const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  env: {
    login: "Harry Potter",
  },
  e2e: {
    supportFile: false,
    baseUrl: "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login",
    excludeSpecPattern: ["**/pages/*", "**/*.spec.js"],
    specPattern: "cypress/e2e/**/*.spec.ts",
  },
})
