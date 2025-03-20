"use client"; 
import Link from "next/link";
import Carousel from "../components/Carousel"

export default function Home() {
  return (
    <div className="container mx-auto p-4">
  
      <div className="w-full max-w-4xl h-4/5 flex items-center justify-center">
        <Carousel />
      </div>
    </div>
  
  );
}
