'use client';

import Link from 'next/link';
import type { Commodity } from '@/data/types';
import { THEME } from './theme';
import SectionCard from './SectionCard';
import MiniDonut from './MiniDonut';
import BarGroup from './BarGroup';

function parsePct(v: string | undefined): number {
  if (!v) return 0;
  const m = v.match(/([\d.]+)/);
  return m ? Math.min(100, Math.max(0, parseFloat(m[1]))) : 0;
}

function SectionAnchor({ id, label }: { id: string; label: string }) {
  return (
    <a href={`#sec-${id}`} style={{
      flex: '0 0 auto', fontSize: 10.5, fontWeight: 700, color: THEME.white,
      padding: '6px 12px', borderRadius: 999, background: THEME.surface,
      border: `1px solid ${THEME.border}`, textDecoration: 'none', letterSpacing: '0.02em',
      textTransform: 'uppercase',
    }}>{label}</a>
  );
}

function Metric({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div style={{ background: THEME.surface, border: `1px solid ${THEME.border}`, borderRadius: 12, padding: '10px 12px' }}>
      <div style={{ fontSize: 9, color: THEME.muted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
      <div style={{ fontSize: 16, fontWeight: 800, color: accent || THEME.white, fontFamily: 'ui-monospace, monospace', marginTop: 2 }}>{value}</div>
    </div>
  );
}

function IntelligenceBriefing({ c }: { c: Commodity }) {
  const b = c.briefing;
  if (!b || !b.items.length) {
    return (
      <div id="sec-briefing" style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 16, padding: 16, marginBottom: 12 }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: THEME.white, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
          Intelligence Briefing
        </div>
        <p style={{ fontSize: 12, color: THEME.muted }}>
          A curated Top-10 Intelligence Briefing for {c.name} will be published here once its module briefing is authored.
        </p>
      </div>
    );
  }
  const clsColor: Record<string, string> = {
    BREAKING: '#EF4444', TREND: '#3B82F6', OPPORTUNITY: '#22C55E', RISK: '#F59E0B', 'UPCOMING EVENT': '#A78BFA',
  };
  return (
    <div id="sec-briefing" style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 16, padding: 16, marginBottom: 12 }}>
      <div style={{ fontSize: 11, fontWeight: 800, color: THEME.accent, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        Intelligence Briefing: {c.name} | {b.location}
      </div>
      <div style={{ fontSize: 10.5, color: THEME.muted, margin: '4px 0 12px' }}>
        Target Lens: {b.persona} · Updated: {b.updated}
      </div>
      {b.items.map((it, i) => (
        <div key={i} style={{ padding: '12px 0', borderTop: `1px solid ${THEME.borderSoft}` }}>
          <div style={{ fontSize: 12.5, fontWeight: 800, color: THEME.white, marginBottom: 4 }}>
            {i + 1}. {it.title}
          </div>
          <div style={{ fontSize: 10, marginBottom: 6 }}>
            <span style={{ color: THEME.muted, fontWeight: 700 }}>Classification: </span>
            <span style={{ color: clsColor[it.classification] || THEME.accent, fontWeight: 800 }}>{it.classification}</span>
          </div>
          <div style={{ fontSize: 11.5, color: THEME.muted, lineHeight: 1.55, marginBottom: 3 }}>
            <span style={{ color: THEME.white, fontWeight: 700 }}>Core Brief: </span>{it.core}
          </div>
          <div style={{ fontSize: 11.5, color: THEME.muted, lineHeight: 1.55, marginBottom: 3 }}>
            <span style={{ color: THEME.white, fontWeight: 700 }}>Strategic Impact: </span>{it.impact}
          </div>
          <div style={{ fontSize: 11.5, color: THEME.muted, lineHeight: 1.55 }}>
            <span style={{ color: THEME.success, fontWeight: 700 }}>Opportunity: </span>{it.opportunity}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CommodityProfile({ c }: { c: Commodity }) {
  const sections = c.sections || [];

  return (
    <div style={{ paddingBottom: 40 }}>
      {/* Sticky identity bar */}
      <div style={{
        position: 'sticky', top: 56, zIndex: 40, background: THEME.bg,
        borderBottom: `1px solid ${THEME.borderSoft}`, padding: '10px 0',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Link href="/" style={{ color: THEME.accent, fontSize: 20, textDecoration: 'none', fontWeight: 700 }}>‹</Link>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: THEME.white, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</div>
            <div style={{ fontSize: 9.5, color: THEME.muted, fontFamily: 'ui-monospace, monospace' }}>{c.id} · {c.rankLabel}</div>
          </div>
          <span style={{ fontSize: 10, fontWeight: 800, color: c.confidence >= 80 ? THEME.success : c.confidence >= 60 ? '#F59E0B' : '#EF4444', background: THEME.surface, padding: '3px 8px', borderRadius: 999, border: `1px solid ${THEME.border}` }}>
            {c.confidence}%
          </span>
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 8, overflowX: 'auto', scrollbarWidth: 'none' }}>
          <SectionAnchor id="overview" label="Overview" />
          {sections.map((s) => <SectionAnchor key={s.key} id={s.key} label={s.title} />)}
          <SectionAnchor id="briefing" label="Briefing" />
        </div>
      </div>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(160deg, #1a1a1a 0%, #101010 100%)', border: `1px solid ${THEME.border}`, borderRadius: 18, padding: 18, margin: '12px 0' }} id="sec-overview">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
          <div style={{
            width: 54, height: 54, borderRadius: 16, border: `1px solid ${THEME.accent}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', background: THEME.surface, flexShrink: 0,
          }}>
            <span style={{ fontSize: 22, fontWeight: 900, color: THEME.accent }}>{c.name.charAt(0)}</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 10, fontWeight: 800, color: THEME.accent, background: THEME.accentSoft, padding: '2px 8px', borderRadius: 999 }}>{c.rankLabel}</span>
              <span style={{ fontSize: 9.5, color: THEME.muted, fontFamily: 'ui-monospace, monospace' }}>{c.id}</span>
              {c.hsCode !== '—' && <span style={{ fontSize: 9.5, color: THEME.muted, fontFamily: 'ui-monospace, monospace' }}>{c.hsCode}</span>}
            </div>
            <div style={{ fontSize: 24, fontWeight: 900, color: THEME.white, letterSpacing: '-0.02em', marginTop: 4 }}>{c.name}</div>
            <div style={{ fontSize: 10.5, color: THEME.dim, marginTop: 1 }}>{c.nodeClass}</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
          {c.nodeTags.map((t) => (
            <span key={t} style={{ fontSize: 9.5, fontWeight: 700, color: THEME.accent, padding: '3px 8px', borderRadius: 6, border: `1px solid ${THEME.border}` }}>{t}</span>
          ))}
        </div>

        {c.flags && c.flags.length > 0 && (
          <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.35)', borderRadius: 10, padding: '8px 12px', marginBottom: 12 }}>
            <span style={{ fontSize: 9.5, fontWeight: 800, color: '#EF4444', letterSpacing: '0.05em' }}>⚑ FLAGGED — REPLACEMENT CANDIDATE</span>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          <Metric label="Africa Export" value={c.africaExportValue} accent={THEME.accent} />
          <Metric label="Global Value" value={c.globalValue} />
          <Metric label="Africa Share" value={c.africaShare} />
          <Metric label="Ref Price" value={c.referencePrice} />
          <Metric label="YoY" value={c.yoyPrice} accent={c.yoyPrice.startsWith('+') ? THEME.success : '#EF4444'} />
          <Metric label="Weight" value={`${c.weight}/10`} />
        </div>
      </div>

      {/* Live Overview: production + trade visuals */}
      <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 16, padding: 16, marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ width: 3, height: 14, borderRadius: 2, background: THEME.accent }} />
          <span style={{ fontSize: 11, fontWeight: 800, color: THEME.white, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Live Overview</span>
        </div>
        <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 9, color: THEME.muted, marginBottom: 4 }}>Top 3 Producers</div>
            <MiniDonut value={parsePct(c.production.top3.share)} color={THEME.accent} label={c.production.top3.share || '—'} />
            <div style={{ fontSize: 9, color: THEME.muted, marginTop: 4, textAlign: 'center', lineHeight: 1.4 }}>{c.production.top3.countries.join('\n')}</div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 9, color: THEME.muted, marginBottom: 4 }}>Top 6 Producers</div>
            <MiniDonut value={parsePct(c.production.top6.share)} color={THEME.white} label={c.production.top6.share || '—'} labelColor="#111" />
            <div style={{ fontSize: 9, color: THEME.muted, marginTop: 4, textAlign: 'center', lineHeight: 1.4 }}>{c.production.top6.countries.join('\n')}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <BarGroup title="TOP 5 EXPORTERS" color={THEME.accent} data={c.exporters.map((e) => ({ label: e.flag || e.country.slice(0, 2).toUpperCase(), value: e.value, valueNum: e.valueNum }))} />
          <BarGroup title="TOP 5 IMPORTERS" color={THEME.white} data={c.importers.map((e) => ({ label: e.flag || e.country.slice(0, 2).toUpperCase(), value: e.value, valueNum: e.valueNum }))} />
        </div>
      </div>

      {/* Sections */}
      {sections.map((s) => <SectionCard key={s.key} section={s} />)}

      {/* Intelligence Briefing */}
      <IntelligenceBriefing c={c} />
    </div>
  );
}