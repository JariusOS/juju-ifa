'use client';
import { ThemeProvider, useTheme, type ThemeMode } from '@/lib/theme-context';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './globals.css';

function ThemeToggle() {
  const { mode, setMode } = useTheme();
  const modes: { k: ThemeMode; icon: string; label: string }[] = [
    { k: 'dark', icon: '☾', label: 'Dark' },
    { k: 'light', icon: '☀', label: 'Light' },
    { k: 'cream', icon: '◎', label: 'Cream' },
  ];
  return (
    <div style={{ display: 'flex', gap: 2, background: 'var(--bg-surface)', borderRadius: 7, padding: 2, border: '1px solid var(--border)' }}>
      {modes.map((m) => (
        <button key={m.k} onClick={() => setMode(m.k)} title={m.label} style={{
          width: 28, height: 26, borderRadius: 5, border: 'none', cursor: 'pointer',
          fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: mode === m.k ? 'var(--accent)' : 'transparent',
          color: mode === m.k ? '#fff' : 'var(--text-3)',
          transition: 'all 0.15s',
        }}>{m.icon}</button>
      ))}
    </div>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 48, zIndex: 100,
        background: 'color-mix(in srgb, var(--bg) 88%, transparent)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', padding: '0 20px', gap: 16,
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <span style={{
            width: 26, height: 26, borderRadius: 7,
            background: 'linear-gradient(135deg, var(--geo), color-mix(in srgb, var(--geo) 70%, #000))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 800, fontSize: 12, fontFamily: "'JetBrains Mono', monospace",
          }}>J</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-1)', letterSpacing: '-0.02em' }}>
            JUJU <span style={{ color: 'var(--accent)', fontWeight: 600 }}>IFA</span>
          </span>
        </Link>

        <span style={{ fontSize: 9, color: 'var(--text-4)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
          Commodity Intelligence
        </span>

        {/* Nav links */}
        <nav style={{ display: 'flex', gap: 4, marginLeft: 8 }}>
          {[{ href: '/', label: 'Index' }, { href: '/nodes', label: 'Nodes' }].map((n) => {
            const active = n.href === '/' ? pathname === '/' : pathname.startsWith(n.href);
            return (
              <Link key={n.href} href={n.href} style={{
                fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 5,
                color: active ? 'var(--accent)' : 'var(--text-3)',
                background: active ? 'var(--accent-soft)' : 'transparent',
                transition: 'all 0.15s',
              }}>{n.label}</Link>
            );
          })}
        </nav>

        {/* Legend */}
        <div style={{ display: 'flex', gap: 8, marginLeft: 12 }}>
          {[
            { l: 'GEO', v: 'var(--geo)' }, { l: 'COM', v: 'var(--com)' }, { l: 'BIZ', v: 'var(--biz)' },
          ].map((n) => (
            <span key={n.l} style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 8, fontWeight: 700, color: n.v, letterSpacing: '0.04em' }}>
              <span style={{ width: 5, height: 5, borderRadius: 2, background: n.v }} />{n.l}
            </span>
          ))}
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <ThemeToggle />
        </div>
      </header>
      <main style={{ marginTop: 48, minHeight: 'calc(100vh - 48px)' }}>{children}</main>
    </>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <title>JUJU IFA — Commodity Intelligence Fusion Architecture</title>
        <meta name="description" content="Intelligence search across Africa's commodity supply chain ecosystem" />
      </head>
      <body>
        <ThemeProvider>
          <Shell>{children}</Shell>
        </ThemeProvider>
      </body>
    </html>
  );
}
