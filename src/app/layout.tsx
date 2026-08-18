import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JUJU IFA — Intelligence Fusion Architecture",
  description: "Knowledge graph of Africa's commodity supply chain ecosystem",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, height: 60,
          background: '#0A1623', borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', alignItems: 'center', padding: '0 24px', zIndex: 100,
        }}>
          <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 18, fontWeight: 800, color: '#F59E0B', fontFamily: 'monospace' }}>JUJU</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#8191A4', textTransform: 'uppercase', letterSpacing: '0.05em' }}>IFA</span>
          </a>
          <div style={{ marginLeft: 40, display: 'flex', gap: 24 }}>
            {[
              { label: 'Dashboard', href: '/' },
              { label: 'Nodes', href: '/nodes' },
              { label: 'Graph Explorer', href: '/explore' },
            ].map((item) => (
              <a key={item.href} href={item.href} style={{
                fontSize: 12, fontWeight: 600, color: '#AAB7C6',
                textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em',
              }}>
                {item.label}
              </a>
            ))}
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div className="pulse-dot" />
            <span style={{ fontSize: 11, color: '#8191A4' }}>Neo4j Connected</span>
          </div>
        </nav>
        <main style={{ marginTop: 60, minHeight: 'calc(100vh - 60px)' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
