"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import Image from "next/image";
import { useCart } from "../../context/CartContext"

export default function ProductPage() {
  const params = useParams();
  const product = products[parseInt(params.id as string)];
  const { totalPrice, setTotalPrice, itemsCount, setItemsCount } = useCart();

  if (!product) {
    return <div className="p-4 text-red-500">Product not found</div>;
  }

  const addToCart = () => {
    setItemsCount((prev) => prev + 1);
    setTotalPrice((prev) => prev + product.price);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto border rounded-lg p-6 shadow-lg">
        <Image
          src={`/images/${product.image}`}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-auto object-cover rounded"
        />
        <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
        <p className="text-lg text-gray-600">${product.price.toFixed(2)}</p>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Available Colors:</h2>
          <div className="flex gap-2 mt-2">
            {product.color.map((hex, index) => (
              <span key={index} className="w-6 h-6 rounded-full border" style={{ backgroundColor: hex }}></span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Available Sizes:</h2>
          <p>{product.size.join(", ")}</p>
        </div>

        <button
          onClick={addToCart}
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
