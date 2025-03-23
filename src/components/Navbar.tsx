"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CheckoutIcon from "./CheckoutIcon";
import { useCart } from "@/app/context/CartContext";
import { products } from "@/data/products";

export default function Navbar() {
  const { totalPrice, itemsCount } = useCart();
  const pathname = usePathname();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.length > 0) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleSelectProduct = (productName: string) => {
    setSearchQuery("");
    setFilteredProducts([]);
    router.push(`/product/${encodeURIComponent(productName)}`);
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-gray-800 text-white flex justify-between items-center shadow-md z-50">
      <h3 className="flex items-center">Mock eCommerce Site</h3>

      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          onKeyDown={(e) => {
            if (e.key === "Enter" && filteredProducts.length > 0) {
              handleSelectProduct(filteredProducts[0].name);
            }
          }}
          className="border p-2 rounded-md w-64 text-black"
        />

        {filteredProducts.length > 0 && (
          <ul className="absolute left-0 mt-1 w-64 bg-white text-black border rounded-md shadow-md">
            {filteredProducts.map((product, i) => (
              <li
                key={i}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelectProduct(product.name)}
              >
                {product.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex justify-center items-center space-x-9 text-sm font-medium">
        <Link 
          href="/" 
          className={`hover:text-red-500 hover:underline ${pathname === "/" ? "text-red-500 underline" : ""}`}
        >
          Home
        </Link>
        <Link 
          href="/collections/all" 
          className={`hover:text-red-500 hover:underline ${pathname === "/collections/all" ? "text-red-500 underline" : ""}`}
        >
          Collections
        </Link>
        <Link 
          href="/AbTesting" 
          className={`hover:text-red-500 hover:underline ${pathname === "/AbTesting" ? "text-red-500 underline" : ""}`}
        >
          A/B Testing Report
        </Link>
      </div>

      <div className="flex justify-end cursor-pointer">
        <CheckoutIcon totalItems={itemsCount} totalPrice={totalPrice} />
      </div>
    </nav>
  );
}
