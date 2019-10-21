const puppeteer = require('puppeteer');

const BASEREDDIT_URL = 'https://old.reddit.com/r';
let REDDIT_URL = (sub_url) => BASEREDDIT_URL + `/${sub_url}/`;
const self = {
    browser: null,
    pages: null,

    initialize: async(custom_url) => {
        self.browser = await puppeteer.launch({
            headless: false
        });
        self.page = await self.browser.newPage();

        /*
            Go to the subreddit post 
            networkidle0 - espera até não ter requests extras por mais de 500 milisegundos, ou seja,
            espera até a pagina carregar e não ter mais mais requisiçoes pendentes
        */
        await self.page.goto(REDDIT_URL(custom_url), {waitUntil: 'networkidle0'});
    },

    getResults: async(num) => {

        let elements = await self.page.$$('#siteTable > div[class*="thing"]');

        for(let element of elements){
            let title = await element.$eval(('p[class="title"]'), node => node.innerText.trim());

            console.log(title);
        }
    }
}

module.exports = self;