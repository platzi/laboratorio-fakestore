const path = require('path');
const { defineConfig } = require("cypress");
const vitePreprocessor = require("cypress-vite");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on(
        'file:preprocessor', 
        vitePreprocessor(path.resolve(__dirname, './vite.config.js')))
    },
  },
});
