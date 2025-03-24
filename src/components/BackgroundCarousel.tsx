"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/00001-845072493.png",
  "/images/00000-845072492.png",
  "/images/00000-845072492.png",
];

export default function BackgroundCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`Background ${i}`}
          fill
          priority
          style={{ objectFit: "cover" }} 
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
