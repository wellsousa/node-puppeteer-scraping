const puppeteer = require('puppeteer');
const generate_pdf = require('./src/funcs/generate-pdf');

(async function main(){
    try{

        const browser = await puppeteer.launch({ headless: false});
        const page = await browser.newPage();

        let movieUrl = 'https://www.imdb.com/title/tt0111161/?ref_=nv_sr_1?ref_=nv_sr_1';

        page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0');

        await page.goto(movieUrl, {waitUntil: 'networkidle2'});

        let data = await page.evaluate(() => {
            let title = document.querySelector('div[class="title_wrapper"] > h1').innerText;
            let rating = document.querySelector('span[itemprop="ratingValue"]').innerText;
            let ratingCount = document.querySelector('span[itemprop="ratingCount"]').innerText;

            return {
                title,
                rating,
                ratingCount
            }
        });

        console.log(data);

        //await browser.close();

    }catch(e){
        console.log('our error', e);
    }
})();



