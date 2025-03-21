import { chromium } from 'playwright';

export default async function scrapeWebsite() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://mock-ecommerce-site-alpha.vercel.app/'); 

  const elements = await page.evaluate(() => {
    const abTestElements = [];
    
    const headers = document.querySelectorAll('h1, h2, h3, p, div');
    const buttons = document.querySelectorAll('button, .cta');
    
    headers.forEach(header => abTestElements.push({ type: 'header', content: header.innerText }));
    buttons.forEach(button => abTestElements.push({ type: 'button', content: button.innerText }));

    const uniqueData = [...new Map(abTestElements.map(item => [JSON.stringify(item), item])).values()];


    return uniqueData;
  });

  await browser.close();

  return elements;
}
