"use client"; 

import { useState } from "react";
import { products } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

export default function CollectionPage() {
  const categories = ["All", ...new Set(products.map((p) => p.collection))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter((p) => p.collection === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Browse Collections</h1>

      <div className="mb-6">
        <label htmlFor="category" className="block text-lg font-medium mb-2">Select a Collection:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded w-full max-w-xs text-black"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Link key={index} href={`/product/${index}`} className="block border p-4 rounded-lg shadow-md hover:shadow-lg">
              <Image 
                src={`/images/${product.image}`} 
                alt={product.name} 
                width={300} 
                height={300} 
                className="w-full h-auto object-cover rounded"
              />
              <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">No products found in this collection.</p>
        )}
      </div>
    </div>
  );
}
