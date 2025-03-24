# Mock eCommerce Site

## **Overview**

This is a mock eCommerce site built with **Next.js**, **Tailwind CSS**, and a **Cart System** using React. The site includes:

- A product collection page with category filtering
- An simplified interactive shopping cart that tracks items and total price
- A search bar to search products by name
- Product page to view more details of a particular product i.e available colors and sizes and add to cart button.
- An A/B Testing Report section analyzing site's elements and utilizing AI to suggest A/B testing alternatives.
- A backend API to scrape and analyze website data
- Fixed, dynamic navbar with active link styling

---

## **Tech Stack**

- **Frontend**: React, Next.js, Tailwind CSS
- **State Management**: React Context API
- **Backend**: Node.js, Express
- **Web Scraping**: Playwright

---

## **Installation & Setup**

### **1. Clone the repository:**

git clone https://github.com/yourusername/mock-ecommerce.git
cd mock-ecommerce

### **2. Install Dependencies:**

npm install

### **3. Run the Dev server:**

npm run dev
The site will be available at http://localhost:3000

### **API Endpoints:**

1. Scrape Website Data

Endpoint: /api/scrape
Method: GET
Response:
{
"ab_test_suggestions": [
{
"element": "Header",
"current": "Timeless Style",
"variations": ["Effortless Elegance", "Classic & Modern"],
"reason": "Testing different wording to see which resonates more with users.",
"html": "<h1>Timeless Style</h1>"
}
]
}
(For this section you will find, I hardcoded an API response becasue I didnt have an account for OpenAI and didnt want to be charged. I still left the openAI code in the project commented out, so it could be easily implementd in the future. For this mock projject I took my site's scraped data and asked chatGPT to give me a mock API response analyzing the data. )

### **Contributors**

Sam Flavin – Developer
