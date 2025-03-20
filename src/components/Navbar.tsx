"use client";  
import Link from "next/link";
import CheckoutIcon from "./CheckoutIcon"


export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white">
    <h1 className="text-center mb-4">My E-Commerce Site</h1>
    {/* Center - Menu Links */}
    <div className="md:flex justify-center space-x-9 text-sm font-medium">
      <Link href="/" className="hover:text-red-500 hover:underline">Home</Link>
      <Link href="/collection/all" className="hover:text-red-500 hover:underline">Collections</Link>
      <Link href="/product" className="text-red-500 hover:text-red-700 hover:underline">A/B Testing Report</Link>
    </div>
    <div>
      <CheckoutIcon totalItems={2} totalPrice={89} />
    </div>
  </nav>
  );
}
