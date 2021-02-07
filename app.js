const dotenv = require('dotenv').config();
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
		headless: false,
		slowMo: 150
	});
  const page = await browser.newPage();
	await page.goto('https://wallet.uphold.com/login');

	await page.type('input[type="email"]',process.env.EMAIL);
	await page.type('input[type="password"]',process.env.PASSWORD);
	await page.click('button[type="submit"]');

	debugger;
  //await browser.close();
})();
