const puppeteer = require('puppeteer')
// const StealthPlugin = require('puppeteer-extra-plugin-stealth')
// puppeteer.use(StealthPlugin())
var ticketswap = async function() {
    const browser = await puppeteer.launch({headless: false, slowMo: 200});
    const page = await browser.newPage();
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36");
    await page.goto("https://www.ticketswap.com/listing/dockyard-mystic-garden-ade/7909416/5d8d8bbca0");
    // await page.goto("https://www.ticketswap.com/event/vbx-x-sunrise-ade/regular-tickets/668de2f5-5bcb-48c3-bd3b-cd286d7e5826/2378048");
    await page.waitForTimeout(5000);
    let elements = $('div.e6fq7ah8').toArray();
    const firstTicketLink = elements[0].getProperty('parentNode');
    firstTicketLink.click();

}();

// e6fq7ah8 css-19fqo0n eh8fd9012