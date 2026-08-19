import type { Commodity } from '@/data/types';
import { THEME, cardStyle } from './theme';

function Row({ label, value, mono }: { label: string; value: React.ReactNode; mono?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: `1px solid ${THEME.borderSoft}` }}>
      <span style={{ fontSize: 11, color: THEME.muted }}>{label}</span>
      <span style={{ fontSize: 11, color: THEME.white, fontWeight: 600, fontFamily: mono ? 'ui-monospace, monospace' : undefined, textAlign: 'right' }}>{value}</span>
    </div>
  );
}

export default function InfoView({ data }: { data: Commodity }) {
  return (
    <div style={cardStyle}>
      {data.flags && data.flags.length > 0 && (
        <div style={{
          background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.35)',
          borderRadius: 10, padding: '10px 12px', marginBottom: 12,
        }}>
          <div style={{ fontSize: 10, fontWeight: 800, color: '#EF4444', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            ⚑ Flagged — Candidate for Replacement
          </div>
          {data.flags.map((f) => (
            <div key={f} style={{ fontSize: 11, color: THEME.white, marginTop: 4, lineHeight: 1.5 }}>{f}</div>
          ))}
        </div>
      )}
      <div style={{ fontSize: 12, fontWeight: 800, color: THEME.white, letterSpacing: '0.1em' }}>METADATA</div>
      <Row label="Node ID" value={`[[${data.id}]]`} mono />
      <Row label="Slug" value={data.slug} mono />
      <Row label="Type" value="ComNode" mono />
      <Row label="Class" value={data.nodeClass} />
      <Row label="Rank" value={data.rankLabel} />
      <Row label="Weight" value={`${data.weight}/10`} mono />
      <Row label="Confidence" value={`${data.confidence}%`} mono />
      <Row label="Status" value={data.status} />
      <Row label="HS Code" value={data.hsCode} mono />
      <div style={{ marginTop: 10 }}>
        <div style={{ fontSize: 10, color: THEME.muted, marginBottom: 4 }}>NODE TAGS</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {data.nodeTags.map((t) => (
            <span key={t} style={{ fontSize: 9, color: THEME.accent, padding: '3px 7px', borderRadius: 5, border: `1px solid ${THEME.border}`, background: THEME.surface }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <div style={{ fontSize: 10, color: THEME.muted, marginBottom: 4 }}>ALL TAGS</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {data.tags.map((t) => (
            <span key={t} style={{ fontSize: 9, color: THEME.accent, padding: '3px 7px', borderRadius: 5, border: `1px solid ${THEME.border}` }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <div style={{ fontSize: 10, color: THEME.muted, marginBottom: 4 }}>NETWORK RELATIONSHIPS</div>
        <Row label="Origin" value={data.production.ranking.slice(0, 5).map((r) => r.country).join(' • ')} />
        <Row label="Markets" value={data.importers.map((i) => i.country).join(' • ')} />
        <Row label="Institutions" value="OPEC • OPEC+ • Petroleum Regulators" />
        <Row label="Infrastructure" value="Suez Canal • SUMED Pipeline • Terminals • Pipelines • Refineries • Storage • Tankers" />
        <Row label="Benchmarks" value={data.price.benchmarks.join(' • ')} />
      </div>
    </div>
  );
}