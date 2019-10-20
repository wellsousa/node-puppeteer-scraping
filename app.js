const puppeteer = require('puppeteer');
const generate_pdf = require('./src/funcs/generate-pdf');

const pdf = generate_pdf('https://github.com/GoogleChrome/puppeteer', 'puppeteer-doc');
      
    generate_pdf('https://github.com/GoogleChrome/puppeteer/blob/v1.20.0/docs/api.md','puppeteer-api-doc');
