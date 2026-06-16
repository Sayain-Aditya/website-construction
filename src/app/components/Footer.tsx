import Link from "next/link";
import { brand, navLinks, services } from "../site-data";

export function Footer() {
  return (
    <footer className="bg-[#171412] px-4 py-12 text-white sm:px-6 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="text-lg font-black uppercase">{brand.name}</div>
          <p className="mt-4 text-sm leading-7 text-[#b9aa9a]">
            Your trusted partner in building dreams with planning, design, estimation, plotting,
            and construction execution.
          </p>
        </div>
        <div>
          <div className="text-xs font-black uppercase text-[#ff6a18]">Our Services</div>
          <div className="mt-4 grid gap-3 text-sm text-[#d8cbbb] grid-cols-1 sm:grid-cols-2">
            {services.slice(0, 5).map((service) => (
              <span key={service.title}>{service.title}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs font-black uppercase text-[#ff6a18]">Address Location</div>
          <p className="mt-4 text-sm leading-7 text-[#d8cbbb]">{brand.address}</p>
          <p className="mt-3 text-sm font-black">{brand.phone}</p>
          <p className="mt-1 text-sm">{brand.email}</p>
        </div>
        <div>
          <div className="text-xs font-black uppercase text-[#ff6a18]">Quick Links</div>
          <div className="mt-4 grid gap-3 text-sm text-[#d8cbbb]">
            {navLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-5 text-xs text-[#8f8173]">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Amethiya Construction &amp; Developer. All rights reserved.</span>
          <span>Developed by <span className="text-[#ff6a18] font-bold">Aditya Singh</span></span>
        </div>
      </div>
    </footer>
  );
}
