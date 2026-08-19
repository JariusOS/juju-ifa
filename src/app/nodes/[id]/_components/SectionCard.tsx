import type { Section } from '@/data/sections';
import { THEME } from './theme';

function Label({ children }: { children: React.ReactNode }) {
  return <span style={{ fontSize: 11, color: THEME.muted, fontWeight: 600 }}>{children}</span>;
}

function KV({ label, value, flag }: { label: string; value: string; flag?: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, padding: '8px 0', borderBottom: `1px solid ${THEME.borderSoft}` }}>
      <Label>{flag ? `${flag} ` : ''}{label}</Label>
      <span style={{ fontSize: 11.5, color: THEME.white, textAlign: 'right', lineHeight: 1.45, fontWeight: 500 }}>{value}</span>
    </div>
  );
}

function Chips({ items, color = THEME.white }: { items: string[]; color?: string }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
      {items.map((t) => (
        <span key={t} style={{ fontSize: 10, color, padding: '5px 9px', borderRadius: 7, border: `1px solid ${THEME.border}`, background: THEME.surface }}>{t}</span>
      ))}
    </div>
  );
}

function Table({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i} style={{ textAlign: 'left', color: THEME.accent, fontWeight: 700, padding: '6px 8px', borderBottom: `1px solid ${THEME.border}`, whiteSpace: 'nowrap', textTransform: 'uppercase', fontSize: 9, letterSpacing: '0.05em' }}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((cell, j) => (
                <td key={j} style={{ padding: '6px 8px', color: THEME.white, borderBottom: `1px solid ${THEME.borderSoft}`, whiteSpace: 'nowrap' }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Ranking({ rows }: { rows: { rank: number; country: string; flag?: string; production: string; share: string }[] }) {
  const max = Math.max(...rows.map((r) => r.rank || 0), 1);
  return (
    <div>
      {rows.map((r) => (
        <div key={r.country} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0', borderBottom: `1px solid ${THEME.borderSoft}` }}>
          <span style={{ width: 22, fontSize: 10, fontWeight: 800, color: r.rank === 1 ? THEME.accent : THEME.dim, fontFamily: 'ui-monospace, monospace' }}>{String(r.rank).padStart(2, '0')}</span>
          <span style={{ fontSize: 12, width: 20 }}>{r.flag || ''}</span>
          <span style={{ flex: 1, fontSize: 12, color: THEME.white, fontWeight: 600 }}>{r.country}</span>
          <span style={{ fontSize: 10.5, color: THEME.muted, fontFamily: 'ui-monospace, monospace', textAlign: 'right' }}>{r.production}</span>
          {r.share ? <span style={{ fontSize: 10, color: THEME.accent, fontFamily: 'ui-monospace, monospace', minWidth: 58, textAlign: 'right' }}>{r.share}</span> : null}
        </div>
      ))}
      <div style={{ height: 3, borderRadius: 2, background: THEME.surface, marginTop: 8, overflow: 'hidden' }}>
        <div style={{ width: `${(Math.max(...rows.map((r) => r.rank)) / max) * 100}%`, height: '100%', background: THEME.accent }} />
      </div>
    </div>
  );
}

function RiskBlock({ risk }: { risk: { tier: string; level: string; factors: string[] }[] }) {
  const color = (level: string) => {
    const l = level.toLowerCase();
    if (l.includes('high') || l.includes('extreme')) return '#EF4444';
    if (l.includes('moderate')) return '#F59E0B';
    return '#22C55E';
  };
  return (
    <div>
      {risk.map((r, i) => (
        <div key={i} style={{ padding: '10px 0', borderBottom: i < risk.length - 1 ? `1px solid ${THEME.borderSoft}` : 'none' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <span style={{ fontSize: 12, color: THEME.white, fontWeight: 700 }}>{r.tier} Risk</span>
            <span style={{ fontSize: 10, fontWeight: 800, color: color(r.level), padding: '2px 8px', borderRadius: 999, border: `1px solid ${color(r.level)}44`, background: `${color(r.level)}11` }}>{r.level}</span>
          </div>
          <Chips items={r.factors} />
        </div>
      ))}
    </div>
  );
}

export default function SectionCard({ section }: { section: Section }) {
  return (
    <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 16, padding: 16, marginBottom: 12 }} id={`sec-${section.key}`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <span style={{ width: 3, height: 14, borderRadius: 2, background: THEME.accent }} />
        <span style={{ fontSize: 11, fontWeight: 800, color: THEME.white, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{section.title}</span>
      </div>

      {section.type === 'prose' && section.text && (
        <p style={{ fontSize: 12.5, color: THEME.muted, lineHeight: 1.7 }}>{section.text}</p>
      )}

      {section.type === 'kv' && section.kvs && section.kvs.map((k) => <KV key={k.label} {...k} />)}

      {section.type === 'chips' && section.chips && <Chips items={section.chips} />}

      {section.type === 'list' && section.items && (
        <ul style={{ margin: 0, paddingLeft: 16 }}>
          {section.items.map((t) => <li key={t} style={{ fontSize: 12, color: THEME.white, lineHeight: 1.6 }}>{t}</li>)}
        </ul>
      )}

      {section.type === 'grouped' && section.groups && section.groups.map((g) => (
        <div key={g.title} style={{ marginBottom: 10 }}>
          <Label>{g.title.toUpperCase()}</Label>
          <div style={{ marginTop: 6 }}><Chips items={g.items} /></div>
        </div>
      ))}

      {section.type === 'table' && section.table && <Table columns={section.table.columns} rows={section.table.rows} />}

      {section.type === 'ranking' && section.ranking && <Ranking rows={section.ranking} />}

      {section.type === 'risk' && section.risk && <RiskBlock risk={section.risk} />}

      {section.type === 'network' && section.network && section.network.map((g) => (
        <div key={g.group}>
          <Label>{g.group.toUpperCase()}</Label>
          <div style={{ marginTop: 6, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {g.links.map((l) => (
              <span key={l} style={{ fontSize: 10.5, color: THEME.white, padding: '5px 9px', borderRadius: 7, border: `1px solid ${THEME.borderSoft}`, background: THEME.surface }}>{l}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}