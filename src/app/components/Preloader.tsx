'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#171412] transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
      <Image src="/Images/Logo.webp" alt="Amethiya" width={100} height={100} className="rounded-full animate-pulse" />
      <div className="mt-6 h-1 w-48 bg-[#2a2522] rounded-full overflow-hidden">
        <div className="h-full bg-[#c85a21] rounded-full animate-[loading_2s_ease-in-out_forwards]" />
      </div>
      <style>{`@keyframes loading { from { width: 0% } to { width: 100% } }`}</style>
    </div>
  );
}
