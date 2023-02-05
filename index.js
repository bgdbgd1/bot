const puppeteer = require('puppeteer');
const { pageExtend } = require('puppeteer-jquery');
const fs = require('fs').promises;
// const jsdom = require('jsdom');
// const $ = require('jquery')(new jsdom.JSDOM().window);

// const StealthPlugin = require('puppeteer-extra-plugin-stealth')
// puppeteer.use(StealthPlugin())


var ticketswap = async function() {
    const browser = await puppeteer.launch({headless: false, slowMo: 200});
    const pageOrg = await browser.newPage();
    const page = pageExtend(pageOrg);
    // await page.waitForTimeout(60000);
    const cookiesString = await fs.readFile('./cookies.json');
    const cookies = JSON.parse(cookiesString);

    await page.setCookie(...cookies);
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36");

    await page.goto("https://www.ticketswap.com/event/pornceptual/regular-tickets/2c6043ae-0118-4688-a00f-3aae312f9dad/2642962");
    await page.waitForTimeout(500);

    // const cookies = await page.cookies();
    // await fs.writeFile('./cookies.json', JSON.stringify(cookies, null, 2));

    var a = true;
    while(a) {
        try {
            let anchorElement = await page.jQuery('div.e1asqgj30:first').parent().attr("href");
            console.log(anchorElement);
            await page.goto(anchorElement);
            a = false;
        } catch (error) {
            console.log(error);
            await page.waitForTimeout(500);
            const responseReload = await page.reload();
            if (responseReload.status() == 403) {
              console.log("STATUS 403 WAITING 2 MINUTES");
              await page.waitForTimeout(120000);
            } else {
              console.log("STATUS NOT 403 RETRYING");
            }
        }
    }
    // let anchorElement = await page.jQuery('div.e6fq7ah8:first').parent().attr("href");
    // console.log(anchorElement);
    // await page.goto(anchorElement);
    await page.waitForTimeout(500);
    await page.$eval("button[class='css-mxj1tc e1dvqv261']", elem => elem.click());

    const pageOrg2 = await browser.newPage();
    const page2 = pageExtend(pageOrg2);
    await page2.setCookie(...cookies);
    await page2.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36");
    await page2.goto("https://www.youtube.com/watch?v=PDQSVL4FQIw&ab_channel=Vinyl%2CRum%2CTapas%26Wine");
    await page2.waitForTimeout(1200000);
}();

// e6fq7ah8 css-19fqo0n eh8fd9012

// css-mxj1tc
