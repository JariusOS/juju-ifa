import type { Commodity } from '@/data/types';
import { THEME, cardStyle } from './theme';

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 11, fontWeight: 800, color: THEME.accent, letterSpacing: '0.1em', marginBottom: 8 }}>
      {children}
    </div>
  );
}

function Chips({ items, color = THEME.white }: { items: string[]; color?: string }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
      {items.map((t) => (
        <span key={t} style={{ fontSize: 9, color, padding: '3px 7px', borderRadius: 5, border: `1px solid ${THEME.borderSoft}`, background: THEME.surface }}>{t}</span>
      ))}
    </div>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: `1px solid ${THEME.borderSoft}` }}>
      <span style={{ fontSize: 11, color: THEME.muted }}>{label}</span>
      <span style={{ fontSize: 11, color: THEME.white, fontWeight: 600, textAlign: 'right' }}>{value}</span>
    </div>
  );
}

export default function DnaView({ data }: { data: Commodity }) {
  const d = data.dna;
  return (
    <>
      <div style={cardStyle}>
        <SectionTitle>COMMODITY IDENTITY</SectionTitle>
        <Row label="Node Name" value={data.name} />
        <Row label="comID" value={`[[${data.id}]]`} />
        <Row label="Node Type" value={data.nodeType} />
        <Row label="Node Class" value={data.nodeClass} />
        <Row label="HS Code" value={data.hsCode} />
        <Row label="Commodity State" value="Raw / unrefined liquid hydrocarbon" />
      </div>

      <div style={cardStyle}>
        <SectionTitle>COMMODITY DESCRIPTION</SectionTitle>
        <p style={{ fontSize: 12, color: THEME.white, lineHeight: 1.6 }}>{d.description}</p>
      </div>

      <div style={cardStyle}>
        <SectionTitle>CRUDE QUALITY EXAMPLES</SectionTitle>
        {d.qualityExamples.map((q) => (
          <div key={q.name} style={{ padding: '8px 0', borderBottom: `1px solid ${THEME.borderSoft}` }}>
            <div style={{ fontSize: 12, color: THEME.white, fontWeight: 600 }}>{q.name}</div>
            <div style={{ fontSize: 10, color: THEME.muted, fontFamily: 'ui-monospace, monospace' }}>
              API {q.api} · Sulfur {q.sulfur} · {q.qualityClass}
            </div>
          </div>
        ))}
      </div>

      <div style={cardStyle}>
        <SectionTitle>AFRICAN GRADES</SectionTitle>
        <Chips items={d.africanGrades} />
        <SectionTitle>PRICE BENCHMARKS</SectionTitle>
        <Chips items={d.benchmarks} color={THEME.accent} />
      </div>

      <div style={cardStyle}>
        <SectionTitle>REFINERY OUTPUTS</SectionTitle>
        <Chips items={d.outputs} />
        <SectionTitle>INDUSTRIAL APPLICATIONS</SectionTitle>
        <Chips items={d.applications} />
      </div>

      <div style={cardStyle}>
        <SectionTitle>IDENTITY SIGNALS</SectionTitle>
        {d.identitySignals.map((s) => <Row key={s.label} label={s.label} value={s.value} />)}
      </div>
    </>
  );
}