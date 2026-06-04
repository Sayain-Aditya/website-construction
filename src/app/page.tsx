import Image from "next/image";
import Link from "next/link";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Label } from "./components/Label";
import { Reveal } from "./components/PageTransition";
import { brand, images, projects, services } from "./site-data";
import InfiniteScroll from "./components/InfiniteScroll";
import Testimonials from "./components/Testimonials";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-[#fff8ee] p-4 sm:p-5">
      <div className="text-2xl sm:text-3xl font-black text-[#d86120]">{value}</div>
      <div className="mt-1 text-xs font-black uppercase text-[#756b61]">{label}</div>
    </div>
  );
}

function Photo({ src, alt, className }: { src: string; alt: string; className: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[#f4eddf] text-[#211c18]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-12 lg:pt-36 lg:pb-20">
        <div className="brush-mark absolute right-0 top-0 h-[520px] w-[660px]" />
        <div className="absolute right-0 top-32 h-[450px] w-[60%] overflow-hidden hidden lg:block">
          <video className="h-full w-full object-contain object-center mix-blend-multiply" autoPlay muted loop playsInline aria-label="Construction motion preview">
            <source src="/motion3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#f4eddf] via-[#f4eddf]/45 to-[#f4eddf]/10" />
          <div className="absolute inset-0 bg-[#c85a21]/10" />
        </div>

        <Reveal className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <Label>Construction & Development</Label>
            <h1 className="mt-4 text-3xl font-black uppercase leading-tight text-[#bd4f1f] sm:text-4xl md:text-5xl lg:text-7xl">
              Your Trusted Partner for Construction & Development
            </h1>
            <p className="mt-4 text-base font-bold leading-7 text-[#514941] sm:mt-6 sm:text-lg sm:leading-8">
              Your Trusted Partner in Building Dreams!
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/services" className="rounded-full bg-[#171412] px-5 py-3 text-xs font-black text-white sm:px-6 sm:py-4">
                View Services
              </Link>
              <Link href="/contact" className="rounded-full bg-[#c85a21] px-5 py-3 text-xs font-black text-white sm:px-6 sm:py-4">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 sm:mt-12 sm:max-w-2xl sm:gap-4">
            <Stat value="25K+" label="Clients" />
            <Stat value="4.9" label="Reviews" />
            <Stat value="Wide" label="Services" />
          </div>
        </Reveal>
      </section>

      {/* About */}
      <section id="about" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
        <Reveal className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div>
            <Label>About Us</Label>
            <h2 className="mt-4 text-2xl font-black uppercase sm:text-4xl">Building Your Visions Creating Reality</h2>
            <p className="mt-4 text-sm leading-7 text-[#655c53] sm:mt-6">
              At {brand.name}, we specialize in delivering end-to-end construction solutions with
              excellence, integrity, and innovation. Based in Gorakhpur, we bring your vision to
              life through Vastu-compliant planning, expert designing, precise estimation,
              reliable plotting, and execution of all types of construction projects.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 sm:mt-7 sm:gap-5">
              <Link href="/about" className="rounded-full border border-[#c8bba7] px-5 py-3 text-xs font-black">
                About Us
              </Link>
              <div>
                <div className="text-sm font-black">Vishal Singh</div>
                <div className="text-xs uppercase tracking-[0.14em] text-[#8b6d58]">Chairman & Founder</div>
              </div>
            </div>
          </div>
          <Photo src={images.about} alt="Construction project" className="hidden lg:block aspect-[1.35] w-full" />
        </Reveal>
      </section>

      {/* Cards */}
      <section className="relative overflow-hidden px-4 pb-12 sm:px-6 sm:pb-16 lg:px-12">
        <div className="brush-mark absolute right-6 top-0 h-[420px] w-[520px] opacity-45" />
        <Reveal className="relative mx-auto grid max-w-7xl gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-3">
          {[
            ["Our Expert Team", "Together, we don't just construct buildings - we build trust, relationships, and futures."],
            ["Strong Materials", "Your dream home deserves a foundation built on strength, not shortcuts."],
            ["Wide Services", "Planning, designing, estimation, plotting, interiors, exteriors, and turnkey construction."],
          ].map(([title, text]) => (
            <article key={title} className="border-t border-[#d5c7b2] bg-[#fff8ee] p-5 sm:p-6">
              <h3 className="text-lg font-black sm:text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#655c53]">{text}</p>
            </article>
          ))}
        </Reveal>
      </section>

      {/* Video */}
      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-12">
        <Reveal className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative aspect-video overflow-hidden bg-[#211e1c]">
            <video className="h-full w-full object-cover" autoPlay muted loop playsInline aria-label="Construction project motion">
              <source src="/motion.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#211e1c]/45 via-transparent to-[#c85a21]/20" />
          </div>
          <div>
            <Label>Project In Motion</Label>
            <h2 className="mt-4 text-2xl font-black uppercase text-[#bd4f1f] sm:text-4xl">
              See Our Construction Process Come Alive
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#655c53] sm:mt-5">
              From planning to execution, every stage is handled with clarity, coordination, and
              craftsmanship so your dream project moves forward with confidence.
            </p>
            <div className="mt-6 sm:mt-7">
              <Link href="/gallery" className="rounded-full bg-[#171412] px-5 py-3 text-xs font-black text-white">
                View Gallery
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section id="services" className="relative bg-[#211e1c] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-12">
        <div className="dark-brush absolute left-0 top-0 h-full w-[560px] opacity-60" />
        <Reveal className="relative mx-auto max-w-7xl">
          <Label dark>Our Services</Label>
          <h2 className="mt-4 text-3xl font-black uppercase text-[#ff6a18] sm:text-5xl">We Provide Best Services</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[#d8cbbb] sm:mt-6 sm:text-base sm:leading-8">
            At {brand.name}, excellence is not just a promise - it is our standard.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="bg-[#2a2522] p-5 sm:p-6">
                <h3 className="text-base font-black sm:text-lg">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#cfc0af]">{service.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 sm:mt-9">
            <Link href="/services" className="rounded-full bg-white px-5 py-3 text-xs font-black text-[#211e1c]">
              View All Services
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Projects */}
      <section id="projects" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
        <Reveal className="mx-auto max-w-7xl">
          <Label>Recent Activities</Label>
          <h2 className="mt-4 text-2xl font-black uppercase sm:text-4xl">Explore Our Diverse Range Of Projects</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[#655c53] sm:mt-6">
            At {brand.name}, we take pride in delivering a wide variety of projects that reflect
            our commitment to excellence, innovation, and client satisfaction.
          </p>
          <div className="mt-8 sm:mt-9">
            <InfiniteScroll />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-9 sm:gap-4 lg:grid-cols-4">
            {projects.map((project, index) => (
              <article key={project} className="bg-[#fff8ee]">
                <Photo
                  src={[images.projectOne, images.projectTwo, images.projectThree, images.team][index]}
                  alt={project}
                  className="aspect-square w-full sm:aspect-[1.1]"
                />
                <h3 className="p-3 text-sm font-black sm:p-5 sm:text-lg">{project}</h3>
              </article>
            ))}
          </div>
          <div className="mt-8 sm:mt-9">
            <Link href="/projects" className="rounded-full bg-[#c85a21] px-5 py-3 text-xs font-black text-white">
              View All Project
            </Link>
          </div>
        </Reveal>
      </section>

      <Testimonials />

      {/* Blog */}
      <section className="bg-[#211e1c] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-12">
        <Reveal className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          <div>
            <Label dark>Recent Blog</Label>
            <h2 className="mt-4 text-2xl font-black uppercase text-[#ff6a18] sm:text-4xl">Checkout Our Latest Blog</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Metallic Engineering", "Carpentry Projects"].map((title) => (
              <article key={title} className="bg-[#2a2522] p-5 sm:p-6">
                <div className="text-xs font-black uppercase tracking-[0.16em] text-[#ff6a18]">ACD Blog</div>
                <h3 className="mt-4 text-lg font-black sm:text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#cfc0af]">
                  Helpful construction ideas, planning guidance, and project updates from our team.
                </p>
                <Link href="/blog" className="mt-5 inline-flex text-xs font-black text-[#ff6a18]">
                  Read More
                </Link>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
