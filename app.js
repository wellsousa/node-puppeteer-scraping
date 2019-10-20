const puppeteer = require('puppeteer');
const generate_pdf = require('./src/funcs/generate-pdf');

(async function main(){
    try{
        const browser = await puppeteer.launch({ headless: false});
        const page = await browser.newPage();

        page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0');

        await page.goto('https://snapcraft.io/');

        await page.waitForSelector('.p-navigation__link');

        const links = await page.$$('.p-navigation__link');

        console.log(links.length);

        //await browser.close();
    }catch(e){
        console.log('our error', e);
    }
})();



