const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://blogdoagi.com.br/',
    "viewportWidth": 1060,
    "viewportHeight": 768
  },
});
