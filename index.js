const scrape = require("website-scraper");
const PuppeteerPlugin = require("website-scraper-puppeteer");
const path = require("path");

scrape({
  // Provide the URL(s) of the website(s) that you want to clone
  urls: ["https://diogos-exceptional-project-14df25.webflow.io"],
  // Specify the path inside this folder where the content should be saved
  directory: path.resolve(__dirname, "fitness-prod"),
  // Load the Puppeteer plugin
  plugins: [
    new PuppeteerPlugin({
      launchOptions: {
        headless: true,
      },
    }),
  ],
});
