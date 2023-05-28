const puppeteer = require('puppeteer');

async function run() {
  const url = 'https://noones.com/id/login?next=https%3A//auth.noones.com/oauth2/authorize%3Flocale%3Den%26state%3Dbdecad2e8953819fc47482fb7249ec49%26response_type%3Dcode%26approval_prompt%3Dauto%26redirect_uri%3Dhttps%253A%252F%252Fnoones.com%252Flogin%252Fcallback%26client_id%3Dh9VAgMcfYPfoBaihBIfKt7An7UwFon5aKFjrm68dzFdxZ7Tj'; // Replace with your desired URL

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  await page.waitForSelector('.AccountPages_mobile_container__ka8ai');

  // Execute your desired function here
  console.log('Done');

  await browser.close();
}

run().catch(err => console.error(err));
