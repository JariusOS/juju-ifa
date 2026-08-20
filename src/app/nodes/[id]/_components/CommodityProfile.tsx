'use client';

import { useState } from 'react';
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

function SectionAnchor({ id, label, active }: { id: string; label: string; active?: boolean }) {
  return (
    <a href={`#sec-${id}`} style={{
      flex: '0 0 auto', fontSize: 10, fontWeight: 700,
      color: active ? '#000' : THEME.muted,
      padding: '5px 10px', borderRadius: 6,
      background: active ? THEME.accent : 'transparent',
      border: `1px solid ${active ? THEME.accent : THEME.border}`,
      textDecoration: 'none', letterSpacing: '0.02em',
      textTransform: 'uppercase', transition: 'all 0.15s', whiteSpace: 'nowrap',
    }}>{label}</a>
  );
}

function MetricCard({ label, value, accent, mono = true }: { label: string; value: string; accent?: string; mono?: boolean }) {
  return (
    <div style={{
      background: THEME.surface, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: '10px 12px',
    }}>
      <div style={{ fontSize: 8.5, color: THEME.dim, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
      <div style={{
        fontSize: 15, fontWeight: 800, color: accent || THEME.white,
        fontFamily: mono ? 'ui-monospace, monospace' : 'inherit',
        marginTop: 2, lineHeight: 1.3,
      }}>{value}</div>
    </div>
  );
}

function ConfidenceRing({ value, size = 64 }: { value: number; size?: number }) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  const color: string = value >= 80 ? THEME.success : value >= 60 ? THEME.warning : THEME.danger;
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={THEME.track} strokeWidth={4} />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={4}
          strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.6s ease' }} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 14, fontWeight: 800, color, fontFamily: 'ui-monospace, monospace' }}>{value}%</span>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const s = status.toLowerCase();
  let border = '1px solid';
  let color = THEME.com;
  if (s === 'verified') { color = THEME.success; border = '1px solid'; }
  else if (s === 'corroborated') { color = THEME.info; border = '2px solid'; }
  else if (s === 'reported') { color = THEME.warning; border = '1px dashed'; }
  else if (s === 'estimated') { color = THEME.dim; border = '1px dotted'; }
  return (
    <span style={{
      fontSize: 9, fontWeight: 700, color, textTransform: 'uppercase',
      letterSpacing: '0.06em', padding: '3px 8px', borderRadius: 4,
      background: `${color}15`, border,
    }}>{status}</span>
  );
}

function WeightMeter({ weight, max = 10 }: { weight: number; max?: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <div style={{ flex: 1, height: 4, borderRadius: 2, background: THEME.track, overflow: 'hidden' }}>
        <div style={{
          width: `${(weight / max) * 100}%`, height: '100%', borderRadius: 2,
          background: weight >= 8 ? THEME.danger : weight >= 5 ? THEME.warning : THEME.success,
          transition: 'width 0.4s ease',
        }} />
      </div>
      <span style={{ fontSize: 10, fontWeight: 700, color: THEME.muted, fontFamily: 'ui-monospace, monospace' }}>{weight}/{max}</span>
    </div>
  );
}

function IntelligenceBriefing({ c }: { c: Commodity }) {
  const b = c.briefing;
  const clsColor: Record<string, string> = {
    BREAKING: '#EF4444', TREND: '#3B82F6', OPPORTUNITY: '#22C55E', RISK: '#F59E0B', 'UPCOMING EVENT': '#A78BFA',
  };

  if (!b || !b.items.length) {
    return (
      <div id="sec-briefing" style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 14, padding: 18, marginBottom: 10 }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: THEME.accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
          Intelligence Briefing
        </div>
        <p style={{ fontSize: 12, color: THEME.muted, lineHeight: 1.6 }}>
          A curated Top-10 Intelligence Briefing for {c.name} will be published here once its module briefing is authored.
        </p>
      </div>
    );
  }

  return (
    <div id="sec-briefing" style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 14, padding: 18, marginBottom: 10 }}>
      {/* Briefing header */}
      <div style={{
        background: `linear-gradient(135deg, ${THEME.surface} 0%, ${THEME.card} 100%)`,
        border: `1px solid ${THEME.borderAccent}`, borderRadius: 10, padding: 14, marginBottom: 14,
      }}>
        <div style={{ fontSize: 9, fontWeight: 700, color: THEME.accent, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
          Top-10 Intelligence Briefing
        </div>
        <div style={{ fontSize: 16, fontWeight: 800, color: THEME.white, marginBottom: 4 }}>{c.name}</div>
        <div style={{ display: 'flex', gap: 12, fontSize: 10, color: THEME.muted }}>
          <span>Target Lens: <span style={{ color: THEME.white, fontWeight: 600 }}>{b.persona}</span></span>
          <span>·</span>
          <span>{b.location}</span>
          <span>·</span>
          <span>Updated: <span style={{ color: THEME.white, fontWeight: 600 }}>{b.updated}</span></span>
        </div>
      </div>

      {/* Briefing items */}
      {b.items.map((it, i) => (
        <div key={i} style={{
          padding: '14px 0',
          borderTop: i === 0 ? 'none' : `1px solid ${THEME.borderSoft}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span style={{
              fontSize: 10, fontWeight: 800, color: THEME.accent,
              fontFamily: 'ui-monospace, monospace',
              minWidth: 22,
            }}>{String(i + 1).padStart(2, '0')}</span>
            <span style={{
              fontSize: 9.5, fontWeight: 800, color: clsColor[it.classification] || THEME.accent,
              background: `${clsColor[it.classification] || THEME.accent}15`,
              padding: '2px 7px', borderRadius: 4,
              border: `1px solid ${clsColor[it.classification] || THEME.accent}30`,
            }}>{it.classification}</span>
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, color: THEME.white, marginBottom: 6, lineHeight: 1.4 }}>
            {it.title}
          </div>
          <div style={{ fontSize: 11.5, color: THEME.muted, lineHeight: 1.6, marginBottom: 4 }}>
            <span style={{ color: THEME.white, fontWeight: 600 }}>Core Brief: </span>{it.core}
          </div>
          <div style={{ fontSize: 11.5, color: THEME.muted, lineHeight: 1.6, marginBottom: 4 }}>
            <span style={{ color: THEME.info, fontWeight: 600 }}>Strategic Impact: </span>{it.impact}
          </div>
          <div style={{ fontSize: 11.5, color: THEME.muted, lineHeight: 1.6 }}>
            <span style={{ color: THEME.success, fontWeight: 600 }}>Opportunity: </span>{it.opportunity}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CommodityProfile({ c }: { c: Commodity }) {
  const sections = c.sections || [];
  const tc = c.id.split('-')[1] || 'COM';
  const tColor = nodeClassColor(tc);
  const tColorSoft = nodeClassSoft(tc);

  return (
    <div style={{ paddingBottom: 40 }}>
      {/* Sticky identity bar */}
      <div style={{
        position: 'sticky', top: 52, zIndex: 40, background: `${THEME.bg}f0`,
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${THEME.borderSoft}`, padding: '8px 0',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Link href="/" style={{ color: THEME.accent, fontSize: 18, textDecoration: 'none', fontWeight: 700, lineHeight: 1 }}>‹</Link>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: THEME.white, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</span>
              <StatusBadge status={c.status} />
            </div>
            <div style={{ fontSize: 9, color: THEME.dim, fontFamily: 'ui-monospace, monospace' }}>{c.id} · {c.rankLabel}</div>
          </div>
          <ConfidenceRing value={c.confidence} size={36} />
        </div>
        <div style={{ display: 'flex', gap: 4, marginTop: 8, overflowX: 'auto', scrollbarWidth: 'none' }}>
          <SectionAnchor id="overview" label="Overview" active />
          {sections.map((s) => <SectionAnchor key={s.key} id={s.key} label={s.title} />)}
          <SectionAnchor id="briefing" label="Briefing" />
        </div>
      </div>

      {/* Hero section */}
      <div style={{
        background: `linear-gradient(160deg, ${tColorSoft} 0%, ${THEME.bg} 40%, ${THEME.surface} 100%)`,
        border: `1px solid ${THEME.border}`, borderRadius: 16, padding: 20, margin: '12px 0',
        position: 'relative', overflow: 'hidden',
      }} id="sec-overview">
        {/* Decorative corner accent */}
        <div style={{
          position: 'absolute', top: 0, right: 0, width: 120, height: 120,
          background: `radial-gradient(circle at top right, ${tColor}15 0%, transparent 70%)`,
        }} />

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14, position: 'relative' }}>
          {/* Node icon */}
          <div style={{
            width: 58, height: 58, borderRadius: 14, border: `2px solid ${tColor}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: tColorSoft, flexShrink: 0,
          }}>
            <span style={{ fontSize: 24, fontWeight: 900, color: tColor }}>{c.name.charAt(0)}</span>
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 2 }}>
              <span style={{
                fontSize: 9, fontWeight: 800, color: tColor, background: tColorSoft,
                padding: '2px 8px', borderRadius: 4,
              }}>{c.rankLabel}</span>
              <span style={{ fontSize: 9, color: THEME.dim, fontFamily: 'ui-monospace, monospace' }}>{c.id}</span>
              {c.hsCode !== '—' && <span style={{ fontSize: 9, color: THEME.dim, fontFamily: 'ui-monospace, monospace' }}>{c.hsCode}</span>}
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: THEME.white, letterSpacing: '-0.02em', marginTop: 2 }}>{c.name}</div>
            <div style={{ fontSize: 10.5, color: THEME.muted, marginTop: 1 }}>{c.nodeClass}</div>
          </div>

          <ConfidenceRing value={c.confidence} size={56} />
        </div>

        {/* Tags */}
        {c.nodeTags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 14 }}>
            {c.nodeTags.map((t) => (
              <span key={t} style={{
                fontSize: 9, fontWeight: 600, color: tColor, padding: '3px 7px',
                borderRadius: 5, border: `1px solid ${THEME.border}`, background: `${tColor}08`,
              }}>{t}</span>
            ))}
          </div>
        )}

        {/* Flags */}
        {c.flags && c.flags.length > 0 && (
          <div style={{
            background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)',
            borderRadius: 8, padding: '8px 12px', marginBottom: 14,
          }}>
            <div style={{ fontSize: 9, fontWeight: 800, color: '#EF4444', letterSpacing: '0.05em', marginBottom: 4 }}>⚑ FLAGS</div>
            {c.flags.map((f, i) => (
              <div key={i} style={{ fontSize: 10.5, color: 'rgba(239,68,68,0.8)', lineHeight: 1.5 }}>{f}</div>
            ))}
          </div>
        )}

        {/* Metrics grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 14 }}>
          <MetricCard label="Africa Export" value={c.africaExportValue} accent={tColor} />
          <MetricCard label="Global Value" value={c.globalValue} />
          <MetricCard label="Africa Share" value={c.africaShare} />
          <MetricCard label="Reference Price" value={c.referencePrice} />
          <MetricCard label="YoY Change" value={c.yoyPrice} accent={c.yoyPrice.startsWith('+') ? THEME.success : THEME.danger} />
          <MetricCard label="Status" value={c.status} accent={THEME.success} mono={false} />
        </div>

        {/* Weight meter */}
        <div style={{ marginBottom: 4 }}>
          <div style={{ fontSize: 9, color: THEME.dim, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Node Importance</div>
          <WeightMeter weight={c.weight} />
        </div>

        {/* Fingerprint */}
        {c.fingerprint && (
          <div style={{
            marginTop: 12, padding: '10px 12px', borderRadius: 8,
            background: THEME.surface, border: `1px solid ${THEME.borderSoft}`,
            fontSize: 11, color: THEME.muted, lineHeight: 1.6, fontStyle: 'italic',
          }}>
            &ldquo;{c.fingerprint}&rdquo;
          </div>
        )}
      </div>

      {/* Live Overview: production + trade visuals */}
      <div style={{
        background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 14, padding: 18, marginBottom: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <span style={{ width: 3, height: 14, borderRadius: 2, background: tColor }} />
          <span style={{ fontSize: 11, fontWeight: 800, color: THEME.white, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Live Overview</span>
        </div>
        <div style={{ display: 'flex', gap: 14, marginBottom: 14 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 9, color: THEME.dim, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Top 3 Producers</div>
            <MiniDonut value={parsePct(c.production.top3.share)} color={tColor} label={c.production.top3.share || '—'} />
            <div style={{ fontSize: 9, color: THEME.muted, marginTop: 6, textAlign: 'center', lineHeight: 1.5 }}>{c.production.top3.countries.join('\n')}</div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 9, color: THEME.dim, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Top 6 Producers</div>
            <MiniDonut value={parsePct(c.production.top6.share)} color={THEME.muted} label={c.production.top6.share || '—'} labelColor="#111" />
            <div style={{ fontSize: 9, color: THEME.muted, marginTop: 6, textAlign: 'center', lineHeight: 1.5 }}>{c.production.top6.countries.join('\n')}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <BarGroup title="TOP 5 EXPORTERS" color={tColor} data={c.exporters.map((e) => ({ label: e.flag || e.country.slice(0, 2).toUpperCase(), value: e.value, valueNum: e.valueNum }))} />
          <BarGroup title="TOP 5 IMPORTERS" color={THEME.muted} data={c.importers.map((e) => ({ label: e.flag || e.country.slice(0, 2).toUpperCase(), value: e.value, valueNum: e.valueNum }))} />
        </div>
      </div>

      {/* Snapshot section */}
      {c.snapshot && (
        <div style={{
          background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 14, padding: 18, marginBottom: 10,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ width: 3, height: 14, borderRadius: 2, background: tColor }} />
            <span style={{ fontSize: 11, fontWeight: 800, color: THEME.white, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Market Snapshot</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
            {[
              { label: 'Global Market', value: c.snapshot.globalMarketValue },
              { label: 'Global Export', value: c.snapshot.globalExportValue },
              { label: 'Global Production', value: c.snapshot.globalProduction },
              { label: 'African Production', value: c.snapshot.africanProduction },
              { label: 'Africa Production Share', value: c.snapshot.africaProductionShare },
              { label: 'African Export Value', value: c.snapshot.africanExportValue },
              { label: 'Strategic Role', value: c.snapshot.strategicRole },
              { label: 'Reference Price', value: c.snapshot.referencePrice },
            ].filter(i => i.value).map((item) => (
              <div key={item.label} style={{ padding: '8px 0', borderBottom: `1px solid ${THEME.borderSoft}` }}>
                <div style={{ fontSize: 9, color: THEME.dim, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                <div style={{ fontSize: 11, color: THEME.white, marginTop: 2, lineHeight: 1.4 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Production ranking */}
      {c.production.ranking.length > 0 && (
        <div style={{
          background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 14, padding: 18, marginBottom: 10,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ width: 3, height: 14, borderRadius: 2, background: tColor }} />
            <span style={{ fontSize: 11, fontWeight: 800, color: THEME.white, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Production Ranking</span>
          </div>
          {c.production.ranking.map((r) => (
            <div key={r.country} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0',
              borderBottom: `1px solid ${THEME.borderSoft}`,
            }}>
              <span style={{
                width: 22, fontSize: 10, fontWeight: 800,
                color: r.rank === 1 ? tColor : THEME.dim,
                fontFamily: 'ui-monospace, monospace',
              }}>{String(r.rank).padStart(2, '0')}</span>
              <span style={{ fontSize: 14, width: 24 }}>{r.flag || ''}</span>
              <span style={{ flex: 1, fontSize: 12, color: THEME.white, fontWeight: 600 }}>{r.country}</span>
              <span style={{ fontSize: 10.5, color: THEME.muted, fontFamily: 'ui-monospace, monospace', textAlign: 'right' }}>{r.production}</span>
              {r.share && <span style={{ fontSize: 10, color: tColor, fontFamily: 'ui-monospace, monospace', minWidth: 58, textAlign: 'right' }}>{r.share}</span>}
            </div>
          ))}
        </div>
      )}

      {/* All sections */}
      {sections.map((s) => <SectionCard key={s.key} section={s} accentColor={tColor} />)}

      {/* Intelligence Briefing */}
      <IntelligenceBriefing c={c} />

      {/* Connected entities */}
      {c.connectedEntities.length > 0 && (
        <div style={{
          background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 14, padding: 18, marginBottom: 10,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ width: 3, height: 14, borderRadius: 2, background: THEME.biz }} />
            <span style={{ fontSize: 11, fontWeight: 800, color: THEME.white, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Connected Entities</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {c.connectedEntities.map((e) => (
              <div key={e.name} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: THEME.surface, border: `1px solid ${THEME.border}`, borderRadius: 8, padding: '6px 10px',
              }}>
                <span style={{ fontSize: 12 }}>{e.flag || '●'}</span>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: THEME.white }}>{e.name}</div>
                  <div style={{ fontSize: 9, color: THEME.dim }}>{e.kind} · {e.count} mentions</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* News */}
      {c.news.length > 0 && (
        <div style={{
          background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 14, padding: 18, marginBottom: 10,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ width: 3, height: 14, borderRadius: 2, background: THEME.warning }} />
            <span style={{ fontSize: 11, fontWeight: 800, color: THEME.white, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Latest Intelligence</span>
          </div>
          {c.news.map((n, i) => (
            <div key={i} style={{
              padding: '10px 0',
              borderTop: i === 0 ? 'none' : `1px solid ${THEME.borderSoft}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <span style={{
                  fontSize: 9, fontWeight: 800,
                  color: n.impact === 'high' ? THEME.danger : n.impact === 'medium' ? THEME.warning : THEME.success,
                  textTransform: 'uppercase',
                }}>{n.impact}</span>
                <span style={{ fontSize: 9, color: THEME.dim }}>{n.date}</span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: THEME.white, marginBottom: 3 }}>{n.title}</div>
              <div style={{ fontSize: 11, color: THEME.muted, lineHeight: 1.5 }}>{n.summary}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
