const puppeteer = require('puppeteer');
const generatePdf = require('./src/funcs/generate-pdf');

const file = generatePdf('https://learnscraping.com/nodejs-web-scraping-with-puppeteer/#advgb-toc-86a30383-a657-46c3-909e-a58073cedfd5', 'The Definitive Guide to Web Scraping with NodeJs & Pupeteer'); 