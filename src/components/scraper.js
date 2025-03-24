import { chromium } from "playwright-core";
import chromiumAWS from "@sparticuz/chromium";

export default async function scrapeWebsite() {
  const isVercel = process.env.VERCEL === "1"; 
  const browser = await chromium.launch({
    headless: true,
    executablePath: isVercel ? await chromiumAWS.executablePath() : undefined, 
  });

  const page = await browser.newPage();
  await page.goto("https://mock-ecommerce-site-alpha.vercel.app/");

  const elements = await page.evaluate(() => {
    const abTestElements = [];

    const headers = document.querySelectorAll("h1, h2, h3, p, div");
    const buttons = document.querySelectorAll("button, .cta");

    headers.forEach((header) =>
      abTestElements.push({ type: "header", content: header.innerText })
    );
    buttons.forEach((button) =>
      abTestElements.push({ type: "button", content: button.innerText })
    );

    return [...new Map(abTestElements.map((item) => [JSON.stringify(item), item])).values()];
  });

  await browser.close();
  return elements;
}
