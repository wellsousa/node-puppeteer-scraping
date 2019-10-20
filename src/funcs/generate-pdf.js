/*
    //Exemplo de utilização

    const pdf = generate_pdf('https://github.com/GoogleChrome/puppeteer', 'puppeteer-doc');  
    generate_pdf('https://github.com/GoogleChrome/puppeteer/blob/v1.20.0/docs/api.md','puppeteer-api-doc');

*/

const puppeteer = require('puppeteer');

const base_dir = './files/pdf/';

module.exports = async function(url, filename, fileformat='A4'){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle2'})
    await page.pdf({path: base_dir + filename + '.pdf', format: fileformat});

    await browser.close();
}