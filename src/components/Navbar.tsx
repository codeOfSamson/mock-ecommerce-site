"use client";  
import Link from "next/link";
import CheckoutIcon from "./CheckoutIcon"


export default function Navbar() {
  return (

  
    <nav className=" flex p-4 bg-gray-800 text-white justify-between ">
    <h3 className=" flex items-center">Mock eCommerce Site</h3>
    <div className="flex justify-center items-center space-x-9 text-sm font-medium">
      <Link href="/" className="hover:text-red-500 hover:underline">Home</Link>
      <Link href="/collection/all" className="hover:text-red-500 hover:underline">Collections</Link>
      <Link href="/AbTesting" className="text-red-500 hover:text-red-700 hover:underline">A/B Testing Report</Link>
    </div>
    <div className="flex justify-end ">
      <CheckoutIcon totalItems={2} totalPrice={89} />
    </div>
  </nav>
  );
}
