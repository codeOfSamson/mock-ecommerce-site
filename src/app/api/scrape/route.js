import { NextResponse } from "next/server";
import scrapeWebsite from "../../../components/scraper"
//import OpenAI from "openai";

export async function GET() {
  
    const scrapedHomePageElements = await scrapeWebsite()

    const mockAbTestData = {
        "ab_test_suggestions": [
          {
            "element": "Header",
            "current": "Timeless Style",
            "variations": ["Effortless Elegance", "Classic & Modern"],
            "reason": "Testing different wording to see which resonates more with users.",
            "html": "<h1>Timeless Style</h1>"
          },
          {
            "element": "Subheader",
            "current": "We are the opposite of fast fashion. We take a thoughtful approach to the entire lifecycle of our products.",
            "variations": [
              "Sustainable fashion that lasts a lifetime.",
              "Quality fashion, made responsibly."
            ],
            "reason": "Testing if shorter, more direct messaging improves conversions.",
            "html": "<h2>We are the opposite of fast fashion...</h2>"
          },
          {
            "element": "Call to Action Buttons",
            "current": ["Shop all", "Shop new"],
            "variations": [
              ["Browse Collection", "Discover Now"],
              ["Explore Styles", "View New Arrivals"]
            ],
            "reason": "Testing if different button labels encourage more clicks.",
            "html": "<div><button>Shop all</button><button>Shop new</button></div>"
          },
          {
            "element": "Shop All Button",
            "current": "Shop all",
            "variations": ["Browse Collection", "See All"],
            "reason": "Testing if alternative wording increases engagement.",
            "html": "<button>Shop all</button>"
          },
          {
            "element": "Shop New Button",
            "current": "Shop new",
            "variations": ["New Arrivals", "Fresh Styles"],
            "reason": "Experimenting with different phrases to improve conversion rates.",
            "html": "<button>Shop new</button>"
          }
        ]
      }
      

  return NextResponse.json({scrapedHomePageElements, mockAbTestData});
}

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, 
// });

// async function analyzeSentiment(text) {
//   try {
//     const response = await openai.completions.create({
//       model: "gpt-3.5-turbo", 
//       prompt: `Analyze this web element: "${text}".  Provide suggestions for changes that would be suitable for A/B testing`,
//       max_tokens: 5,
//       temperature: 0
//     });
//     return response.choices[0].text.trim();
//   } catch (error) {
//     console.error("AI analysis error:", error);
//     return "unknown";
//   }
// }