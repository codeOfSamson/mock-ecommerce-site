"use client";
import BackgroundCarousel from "@/components/BackgroundCarousel";

export default function Home() {
  return (
    <div className=" relative w-full h-screen ">
      <BackgroundCarousel />

      <div className="relative flex flex-col justify-center items-center text-center h-full text-white px-6">
        <h1 className="text-5xl font-bold mb-4">Timeless Style</h1>
        <p className="max-w-2xl text-lg mb-6">
          We are the opposite of fast fashion. We take a thoughtful approach to
          the entire lifecycle of our products.
        </p>
        <div className="flex space-x-4">
          <button className="border-2 border-white px-6 py-3 rounded-full">
            Shop all
          </button>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full">
            Shop new
          </button>
        </div>
      </div>
    </div>
  );
}
