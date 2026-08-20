import type { Section } from '@/data/sections';
import { THEME } from './theme';

function Chips({ items }: { items: string[] }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
      {items.map((t) => (
        <span key={t} style={{ fontSize: 10, color: 'var(--text-2)', padding: '3px 8px', borderRadius: 4, border: '1px solid var(--border)', background: 'var(--bg-surface)' }}>{t}</span>
      ))}
    </div>
  );
}

function KV({ label, value, flag }: { label: string; value: string; flag?: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, padding: '6px 0', borderBottom: '1px solid var(--border)' }}>
      <span style={{ fontSize: 11, color: 'var(--text-3)' }}>{flag ? `${flag} ` : ''}{label}</span>
      <span style={{ fontSize: 11, color: 'var(--text-1)', textAlign: 'right', fontWeight: 500 }}>{value}</span>
    </div>
  );
}

function Table({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
        <thead>
          <tr>{columns.map((c, i) => (
            <th key={i} style={{ textAlign: 'left', color: 'var(--accent)', fontWeight: 700, padding: '5px 8px', borderBottom: '1px solid var(--border)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{c}</th>
          ))}</tr>
        </thead>
        <tbody>{rows.map((r, i) => (
          <tr key={i}>{r.map((cell, j) => (
            <td key={j} style={{ padding: '5px 8px', color: 'var(--text-1)', borderBottom: '1px solid var(--border)' }}>{cell}</td>
          ))}</tr>
        ))}</tbody>
      </table>
    </div>
  );
}

function Ranking({ rows, accent }: { rows: { rank: number; country: string; flag?: string; production: string; share: string }[]; accent: string }) {
  return (
    <div>{rows.map((r) => (
      <div key={r.country} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0', borderBottom: '1px solid var(--border)' }}>
        <span className="mono" style={{ fontSize: 9, fontWeight: 700, color: r.rank === 1 ? accent : 'var(--text-4)', width: 18 }}>{String(r.rank).padStart(2, '0')}</span>
        <span style={{ fontSize: 12, width: 20 }}>{r.flag || ''}</span>
        <span style={{ flex: 1, fontSize: 11, color: 'var(--text-1)', fontWeight: 500 }}>{r.country}</span>
        <span className="mono" style={{ fontSize: 10, color: 'var(--text-3)' }}>{r.production}</span>
        {r.share && <span className="mono" style={{ fontSize: 10, color: accent, minWidth: 50, textAlign: 'right' }}>{r.share}</span>}
      </div>
    ))}</div>
  );
}

function RiskBlock({ risk }: { risk: { tier: string; level: string; factors: string[] }[] }) {
  const color = (level: string) => { const l = level.toLowerCase(); if (l.includes('high') || l.includes('extreme')) return 'var(--danger)'; if (l.includes('moderate')) return 'var(--warning)'; return 'var(--success)'; };
  return (<div>{risk.map((r, i) => (
    <div key={i} style={{ padding: '8px 0', borderBottom: i < risk.length - 1 ? '1px solid var(--border)' : 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        <span style={{ fontSize: 11, color: 'var(--text-1)', fontWeight: 600 }}>{r.tier} Risk</span>
        <span style={{ fontSize: 9, fontWeight: 700, color: color(r.level), padding: '2px 6px', borderRadius: 3, border: `1px solid ${color(r.level)}30`, background: `${color(r.level)}10` }}>{r.level}</span>
      </div>
      <Chips items={r.factors} />
    </div>
  ))}</div>);
}

function NetworkBlock({ network }: { network: { group: string; links: string[] }[] }) {
  const gc: Record<string, string> = { 'Origin': 'var(--com)', 'Market': 'var(--geo)', 'Institution': 'var(--biz)', 'Infrastructure': 'var(--text-3)', 'Cross-Reference': 'var(--purple)' };
  return (<div>{network.map((g) => (
    <div key={g.group} style={{ marginBottom: 8 }}>
      <div style={{ fontSize: 8, color: gc[g.group] || 'var(--text-4)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{g.group}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>{g.links.map((l) => (
        <span key={l} style={{ fontSize: 10, color: 'var(--text-2)', padding: '3px 7px', borderRadius: 4, border: `1px solid var(--border)`, background: 'var(--bg-surface)' }}>{l}</span>
      ))}</div>
    </div>
  ))}</div>);
}

export default function SectionCard({ section, accentColor = 'var(--accent)' }: { section: Section; accentColor?: string }) {
  return (
    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10, padding: 16, marginBottom: 8 }} id={`sec-${section.key}`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
        <span style={{ width: 2, height: 12, borderRadius: 1, background: accentColor }} />
        <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-1)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{section.title}</span>
      </div>
      {section.type === 'prose' && section.text && <p style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.6 }}>{section.text}</p>}
      {section.type === 'kv' && section.kvs && section.kvs.map((k) => <KV key={k.label} {...k} />)}
      {section.type === 'chips' && section.chips && <Chips items={section.chips} />}
      {section.type === 'list' && section.items && <div>{section.items.map((t, i) => (
        <div key={i} style={{ display: 'flex', gap: 6, fontSize: 11, color: 'var(--text-2)', padding: '3px 0', lineHeight: 1.5 }}>
          <span style={{ color: accentColor, fontSize: 8, marginTop: 4 }}>▸</span>{t}
        </div>
      ))}</div>}
      {section.type === 'grouped' && section.groups && <div>{section.groups.map((g) => (
        <div key={g.title} style={{ marginBottom: 8 }}>
          <div style={{ fontSize: 9, color: 'var(--text-4)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 }}>{g.title}</div>
          <Chips items={g.items} />
        </div>
      ))}</div>}
      {section.type === 'table' && section.table && <Table columns={section.table.columns} rows={section.table.rows} />}
      {section.type === 'ranking' && section.ranking && <Ranking rows={section.ranking} accent={accentColor} />}
      {section.type === 'risk' && section.risk && <RiskBlock risk={section.risk} />}
      {section.type === 'network' && section.network && <NetworkBlock network={section.network} />}
    </div>
  );
}
