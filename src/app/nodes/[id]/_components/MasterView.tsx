import type { Commodity } from '@/data/types';
import { THEME, cardStyle } from './theme';

function Row({ label, value, mono }: { label: string; value: React.ReactNode; mono?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: `1px solid ${THEME.borderSoft}` }}>
      <span style={{ fontSize: 11, color: THEME.muted }}>{label}</span>
      <span style={{ fontSize: 12, color: THEME.white, fontWeight: 600, fontFamily: mono ? 'ui-monospace, monospace' : undefined, textAlign: 'right' }}>
        {value}
      </span>
    </div>
  );
}

export default function MasterView({ data }: { data: Commodity }) {
  const sd = data.snapshot;
  return (
    <div style={cardStyle}>
      <div style={{ fontSize: 12, fontWeight: 800, color: THEME.white, letterSpacing: '0.1em' }}>
        NODE MASTER — {data.name.toUpperCase()}
      </div>
      <Row label="Status" value={data.status} />
      <Row label="Node ID" value={`[[${data.id}]]`} mono />
      <Row label="Node Name" value={data.name} />
      <Row label="Node Type" value={data.nodeType} mono />
      <Row label="Node Class" value={data.nodeClass} />
      <Row label="Node Weight" value={`${data.weight}/10 — ${data.weightLabel}`} mono />
      <Row label="Node Confidence" value={`${data.confidence}% — ${data.confidenceLabel}`} mono />
      <Row label="HS Code" value={data.hsCode} mono />
      <Row label="African Rank" value={data.rankLabel} />
      <div style={{ marginTop: 10 }}>
        <div style={{ fontSize: 10, color: THEME.muted, marginBottom: 4 }}>NODE FINGERPRINT</div>
        <p style={{ fontSize: 12, color: THEME.white, lineHeight: 1.6 }}>{data.fingerprint}</p>
      </div>
      <div style={{ marginTop: 10 }}>
        <div style={{ fontSize: 10, color: THEME.muted, marginBottom: 4 }}>NODE TAGS</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {data.nodeTags.map((t) => (
            <span key={t} style={{ fontSize: 9, color: THEME.accent, padding: '3px 7px', borderRadius: 5, border: `1px solid ${THEME.border}`, background: THEME.surface }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <div style={{ fontSize: 10, color: THEME.muted, marginBottom: 4 }}>COMMODITY TAGS</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {data.tags.map((t) => (
            <span key={t} style={{ fontSize: 9, color: THEME.accent, padding: '3px 7px', borderRadius: 5, border: `1px solid ${THEME.border}` }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <div style={{ fontSize: 10, color: THEME.muted, marginBottom: 4 }}>COMMODITY SNAPSHOT</div>
        <Row label="Global Market Value" value={sd.globalMarketValue} mono />
        <Row label="Global Export Value" value={sd.globalExportValue} mono />
        <Row label="Reference Price" value={sd.referencePrice} mono />
        <Row label="Global Production" value={sd.globalProduction} mono />
        <Row label="African Production" value={sd.africanProduction} mono />
        <Row label="Africa Production Share" value={sd.africaProductionShare} mono />
        <Row label="African Export Value" value={sd.africanExportValue} mono />
        <Row label="African Share of Global Exports" value={sd.africanShareGlobalExports} mono />
        <Row label="African Proven Reserves" value={sd.africanReserves} mono />
        <Row label="Estimated Reserve Value" value={sd.africanReserveValue} mono />
        <Row label="Primary Export Regions" value={sd.exportRegions.join(' • ')} />
        <Row label="Primary Markets" value={sd.primaryMarkets.join(' • ')} />
        <Row label="Strategic Role" value={sd.strategicRole} />
      </div>
    </div>
  );
}