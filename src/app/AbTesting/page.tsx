"use client";
import { useEffect, useState } from "react";

export default function AbTesting() {
  const [testData, setTestData] = useState<any[]>([]);
  const [scrapedElements, setScrapedElements] = useState<any[]>([]);

  useEffect(() => {
 
    async function fetchAbTestDataAnalysis() {
      const response = await fetch("/api/scrape"); 
      const data = await response.json();
      console.log(data)
      const {mockAbTestData, scrapedHomePageElements} = data
      setTestData(mockAbTestData.ab_test_suggestions);
      setScrapedElements(scrapedHomePageElements);
    }
    fetchAbTestDataAnalysis();

  }, []);

  return (
    <div className="container mx-auto p-6">
      
      <h1 className="text-3xl font-semibold mb-6 mt-6">A/B Testing Suggestions</h1>
      <div className="space-y-6">
        {testData.length === 0 ? (
          <p>Loading A/B test suggestions...</p>
        ) : (
          testData.map((test, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{test.element}</h2>
              <p className="text-gray-600">
                <strong>Current:</strong> {Array.isArray(test.current) ? test.current.join(" / ") : test.current}
              </p>
              <p className="text-gray-600">
                <strong>Variations:</strong> {test.variations.join(" / ")}
              </p>
              <p className="text-gray-500 mt-2">{test.reason}</p>
            </div>
          ))
        )}
      </div>
        <h1 className="text-3xl font-semibold mb-6">Scraped Elements</h1>
      <div className="space-y-6">
        {scrapedElements.length === 0 ? (
          <p>Loading Scraped Elements</p>
        ) : (
          scrapedElements.map((element, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md">
              
              <p className="text-xl font-semibold">{element.type}</p>
             {/* <p className="text-gray-600"> */}
                {/* <strong>Current:</strong> {Array.isArray(test.current) ? test.current.join(" / ") : test.current}
              </p>
              <p className="text-gray-600">
                <strong>Variations:</strong> {test.variations.join(" / ")}
              </p>
              <p className="text-gray-500 mt-2">{test.reason}</p> */}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
