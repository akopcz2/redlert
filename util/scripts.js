const puppeteer = require('puppeteer');
/**
 *  Function takes a screenshot with the following parameters
 * @param {string} host host that is being monitored from .env file
 * @param {string} date date of crawl
 */
function takeScreenshot(host, date){
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`${host}`);
        await page.screenshot({path: `${date}.png`});
        await browser.close();
    })();
}
module.exports.takeScreenshot = takeScreenshot;