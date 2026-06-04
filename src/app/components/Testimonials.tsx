'use client';

import { useState } from "react";
import { Reveal } from "./PageTransition";
import { Label } from "./Label";

const testimonials = [
  { name: "Rajesh Kumar", role: "Homeowner, Gorakhpur", text: "Amethiya Construction built our dream home with exceptional quality. The VASTU-compliant design and timely delivery exceeded our expectations. Highly recommended!", rating: 5 },
  { name: "Sunita Sharma", role: "Business Owner", text: "They handled our commercial complex from planning to execution flawlessly. Transparent pricing, skilled team, and zero compromise on quality. Outstanding work!", rating: 5 },
  { name: "Amit Verma", role: "Plot Developer", text: "Their plotting and layout services are top-notch. Very professional team, clear communication throughout the project. Will definitely work with them again.", rating: 5 },
  { name: "Priya Singh", role: "Interior Client", text: "The interior and exterior work done by Amethiya is simply beautiful. They understood our vision perfectly and delivered beyond what we imagined.", rating: 5 },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-[#211e1c] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-12">
      <Reveal className="mx-auto max-w-7xl">
        <Label dark>Testimonials</Label>
        <h2 className="mt-4 text-2xl font-black uppercase text-[#ff6a18] sm:text-4xl">What Our Clients Say</h2>

        <div className="mt-10 relative">
          <div className="overflow-hidden">
            <div className="transition-all duration-500 ease-in-out">
              <div className="bg-[#2a2522] p-8 rounded-2xl max-w-3xl mx-auto text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {Array(testimonials[current].rating).fill(0).map((_, i) => (
                    <span key={i} className="text-[#ff6a18] text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg leading-8 text-[#d8cbbb] italic">&ldquo;{testimonials[current].text}&rdquo;</p>
                <div className="mt-6">
                  <div className="font-black text-white">{testimonials[current].name}</div>
                  <div className="text-xs uppercase tracking-widest text-[#ff6a18] mt-1">{testimonials[current].role}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-[#ff6a18] w-6" : "bg-white/30"}`} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
