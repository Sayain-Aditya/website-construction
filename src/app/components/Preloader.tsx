'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [opacity, setOpacity] = useState(1);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Start fade out after 1.8s
    const fadeTimer = setTimeout(() => setOpacity(0), 1800);
    // Fully remove after fade completes (700ms)
    const hideTimer = setTimeout(() => setHidden(true), 2500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      style={{ opacity, transition: "opacity 700ms ease" }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#171412]"
    >
      <Image
        src="/Images/Logo.webp"
        alt="Amethiya"
        width={100}
        height={100}
        className="rounded-full animate-pulse"
      />
      <div className="mt-6 h-1 w-48 bg-[#2a2522] rounded-full overflow-hidden">
        <div className="h-full bg-[#c85a21] rounded-full animate-[loading_1.8s_ease-in-out_forwards]" />
      </div>
      <style>{`@keyframes loading { from { width: 0% } to { width: 100% } }`}</style>
    </div>
  );
}
