'use client';

import { createContext, useContext, useState, useEffect } from "react";

const PreloaderContext = createContext(false);

export function usePreloaderDone() {
  return useContext(PreloaderContext);
}

export function PreloaderProvider({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PreloaderContext.Provider value={done}>
      {children}
    </PreloaderContext.Provider>
  );
}
