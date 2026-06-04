"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Strength = {
  label: string;
  value: number;
};

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

function CountUp({ value, suffix, start }: { value: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setCount(Math.round(latest)),
    });

    return () => controls.stop();
  }, [start, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function AnimatedStrengths({ strengths }: { strengths: Strength[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <div ref={ref} className="space-y-5">
      {strengths.map((strength, index) => (
        <motion.div
          key={strength.label}
          initial={false}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-between text-sm font-black">
            <span>{strength.label}</span>
            <span className="text-[#ff6a18]">
              <CountUp value={strength.value} suffix="%" start={inView} />
            </span>
          </div>
          <div className="mt-2 h-2 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-[#ff6a18]"
              initial={false}
              animate={inView ? { width: `${strength.value}%` } : { width: 0 }}
              transition={{ duration: 1.35, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function AnimatedStats({ stats }: { stats: Stat[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <div ref={ref} className="mx-auto mt-12 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="bg-[#2a2522] p-6 text-center"
          initial={false}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-4xl font-black text-[#ff6a18]">
            <CountUp value={stat.value} suffix={stat.suffix} start={inView} />
          </div>
          <div className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-[#cfc0af]">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
