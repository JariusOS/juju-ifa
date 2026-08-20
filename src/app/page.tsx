'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { commodities } from '@/data/commodities';
import { TYPE_LABEL } from '@/data/comids';
import { THEME, nodeClassColor, nodeClassSoft } from '@/app/nodes/[id]/_components/theme';

const TYPES = ['ALL', 'ENE', 'PMN', 'MET', 'CRM', 'FOR', 'MIN', 'AGR', 'MAR', 'CHM'];

type SortKey = 'rank' | 'value' | 'yoy' | 'conf' | 'name' | 'weight' | 'global';

const SORT_LABELS: Record<SortKey, string> = {
  rank: 'Rank', value: 'Export $', yoy: 'YoY %', conf: 'Confidence',
  name: 'Name', weight: 'Weight', global: 'Global $',
};

function typeOf(id: string): string {
  return id.split('-')[1] || '—';
}

function nodeClass(id: string): 'GEO' | 'COM' | 'BIZ' {
  const t = typeOf(id);
  if (t === 'GEO') return 'GEO';
  return 'COM';
}

function numOf(value: string): number {
  const m = value.match(/([\d.]+)\s*([BMK])/);
  if (!m) return 0;
  const n = parseFloat(m[1]);
  const u = m[2];
  return n * (u === 'B' ? 1e9 : u === 'M' ? 1e6 : 1e3);
}

function yoyNum(v: string): number {
  const m = v.match(/[+-]?([\d.]+)/);
  return m ? parseFloat(m[0]) : 0;
}

function confColor(c: number): string {
  if (c >= 80) return THEME.success;
  if (c >= 60) return THEME.warning;
  return THEME.danger;
}

function statusBorder(status: string): string {
  const s = status.toLowerCase();
  if (s === 'verified') return 'solid';
  if (s === 'corroborated') return 'double';
  if (s === 'reported') return 'dashed';
  if (s === 'estimated') return 'dotted';
  return 'solid';
}

export default function Index() {
  const [q, setQ] = useState('');
  const [type, setType] = useState('ALL');
  const [sort, setSort] = useState<SortKey>('rank');
  const [asc, setAsc] = useState(false);
  const [view, setView] = useState<'list' | 'grid'>('list');

  const counts = useMemo(() => {
    const c: Record<string, number> = { ALL: commodities.length };
    for (const cmod of commodities) {
      const t = typeOf(cmod.id);
      c[t] = (c[t] || 0) + 1;
    }
    return c;
  }, []);

  const list = useMemo(() => {
    const ql = q.trim().toLowerCase();
    const filtered = commodities
      .filter((c) => type === 'ALL' || typeOf(c.id) === type)
      .filter((c) =>
        !ql ||
        c.name.toLowerCase().includes(ql) ||
        c.id.toLowerCase().includes(ql) ||
        c.slug.includes(ql) ||
        c.nodeTags.some((t) => t.toLowerCase().includes(ql)) ||
        c.hsCode.toLowerCase().includes(ql) ||
        c.nodeClass.toLowerCase().includes(ql)
      );

    const sorted = [...filtered].sort((a, b) => {
      let cmp = 0;
      switch (sort) {
        case 'value': cmp = numOf(a.africaExportValue) - numOf(b.africaExportValue); break;
        case 'yoy': cmp = yoyNum(a.yoyPrice) - yoyNum(b.yoyPrice); break;
        case 'conf': cmp = a.confidence - b.confidence; break;
        case 'name': cmp = a.name.localeCompare(b.name); break;
        case 'weight': cmp = a.weight - b.weight; break;
        case 'global': cmp = numOf(a.globalValue) - numOf(b.globalValue); break;
        default: cmp = parseInt(a.id.split('-')[3] || '0') - parseInt(b.id.split('-')[3] || '0');
      }
      return asc ? cmp : -cmp;
    });
    return sorted;
  }, [q, type, sort, asc]);

  const totalExport = useMemo(() => {
    return commodities.reduce((s, c) => s + numOf(c.africaExportValue), 0);
  }, []);

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px 80px' }}>
      {/* Hero */}
      <div style={{ padding: '24px 0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4 }}>
          <span style={{ fontSize: 28, fontWeight: 900, color: THEME.white, letterSpacing: '-0.03em' }}>
            JUJU <span style={{ color: THEME.accent }}>IFA</span>
          </span>
        </div>
        <div style={{ fontSize: 12, color: THEME.dim, marginBottom: 16, maxWidth: 500, lineHeight: 1.5 }}>
          Commodity Intelligence Fusion Architecture — {commodities.length} African commodities ranked by export value across 10 sectors.
        </div>

        {/* Quick stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 16 }}>
          {[
            { label: 'Commodities', value: String(commodities.length), color: THEME.com },
            { label: 'Sectors', value: '10', color: THEME.info },
            { label: 'Total Export', value: `$${(totalExport / 1e9).toFixed(0)}B+`, color: THEME.accent },
            { label: 'Master Modules', value: String(commodities.filter(c => c.confidence >= 80).length), color: THEME.success },
          ].map((s) => (
            <div key={s.label} style={{
              background: THEME.surface, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: '10px 12px',
            }}>
              <div style={{ fontSize: 9, color: THEME.dim, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: s.color, fontFamily: 'ui-monospace, monospace', marginTop: 2 }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div style={{ position: 'relative', marginBottom: 12 }}>
          <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 14, color: THEME.dim }}>⌕</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name, ID, tag, HS code, or node class…"
            style={{
              width: '100%', padding: '12px 14px 12px 36px', fontSize: 14, color: THEME.white,
              background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 12,
              outline: 'none', transition: 'border-color 0.2s',
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = THEME.accentBorder)}
            onBlur={(e) => (e.currentTarget.style.borderColor = THEME.border)}
          />
          {q && (
            <button onClick={() => setQ('')} style={{
              position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
              background: 'none', border: 'none', color: THEME.dim, cursor: 'pointer', fontSize: 14,
            }}>✕</button>
          )}
        </div>

        {/* Type rails */}
        <div style={{ display: 'flex', gap: 5, overflowX: 'auto', paddingBottom: 4, scrollbarWidth: 'none' }}>
          {TYPES.map((t) => {
            const active = type === t;
            const tColor = t === 'ALL' ? THEME.accent : nodeClassColor(t);
            return (
              <button key={t} onClick={() => setType(t)} style={{
                flex: '0 0 auto', padding: '6px 12px', borderRadius: 8, fontSize: 10.5, fontWeight: 700,
                color: active ? '#000' : THEME.muted,
                background: active ? tColor : THEME.surface,
                border: `1px solid ${active ? tColor : THEME.border}`, cursor: 'pointer',
                transition: 'all 0.15s', whiteSpace: 'nowrap',
              }}>
                {t === 'ALL' ? 'ALL' : `${t}`}
                <span style={{ opacity: 0.7, fontWeight: 600, marginLeft: 4 }}>{counts[t] || 0}</span>
              </button>
            );
          })}
        </div>

        {/* Sort controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 9, color: THEME.dim, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Sort</span>
          {(['rank', 'value', 'yoy', 'conf', 'name', 'weight', 'global'] as SortKey[]).map((s) => (
            <button key={s} onClick={() => { if (sort === s) setAsc(!asc); else { setSort(s); setAsc(false); } }} style={{
              padding: '4px 10px', borderRadius: 6, fontSize: 9.5, fontWeight: 700,
              color: sort === s ? '#000' : THEME.dim,
              background: sort === s ? THEME.accent : THEME.surface,
              border: `1px solid ${sort === s ? THEME.accent : THEME.border}`,
              cursor: 'pointer', transition: 'all 0.15s', whiteSpace: 'nowrap',
            }}>
              {SORT_LABELS[s]}{sort === s ? (asc ? ' ↑' : ' ↓') : ''}
            </button>
          ))}
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
            <button onClick={() => setView('list')} style={{
              padding: '4px 8px', borderRadius: 6, fontSize: 11, cursor: 'pointer',
              background: view === 'list' ? THEME.accent : 'none', color: view === 'list' ? '#000' : THEME.dim,
              border: `1px solid ${view === 'list' ? THEME.accent : THEME.border}`,
            }}>≡</button>
            <button onClick={() => setView('grid')} style={{
              padding: '4px 8px', borderRadius: 6, fontSize: 11, cursor: 'pointer',
              background: view === 'grid' ? THEME.accent : 'none', color: view === 'grid' ? '#000' : THEME.dim,
              border: `1px solid ${view === 'grid' ? THEME.accent : THEME.border}`,
            }}>▦</button>
            <span style={{ fontSize: 10, color: THEME.dim, display: 'flex', alignItems: 'center', marginLeft: 6 }}>
              {list.length} shown
            </span>
          </div>
        </div>
      </div>

      {/* Feed — list view */}
      {view === 'list' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {list.map((c, idx) => {
            const rank = c.id.split('-')[3];
            const tc = typeOf(c.id);
            const tColor = nodeClassColor(tc);
            const flagged = !!c.flags?.length;
            return (
              <Link key={c.id} href={`/nodes/${c.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                  background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 12, padding: '10px 14px',
                  display: 'flex', alignItems: 'center', gap: 12,
                  borderLeft: `3px solid ${tColor}`,
                  transition: 'background 0.15s, border-color 0.15s',
                  cursor: 'pointer',
                  animation: `fade-in 0.2s ease-out ${Math.min(idx * 0.02, 0.4)}s both`,
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = THEME.cardHover; e.currentTarget.style.borderColor = tColor + '40'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = THEME.card; e.currentTarget.style.borderColor = THEME.border; }}
                >
                  {/* Rank */}
                  <div style={{ width: 32, textAlign: 'center', flexShrink: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 900, color: tColor, fontFamily: 'ui-monospace, monospace' }}>#{rank}</div>
                  </div>

                  {/* Name + meta */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{
                        fontSize: 13.5, fontWeight: 700, color: THEME.white,
                        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                      }}>{c.name}</span>
                      <span style={{
                        fontSize: 8, fontWeight: 800, color: tColor,
                        background: nodeClassSoft(tc), padding: '2px 5px', borderRadius: 4,
                        flexShrink: 0,
                      }}>{tc}</span>
                      {flagged && <span style={{ fontSize: 8, color: THEME.danger, flexShrink: 0 }}>⚑</span>}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 2 }}>
                      <span style={{ fontSize: 9, color: THEME.dim, fontFamily: 'ui-monospace, monospace' }}>{c.id}</span>
                      <span style={{ fontSize: 9, color: THEME.faint }}>·</span>
                      <span style={{ fontSize: 9, color: THEME.dim }}>{c.hsCode}</span>
                    </div>
                    {c.nodeTags.length > 0 && (
                      <div style={{ display: 'flex', gap: 3, marginTop: 4, overflow: 'hidden' }}>
                        {c.nodeTags.slice(0, 3).map((t) => (
                          <span key={t} style={{
                            fontSize: 8, color: tColor, background: nodeClassSoft(tc),
                            padding: '1px 5px', borderRadius: 3,
                          }}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Metrics */}
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: THEME.white, fontFamily: 'ui-monospace, monospace' }}>
                      {c.africaExportValue}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 6, marginTop: 2 }}>
                      <span style={{ fontSize: 9, color: THEME.dim }}>{c.africaShare}</span>
                      <span style={{
                        fontSize: 9, fontWeight: 700, fontFamily: 'ui-monospace, monospace',
                        color: c.yoyPrice.startsWith('+') ? THEME.success : THEME.danger,
                      }}>{c.yoyPrice}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4, marginTop: 3 }}>
                      <span style={{ width: 5, height: 5, borderRadius: 3, background: confColor(c.confidence) }} />
                      <span style={{ fontSize: 8.5, color: THEME.dim, fontFamily: 'ui-monospace, monospace' }}>
                        {c.confidence}%
                      </span>
                      <span style={{ fontSize: 8, color: THEME.faint, fontFamily: 'ui-monospace, monospace' }}>
                        W{c.weight}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        /* Grid view */
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 8 }}>
          {list.map((c, idx) => {
            const rank = c.id.split('-')[3];
            const tc = typeOf(c.id);
            const tColor = nodeClassColor(tc);
            return (
              <Link key={c.id} href={`/nodes/${c.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                  background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 12, padding: 14,
                  borderTop: `3px solid ${tColor}`, transition: 'all 0.15s', cursor: 'pointer',
                  animation: `fade-in 0.2s ease-out ${Math.min(idx * 0.02, 0.4)}s both`,
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = THEME.cardHover; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = THEME.card; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <div>
                      <span style={{ fontSize: 8, fontWeight: 800, color: tColor, background: nodeClassSoft(tc), padding: '2px 6px', borderRadius: 4 }}>
                        #{rank} {tc}
                      </span>
                    </div>
                    <span style={{ fontSize: 9, color: THEME.dim, fontFamily: 'ui-monospace, monospace' }}>{c.hsCode}</span>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: THEME.white, marginBottom: 4 }}>{c.name}</div>
                  <div style={{ fontSize: 9, color: THEME.dim, fontFamily: 'ui-monospace, monospace', marginBottom: 8 }}>{c.id}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 15, fontWeight: 800, color: THEME.accent, fontFamily: 'ui-monospace, monospace' }}>{c.africaExportValue}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: c.yoyPrice.startsWith('+') ? THEME.success : THEME.danger }}>{c.yoyPrice}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 6 }}>
                    <span style={{ width: 5, height: 5, borderRadius: 3, background: confColor(c.confidence) }} />
                    <span style={{ fontSize: 9, color: THEME.dim }}>{c.confidence}% confidence</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {list.length === 0 && (
        <div style={{ textAlign: 'center', padding: 48, color: THEME.dim, fontSize: 13 }}>
          No commodities match your search.
        </div>
      )}
    </div>
  );
}
