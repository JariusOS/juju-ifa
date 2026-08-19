'use client';

import { useMemo, useState } from 'react';
import { commodities } from '@/data/commodities';
import { TYPE_LABEL } from '@/data/comids';

const TYPES = ['ALL', 'ENE', 'PMN', 'MET', 'CRM', 'FOR', 'MIN', 'AGR', 'MAR', 'CHM'];

function typeOf(id: string): string {
  return id.split('-')[1] || '—';
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

export default function Index() {
  const [q, setQ] = useState('');
  const [type, setType] = useState('ALL');
  const [sort, setSort] = useState<'rank' | 'value' | 'yoy' | 'conf'>('rank');

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
    return commodities
      .filter((c) => type === 'ALL' || typeOf(c.id) === type)
      .filter((c) =>
        !ql ||
        c.name.toLowerCase().includes(ql) ||
        c.id.toLowerCase().includes(ql) ||
        c.slug.includes(ql) ||
        c.nodeTags.some((t) => t.toLowerCase().includes(ql)) ||
        c.hsCode.toLowerCase().includes(ql)
      )
      .sort((a, b) => {
        if (sort === 'value') return numOf(b.africaExportValue) - numOf(a.africaExportValue);
        if (sort === 'yoy') return yoyNum(b.yoyPrice) - yoyNum(a.yoyPrice);
        if (sort === 'conf') return b.confidence - a.confidence;
        return parseInt(b.id.split('-')[3] || '0') - parseInt(a.id.split('-')[3] || '0');
      });
  }, [q, type, sort]);

  return (
    <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 16px 60px' }}>
      {/* Header + search */}
      <div style={{ padding: '18px 0 12px' }}>
        <div style={{ fontSize: 26, fontWeight: 900, color: '#F1F5F9', letterSpacing: '-0.02em' }}>
          JUJU <span style={{ color: '#FF6B00' }}>Commodity Index</span>
        </div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>
          {commodities.length} African commodities · ranked by export value
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by name, ID, tag, HS code…"
          style={{
            width: '100%', marginTop: 12, padding: '12px 14px', fontSize: 14, color: '#fff',
            background: '#151515', border: '1px solid rgba(255,107,0,0.25)', borderRadius: 12,
            outline: 'none',
          }}
        />
        {/* Type rails */}
        <div style={{ display: 'flex', gap: 6, marginTop: 12, overflowX: 'auto', paddingBottom: 4 }}>
          {TYPES.map((t) => {
            const active = type === t;
            return (
              <button key={t} onClick={() => setType(t)} style={{
                flex: '0 0 auto', padding: '6px 12px', borderRadius: 999, fontSize: 10.5, fontWeight: 800,
                color: active ? '#000' : 'rgba(255,255,255,0.6)',
                background: active ? '#FF6B00' : '#151515',
                border: '1px solid ' + (active ? '#FF6B00' : 'rgba(255,255,255,0.08)'), cursor: 'pointer',
              }}>
                {t === 'ALL' ? 'ALL' : `${t} · ${TYPE_LABEL[t as keyof typeof TYPE_LABEL]?.split(' ')[0]}`}
                <span style={{ opacity: 0.7, fontWeight: 600 }}> {counts[t] || 0}</span>
              </button>
            );
          })}
        </div>
        {/* Sort */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10 }}>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sort</span>
          {(['rank', 'value', 'yoy', 'conf'] as const).map((s) => (
            <button key={s} onClick={() => setSort(s)} style={{
              padding: '4px 10px', borderRadius: 999, fontSize: 10, fontWeight: 700,
              color: sort === s ? '#000' : 'rgba(255,255,255,0.6)',
              background: sort === s ? '#FF6B00' : '#151515', border: '1px solid rgba(255,255,255,0.08)', cursor: 'pointer',
            }}>
              {s.toUpperCase()}
            </button>
          ))}
          <span style={{ marginLeft: 'auto', fontSize: 10.5, color: 'rgba(255,255,255,0.4)' }}>{list.length} shown</span>
        </div>
      </div>

      {/* Feed */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {list.map((c) => {
          const rank = c.id.split('-')[3];
          const confColor = c.confidence >= 80 ? '#22C55E' : c.confidence >= 60 ? '#F59E0B' : '#EF4444';
          const flagged = !!c.flags?.length;
          return (
            <a key={c.id} href={`/nodes/${c.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                background: '#151515', border: '1px solid rgba(255,107,0,0.1)', borderRadius: 14, padding: 12,
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <div style={{ width: 34, textAlign: 'center' }}>
                  <div style={{ fontSize: 13, fontWeight: 900, color: '#FF6B00', fontFamily: 'ui-monospace, monospace' }}>{rank}</div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 13.5, fontWeight: 800, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</span>
                    <span style={{ fontSize: 8.5, fontWeight: 800, color: typeOf(c.id) === 'CRM' ? '#38BDF8' : '#A78BFA', background: 'rgba(255,255,255,0.06)', padding: '2px 5px', borderRadius: 4 }}>{typeOf(c.id)}</span>
                    {flagged && <span style={{ fontSize: 8.5, fontWeight: 800, color: '#EF4444', background: 'rgba(239,68,68,0.12)', padding: '2px 5px', borderRadius: 4 }}>⚑</span>}
                  </div>
                  <div style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.35)', fontFamily: 'ui-monospace, monospace', marginTop: 1 }}>{c.id}</div>
                  <div style={{ display: 'flex', gap: 4, marginTop: 5, overflow: 'hidden' }}>
                    {c.nodeTags.slice(0, 3).map((t) => (
                      <span key={t} style={{ fontSize: 8, color: '#FF6B00', background: 'rgba(255,107,0,0.08)', padding: '2px 6px', borderRadius: 4 }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 14, fontWeight: 900, color: '#fff', fontFamily: 'ui-monospace, monospace' }}>{c.africaExportValue}</div>
                  <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>Africa share {c.africaShare}</div>
                  <div style={{ fontSize: 9, fontWeight: 700, color: c.yoyPrice.startsWith('+') ? '#22C55E' : '#EF4444' }}>{c.yoyPrice}</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4, marginTop: 4 }}>
                    <span style={{ width: 6, height: 6, borderRadius: 3, background: confColor }} />
                    <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', fontFamily: 'ui-monospace, monospace' }}>{c.confidence}%</span>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
        {list.length === 0 && (
          <div style={{ textAlign: 'center', padding: 40, color: 'rgba(255,255,255,0.35)', fontSize: 13 }}>No commodities match your search.</div>
        )}
      </div>
    </div>
  );
}