import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Label } from "../components/Label";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/PageTransition";
import { brand } from "../site-data";

const services = [
  {
    title: "VASTU-Based Building Planning",
    text: "Harmonious, positive, and energy-efficient designs based on VASTU principles to create a balanced living or working environment.",
  },
  {
    title: "3D Architectural Designing & Visualization",
    text: "High-quality 3D layouts and virtual walkthroughs to help you visualize your project before construction begins.",
  },
  {
    title: "Detailed Estimation & Cost Planning",
    text: "Accurate budgeting and transparent cost planning with no hidden charges, ensuring financial clarity throughout the project.",
  },
  {
    title: "Residential Construction",
    text: "From individual homes to luxury villas, we build strong, elegant, and functional living spaces tailored to your requirements.",
  },
  {
    title: "Commercial Construction",
    text: "Designing and constructing office spaces, showrooms, and commercial complexes with modern infrastructure and safety standards.",
  },
  {
    title: "Plotting & Layout Development",
    text: "Smart planning, land division, and infrastructure development to maximize usability and investment value of your property.",
  },
  {
    title: "Turnkey Project Execution",
    text: "Complete end-to-end solutions where we handle designing, planning, construction, and finishing, delivering ready-to-use projects on time.",
  },
  {
    title: "Custom Interior & Exterior Work",
    text: "Personalized designs for interiors and exteriors that combine aesthetics, comfort, and functionality to match your style.",
  },
  {
    title: "Project Management",
    text: "We ensure seamless coordination, timely execution, and cost-effective solutions, giving our clients peace of mind.",
  },
];

const selectedWork = [
  {
    title: "Dream Villa Construction",
    text: "Spacious, VASTU-compliant luxury villa designed for comfort and elegance.",
  },
  {
    title: "Modern Duplex Home",
    text: "Contemporary two-story house with premium interiors and strong foundation.",
  },
  {
    title: "Commercial Office Complex",
    text: "Smartly designed office space ensuring functionality, style, and productivity.",
  },
  {
    title: "Retail Showroom Project",
    text: "Attractive storefront with optimal layout to enhance customer experience.",
  },
  {
    title: "Residential Plot Development",
    text: "Strategically planned plots with road access and ready infrastructure.",
  },
  {
    title: "Interior & Exterior Makeover",
    text: "Customized interiors and elegant exteriors transforming living spaces beautifully.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#f4eddf] text-[#211c18]">
      <Header />
      <PageHero
        title="Our Services"
        text={`${brand.name} provides complete planning, designing, construction, development, and project execution services.`}
        compact
      />

      <section className="bg-[#211e1c] px-6 py-16 text-white lg:px-12">
        <Reveal className="mx-auto max-w-7xl">
          <Label dark>Our Services</Label>
          <h2 className="mt-4 text-4xl font-black uppercase text-[#ff6a18]">
            Complete Construction & Development Solutions
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className="bg-[#2a2522] p-6">
                <div className="text-2xl font-black text-[#ff6a18]">0{index + 1}</div>
                <h3 className="mt-5 text-xl font-black">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#cfc0af]">{service.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <Reveal className="mx-auto max-w-7xl">
          <Label>Work Journey Towards Success</Label>
          <h2 className="mt-4 text-4xl font-black uppercase">Selected Projects</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {selectedWork.map((work, index) => (
              <article key={work.title} className="border-t border-[#d5c7b2] bg-[#fff8ee] p-6">
                <div className="text-xs font-black uppercase tracking-[0.16em] text-[#d86120]">
                  Selected 0{index + 1}
                </div>
                <h3 className="mt-4 text-xl font-black">{work.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#655c53]">{work.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-[#c85a21] px-6 py-16 text-center text-white lg:px-12">
        <Reveal className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black uppercase">Let&apos;s Build Your Dream Project Today</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#ffe2cc]">
            Get in touch with us to turn your vision into reality with trusted expertise and
            quality construction.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="rounded-full bg-white px-6 py-4 text-xs font-black text-[#211e1c]">
              Contact Us
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="px-6 py-16 text-center lg:px-12">
        <Reveal className="mx-auto max-w-4xl">
          <Label>Start Your Construction Journey with Us</Label>
          <h2 className="mt-4 text-4xl font-black uppercase">
            Plan, Design, And Build With Professionals
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#655c53]">
            Plan, design, and build with professionals who care about your dream home or commercial
            space. Contact us now for reliable, affordable, and on-time construction services.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="rounded-full bg-[#171412] px-6 py-4 text-xs font-black text-white">
              Start Now
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
