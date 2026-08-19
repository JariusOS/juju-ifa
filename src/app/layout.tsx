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
          position: 'fixed', top: 0, left: 0, right: 0, height: 56, zIndex: 100,
          background: 'rgba(8,8,8,0.9)', backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', alignItems: 'center', padding: '0 16px', gap: 12,
        }}>
          <Link href="/" style={{
            textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{
              width: 26, height: 26, borderRadius: 8, background: '#FF6B00',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#080808', fontWeight: 900, fontSize: 13,
            }}>J</span>
            <span style={{ fontSize: 15, fontWeight: 900, color: '#fff', letterSpacing: '-0.01em' }}>
              JUJU <span style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 700 }}>IFA</span>
            </span>
        </Link>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Intelligence Search
          </span>
          <span style={{ marginLeft: 'auto', fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>Africa · 100 commodities</span>
        </header>
        <main style={{ marginTop: 56, minHeight: 'calc(100vh - 56px)' }}>
          {children}
        </main>
      </body>
    </html>
  );
}