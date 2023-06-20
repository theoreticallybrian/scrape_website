const scrape = require("website-scraper");
const PuppeteerPlugin = require("website-scraper-puppeteer");
const path = require("path");

async function runScraping() {
  try {
    await scrape({
      urls: ["https://online-dating.link/ke/?cn=16313171955&gp=135277151484&gclid=EAIaIQobChMIusiPl_3A_wIVRsvVCh26PQoQEAAYASAAEgJoPfD_BwE"],
      directory: path.resolve(__dirname, "output2"),
      plugins: [
        new PuppeteerPlugin({
          launchOptions: {
            headless: false,
            defaultViewport: {
              width: 1366, // Set the desired width for desktop emulation
              height: 768, // Set the desired height for desktop emulation
            },
          },
          scrollToBottom: {
            timeout: 3000, // Adjust the timeout value as needed
            viewportN: 10, // Adjust the number of viewport scrolls as needed
          },
          // Wait for navigation to complete before scraping
          waitForNavigation: true,
        }),
      ],
    });
    console.log("Scraping complete!");
  } catch (err) {
    console.error("An error occurred while scraping:", err);
  }
}

runScraping();
