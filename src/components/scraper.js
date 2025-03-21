import { chromium } from 'playwright';

export default async function scrapeWebsite() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/'); 

  const elements = await page.evaluate(() => {
    const abTestElements = [];
    
    const headers = document.querySelectorAll('h1, h2, h3, p, div');
    const buttons = document.querySelectorAll('button, .cta');
    
    headers.forEach(header => abTestElements.push({ type: 'header', content: header.innerText }));
    buttons.forEach(button => abTestElements.push({ type: 'button', content: button.innerText }));

    return abTestElements;
  });

  await browser.close();
  console.log(123, elements);

  return elements;
}
