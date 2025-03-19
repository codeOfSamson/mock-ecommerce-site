"use client"; 
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome to Our Store</h1>
      <p>Browse our latest products.</p>
      <Link href="/collection/all">
        View All Products
      </Link>
    </div>
  );
}
