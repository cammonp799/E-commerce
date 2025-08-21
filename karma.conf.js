// karma.conf.js
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({
    // ... garde tes settings existants (frameworks, files, reporters, coverage, etc.)
    browsers: ['ChromeHeadlessCI'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-gpu',
          '--disable-dev-shm-usage',
        ],
      },
    },
    singleRun: true,           // important en CI (pas de watch)
    // builder selon ta version d’Angular :
    // Angular 18 -> builder @angular-devkit/build-angular
    // Angular 20 -> builder @angular/build
  });
};
