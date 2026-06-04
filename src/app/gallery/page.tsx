'use client';

import Image from "next/image";
import { useRef } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/PageTransition";
import { Label } from "../components/Label";

const galleryImages = [
  { src: "/Images/1.webp", title: "Residential Construction", text: "Strong structure and thoughtful planning for modern family living." },
  { src: "/Images/2.webp", title: "Villa Development", text: "Elegant construction work shaped around comfort and long-term value." },
  { src: "/Images/3.webp", title: "Site Planning", text: "Organized project execution from layout to construction progress." },
  { src: "/Images/4.webp", title: "Commercial Project", text: "Reliable construction solutions for business and commercial spaces." },
  { src: "/Images/5.webp", title: "Interior Work", text: "Functional and attractive interior details tailored to client needs." },
  { src: "/Images/6.webp", title: "Exterior Development", text: "Durable exterior finishes with a clean, professional appearance." },
  { src: "/Images/7.webp", title: "Layout Development", text: "Smart plotting and land-use planning for better space utilization." },
  { src: "/Images/8.webp", title: "Turnkey Execution", text: "Complete project handling from planning to final delivery." },
];

const videos = [
  { src: "/motion.mp4", title: "Construction in Progress", text: "Watch our team bring a project to life from ground up." },
  { src: "/motion2.mp4", title: "Project Execution", text: "Precision and craftsmanship at every stage of development." },
];

function VideoCard({ src, title, text }: { src: string; title: string; text: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="group bg-[#2a2522] rounded-xl overflow-hidden cursor-pointer"
      onMouseEnter={() => ref.current?.play()}
      onMouseLeave={() => { if (ref.current) { ref.current.pause(); ref.current.currentTime = 0; } }}
    >
      <div className="relative aspect-video overflow-hidden">
        <video ref={ref} src={src} muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/10 transition-all duration-500">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-black text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-[#cfc0af]">{text}</p>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <main className="bg-[#f4eddf] text-[#211c18]">
      <Header />
      <PageHero
        title="Gallery"
        text="Explore construction, development, interiors, exteriors, and layout work from Amethiya Construction & Developer."
        compact
      />

      {/* Images Section */}
      <section className="bg-[#211e1c] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-12">
        <Reveal className="mx-auto max-w-7xl">
          <Label dark>Our Work</Label>
          <h2 className="mt-4 text-2xl font-black uppercase text-[#ff6a18] sm:text-4xl">Project Gallery</h2>
          <div className="mt-8 grid gap-3 grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {galleryImages.map((item) => (
              <article key={item.src} className="group bg-[#2a2522] rounded-xl overflow-hidden">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211e1c]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-4">
                  <h2 className="text-sm font-black">{item.title}</h2>
                  <p className="mt-1 text-xs leading-5 text-[#cfc0af]">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Videos Section */}
      <section className="bg-[#171412] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-12">
        <Reveal className="mx-auto max-w-7xl">
          <Label dark>In Motion</Label>
          <h2 className="mt-4 text-2xl font-black uppercase text-[#ff6a18] sm:text-4xl">Hover to Play</h2>
          <p className="mt-4 text-sm text-[#cfc0af]">Hover over the videos below to watch our construction projects come alive.</p>
          <div className="mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2">
            {videos.map((v) => (
              <VideoCard key={v.src} {...v} />
            ))}
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
