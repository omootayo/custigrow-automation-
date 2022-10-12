const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "opn96j",

reporter: "cypress-multi-reporters",
reporterOption: {
  reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
  cypressMochawesomeReporterReporterOption: {
    reportDir: "cypress/results/json",
    chart: true,
    reportPageTitle: "Custigrow",
    embeddedScreenshot: true,
    html: true,
    json: true,
    inlineAssets: true,
    configFile: "reporter-config.json",
    overwrite: false
  },
  mochaJunitReporterReporterOptions: {
    mochaFile: "cypress/reports/junit/results-[hash].xml"
  }
},




  e2e: {
    baseUrl: 'https://custigrow-user-frontend-jtoh3ofzda-ew.a.run.app/auth/login',
    defaultCommandTimeout: 9000,
    viewportHeight:900,
    viewportWidth:1400,
    waitForAnimation:true,
    watchForFileChanges:false,
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  
  video: true,
  videoCompression: 32,
  videoUploadOnPasses: true
});

