"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePreloaderDone } from "./PreloaderContext";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const preloaderDone = usePreloaderDone();
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (preloaderDone) setFirstLoad(false);
  }, [preloaderDone]);

  // On first load: wait until preloader is done before animating
  if (firstLoad && !preloaderDone) {
    return <div style={{ opacity: 0 }}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
