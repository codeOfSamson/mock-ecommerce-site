import { chromium } from "playwright-core";
import chromiumAWS from "@sparticuz/chromium";

export default async function scrapeWebsite() {
  try {
    const isVercel = process.env.VERCEL === "1";

    console.log("🚀 Running on Vercel?", isVercel);

    // Ensure Chromium is properly loaded
    const executablePath = isVercel ? await chromiumAWS.executablePath() : undefined;
    console.log("🛠 Chromium executable path:", executablePath);

    const browser = await chromium.launch({
      headless: true,
      executablePath: executablePath,
    });

    console.log("✅ Browser launched successfully!");

    // Double-check if the browser instance is valid
    if (!browser) {
      throw new Error("Failed to launch Chromium browser.");
    }

    const page = await browser.newPage();

    await page.goto("https://mock-ecommerce-site-alpha.vercel.app/", {
      waitUntil: "domcontentloaded",
      timeout: 60000, // Increase timeout for reliability
    });

    console.log("🌍 Page loaded successfully!");

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

    console.log("📊 Scraping successful!");

    await browser.close();
    console.log("🔒 Browser closed safely.");

    return Response.json({ elements });
  } catch (error) {
    console.error("❌ Playwright Error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
