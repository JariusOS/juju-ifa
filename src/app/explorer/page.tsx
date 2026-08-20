'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { commodities } from '@/data/commodities';
import { TYPE_LABEL } from '@/data/comids';
import { nodeClassColor, nodeClassSoft } from '@/app/nodes/[id]/_components/theme';

const TYPES = ['ALL', 'ENE', 'PMN', 'MET', 'CRM', 'FOR', 'MIN', 'AGR', 'MAR', 'CHM'];

type SortKey = 'rank' | 'value' | 'yoy' | 'conf' | 'name' | 'weight' | 'global' | 'price' | 'africaShare' | 'reserve';
type ViewMode = 'table' | 'cards' | 'grid' | 'list';

const SORT_LABELS: Record<SortKey, string> = {
  rank: 'Rank', value: 'Export $', price: 'Price', africaShare: 'Africa %', reserve: 'Reserves', yoy: 'YoY', conf: 'Conf', name: 'Name', weight: 'Weight', global: 'Global $',
};

function typeOf(id: string) { return id.split('-')[1] || '—'; }
function numOf(v: string) { const m = v.match(/([\d.]+)\s*([BMK])/); if (!m) return 0; const n = parseFloat(m[1]); return n * (m[2] === 'B' ? 1e9 : m[2] === 'M' ? 1e6 : 1e3); }
function yoyNum(v: string) { const m = v.match(/[+-]?([\d.]+)/); return m ? parseFloat(m[0]) : 0; }

export default function Index() {
  const [q, setQ] = useState('');
  const [type, setType] = useState('ALL');
  const [sort, setSort] = useState<SortKey>('rank');
  const [asc, setAsc] = useState(false);
  const [view, setView] = useState<ViewMode>('table');

  const list = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return commodities
      .filter((c) => type === 'ALL' || typeOf(c.id) === type)
      .filter((c) => !ql || c.name.toLowerCase().includes(ql) || c.id.toLowerCase().includes(ql) || c.hsCode.toLowerCase().includes(ql) || c.nodeTags.some((t) => t.toLowerCase().includes(ql)))
      .sort((a, b) => {
        let cmp = 0;
        switch (sort) {
          case 'value': cmp = numOf(a.africaExportValue) - numOf(b.africaExportValue); break;
          case 'price': cmp = numOf(a.referencePrice) - numOf(b.referencePrice); break;
          case 'africaShare': cmp = numOf(a.africaShare) - numOf(b.africaShare); break;
          case 'reserve': cmp = numOf(a.snapshot.africanReserveValue) - numOf(b.snapshot.africanReserveValue); break;
          case 'yoy': cmp = yoyNum(a.yoyPrice) - yoyNum(b.yoyPrice); break;
          case 'conf': cmp = a.confidence - b.confidence; break;
          case 'name': cmp = a.name.localeCompare(b.name); break;
          case 'weight': cmp = a.weight - b.weight; break;
          case 'global': cmp = numOf(a.globalValue) - numOf(b.globalValue); break;
          default: cmp = parseInt(a.id.split('-')[3] || '0') - parseInt(b.id.split('-')[3] || '0');
        }
        return asc ? cmp : -cmp;
      });
  }, [q, type, sort, asc]);

  const totalExport = useMemo(() => commodities.reduce((s, c) => s + numOf(c.africaExportValue), 0), []);

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px 80px' }}>
      {/* Header */}
      <div style={{ padding: '20px 0 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-1)', letterSpacing: '-0.02em' }}>
              Commodity Index
            </h1>
            <p style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>
              {commodities.length} African commodities · ${(totalExport / 1e9).toFixed(0)}B+ total export value
            </p>
          </div>
        </div>

        {/* Search + View row */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10 }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', fontSize: 13, color: 'var(--text-4)' }}>⌕</span>
            <input value={q} onChange={(e) => setQ(e.target.value)}
              placeholder="Search commodity, ID, tag, HS code…"
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

        {/* Type filter pills */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap' }}>
          {TYPES.map((t) => {
            const active = type === t;
            const tc = t === 'ALL' ? 'var(--accent)' : nodeClassColor(t);
            return (
              <button key={t} onClick={() => setType(t)} style={{
                padding: '4px 10px', borderRadius: 5, fontSize: 10, fontWeight: 600,
                color: active ? '#fff' : 'var(--text-3)',
                background: active ? tc : 'var(--bg-card)',
                border: `1px solid ${active ? tc : 'var(--border)'}`,
                cursor: 'pointer', transition: 'all 0.12s', whiteSpace: 'nowrap',
              }}>
                {t === 'ALL' ? 'All' : t}
              </button>
            );
          })}
        </div>

        {/* Sort pills + results count */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap', marginTop: 6 }}>
          {(['rank', 'value', 'price', 'africaShare', 'yoy', 'conf', 'name'] as SortKey[]).map((s) => (
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
            <table style={{ width: '100%', minWidth: 900, borderCollapse: 'collapse', fontSize: 12 }}>
              <thead>
                <tr style={{ background: 'var(--bg-surface)' }}>
                  {['#', 'Commodity', 'Sector', 'Africa Export', 'Global Value', 'Africa Share', 'YoY', 'Price', 'Conf', 'W'].map((h, i) => (
                    <th key={h} style={{
                      padding: '8px 10px', textAlign: i === 1 || i === 2 ? 'left' : 'right',
                      fontSize: 9, fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase',
                      letterSpacing: '0.05em', borderBottom: '1px solid var(--border)',
                      whiteSpace: 'nowrap',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {list.map((c, idx) => {
                  const rank = parseInt(c.id.split('-')[3] || '0');
                  const tc = typeOf(c.id);
                  const tColor = nodeClassColor(tc);
                  return (
                    <tr key={c.id} style={{
                      borderBottom: '1px solid var(--border)',
                      animation: `fade-in 0.2s ease-out ${Math.min(idx * 0.01, 0.3)}s both`,
                    }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-card-hover)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                    >
                      <td style={{ padding: '8px 10px', textAlign: 'right' }}>
                        <span className="mono" style={{ fontSize: 11, color: 'var(--text-4)', fontWeight: 600 }}>{rank}</span>
                      </td>
                      <td style={{ padding: '8px 10px', textAlign: 'left' }}>
                        <Link href={`/nodes/${c.id}`} style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
                          <span style={{ width: 6, height: 6, borderRadius: 2, background: tColor, flexShrink: 0 }} />
                          <div>
                            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)' }}>{c.name}</div>
                            <div className="mono" style={{ fontSize: 9, color: 'var(--text-4)' }}>{c.id}</div>
                          </div>
                        </Link>
                      </td>
                      <td style={{ padding: '8px 10px', textAlign: 'left' }}>
                        <span style={{ fontSize: 9, fontWeight: 700, color: tColor, background: nodeClassSoft(tc), padding: '2px 6px', borderRadius: 3 }}>{tc}</span>
                      </td>
                      <td style={{ padding: '8px 10px', textAlign: 'right' }}>
                        <span className="mono" style={{ fontWeight: 700, color: 'var(--text-1)' }}>{c.africaExportValue}</span>
                      </td>
                      <td style={{ padding: '8px 10px', textAlign: 'right' }}>
                        <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>{c.globalValue}</span>
                      </td>
                      <td style={{ padding: '8px 10px', textAlign: 'right' }}>
                        <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>{c.africaShare}</span>
                      </td>
                      <td style={{ padding: '8px 10px', textAlign: 'right' }}>
                        <span className="mono" style={{ fontSize: 11, fontWeight: 600, color: c.yoyPrice.startsWith('+') ? 'var(--success)' : 'var(--danger)' }}>{c.yoyPrice}</span>
                      </td>
                      <td style={{ padding: '8px 10px', textAlign: 'right' }}>
                        <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>{c.referencePrice}</span>
                      </td>
                      <td style={{ padding: '8px 10px', textAlign: 'right' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4 }}>
                          <span style={{ width: 4, height: 4, borderRadius: 2, background: c.confidence >= 80 ? 'var(--success)' : c.confidence >= 60 ? 'var(--warning)' : 'var(--danger)' }} />
                          <span className="mono" style={{ fontSize: 10, color: 'var(--text-3)' }}>{c.confidence}</span>
                        </div>
                      </td>
                      <td style={{ padding: '8px 10px', textAlign: 'right' }}>
                        <span className="mono" style={{ fontSize: 10, color: 'var(--text-4)' }}>{c.weight}</span>
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
          {list.map((c, idx) => {
            const rank = parseInt(c.id.split('-')[3] || '0');
            const tc = typeOf(c.id);
            const tColor = nodeClassColor(tc);
            return (
              <Link key={c.id} href={`/nodes/${c.id}`} style={{ textDecoration: 'none', animation: `fade-in 0.2s ease-out ${Math.min(idx * 0.02, 0.4)}s both` }}>
                <div style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10, padding: 14,
                  borderTop: `2px solid ${tColor}`, transition: 'all 0.15s', cursor: 'pointer', height: '100%',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-card-hover)'; e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                    <span className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-4)' }}>#{rank}</span>
                    <span style={{ fontSize: 8, fontWeight: 700, color: tColor, background: nodeClassSoft(tc), padding: '2px 5px', borderRadius: 3 }}>{tc}</span>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-1)', marginBottom: 2 }}>{c.name}</div>
                  <div className="mono" style={{ fontSize: 9, color: 'var(--text-4)', marginBottom: 10 }}>{c.hsCode}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                      <div style={{ fontSize: 9, color: 'var(--text-4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Africa Export</div>
                      <div className="mono" style={{ fontSize: 15, fontWeight: 700, color: 'var(--accent)' }}>{c.africaExportValue}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: c.yoyPrice.startsWith('+') ? 'var(--success)' : 'var(--danger)' }}>{c.yoyPrice}</div>
                      <div className="mono" style={{ fontSize: 9, color: 'var(--text-4)', marginTop: 2 }}>{c.confidence}% conf</div>
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
          {list.map((c, idx) => {
            const tc = typeOf(c.id);
            const tColor = nodeClassColor(tc);
            return (
              <Link key={c.id} href={`/nodes/${c.id}`} style={{ textDecoration: 'none', animation: `fade-in 0.15s ease-out ${Math.min(idx * 0.01, 0.3)}s both` }}>
                <div style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, padding: 10,
                  transition: 'all 0.12s', cursor: 'pointer', borderLeft: `2px solid ${tColor}`,
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-card-hover)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg-card)')}
                >
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-1)', marginBottom: 4, lineHeight: 1.3 }}>{c.name}</div>
                  <div className="mono" style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent)' }}>{c.africaExportValue}</div>
                  <div className="mono" style={{ fontSize: 9, color: c.yoyPrice.startsWith('+') ? 'var(--success)' : 'var(--danger)', marginTop: 2 }}>{c.yoyPrice}</div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* ── LIST VIEW (detailed rows) ── */}
      {view === 'list' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {list.map((c, idx) => {
            const rank = parseInt(c.id.split('-')[3] || '0');
            const tc = typeOf(c.id);
            const tColor = nodeClassColor(tc);
            return (
              <Link key={c.id} href={`/nodes/${c.id}`} style={{ textDecoration: 'none', animation: `fade-in 0.15s ease-out ${Math.min(idx * 0.015, 0.3)}s both` }}>
                <div style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, padding: '10px 14px',
                  display: 'flex', alignItems: 'center', gap: 12, borderLeft: `2px solid ${tColor}`,
                  transition: 'all 0.12s', cursor: 'pointer',
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-card-hover)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg-card)')}
                >
                  <span className="mono" style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-4)', width: 28, textAlign: 'right', flexShrink: 0 }}>{rank}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-1)' }}>{c.name}</span>
                      <span style={{ fontSize: 8, fontWeight: 700, color: tColor, background: nodeClassSoft(tc), padding: '1px 5px', borderRadius: 3 }}>{tc}</span>
                      {c.flags?.length ? <span style={{ fontSize: 8, color: 'var(--danger)' }}>⚑</span> : null}
                    </div>
                    <div className="mono" style={{ fontSize: 9, color: 'var(--text-4)', marginTop: 1 }}>{c.id} · {c.hsCode}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div className="mono" style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-1)' }}>{c.africaExportValue}</div>
                    <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 1 }}>
                      <span className="mono" style={{ fontSize: 9, color: c.yoyPrice.startsWith('+') ? 'var(--success)' : 'var(--danger)' }}>{c.yoyPrice}</span>
                      <span className="mono" style={{ fontSize: 9, color: 'var(--text-4)' }}>{c.confidence}%</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {list.length === 0 && <div style={{ textAlign: 'center', padding: 48, color: 'var(--text-4)', fontSize: 13 }}>No commodities match your search.</div>}
    </div>
  );
}
