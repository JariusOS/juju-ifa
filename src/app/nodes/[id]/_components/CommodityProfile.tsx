'use client';

import Link from 'next/link';
import type { Commodity } from '@/data/types';
import { THEME, nodeClassColor, nodeClassSoft } from './theme';
import SectionCard from './SectionCard';
import MiniDonut from './MiniDonut';
import BarGroup from './BarGroup';

function parsePct(v: string | undefined): number {
  if (!v) return 0;
  const m = v.match(/([\d.]+)/);
  return m ? Math.min(100, Math.max(0, parseFloat(m[1]))) : 0;
}

function MetricCard({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div style={{ background: THEME.surface, border: `1px solid ${THEME.border}`, borderRadius: 8, padding: '8px 10px' }}>
      <div style={{ fontSize: 9, color: THEME.dim, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</div>
      <div className="mono" style={{ fontSize: 14, fontWeight: 700, color: accent || THEME.t1, marginTop: 2 }}>{value}</div>
    </div>
  );
}

function ConfidenceRing({ value, size = 48 }: { value: number; size?: number }) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  const color: string = value >= 80 ? 'var(--success)' : value >= 60 ? 'var(--warning)' : 'var(--danger)';
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--track)" strokeWidth={3} />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={3}
          strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span className="mono" style={{ fontSize: 11, fontWeight: 700, color }}>{value}%</span>
      </div>
    </div>
  );
}

function IntelligenceBriefing({ c }: { c: Commodity }) {
  const b = c.briefing;
  const clsColor: Record<string, string> = {
    BREAKING: 'var(--danger)', TREND: 'var(--info)', OPPORTUNITY: 'var(--success)', RISK: 'var(--warning)', 'UPCOMING EVENT': 'var(--purple)',
  };
  if (!b || !b.items.length) {
    return (
      <div id="sec-briefing" style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 8 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: THEME.accent, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Intelligence Briefing</div>
        <p style={{ fontSize: 12, color: THEME.muted, lineHeight: 1.6 }}>Briefing pending for {c.name}.</p>
      </div>
    );
  }
  return (
    <div id="sec-briefing" style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 8 }}>
      <div style={{ background: THEME.surface, border: `1px solid ${THEME.border}`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
        <div style={{ fontSize: 9, fontWeight: 700, color: THEME.accent, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>Top-10 Intelligence Briefing</div>
        <div style={{ fontSize: 14, fontWeight: 700, color: THEME.t1, marginBottom: 3 }}>{c.name}</div>
        <div style={{ fontSize: 10, color: THEME.muted }}>
          {b.persona} · {b.location} · {b.updated}
        </div>
      </div>
      {b.items.map((it, i) => (
          <div key={i} style={{ padding: '10px 0', borderTop: i === 0 ? 'none' : `1px solid ${THEME.border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <span className="mono" style={{ fontSize: 9, fontWeight: 700, color: THEME.accent, minWidth: 18 }}>{String(i + 1).padStart(2, '0')}</span>
            <span style={{ fontSize: 9, fontWeight: 700, color: clsColor[it.classification] || THEME.accent, textTransform: 'uppercase' }}>{it.classification}</span>
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: THEME.t1, marginBottom: 4, lineHeight: 1.4 }}>{it.title}</div>
          <div style={{ fontSize: 11, color: THEME.muted, lineHeight: 1.55, marginBottom: 2 }}><span style={{ color: THEME.t2, fontWeight: 600 }}>Core: </span>{it.core}</div>
          <div style={{ fontSize: 11, color: THEME.muted, lineHeight: 1.55, marginBottom: 2 }}><span style={{ color: 'var(--info)', fontWeight: 600 }}>Impact: </span>{it.impact}</div>
          <div style={{ fontSize: 11, color: THEME.muted, lineHeight: 1.55 }}><span style={{ color: 'var(--success)', fontWeight: 600 }}>Opportunity: </span>{it.opportunity}</div>
        </div>
      ))}
    </div>
  );
}

export default function CommodityProfile({ c }: { c: Commodity }) {
  const sections = c.sections || [];
  const tc = c.id.split('-')[1] || 'COM';
  const tColor = nodeClassColor(tc);

  return (
    <div style={{ paddingBottom: 40 }}>
      {/* Sticky nav */}
      <div style={{
        position: 'sticky', top: 48, zIndex: 40, background: 'color-mix(in srgb, var(--bg) 90%, transparent)',
        backdropFilter: 'blur(10px)', borderBottom: `1px solid ${THEME.border}`, padding: '6px 0',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Link href="/" style={{ color: THEME.accent, fontSize: 16, fontWeight: 600 }}>‹</Link>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: THEME.t1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</div>
            <div className="mono" style={{ fontSize: 9, color: THEME.dim }}>{c.id} · {c.rankLabel}</div>
          </div>
          <ConfidenceRing value={c.confidence} size={32} />
        </div>
        <div style={{ display: 'flex', gap: 4, marginTop: 6, overflowX: 'auto', scrollbarWidth: 'none' }}>
          {['overview', ...sections.map((s) => s.key), 'briefing'].map((key) => (
            <a key={key} href={`#sec-${key}`} style={{
              fontSize: 9.5, fontWeight: 600, color: THEME.muted, padding: '3px 8px', borderRadius: 4,
              background: key === 'overview' ? THEME.accentSoft : 'transparent', border: `1px solid ${THEME.border}`,
              textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.03em', whiteSpace: 'nowrap',
            }}>{key === 'overview' ? 'Overview' : key}</a>
          ))}
        </div>
      </div>

      {/* Hero */}
      <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, margin: '10px 0' }} id="sec-overview">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 10, border: `1.5px solid ${tColor}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', background: nodeClassSoft(tc), flexShrink: 0,
          }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: tColor }}>{c.name.charAt(0)}</span>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: tColor, background: nodeClassSoft(tc), padding: '2px 6px', borderRadius: 3 }}>{c.rankLabel}</span>
              <span className="mono" style={{ fontSize: 9, color: THEME.dim }}>{c.id}</span>
              {c.hsCode !== '—' && <span className="mono" style={{ fontSize: 9, color: THEME.dim }}>{c.hsCode}</span>}
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: THEME.t1, marginTop: 2 }}>{c.name}</div>
            <div style={{ fontSize: 10, color: THEME.muted, marginTop: 1 }}>{c.nodeClass}</div>
          </div>
          <ConfidenceRing value={c.confidence} size={50} />
        </div>

        {c.nodeTags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 10 }}>
            {c.nodeTags.map((t) => (
              <span key={t} style={{ fontSize: 9, color: THEME.muted, padding: '2px 6px', borderRadius: 4, border: `1px solid ${THEME.border}` }}>{t}</span>
            ))}
          </div>
        )}

        {c.flags && c.flags.length > 0 && (
          <div style={{ background: 'color-mix(in srgb, var(--danger) 8%, transparent)', border: `1px solid color-mix(in srgb, var(--danger) 20%, transparent)`, borderRadius: 6, padding: '6px 10px', marginBottom: 10 }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: 'var(--danger)' }}>⚑ {c.flags.length} flag{c.flags.length > 1 ? 's' : ''}</span>
            {c.flags.map((f, i) => <div key={i} style={{ fontSize: 10, color: 'var(--danger)', opacity: 0.8, marginTop: 2 }}>{f}</div>)}
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
          <MetricCard label="Africa Export" value={c.africaExportValue} accent={tColor} />
          <MetricCard label="Global Value" value={c.globalValue} />
          <MetricCard label="Africa Share" value={c.africaShare} />
          <MetricCard label="Price" value={c.referencePrice} />
          <MetricCard label="YoY" value={c.yoyPrice} accent={c.yoyPrice.startsWith('+') ? 'var(--success)' : 'var(--danger)'} />
          <MetricCard label="Weight" value={`${c.weight}/10`} />
        </div>

        {c.fingerprint && (
          <div style={{ marginTop: 10, padding: '8px 10px', borderRadius: 6, background: THEME.surface, border: `1px solid ${THEME.border}`, fontSize: 11, color: THEME.muted, lineHeight: 1.5, fontStyle: 'italic' }}>
            &ldquo;{c.fingerprint}&rdquo;
          </div>
        )}
      </div>

      {/* Live Overview */}
      <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <span style={{ width: 2, height: 12, borderRadius: 1, background: tColor }} />
          <span style={{ fontSize: 10, fontWeight: 700, color: THEME.t1, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Live Overview</span>
        </div>
        <div style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 8, color: THEME.dim, marginBottom: 4, textTransform: 'uppercase' }}>Top 3</div>
            <MiniDonut value={parsePct(c.production.top3.share)} color={tColor} label={c.production.top3.share || '—'} size={60} stroke={4} />
            <div style={{ fontSize: 8, color: THEME.muted, marginTop: 4, textAlign: 'center', lineHeight: 1.4 }}>{c.production.top3.countries.join(', ')}</div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 8, color: THEME.dim, marginBottom: 4, textTransform: 'uppercase' }}>Top 6</div>
            <MiniDonut value={parsePct(c.production.top6.share)} color={THEME.muted} label={c.production.top6.share || '—'} size={60} stroke={4} labelColor="var(--text-2)" />
            <div style={{ fontSize: 8, color: THEME.muted, marginTop: 4, textAlign: 'center', lineHeight: 1.4 }}>{c.production.top6.countries.join(', ')}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <BarGroup title="Exporters" color={tColor} data={c.exporters.map((e) => ({ label: e.flag || e.country.slice(0, 2).toUpperCase(), value: e.value, valueNum: e.valueNum }))} />
          <BarGroup title="Importers" color={THEME.muted} data={c.importers.map((e) => ({ label: e.flag || e.country.slice(0, 2).toUpperCase(), value: e.value, valueNum: e.valueNum }))} />
        </div>
      </div>

      {/* Sections */}
      {sections.map((s) => <SectionCard key={s.key} section={s} accentColor={tColor} />)}

      {/* Briefing */}
      <IntelligenceBriefing c={c} />

      {/* Entities */}
      {c.connectedEntities.length > 0 && (
        <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <span style={{ width: 2, height: 12, borderRadius: 1, background: 'var(--biz)' }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: THEME.t1, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Connected Entities</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {c.connectedEntities.map((e) => (
              <div key={e.name} style={{ display: 'flex', alignItems: 'center', gap: 6, background: THEME.surface, border: `1px solid ${THEME.border}`, borderRadius: 6, padding: '5px 8px' }}>
                <span style={{ fontSize: 11 }}>{e.flag || '●'}</span>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: THEME.t1 }}>{e.name}</div>
                  <div style={{ fontSize: 8, color: THEME.dim }}>{e.kind}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* News */}
      {c.news.length > 0 && (
        <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <span style={{ width: 2, height: 12, borderRadius: 1, background: 'var(--warning)' }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: THEME.t1, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Latest Intelligence</span>
          </div>
          {c.news.map((n, i) => (
            <div key={i} style={{ padding: '8px 0', borderTop: i === 0 ? 'none' : `1px solid ${THEME.border}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                <span className="mono" style={{ fontSize: 9, fontWeight: 700, color: n.impact === 'high' ? 'var(--danger)' : n.impact === 'medium' ? 'var(--warning)' : 'var(--success)', textTransform: 'uppercase' }}>{n.impact}</span>
                <span style={{ fontSize: 9, color: THEME.dim }}>{n.date}</span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: THEME.t1, marginBottom: 2 }}>{n.title}</div>
              <div style={{ fontSize: 11, color: THEME.muted, lineHeight: 1.5 }}>{n.summary}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
