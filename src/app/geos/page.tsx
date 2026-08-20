'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { GEONODES } from '@/data/geonodes';
import type { GeoNode, GeoTier } from '@/data/types';

const TIERS: (GeoTier | 'All')[] = ['All', 'Elite', 'Standard', 'Emerging'];
const REGIONS = ['All', 'North', 'West', 'Central', 'East', 'Southern'] as const;
const REGION_MAP: Record<string, string> = {
  'All': '',
  'North': 'North Africa',
  'West': 'West Africa',
  'Central': 'Central Africa',
  'East': 'East Africa',
  'Southern': 'Southern Africa',
};

type SortKey = 'rank' | 'value' | 'share' | 'gdp' | 'gdpPerCapita' | 'pop' | 'name' | 'lifeExp' | 'minWage';
type ViewMode = 'table' | 'cards' | 'grid' | 'list';

const SORT_LABELS: Record<SortKey, string> = {
  rank: 'Rank', value: 'Export $', share: 'Share %', gdp: 'GDP', gdpPerCapita: 'GDP/Cap', pop: 'Pop', name: 'Name', lifeExp: 'Life Exp', minWage: 'Min Wage',
};

function tierColor(tier: GeoTier): string {
  if (tier === 'Elite') return 'var(--warning)';
  if (tier === 'Standard') return 'var(--accent)';
  return 'var(--text-4)';
}

function tierBg(tier: GeoTier): string {
  if (tier === 'Elite') return 'color-mix(in srgb, var(--warning) 12%, transparent)';
  if (tier === 'Standard') return 'color-mix(in srgb, var(--accent) 12%, transparent)';
  return 'var(--bg-card)';
}

function parseNum(v: string): number {
  const m = v.match(/([\d.]+)\s*([BMKkT])?/);
  if (!m) return 0;
  const n = parseFloat(m[1]);
  const s = (m[2] || '').toUpperCase();
  if (s === 'T') return n * 1e12;
  if (s === 'B') return n * 1e9;
  if (s === 'M') return n * 1e6;
  if (s === 'K') return n * 1e3;
  return n;
}

function parseShare(v: string): number {
  const m = v.match(/([\d.]+)/);
  return m ? parseFloat(m[1]) : 0;
}

function findMetric(g: GeoNode, label: string): string {
  return g.profileMetrics.find(m => m.label === label)?.value || '—';
}

export default function GeosIndex() {
  const [q, setQ] = useState('');
  const [tier, setTier] = useState<GeoTier | 'All'>('All');
  const [region, setRegion] = useState<string>('All');
  const [sort, setSort] = useState<SortKey>('value');
  const [asc, setAsc] = useState(false);
  const [view, setView] = useState<ViewMode>('table');

  const list = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return GEONODES
      .filter((g) => tier === 'All' || g.tier === tier)
      .filter((g) => region === 'All' || g.region === REGION_MAP[region])
      .filter((g) =>
        !ql ||
        g.name.toLowerCase().includes(ql) ||
        g.fullName.toLowerCase().includes(ql) ||
        g.id.toLowerCase().includes(ql) ||
        g.iso2.toLowerCase().includes(ql) ||
        g.tags.some((t) => t.toLowerCase().includes(ql))
      )
      .sort((a, b) => {
        let cmp = 0;
        switch (sort) {
          case 'value': cmp = parseNum(a.exportValue) - parseNum(b.exportValue); break;
          case 'share': cmp = parseShare(a.continentalShare) - parseShare(b.continentalShare); break;
          case 'gdp': cmp = parseNum(a.gdp) - parseNum(b.gdp); break;
          case 'gdpPerCapita': cmp = parseNum(a.gdpPerCapita) - parseNum(b.gdpPerCapita); break;
          case 'pop': cmp = parseNum(a.population) - parseNum(b.population); break;
          case 'lifeExp': cmp = parseNum(findMetric(a, 'Life Exp')) - parseNum(findMetric(b, 'Life Exp')); break;
          case 'minWage': cmp = parseNum(findMetric(a, 'Min Wage')) - parseNum(findMetric(b, 'Min Wage')); break;
          case 'name': cmp = a.name.localeCompare(b.name); break;
          default: cmp = a.rank - b.rank;
        }
        return asc ? cmp : -cmp;
      });
  }, [q, tier, region, sort, asc]);

  const totalExport = useMemo(() => GEONODES.reduce((s, g) => s + g.exportValueNum, 0), []);

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px 80px' }}>
      {/* Header */}
      <div style={{ padding: '20px 0 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: 'var(--warning)', letterSpacing: '-0.02em' }}>
              Geography Index
            </h1>
            <p style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>
              {GEONODES.length} African countries · ${(totalExport / 1).toFixed(0)}B+ total export value
            </p>
          </div>
          <Link href="/" style={{ fontSize: 12, color: 'var(--text-3)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
            ← Commodity Index
          </Link>
        </div>

        {/* Search + View toggle */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10 }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', fontSize: 13, color: 'var(--text-4)' }}>⌕</span>
            <input value={q} onChange={(e) => setQ(e.target.value)}
              placeholder="Search country, ID, ISO, tag…"
              style={{
                width: '100%', padding: '9px 12px 9px 34px', fontSize: 13, color: 'var(--text-1)',
                background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8,
                outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.15s',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-border)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
            {q && <button onClick={() => setQ('')} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-4)', cursor: 'pointer', fontSize: 12 }}>✕</button>}
          </div>
          {/* View toggle */}
          <div style={{ display: 'flex', gap: 1, background: 'var(--bg-surface)', borderRadius: 6, padding: 2, border: '1px solid var(--border)' }}>
            {([['table', '≡'], ['cards', '▦'], ['grid', '◻'], ['list', '☰']] as [ViewMode, string][]).map(([v, icon]) => (
              <button key={v} onClick={() => setView(v)} title={v} style={{
                width: 30, height: 28, borderRadius: 4, border: 'none', cursor: 'pointer',
                fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: view === v ? 'var(--accent)' : 'transparent',
                color: view === v ? '#fff' : 'var(--text-4)',
                transition: 'all 0.15s',
              }}>{icon}</button>
            ))}
          </div>
        </div>

        {/* Tier filter pills */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap', marginBottom: 6 }}>
          {TIERS.map((t) => {
            const active = tier === t;
            const tc = t === 'All' ? 'var(--warning)' : tierColor(t);
            return (
              <button key={t} onClick={() => setTier(t)} style={{
                padding: '4px 10px', borderRadius: 5, fontSize: 10, fontWeight: 600,
                color: active ? '#fff' : 'var(--text-3)',
                background: active ? tc : 'var(--bg-card)',
                border: `1px solid ${active ? tc : 'var(--border)'}`,
                cursor: 'pointer', transition: 'all 0.12s', whiteSpace: 'nowrap',
              }}>
                {t}
              </button>
            );
          })}
        </div>

        {/* Region filter pills */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap', marginBottom: 6 }}>
          {REGIONS.map((r) => {
            const active = region === r;
            return (
              <button key={r} onClick={() => setRegion(r)} style={{
                padding: '4px 10px', borderRadius: 5, fontSize: 10, fontWeight: 600,
                color: active ? '#fff' : 'var(--text-3)',
                background: active ? 'var(--accent)' : 'var(--bg-card)',
                border: `1px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
                cursor: 'pointer', transition: 'all 0.12s', whiteSpace: 'nowrap',
              }}>
                {r}
              </button>
            );
          })}
        </div>

        {/* Sort pills */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap' }}>
          {(['value', 'share', 'gdp', 'gdpPerCapita', 'pop', 'lifeExp', 'minWage', 'name'] as SortKey[]).map((s) => (
            <button key={s} onClick={() => { if (sort === s) setAsc(!asc); else { setSort(s); setAsc(false); } }} style={{
              padding: '4px 8px', borderRadius: 5, fontSize: 9.5, fontWeight: 600,
              color: sort === s ? '#fff' : 'var(--text-4)',
              background: sort === s ? 'var(--accent)' : 'transparent',
              border: 'none', cursor: 'pointer', transition: 'all 0.12s', whiteSpace: 'nowrap',
            }}>
              {SORT_LABELS[s]}{sort === s ? (asc ? ' ↑' : ' ↓') : ''}
            </button>
          ))}
          <span style={{ marginLeft: 'auto', fontSize: 10, color: 'var(--text-4)' }}>{list.length} results</span>
        </div>
      </div>

      {/* ── TABLE VIEW (CoinMarketCap style) ── */}
      {view === 'table' && (
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <table style={{ width: '100%', minWidth: 1100, borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr style={{ background: 'var(--bg-surface)' }}>
                {['#', 'Country', 'Tier', 'Region', 'Export Value', 'Share %', 'GDP', 'GDP/Capita', 'Population', 'Life Exp', 'Min Wage', 'Top Export'].map((h, i) => (
                  <th key={h} style={{
                    padding: '8px 10px', textAlign: i === 1 || i === 3 || i === 11 ? 'left' : 'right',
                    fontSize: 9, fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase',
                    letterSpacing: '0.05em', borderBottom: '1px solid var(--border)',
                    whiteSpace: 'nowrap',
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {list.map((g, idx) => {
                const tc = tierColor(g.tier);
                return (
                  <tr key={g.id} style={{
                    borderBottom: '1px solid var(--border)',
                    animation: `fade-in 0.2s ease-out ${Math.min(idx * 0.01, 0.3)}s both`,
                  }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-card-hover)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <td style={{ padding: '8px 10px', textAlign: 'right' }}>
                      <span className="mono" style={{ fontSize: 11, color: 'var(--text-4)', fontWeight: 600 }}>{g.rank}</span>
                    </td>
                    <td style={{ padding: '8px 10px', textAlign: 'left' }}>
                      <Link href={`/geos/${g.slug}`} style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
                        <span style={{ width: 6, height: 6, borderRadius: 2, background: tc, flexShrink: 0 }} />
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)' }}>{g.name}</div>
                          <div className="mono" style={{ fontSize: 9, color: 'var(--text-4)' }}>{g.id}</div>
                        </div>
                      </Link>
                    </td>
                    <td style={{ padding: '8px 10px', textAlign: 'left' }}>
                      <span style={{ fontSize: 9, fontWeight: 700, color: tc, background: tierBg(g.tier), padding: '2px 6px', borderRadius: 3 }}>{g.tier}</span>
                    </td>
                    <td style={{ padding: '8px 10px', textAlign: 'left' }}>
                      <span style={{ fontSize: 10, color: 'var(--text-3)' }}>{g.region.replace(' Africa', '')}</span>
                    </td>
                    <td style={{ padding: '8px 10px', textAlign: 'right' }}>
                      <span className="mono" style={{ fontWeight: 700, color: 'var(--text-1)' }}>{g.exportValue}</span>
                    </td>
                    <td style={{ padding: '8px 10px', textAlign: 'right' }}>
                      <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>{g.continentalShare}</span>
                    </td>
                    <td style={{ padding: '8px 10px', textAlign: 'right' }}>
                      <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>{g.gdp}</span>
                    </td>
                    <td style={{ padding: '8px 10px', textAlign: 'right' }}>
                      <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>{g.gdpPerCapita}</span>
                    </td>
                    <td style={{ padding: '8px 10px', textAlign: 'right' }}>
                      <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>{g.population}</span>
                    </td>
                    <td style={{ padding: '8px 10px', textAlign: 'right' }}>
                      <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>{findMetric(g, 'Life Exp')}</span>
                    </td>
                    <td style={{ padding: '8px 10px', textAlign: 'right' }}>
                      <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>{findMetric(g, 'Min Wage')}</span>
                    </td>
                    <td style={{ padding: '8px 10px', textAlign: 'left' }}>
                      <span style={{ fontSize: 10, color: 'var(--text-3)' }}>{g.top5Exports[0]?.name ?? '—'}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
          {list.length === 0 && <div style={{ textAlign: 'center', padding: 40, color: 'var(--text-4)', fontSize: 12 }}>No results</div>}
        </div>
      )}

      {/* ── CARDS VIEW ── */}
      {view === 'cards' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 8 }}>
          {list.map((g, idx) => {
            const tc = tierColor(g.tier);
            return (
              <Link key={g.id} href={`/geos/${g.slug}`} style={{ textDecoration: 'none', animation: `fade-in 0.2s ease-out ${Math.min(idx * 0.02, 0.4)}s both` }}>
                <div style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10, padding: 14,
                  borderTop: `2px solid ${tc}`, transition: 'all 0.15s', cursor: 'pointer', height: '100%',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-card-hover)'; e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                    <span className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-4)' }}>#{g.rank}</span>
                    <span style={{ fontSize: 8, fontWeight: 700, color: tc, background: tierBg(g.tier), padding: '2px 5px', borderRadius: 3 }}>{g.tier}</span>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-1)', marginBottom: 2 }}>{g.name}</div>
                  <div style={{ fontSize: 10, color: 'var(--text-4)', marginBottom: 10 }}>{g.region.replace(' Africa', '')}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                      <div style={{ fontSize: 9, color: 'var(--text-4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Export Value</div>
                      <div className="mono" style={{ fontSize: 15, fontWeight: 700, color: 'var(--accent)' }}>{g.exportValue}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 9, color: 'var(--text-4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Top Export</div>
                      <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-2)' }}>{g.top5Exports[0]?.name ?? '—'}</div>
                      <div className="mono" style={{ fontSize: 9, color: 'var(--text-4)', marginTop: 2 }}>{g.gdpPerCapita}/cap</div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* ── GRID VIEW (compact) ── */}
      {view === 'grid' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 6 }}>
          {list.map((g, idx) => {
            const tc = tierColor(g.tier);
            return (
              <Link key={g.id} href={`/geos/${g.slug}`} style={{ textDecoration: 'none', animation: `fade-in 0.15s ease-out ${Math.min(idx * 0.01, 0.3)}s both` }}>
                <div style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, padding: 10,
                  transition: 'all 0.12s', cursor: 'pointer', borderLeft: `2px solid ${tc}`,
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-card-hover)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg-card)')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 4 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: tc, flexShrink: 0 }} />
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-1)', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{g.name}</div>
                  </div>
                  <div className="mono" style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent)' }}>{g.exportValue}</div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* ── LIST VIEW (detailed rows) ── */}
      {view === 'list' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {list.map((g, idx) => {
            const tc = tierColor(g.tier);
            return (
              <Link key={g.id} href={`/geos/${g.slug}`} style={{ textDecoration: 'none', animation: `fade-in 0.15s ease-out ${Math.min(idx * 0.015, 0.3)}s both` }}>
                <div style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, padding: '10px 14px',
                  display: 'flex', alignItems: 'center', gap: 12, borderLeft: `2px solid ${tc}`,
                  transition: 'all 0.12s', cursor: 'pointer',
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-card-hover)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg-card)')}
                >
                  <span className="mono" style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-4)', width: 28, textAlign: 'right', flexShrink: 0 }}>{g.rank}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-1)' }}>{g.name}</span>
                      <span style={{ fontSize: 8, fontWeight: 700, color: tc, background: tierBg(g.tier), padding: '1px 5px', borderRadius: 3 }}>{g.tier}</span>
                      <span style={{ fontSize: 9, color: 'var(--text-4)' }}>{g.region.replace(' Africa', '')}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div className="mono" style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-1)' }}>{g.exportValue}</div>
                    <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 1 }}>
                      <span className="mono" style={{ fontSize: 9, color: 'var(--text-4)' }}>{g.gdp}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {list.length === 0 && <div style={{ textAlign: 'center', padding: 48, color: 'var(--text-4)', fontSize: 13 }}>No countries match your search.</div>}
    </div>
  );
}
