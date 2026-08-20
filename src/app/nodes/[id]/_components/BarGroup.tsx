export interface BarEntry { label: string; value: string; valueNum: number; }

export default function BarGroup({ data, color = 'var(--accent)', height = 64, title }: { data: BarEntry[]; color?: string; height?: number; title: string }) {
  const max = Math.max(...data.map((d) => d.valueNum));
  const usable = height - 24;
  return (
    <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 8, padding: 10, flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 8, fontWeight: 700, color: 'var(--text-4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: usable, marginTop: 6 }}>
        {data.map((d, i) => {
          const h = Math.max(4, (d.valueNum / max) * usable);
          const opacity = 0.25 + 0.75 * (d.valueNum / max);
          return <div key={i} style={{ width: 10, height: h, background: color, opacity, borderRadius: '2px 2px 0 0' }} />;
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
        {data.map((d, i) => <span key={i} style={{ fontSize: 7, color: 'var(--text-4)', textAlign: 'center' }}>{d.label}</span>)}
      </div>
    </div>
  );
}
