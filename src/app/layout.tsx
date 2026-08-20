import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "JUJU IFA — Commodity Intelligence Fusion Architecture",
  description: "Intelligence search across Africa's commodity supply chain ecosystem",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{
          position: 'fixed', top: 0, left: 0, right: 0, height: 52, zIndex: 100,
          background: 'rgba(7,13,23,0.92)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', alignItems: 'center', padding: '0 16px', gap: 10,
        }}>
          <Link href="/" style={{
            textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{
              width: 28, height: 28, borderRadius: 8,
              background: 'linear-gradient(135deg, #D4A82E 0%, #B8912A 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#070D17', fontWeight: 900, fontSize: 14,
              boxShadow: '0 2px 8px rgba(212,168,46,0.25)',
            }}>J</span>
            <span style={{ fontSize: 15, fontWeight: 900, color: '#F1F5F9', letterSpacing: '-0.01em' }}>
              JUJU <span style={{ color: 'rgba(212,168,46,0.7)', fontWeight: 700 }}>IFA</span>
            </span>
          </Link>

          <span style={{
            fontSize: 9, color: 'rgba(255,255,255,0.25)', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.08em',
            borderLeft: '1px solid rgba(255,255,255,0.06)', paddingLeft: 10, marginLeft: 2,
          }}>
            Intelligence Search
          </span>

          {/* Node class legend */}
          <div style={{ display: 'flex', gap: 6, marginLeft: 12 }}>
            {[
              { label: 'GEO', color: '#D4A82E' },
              { label: 'COM', color: '#22C55E' },
              { label: 'BIZ', color: '#3B82F6' },
            ].map((n) => (
              <span key={n.label} style={{
                display: 'flex', alignItems: 'center', gap: 3,
                fontSize: 8, fontWeight: 700, color: n.color, letterSpacing: '0.04em',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: 2, background: n.color }} />
                {n.label}
              </span>
            ))}
          </div>

          <span style={{ marginLeft: 'auto', fontSize: 9.5, color: 'rgba(255,255,255,0.2)', fontFamily: 'ui-monospace, monospace' }}>
            100 nodes
          </span>
        </header>
        <main style={{ marginTop: 52, minHeight: 'calc(100vh - 52px)' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
