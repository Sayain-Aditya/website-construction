'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  "/Images/1.webp",
  "/Images/2.webp",
  "/Images/3.webp",
  "/Images/4.webp",
  "/Images/5.webp",
  "/Images/6.webp",
  "/Images/7.webp",
  "/Images/8.webp",
];

export default function GallerySlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 3500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[16/9]">
      {slides.map((src, i) => (
        <div key={src} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === current ? "opacity-100" : "opacity-0"}`}>
          <Image src={src} alt={`Project ${i + 1}`} fill sizes="100vw" className="object-cover" />
        </div>
      ))}

      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all">&#8592;</button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all">&#8594;</button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white w-5" : "bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}
