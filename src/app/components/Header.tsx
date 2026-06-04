'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { brand, navLinks } from "../site-data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed left-0 right-0 top-0 z-30 px-4 py-4 sm:px-6 lg:px-12 transition-all duration-500 ${scrolled || menuOpen ? "bg-[#f4eddf]/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/Images/Logo.webp" alt="Amethiya Logo" width={48} height={48} className="rounded-full" />
          <span>
            <span className="block text-xs font-black uppercase tracking-[0.14em]">Amethiya</span>
            <span className="mt-1 block h-1 w-24 bg-[#c85a21]" />
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-bold lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#c85a21] transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={`tel:${brand.phone.replaceAll(" ", "")}`} className="hidden rounded-full bg-[#171412] px-5 py-3 text-xs font-black text-white sm:inline-flex">
            {brand.phone}
          </a>
          <Link href="/contact" className="hidden rounded-full bg-[#c85a21] px-5 py-3 text-xs font-black text-white sm:inline-flex">
            Contact Us
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1.5 p-2 lg:hidden" aria-label="Toggle menu">
            <span className={`block h-0.5 w-6 bg-[#211c18] transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#211c18] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#211c18] transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col gap-4 bg-[#f4eddf]/95 backdrop-blur-md px-6 py-6 mt-2 rounded-xl shadow-lg">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-sm font-bold hover:text-[#c85a21] transition-colors">
              {link.label}
            </Link>
          ))}
          <a href={`tel:${brand.phone.replaceAll(" ", "")}`} className="mt-2 rounded-full bg-[#171412] px-5 py-3 text-xs font-black text-white text-center">
            {brand.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
