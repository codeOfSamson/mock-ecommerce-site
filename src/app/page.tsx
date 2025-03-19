"use client"; 
import Link from "next/link";
import Carousel from "../components/Carousel"

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome to Our Store</h1>
    <Carousel />
    
    </div>
  );
}
