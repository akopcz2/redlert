require('dotenv').config();
const puppeteer = require('puppeteer');
const port = process.env.PORT;
const appUrl = `http://localhost:${port}`;
const crawlInterval = process.env.INTERVAL;

setInterval(function() {
    (async () => {
        let date = new Date();
        console.log(`Crawler Initiated at ${date}`);
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`${appUrl}`);
        await browser.close();
    })();
}, crawlInterval);