import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Label } from "../components/Label";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/PageTransition";
import { brand, images } from "../site-data";

const featuredPost = {
  category: "Construction Planning",
  title: "How To Start A Home Construction Project With Clear Budget And Less Stress",
  excerpt:
    "A successful building starts before the first brick is placed. Good planning, practical design, transparent costing, and regular site supervision help protect your budget and timeline.",
  image: images.projectOne,
  meta: "6 min read",
};

const posts = [
  {
    category: "VASTU Planning",
    title: "Why VASTU-Based Building Planning Still Matters For Modern Homes",
    text: "VASTU planning helps organize rooms, ventilation, light, and movement so the home feels balanced, comfortable, and practical for daily living.",
    date: "Planning Guide",
  },
  {
    category: "3D Design",
    title: "How 3D Elevation And Visualization Help You Avoid Costly Changes",
    text: "A 3D view makes design choices easier to understand before work begins, helping owners finalize materials, elevation style, and room flow with confidence.",
    date: "Design Insight",
  },
  {
    category: "Budgeting",
    title: "What To Include In A Reliable Construction Estimate",
    text: "A strong estimate covers civil work, materials, labour, finishing, approvals, and contingency so there are fewer surprises during construction.",
    date: "Cost Planning",
  },
  {
    category: "Residential Work",
    title: "Key Checks Before Building A Duplex Or Villa",
    text: "Soil condition, foundation planning, drainage, staircase placement, parking, and future expansion needs should be checked before finalizing the layout.",
    date: "Home Build",
  },
  {
    category: "Commercial Work",
    title: "Design Points That Make Shops And Offices More Useful",
    text: "Commercial spaces need visibility, efficient circulation, storage, electrical planning, and durable finishes that can handle repeated daily use.",
    date: "Commercial",
  },
  {
    category: "Maintenance",
    title: "Simple Maintenance Habits That Protect Your Property",
    text: "Regular checks for seepage, cracks, wiring load, plumbing leaks, and roof drainage can prevent small issues from becoming expensive repairs.",
    date: "Care Tips",
  },
];

const checklist = [
  "Confirm land documents, measurements, and local development requirements.",
  "Finalize the layout, elevation, and room requirements before execution.",
  "Prepare a clear estimate with material grade, labour, and finishing scope.",
  "Plan water, drainage, electrical, and ventilation routes early.",
  "Keep site supervision, quality checks, and payment milestones transparent.",
];

const topics = [
  "Home Construction",
  "Commercial Projects",
  "Plot Development",
  "Interior & Exterior",
  "Cost Estimation",
  "Project Management",
];

export default function BlogPage() {
  return (
    <main className="bg-[#f4eddf] text-[#211c18]">
      <Header />
      <PageHero
        title="Construction Blog"
        text={`Practical articles from ${brand.name} on planning, designing, budgeting, building, and maintaining strong spaces.`}
        compact
      />

      <section className="px-6 pb-16 lg:px-12">
        <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[260px] lg:min-h-[420px] overflow-hidden">
            <Image
              src={featuredPost.image}
              alt="Modern home construction planning"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
              priority
            />
          </div>
          <article className="flex flex-col justify-center bg-[#fff8ee] p-8 lg:p-10">
            <div className="text-xs font-black uppercase tracking-[0.16em] text-[#d86120]">
              Featured Article
            </div>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#bd4f1f] lg:text-4xl">
              {featuredPost.title}
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#655c53]">{featuredPost.excerpt}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.12em] text-[#70675e]">
              <span>{featuredPost.category}</span>
              <span className="h-1 w-1 rounded-full bg-[#d86120]" />
              <span>{featuredPost.meta}</span>
            </div>
          </article>
        </Reveal>
      </section>

      <section className="bg-[#211e1c] px-6 py-16 text-white lg:px-12">
        <Reveal className="mx-auto max-w-7xl">
          <Label dark>Latest Articles</Label>
          <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase text-[#ff6a18]">
            Useful Construction Knowledge For Smarter Decisions
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <article key={post.title} className="bg-[#2a2522] p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-black uppercase tracking-[0.14em] text-[#ff6a18]">
                    {post.category}
                  </span>
                  <span className="text-xs font-black text-[#8f8173]">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-black leading-snug">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#cfc0af]">{post.text}</p>
                <div className="mt-6 border-t border-white/10 pt-4 text-xs font-black uppercase tracking-[0.12em] text-[#b9aa9a]">
                  {post.date}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Label>Build Better</Label>
            <h2 className="mt-4 text-4xl font-black uppercase text-[#bd4f1f]">
              Before You Start Construction
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#655c53]">
              Every site has different needs, but a clear pre-construction checklist keeps the work
              organized from the first discussion to final handover.
            </p>
          </div>
          <div className="grid gap-4">
            {checklist.map((item, index) => (
              <div key={item} className="flex gap-4 border-t border-[#d5c7b2] bg-[#fff8ee] p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#d86120] text-sm font-black text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm leading-7 text-[#655c53]">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-6 pb-16 lg:px-12">
        <Reveal className="mx-auto grid max-w-7xl gap-8 bg-[#fff8ee] p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
          <div>
            <Label>Topics</Label>
            <h2 className="mt-4 text-3xl font-black uppercase">Explore Construction Topics</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <div
                key={topic}
                className="border border-[#e2d3bd] px-4 py-4 text-sm font-black text-[#211c18]"
              >
                {topic}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-[#c85a21] px-6 py-16 text-center text-white lg:px-12">
        <Reveal className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black uppercase">Need Guidance For Your Project?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#ffe2cc]">
            Talk to our team for VASTU planning, 3D design, estimation, construction, plotting, or
            turnkey project execution in Gorakhpur and nearby areas.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="rounded-full bg-white px-6 py-4 text-xs font-black text-[#211e1c]">
              Discuss Your Project
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
