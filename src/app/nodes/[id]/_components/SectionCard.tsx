import type { Section } from '@/data/sections';
import { THEME } from './theme';

function Chips({ items, color = THEME.white }: { items: string[]; color?: string }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
      {items.map((t) => (
        <span key={t} style={{
          fontSize: 10, color, padding: '4px 9px', borderRadius: 6,
          border: `1px solid ${THEME.border}`, background: THEME.surface,
        }}>{t}</span>
      ))}
    </div>
  );
}

function KV({ label, value, flag }: { label: string; value: string; flag?: string }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12,
      padding: '8px 0', borderBottom: `1px solid ${THEME.borderSoft}`,
    }}>
      <span style={{ fontSize: 11, color: THEME.muted, fontWeight: 500 }}>{flag ? `${flag} ` : ''}{label}</span>
      <span style={{ fontSize: 11.5, color: THEME.white, textAlign: 'right', lineHeight: 1.45, fontWeight: 500 }}>{value}</span>
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
              <th key={i} style={{
                textAlign: 'left', color: THEME.accent, fontWeight: 700,
                padding: '6px 8px', borderBottom: `1px solid ${THEME.border}`,
                whiteSpace: 'nowrap', textTransform: 'uppercase', fontSize: 9, letterSpacing: '0.05em',
              }}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((cell, j) => (
                <td key={j} style={{
                  padding: '6px 8px', color: THEME.white,
                  borderBottom: `1px solid ${THEME.borderSoft}`, whiteSpace: 'nowrap',
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Ranking({ rows, accent }: { rows: { rank: number; country: string; flag?: string; production: string; share: string }[]; accent: string }) {
  const max = Math.max(...rows.map((r) => r.rank || 0), 1);
  return (
    <div>
      {rows.map((r) => (
        <div key={r.country} style={{
          display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0',
          borderBottom: `1px solid ${THEME.borderSoft}`,
        }}>
          <span style={{
            width: 22, fontSize: 10, fontWeight: 800,
            color: r.rank === 1 ? accent : THEME.dim,
            fontFamily: 'ui-monospace, monospace',
          }}>{String(r.rank).padStart(2, '0')}</span>
          <span style={{ fontSize: 13, width: 22 }}>{r.flag || ''}</span>
          <span style={{ flex: 1, fontSize: 12, color: THEME.white, fontWeight: 600 }}>{r.country}</span>
          <span style={{ fontSize: 10.5, color: THEME.muted, fontFamily: 'ui-monospace, monospace', textAlign: 'right' }}>{r.production}</span>
          {r.share ? <span style={{ fontSize: 10, color: accent, fontFamily: 'ui-monospace, monospace', minWidth: 58, textAlign: 'right' }}>{r.share}</span> : null}
        </div>
      ))}
      <div style={{ height: 3, borderRadius: 2, background: THEME.surface, marginTop: 8, overflow: 'hidden' }}>
        <div style={{ width: `${(Math.max(...rows.map((r) => r.rank)) / max) * 100}%`, height: '100%', background: accent }} />
      </div>
    </div>
  );
}

function RiskBlock({ risk, accent }: { risk: { tier: string; level: string; factors: string[] }[]; accent: string }) {
  const color = (level: string) => {
    const l = level.toLowerCase();
    if (l.includes('high') || l.includes('extreme') || l.includes('very high')) return '#EF4444';
    if (l.includes('moderate') || l.includes('medium')) return '#F59E0B';
    return '#22C55E';
  };
  return (
    <div>
      {risk.map((r, i) => (
        <div key={i} style={{ padding: '10px 0', borderBottom: i < risk.length - 1 ? `1px solid ${THEME.borderSoft}` : 'none' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <span style={{ fontSize: 12, color: THEME.white, fontWeight: 700 }}>{r.tier} Risk</span>
            <span style={{
              fontSize: 10, fontWeight: 800, color: color(r.level),
              padding: '2px 8px', borderRadius: 4,
              border: `1px solid ${color(r.level)}30`, background: `${color(r.level)}10`,
            }}>{r.level}</span>
          </div>
          <Chips items={r.factors} />
        </div>
      ))}
    </div>
  );
}

function NetworkBlock({ network }: { network: { group: string; links: string[] }[] }) {
  const groupColor: Record<string, string> = {
    'Origin': THEME.com,
    'Market': THEME.geo,
    'Institution': THEME.biz,
    'Infrastructure': THEME.muted,
    'Cross-Reference': THEME.purple,
  };
  return (
    <div>
      {network.map((g) => (
        <div key={g.group} style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 9, color: groupColor[g.group] || THEME.dim, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{g.group}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {g.links.map((l) => (
              <span key={l} style={{
                fontSize: 10.5, color: THEME.white, padding: '4px 9px', borderRadius: 6,
                border: `1px solid ${(groupColor[g.group] || THEME.border)}30`,
                background: `${(groupColor[g.group] || THEME.surface)}10`,
              }}>{l}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProseBlock({ text }: { text: string }) {
  return (
    <div style={{ fontSize: 12, color: THEME.muted, lineHeight: 1.7 }}>
      {text.split('\n').map((p, i) => <p key={i} style={{ marginBottom: p ? 8 : 0 }}>{p}</p>)}
    </div>
  );
}

function ListBlock({ items }: { items: string[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {items.map((t, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'flex-start', gap: 8,
          fontSize: 11.5, color: THEME.white, lineHeight: 1.5,
        }}>
          <span style={{ color: THEME.accent, fontSize: 10, marginTop: 3, flexShrink: 0 }}>▸</span>
          <span>{t}</span>
        </div>
      ))}
    </div>
  );
}

function GroupedBlock({ groups }: { groups: { title: string; items: string[] }[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {groups.map((g) => (
        <div key={g.title}>
          <div style={{ fontSize: 9, color: THEME.dim, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{g.title}</div>
          <Chips items={g.items} />
        </div>
      ))}
    </div>
  );
}

export default function SectionCard({ section, accentColor = THEME.accent }: { section: Section; accentColor?: string }) {
  return (
    <div style={{
      background: THEME.card, border: `1px solid ${THEME.border}`,
      borderRadius: 14, padding: 18, marginBottom: 10,
    }} id={`sec-${section.key}`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <span style={{ width: 3, height: 14, borderRadius: 2, background: accentColor }} />
        <span style={{ fontSize: 11, fontWeight: 800, color: THEME.white, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{section.title}</span>
      </div>

      {section.type === 'prose' && section.text && <ProseBlock text={section.text} />}
      {section.type === 'kv' && section.kvs && section.kvs.map((k) => <KV key={k.label} {...k} />)}
      {section.type === 'chips' && section.chips && <Chips items={section.chips} />}
      {section.type === 'list' && section.items && <ListBlock items={section.items} />}
      {section.type === 'grouped' && section.groups && <GroupedBlock groups={section.groups} />}
      {section.type === 'table' && section.table && <Table columns={section.table.columns} rows={section.table.rows} />}
      {section.type === 'ranking' && section.ranking && <Ranking rows={section.ranking} accent={accentColor} />}
      {section.type === 'risk' && section.risk && <RiskBlock risk={section.risk} accent={accentColor} />}
      {section.type === 'network' && section.network && <NetworkBlock network={section.network} />}
    </div>
  );
}
