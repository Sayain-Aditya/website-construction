import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/PageTransition";
import { images, projects } from "../site-data";

const projectImages = [images.projectOne, images.projectTwo, images.projectThree, images.team];

export default function ProjectsPage() {
  return (
    <main className="bg-[#f4eddf] text-[#211c18]">
      <Header />
      <PageHero
        title="Explore Our Diverse Range Of Projects"
        text="From residential villas to commercial complexes, plot developments to custom-designed interiors, our portfolio showcases versatility and attention to detail."
      />
      <section className="px-6 pb-16 lg:px-12">
        <Reveal className="mx-auto grid max-w-7xl gap-5 grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project} className="bg-[#fff8ee]">
              <div className="relative aspect-[1.45] overflow-hidden">
                <Image src={projectImages[index]} alt={project} fill sizes="50vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-black">{project}</h2>
                <p className="mt-3 text-sm leading-7 text-[#655c53]">
                  Delivered with quality planning, professional execution, and careful finishing.
                </p>
              </div>
            </article>
          ))}
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}
