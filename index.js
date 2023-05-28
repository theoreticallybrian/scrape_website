const scrape = require("website-scraper");
const PuppeteerPlugin = require("website-scraper-puppeteer");
const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  const url = "https://noones.com/id/login?next=https%3A//auth.noones.com/oauth2/authorize%3Flocale%3Den%26state%3D2ed8c7ddc2cd30982bac2add67c42c88%26response_type%3Dcode%26approval_prompt%3Dauto%26redirect_uri%3Dhttps%253A%252F%252Fnoones.com%252Flogin%252Fcallback%26client_id%3Dh9VAgMcfYPfoBaihBIfKt7An7UwFon5aKFjrm68dzFdxZ7Tj";

  // Launch Puppeteer and visit the URL
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);

  // Wait for 60 seconds
  await new Promise(resolve => setTimeout(resolve, 10000));

  // Scrape the website
  await scrape({
    urls: [url],
    directory: path.resolve(__dirname, "websitescrapeoutput2"),
    plugins: [
      new PuppeteerPlugin({
        browser: browser,
        page: page,
        scrollToBottom: {
          timeout: 3000,
          viewportN: 10
        },
        waitUntil: "networkidle0",
        waitForNavigation: "networkidle"
      })
    ]
  });

  // Close the browser
  await browser.close();
})();
