'use client';

import Link from 'next/link';

const regions = [
  { name: 'North Africa', countries: 6, color: '#3B82F6', icon: '◈' },
  { name: 'West Africa', countries: 16, color: '#10B981', icon: '◇' },
  { name: 'Central Africa', countries: 9, color: '#F59E0B', icon: '◆' },
  { name: 'East Africa', countries: 15, color: '#8B5CF6', icon: '◉' },
  { name: 'Southern Africa', countries: 8, color: '#EF4444', icon: '◊' },
];

const steps = [
  { num: '01', title: 'Browse', desc: 'Explore the commodity and geography indexes with powerful filters and sort', icon: '⬡' },
  { num: '02', title: 'Deep Dive', desc: 'Click any node to access detailed profiles with sections, metrics, and data', icon: '◇' },
  { num: '03', title: 'Act', desc: 'Use intelligence briefings and connected node networks to make informed decisions', icon: '△' },
];

const features = [
  {
    title: 'Commodity Index',
    icon: '▦',
    desc: '18 African commodities ranked by export value, with real-time pricing, YoY trends, and confidence scores. Drill into supply chains, producers, and trade flows.',
    stat: '18 Commodities',
    link: '/explorer',
    gradient: 'var(--accent)',
  },
  {
    title: 'Geography Index',
    icon: '◈',
    desc: '54 African economies profiled across export value, GDP, demographics, and economic infrastructure. From Elite-tier powerhouses to Emerging frontiers.',
    stat: '54 Economies',
    link: '/geos',
    gradient: '#3B82F6',
  },
  {
    title: 'Intelligence Briefings',
    icon: '▲',
    desc: 'Top-10 intelligence briefings per commodity with classification, core analysis, strategic impact, and opportunity assessment.',
    stat: '180+ Briefings',
    link: '/explorer',
    gradient: '#8B5CF6',
  },
];

export default function LandingPage() {
  return (
    <div style={{ minHeight: 'calc(100vh - 48px)' }}>
      {/* ═══════════════ HERO ═══════════════ */}
      <section style={{
        minHeight: 'calc(100vh - 48px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in srgb, var(--accent) 6%, transparent), transparent),
            radial-gradient(ellipse 60% 40% at 80% 100%, color-mix(in srgb, var(--accent) 4%, transparent), transparent),
            radial-gradient(ellipse 50% 30% at 10% 60%, color-mix(in srgb, var(--geo) 4%, transparent), transparent)
          `,
          pointerEvents: 'none',
        }} />

        {/* Grid lines */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(color-mix(in srgb, var(--border) 30%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--border) 30%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)',
        }} />

        <div style={{ position: 'relative', textAlign: 'center', maxWidth: 900 }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '5px 14px', borderRadius: 20,
            background: 'var(--accent-soft)',
            border: '1px solid var(--accent-border)',
            marginBottom: 28,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: 'var(--accent)' }} />
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.04em' }}>
              AFRICAN COMMODITY INTELLIGENCE
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(32px, 6vw, 64px)',
            fontWeight: 800,
            color: 'var(--text-1)',
            letterSpacing: '-0.03em',
            lineHeight: 1.08,
            marginBottom: 20,
          }}>
            Africa&apos;s Commodity<br />
            <span style={{ color: 'var(--accent)' }}>Intelligence Platform</span>
          </h1>

          {/* Subheadline */}
          <p style={{
            fontSize: 'clamp(14px, 2vw, 18px)',
            color: 'var(--text-3)',
            lineHeight: 1.6,
            maxWidth: 640,
            margin: '0 auto 40px',
          }}>
            Real-time data across 18 commodity sectors and 54 economies. Built for analysts,
            investors, and policymakers who need the full picture.
          </p>

          {/* Stats bar */}
          <div style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 0,
            marginBottom: 40,
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            overflow: 'hidden',
          }}>
            {[
              { value: '18', label: 'Commodities' },
              { value: '54', label: 'Economies' },
              { value: '$565B+', label: 'Export Value' },
              { value: '5', label: 'Regions' },
            ].map((s, i) => (
              <div key={s.label} style={{
                padding: '16px 28px',
                borderRight: i < 3 ? '1px solid var(--border)' : 'none',
                minWidth: 120,
              }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-mono, monospace)' }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-4)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 2 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/explorer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 32px', borderRadius: 10,
              background: 'var(--accent)',
              color: '#fff',
              fontSize: 15, fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.2s',
              boxShadow: '0 4px 20px color-mix(in srgb, var(--accent) 30%, transparent)',
            }}>
              Explore the Data
              <span style={{ fontSize: 18, lineHeight: 1 }}>→</span>
            </Link>
            <Link href="/geos" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 32px', borderRadius: 10,
              background: 'transparent',
              color: 'var(--text-2)',
              fontSize: 15, fontWeight: 700,
              textDecoration: 'none',
              border: '1px solid var(--border)',
              transition: 'all 0.2s',
            }}>
              View Geography
              <span style={{ fontSize: 18, lineHeight: 1 }}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHAT YOU GET ═══════════════ */}
      <section style={{ padding: '80px 24px', maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            fontSize: 11, fontWeight: 700, color: 'var(--accent)',
            textTransform: 'uppercase', letterSpacing: '0.1em',
            display: 'block', marginBottom: 12,
          }}>
            Platform Capabilities
          </span>
          <h2 style={{
            fontSize: 'clamp(24px, 4vw, 40px)',
            fontWeight: 800,
            color: 'var(--text-1)',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
          }}>
            Everything You Need to<br />Understand African Markets
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {features.map((f) => (
            <Link key={f.title} href={f.link} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 14,
                padding: 28,
                height: '100%',
                transition: 'all 0.2s',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-strong)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Top accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                  background: f.gradient,
                }} />

                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: 'var(--accent-soft)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, marginBottom: 18,
                }}>
                  <span style={{ color: 'var(--accent)' }}>{f.icon}</span>
                </div>

                <div style={{
                  fontSize: 10, fontWeight: 700, color: f.gradient,
                  textTransform: 'uppercase', letterSpacing: '0.06em',
                  marginBottom: 6,
                }}>
                  {f.stat}
                </div>

                <h3 style={{
                  fontSize: 20, fontWeight: 700, color: 'var(--text-1)',
                  marginBottom: 10, letterSpacing: '-0.01em',
                }}>
                  {f.title}
                </h3>

                <p style={{
                  fontSize: 13, color: 'var(--text-3)', lineHeight: 1.65,
                  margin: 0,
                }}>
                  {f.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <section style={{
        padding: '80px 24px',
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{
              fontSize: 11, fontWeight: 700, color: 'var(--accent)',
              textTransform: 'uppercase', letterSpacing: '0.1em',
              display: 'block', marginBottom: 12,
            }}>
              Workflow
            </span>
            <h2 style={{
              fontSize: 'clamp(24px, 4vw, 40px)',
              fontWeight: 800,
              color: 'var(--text-1)',
              letterSpacing: '-0.02em',
            }}>
              From Data to Decisions
            </h2>
          </div>

          <div style={{
            display: 'flex',
            gap: 0,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {steps.map((s, i) => (
              <div key={s.num} style={{
                flex: '1 1 280px',
                maxWidth: 360,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 24px',
                position: 'relative',
              }}>
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    top: 36,
                    right: -8,
                    width: 16,
                    height: 2,
                    background: 'var(--border)',
                    display: 'none',
                  }} className="step-connector" />
                )}

                <div style={{
                  width: 72, height: 72,
                  borderRadius: 16,
                  background: 'var(--bg-card)',
                  border: '2px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 28, color: 'var(--accent)',
                  marginBottom: 20,
                  position: 'relative',
                }}>
                  <span style={{ fontSize: 10, fontWeight: 800, color: 'var(--text-4)', position: 'absolute', top: 6, right: 10 }}>
                    {s.num}
                  </span>
                  {s.icon}
                </div>

                <h3 style={{
                  fontSize: 18, fontWeight: 700, color: 'var(--text-1)',
                  marginBottom: 8,
                }}>
                  {s.title}
                </h3>

                <p style={{
                  fontSize: 13, color: 'var(--text-3)', lineHeight: 1.6,
                  margin: 0, maxWidth: 280,
                }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ COVERAGE ═══════════════ */}
      <section style={{ padding: '80px 24px', maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            fontSize: 11, fontWeight: 700, color: 'var(--accent)',
            textTransform: 'uppercase', letterSpacing: '0.1em',
            display: 'block', marginBottom: 12,
          }}>
            Continental Coverage
          </span>
          <h2 style={{
            fontSize: 'clamp(24px, 4vw, 40px)',
            fontWeight: 800,
            color: 'var(--text-1)',
            letterSpacing: '-0.02em',
          }}>
            54 Economies Across<br />5 Regions
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: 16,
        }}>
          {regions.map((r) => (
            <div key={r.name} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: '28px 20px',
              textAlign: 'center',
              transition: 'all 0.2s',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-strong)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Accent top bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: r.color,
                opacity: 0.8,
              }} />

              <div style={{
                fontSize: 28, color: r.color, marginBottom: 12, lineHeight: 1,
                opacity: 0.9,
              }}>
                {r.icon}
              </div>

              <div style={{
                fontSize: 32, fontWeight: 800, color: 'var(--text-1)',
                fontFamily: 'var(--font-mono, monospace)',
                lineHeight: 1,
                marginBottom: 4,
              }}>
                {r.countries}
              </div>

              <div style={{
                fontSize: 11, fontWeight: 600, color: 'var(--text-3)',
                textTransform: 'uppercase', letterSpacing: '0.05em',
              }}>
                {r.countries === 1 ? 'Country' : 'Countries'}
              </div>

              <div style={{
                fontSize: 13, fontWeight: 600, color: 'var(--text-2)',
                marginTop: 10,
              }}>
                {r.name}
              </div>

              {/* Progress bar */}
              <div style={{
                marginTop: 14,
                height: 4,
                borderRadius: 2,
                background: 'var(--border)',
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: `${(r.countries / 54) * 100}%`,
                  borderRadius: 2,
                  background: r.color,
                  opacity: 0.7,
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Total bar */}
        <div style={{
          marginTop: 32,
          padding: '20px 28px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{
              width: 10, height: 10, borderRadius: 5,
              background: 'var(--accent)',
              boxShadow: '0 0 8px color-mix(in srgb, var(--accent) 40%, transparent)',
            }} />
            <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-1)' }}>
              Total Coverage
            </span>
          </div>
          <div style={{
            display: 'flex', gap: 20, flexWrap: 'wrap',
          }}>
            <div>
              <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-mono, monospace)' }}>54</span>
              <span style={{ fontSize: 12, color: 'var(--text-4)', marginLeft: 6 }}>Economies</span>
            </div>
            <div>
              <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-mono, monospace)' }}>18</span>
              <span style={{ fontSize: 12, color: 'var(--text-4)', marginLeft: 6 }}>Commodities</span>
            </div>
            <div>
              <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-mono, monospace)' }}>$565B+</span>
              <span style={{ fontSize: 12, color: 'var(--text-4)', marginLeft: 6 }}>Export Value</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section style={{
        padding: '80px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, color-mix(in srgb, var(--accent) 6%, transparent), transparent)',
        }} />

        <div style={{ position: 'relative', maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 800,
            color: 'var(--text-1)',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            Start Exploring<br />
            <span style={{ color: 'var(--accent)' }}>Africa&apos;s Data</span>
          </h2>

          <p style={{
            fontSize: 15,
            color: 'var(--text-3)',
            lineHeight: 1.6,
            marginBottom: 36,
          }}>
            18 commodity modules · 54 country profiles · Dark, Light &amp; Cream themes
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/explorer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 32px', borderRadius: 10,
              background: 'var(--accent)',
              color: '#fff',
              fontSize: 15, fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.2s',
              boxShadow: '0 4px 20px color-mix(in srgb, var(--accent) 30%, transparent)',
            }}>
              Start Exploring
              <span style={{ fontSize: 18, lineHeight: 1 }}>→</span>
            </Link>
            <Link href="/geos" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 32px', borderRadius: 10,
              background: 'transparent',
              color: 'var(--text-2)',
              fontSize: 15, fontWeight: 700,
              textDecoration: 'none',
              border: '1px solid var(--border)',
              transition: 'all 0.2s',
            }}>
              View Geography
              <span style={{ fontSize: 18, lineHeight: 1 }}>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
