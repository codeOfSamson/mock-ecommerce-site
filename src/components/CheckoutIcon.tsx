"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react"; // Icon from lucide-react

interface CartIconProps {
  totalItems: number;
  totalPrice: number;
}

export default function CartIcon({ totalItems, totalPrice }: CartIconProps) {
  return (
    <Link href="/cart" className="relative flex items-center space-x-2 p-2">
      <ShoppingCart className="w-6 h-6 text-white" />

      <div className="text-sm text-white">
        <p className="font-semibold">{totalItems} items</p>
        <p className="text-gray-300">${totalPrice.toFixed(2)}</p>
      </div>

      {/* Badge for Items Count */}
      {/* {totalItems > 0 && (
        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      )} */}
    </Link>
  );
}
