const { defineConfig } = require("cypress");

module.exports = defineConfig({



  e2e: {
    baseUrl: "http://localhost:3000/",
    viewportHeight: 2340,
    viewportWidth: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
