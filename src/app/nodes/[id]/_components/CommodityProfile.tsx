'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import type { Commodity } from '@/data/types';
import { commodities } from '@/data/commodities';
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

  const similarNodes = useMemo(() => {
    return commodities
      .filter((o) => o.id !== c.id && o.id.split('-')[1] === tc)
      .slice(0, 6);
  }, [c.id, tc]);

  const relatedNodes = useMemo(() => {
    return commodities
      .filter((o) => {
        if (o.id === c.id) return false;
        const shared = o.nodeTags.filter((t) => c.nodeTags.includes(t));
        return shared.length >= 2;
      })
      .sort((a, b) => {
        const aShared = a.nodeTags.filter((t) => c.nodeTags.includes(t)).length;
        const bShared = b.nodeTags.filter((t) => c.nodeTags.includes(t)).length;
        return bShared - aShared;
      })
      .slice(0, 6);
  }, [c.id, c.nodeTags]);

  const mentionedNodes = useMemo(() => {
    const cLower = c.name.toLowerCase();
    const tagSet = new Set(c.nodeTags.map((t) => t.toLowerCase()));
    return commodities
      .filter((o) => {
        if (o.id === c.id) return false;
        if (o.nodeTags.some((t) => t.toLowerCase() === cLower)) return true;
        return o.nodeTags.some((t) => tagSet.has(t.toLowerCase()));
      })
      .slice(0, 6);
  }, [c.id, c.name, c.nodeTags]);

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
          {['overview', 'metadata', 'dna', ...sections.filter((s) => !['fingerprint', 'dna-kv'].includes(s.key)).map((s) => s.key), 'briefing'].map((key) => (
            <a key={key} href={`#sec-${key}`} style={{
              fontSize: 9.5, fontWeight: 600, color: THEME.muted, padding: '3px 8px', borderRadius: 4,
              background: key === 'overview' ? THEME.accentSoft : 'transparent', border: `1px solid ${THEME.border}`,
              textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.03em', whiteSpace: 'nowrap',
            }}>{key === 'overview' ? 'Overview' : key === 'metadata' ? 'Metadata' : key === 'dna' ? 'DNA' : key}</a>
          ))}
        </div>
      </div>

      {/* Hero */}
      <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, margin: '10px 0' }} id="sec-overview">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 12, border: `2px solid ${tColor}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', background: nodeClassSoft(tc), flexShrink: 0,
            overflow: 'hidden',
          }}>
            {c.avatarUrl ? (
              <img src={c.avatarUrl} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10 }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.style.display = 'flex';
                    parent.style.background = nodeClassSoft(tc);
                    const span = document.createElement('span');
                    span.style.fontSize = '20';
                    span.style.fontWeight = '700';
                    span.style.color = tColor;
                    span.textContent = c.name.charAt(0);
                    parent.appendChild(span);
                  }
                }}
              />
            ) : (
              <span style={{ fontSize: 20, fontWeight: 700, color: tColor }}>{c.name.charAt(0)}</span>
            )}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: tColor, background: nodeClassSoft(tc), padding: '2px 6px', borderRadius: 3 }}>{c.rankLabel}</span>
              <span className="mono" style={{ fontSize: 9, color: THEME.dim }}>{c.id}</span>
              {c.hsCode !== '—' && <span className="mono" style={{ fontSize: 9, color: THEME.dim }}>{c.hsCode}</span>}
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: THEME.t1, marginTop: 2 }}>{c.name}</div>
            <div style={{ fontSize: 10, color: THEME.muted, marginTop: 1 }}>{c.nodeClass}</div>
            {c.avatarUrl && (
              <div style={{ marginTop: 4, fontSize: 9, color: THEME.dim }}>
                <span style={{ color: 'var(--info)', fontWeight: 600 }}>🎨 Character avatar</span>
              </div>
            )}
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

      {/* Node Metadata (ported from MasterView — status, weight, tags) */}
      <div id="sec-metadata" style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <span style={{ width: 2, height: 12, borderRadius: 1, background: tColor }} />
          <span style={{ fontSize: 10, fontWeight: 700, color: THEME.t1, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Node Metadata</span>
        </div>
        {([
          ['Status', c.status],
          ['Node ID', `[[${c.id}]]`],
          ['Node Type', c.nodeType || c.nodeClass],
          ['HS Code', c.hsCode],
          ['Rank', c.rankLabel],
          ['Weight', `${c.weight}/10 \u2014 ${c.weightLabel}`],
          ['Confidence', `${c.confidence}% \u2014 ${c.confidenceLabel}`],
        ] as [string, string][]).filter(([, v]) => v && v !== '\u2014').map(([label, value]) => (
          <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: `1px solid ${THEME.border}` }}>
            <span style={{ fontSize: 11, color: THEME.dim }}>{label}</span>
            <span className="mono" style={{ fontSize: 11, color: THEME.t1, fontWeight: 600, textAlign: 'right' }}>{value}</span>
          </div>
        ))}
        {c.nodeTags.length > 0 && (
          <div style={{ marginTop: 8 }}>
            <div style={{ fontSize: 9, color: THEME.dim, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 }}>Node Tags</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {c.nodeTags.map((t) => <span key={t} style={{ fontSize: 9, color: tColor, padding: '2px 6px', borderRadius: 4, border: `1px solid ${THEME.border}`, background: THEME.surface }}>{t}</span>)}
            </div>
          </div>
        )}
        {c.tags.length > 0 && (
          <div style={{ marginTop: 8 }}>
            <div style={{ fontSize: 9, color: THEME.dim, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 }}>Commodity Tags</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {c.tags.map((t) => <span key={t} style={{ fontSize: 9, color: tColor, padding: '2px 6px', borderRadius: 4, border: `1px solid ${THEME.border}` }}>{t}</span>)}
            </div>
          </div>
        )}
      </div>

      {/* Commodity DNA — enhanced (ported from DnaView — quality examples as cards) */}
      {(c.dna.description || c.dna.qualityExamples.length > 0 || c.dna.africanGrades.length > 0 || c.price.benchmarks.length > 0) && (
        <div id="sec-dna" style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
            <span style={{ width: 2, height: 12, borderRadius: 1, background: tColor }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: THEME.t1, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Commodity DNA</span>
          </div>
          {c.dna.description && <p style={{ fontSize: 12, color: THEME.t2, lineHeight: 1.6, marginBottom: 12 }}>{c.dna.description}</p>}
          {c.dna.qualityExamples.length > 0 && (
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 9, color: THEME.dim, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 6 }}>Quality Examples</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 6 }}>
                {c.dna.qualityExamples.map((q) => (
                  <div key={q.name} style={{ background: THEME.surface, border: `1px solid ${THEME.border}`, borderRadius: 6, padding: '8px 10px' }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: THEME.t1 }}>{q.name}</div>
                    <div className="mono" style={{ fontSize: 9, color: THEME.dim, marginTop: 2 }}>API {q.api} &middot; S {q.sulfur} &middot; {q.qualityClass}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {c.dna.africanGrades.length > 0 && (
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 9, color: THEME.dim, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 }}>African Grades</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>{c.dna.africanGrades.map((g) => <span key={g} style={{ fontSize: 9, color: THEME.t1, padding: '3px 7px', borderRadius: 5, border: `1px solid ${THEME.border}`, background: THEME.surface }}>{g}</span>)}</div>
            </div>
          )}
          {c.price.benchmarks.length > 0 && (
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 9, color: THEME.dim, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 }}>Price Benchmarks</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>{c.price.benchmarks.map((b) => <span key={b} style={{ fontSize: 9, color: tColor, padding: '3px 7px', borderRadius: 5, border: `1px solid ${tColor}40`, background: `${tColor}10` }}>{b}</span>)}</div>
            </div>
          )}
          {c.dna.outputs.length > 0 && (
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 9, color: THEME.dim, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 }}>Outputs</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>{c.dna.outputs.map((o) => <span key={o} style={{ fontSize: 9, color: THEME.t1, padding: '3px 7px', borderRadius: 5, border: `1px solid ${THEME.border}`, background: THEME.surface }}>{o}</span>)}</div>
            </div>
          )}
          {c.dna.applications.length > 0 && (
            <div>
              <div style={{ fontSize: 9, color: THEME.dim, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 }}>Applications</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>{c.dna.applications.map((a) => <span key={a} style={{ fontSize: 9, color: THEME.t1, padding: '3px 7px', borderRadius: 5, border: `1px solid ${THEME.border}`, background: THEME.surface }}>{a}</span>)}</div>
            </div>
          )}
        </div>
      )}

      {/* Sections — skip fingerprint (in hero) and dna-kv (enhanced inline above) */}
      {sections.filter((s) => !['fingerprint', 'dna-kv'].includes(s.key)).map((s) => <SectionCard key={s.key} section={s} accentColor={tColor} />)}

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

      {/* Similar Nodes */}
      {similarNodes.length > 0 && (
        <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <span style={{ width: 2, height: 12, borderRadius: 1, background: tColor }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: THEME.t1, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Similar Nodes</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
            {similarNodes.map((s) => {
              const stc = s.id.split('-')[1] || 'COM';
              return (
                <Link key={s.id} href={`/nodes/${s.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: THEME.surface, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: '8px 10px' }}>
                    <div style={{ fontSize: 10, fontWeight: 600, color: THEME.t1, marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.name}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
                      <span style={{ fontSize: 8, fontWeight: 700, color: nodeClassColor(stc), background: nodeClassSoft(stc), padding: '1px 4px', borderRadius: 3 }}>{stc}</span>
                    </div>
                    <div className="mono" style={{ fontSize: 9, color: THEME.dim }}>{s.africaExportValue}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Related Nodes */}
      {relatedNodes.length > 0 && (
        <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <span style={{ width: 2, height: 12, borderRadius: 1, background: 'var(--info)' }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: THEME.t1, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Related Nodes</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
            {relatedNodes.map((r) => {
              const rtc = r.id.split('-')[1] || 'COM';
              return (
                <Link key={r.id} href={`/nodes/${r.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: THEME.surface, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: '8px 10px' }}>
                    <div style={{ fontSize: 10, fontWeight: 600, color: THEME.t1, marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.name}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
                      <span style={{ fontSize: 8, fontWeight: 700, color: nodeClassColor(rtc), background: nodeClassSoft(rtc), padding: '1px 4px', borderRadius: 3 }}>{rtc}</span>
                    </div>
                    <div className="mono" style={{ fontSize: 9, color: THEME.dim }}>{r.africaExportValue}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Mentioned in Network */}
      {mentionedNodes.length > 0 && (
        <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <span style={{ width: 2, height: 12, borderRadius: 1, background: 'var(--purple)' }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: THEME.t1, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Mentioned in Network</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
            {mentionedNodes.map((m) => {
              const mtc = m.id.split('-')[1] || 'COM';
              return (
                <Link key={m.id} href={`/nodes/${m.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: THEME.surface, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: '8px 10px' }}>
                    <div style={{ fontSize: 10, fontWeight: 600, color: THEME.t1, marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.name}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
                      <span style={{ fontSize: 8, fontWeight: 700, color: nodeClassColor(mtc), background: nodeClassSoft(mtc), padding: '1px 4px', borderRadius: 3 }}>{mtc}</span>
                    </div>
                    <div className="mono" style={{ fontSize: 9, color: THEME.dim }}>{m.africaExportValue}</div>
                  </div>
                </Link>
              );
            })}
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
