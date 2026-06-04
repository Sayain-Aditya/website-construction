import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/PageTransition";
import { brand } from "../site-data";

export default function ContactPage() {
  return (
    <main className="bg-[#f4eddf] text-[#211c18]">
      <Header />
      <PageHero
        title="Contact Us"
        text="Talk to our team about planning, services, project details, or your next construction requirement."
        compact
      />
      <section className="px-6 pb-16 lg:px-12">
        <Reveal className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <div className="bg-[#fff8ee] p-6">
            <h2 className="text-xl font-black">Address Location</h2>
            <p className="mt-4 text-sm leading-7 text-[#655c53]">{brand.address}</p>
          </div>
          <div className="bg-[#fff8ee] p-6">
            <h2 className="text-xl font-black">Phone</h2>
            <p className="mt-4 text-sm leading-7 text-[#655c53]">{brand.phone}</p>
          </div>
          <div className="bg-[#fff8ee] p-6">
            <h2 className="text-xl font-black">Email</h2>
            <p className="mt-4 text-sm leading-7 text-[#655c53]">{brand.email}</p>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-8 max-w-7xl">
          <form className="grid gap-4 bg-[#fff8ee] p-6 md:grid-cols-2">
            <input className="h-12 border border-[#d5c7b2] bg-transparent px-4 text-sm outline-none" placeholder="Your Name" />
            <input className="h-12 border border-[#d5c7b2] bg-transparent px-4 text-sm outline-none" placeholder="Phone Number" />
            <input className="h-12 border border-[#d5c7b2] bg-transparent px-4 text-sm outline-none md:col-span-2" placeholder="Email Address" />
            <textarea className="min-h-36 border border-[#d5c7b2] bg-transparent p-4 text-sm outline-none md:col-span-2" placeholder="Tell us about your project" />
            <button className="rounded-full bg-[#c85a21] px-6 py-4 text-xs font-black text-white md:w-fit">
              Send Message
            </button>
          </form>
        </Reveal>

        <Reveal className="mx-auto mt-8 max-w-7xl overflow-hidden rounded-2xl shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123456789!2d83.3732!3d26.7606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0000000%3A0x0!2sKhorabar%2C+Gorakhpur%2C+Uttar+Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Amethiya Construction Location"
          />
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}
