const puppeteer = require('puppeteer');

const [, , url, outPath, widthArg, heightArg, fullPageArg] = process.argv;

if (!url || !outPath) {
  console.error('Usage: node screenshot.js <url> <outPath> [width] [height] [fullPage=true|false]');
  process.exit(1);
}

const width = parseInt(widthArg || '1440', 10);
const height = parseInt(heightArg || '900', 10);
const fullPage = fullPageArg !== 'false';

(async () => {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.setViewport({ width, height });
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    await page.screenshot({ path: outPath, fullPage });
    console.log(`Saved screenshot to ${outPath}`);
  } finally {
    await browser.close();
  }
})();
