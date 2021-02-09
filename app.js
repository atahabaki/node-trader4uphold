const dotenv = require('dotenv').config();
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
		headless: false,
		slowMo: 150
	});
  const page = await browser.newPage();
	await page.goto('https://wallet.uphold.com/login', {waitUntil: 'networkidle2'});

	await page.type('input[type="email"]',process.env.EMAIL);
	await page.type('input[type="password"]',`${process.env.PASSWORD}\n`);

	debugger;
  //await browser.close();
})();
