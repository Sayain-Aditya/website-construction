'use client';

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-28 right-4 z-50 sm:bottom-24 sm:right-6 bg-[#c85a21] hover:bg-[#a84819] text-white rounded-full w-11 h-11 flex items-center justify-center shadow-lg transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
