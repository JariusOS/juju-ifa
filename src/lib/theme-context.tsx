'use client';
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type ThemeMode = 'dark' | 'light' | 'cream';

interface ThemeCtx {
  mode: ThemeMode;
  setMode: (m: ThemeMode) => void;
}

const Ctx = createContext<ThemeCtx>({ mode: 'dark', setMode: () => {} });

export function useTheme() { return useContext(Ctx); }

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('dark');
  useEffect(() => {
    const saved = localStorage.getItem('juju-theme') as ThemeMode | null;
    if (saved && ['dark', 'light', 'cream'].includes(saved)) setMode(saved);
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('juju-theme', mode);
  }, [mode]);
  return <Ctx.Provider value={{ mode, setMode }}>{children}</Ctx.Provider>;
}
