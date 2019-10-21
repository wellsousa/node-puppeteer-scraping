const redditScraping = require('./reddit-scraping');


(async ()=> {
    try{

        await redditScraping.initialize('node');

        let results = await redditScraping.getResults(10);

        //await browser.close();

    }catch(e){
        console.log('our error', e);
    }
})();



