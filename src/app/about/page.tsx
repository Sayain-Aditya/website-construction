import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Label } from "../components/Label";
import { PageHero } from "../components/PageHero";
import { AnimatedStats, AnimatedStrengths } from "../components/AnimatedMetrics";
import { Reveal } from "../components/PageTransition";
import { brand, images } from "../site-data";

const strengths = [
  { label: "Vision-Driven Approach", value: 100 },
  { label: "Expert Team of Professionals", value: 100 },
  { label: "Use of High-Quality Materials", value: 100 },
  { label: "On-Time Delivery", value: 100 },
  { label: "Transparent & Honest Communication", value: 100 },
  { label: "Affordable Yet Reliable", value: 100 },
  { label: "100% Client Satisfaction", value: 100 },
];

const stats = [
  { value: 500, suffix: "K+", label: "Satisfied Clients" },
  { value: 90, suffix: "+", label: "Awards Achieve" },
  { value: 15, suffix: "M+", label: "Active Users" },
  { value: 10, suffix: "K+", label: "Complete Tasks" },
];

const work = [
  "VASTU-Compliant Building Planning",
  "Architectural & 3D Designing",
  "Accurate Estimation & Budgeting",
  "Residential & Commercial Construction",
  "Plotting & Layout Development",
  "Turnkey Project Execution",
  "Custom Interior & Exterior Work",
];

export default function AboutPage() {
  return (
    <main className="bg-[#f4eddf] text-[#211c18]">
      <Header />
      <PageHero
        title="Building Dreams with Trust, Strength & Innovation"
        text={`Welcome to ${brand.name}, where your vision meets our expertise to create timeless structures.`}
        compact
      />

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-12">
        <Reveal className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div className="order-2 lg:order-1 group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl sm:aspect-[1.2]">
            <Image src={images.about} alt="About Amethiya Construction" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0" />
            <Image src="/Images/1.webp" alt="About Amethiya Construction 2" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100" />
          </div>
          <div className="order-1 lg:order-2">
            <Label>About Us</Label>
            <h2 className="mt-4 text-2xl font-black uppercase text-[#bd4f1f] sm:text-4xl">About Us</h2>
            <p className="mt-4 text-sm leading-8 text-[#655c53] sm:mt-5">
              Based in Gorakhpur, Uttar Pradesh, we are a dynamic construction company offering
              end-to-end solutions for residential, commercial, and layout development projects.
            </p>
            <p className="mt-4 text-sm leading-8 text-[#655c53]">
              With years of industry experience and a team of skilled professionals, we bring a
              unique blend of VASTU-based planning, modern architectural design, and robust
              construction techniques to every project.
            </p>
            <div className="mt-6 grid gap-3 grid-cols-3 sm:mt-8 sm:gap-4">
              {["Vishal Singh", "Award Winning", "Wide Services"].map((item, index) => (
                <div key={item} className="bg-[#fff8ee] p-3 sm:p-5">
                  <div className="text-xl font-black text-[#d86120] sm:text-2xl">0{index + 1}</div>
                  <h3 className="mt-2 text-xs font-black sm:mt-3 sm:text-sm">{item}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#70675e] hidden sm:block">
                    {index === 0 ? "Chairman & Founder" : "Trusted construction expertise"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden px-4 pb-12 sm:px-6 sm:pb-16 lg:px-12">
        <div className="brush-mark absolute right-6 top-0 h-[420px] w-[520px] opacity-45" />
        <Reveal className="relative mx-auto grid max-w-7xl gap-4 sm:gap-5 sm:grid-cols-2">
          {[
            ["Our Expert Team", "Together, we build trust, relationships, and futures that last."],
            ["Strong Materials", "Your dream home deserves a foundation built on strength, not shortcuts."],
          ].map(([title, text]) => (
            <article key={title} className="border-t border-[#d5c7b2] bg-[#fff8ee] p-5 sm:p-7">
              <h3 className="text-xl font-black sm:text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#655c53]">{text}</p>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="bg-[#211e1c] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-12">
        <Reveal className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div>
            <Label dark>Why choose us</Label>
            <h2 className="mt-4 text-2xl font-black uppercase text-[#ff6a18] sm:text-4xl">
              How We Became Best Among Others?
            </h2>
            <p className="mt-4 text-sm leading-8 text-[#d8cbbb] sm:mt-6">
              At {brand.name}, our reputation is built on a foundation of trust, transparency, and
              tireless commitment to quality.
            </p>
          </div>
          <AnimatedStrengths strengths={strengths} />
        </Reveal>
        <AnimatedStats stats={stats} />
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
        <Reveal className="mx-auto max-w-7xl">
          <Label>What We Do</Label>
          <h2 className="mt-4 text-2xl font-black uppercase sm:text-4xl">What We Do</h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-[#655c53] sm:mt-5">
            Every project we undertake is driven by quality, fueled by innovation, and completed with integrity.
          </p>
          <div className="mt-8 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
            {work.map((item) => (
              <div key={item} className="bg-[#fff8ee] p-4 sm:p-5">
                <h3 className="text-base font-black sm:text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
