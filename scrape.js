import puppeteer from 'puppeteer';

export const scrape = async (url) => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(url);

  const result = await page.evaluate(() => {
    let title = document.querySelector('.product-card-top__title').innerText;
    let price = document.querySelector('.product-buy__price').innerText;
    let date = Date.now();
    return {
        date,
        title,
        price
    }
  });

  browser.close();
  return result;
};
