const puppeteer = require('puppeteer');

const base_dir = './files/pdf/';

module.exports = async function(url, filename, fileformat='A4'){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle2'})
    await page.pdf({path: base_dir + filename + '.pdf', format: fileformat});

    await browser.close();
}