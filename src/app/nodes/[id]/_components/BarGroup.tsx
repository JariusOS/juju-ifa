import { THEME } from './theme';

export interface BarEntry {
  label: string;
  value: string;
  valueNum: number;
}

interface BarGroupProps {
  data: BarEntry[];
  color?: string;
  height?: number;
  title: string;
}

export default function BarGroup({ data, color = THEME.accent, height = 68, title }: BarGroupProps) {
  const max = Math.max(...data.map((d) => d.valueNum));
  const usable = height - 26;

  return (
    <div
      style={{
        background: THEME.card,
        border: `1px solid ${THEME.border}`,
        borderRadius: 16,
        padding: 12,
        flex: 1,
        minWidth: 0,
      }}
    >
      <div style={{ fontSize: 10, fontWeight: 700, color: THEME.white, letterSpacing: '0.08em' }}>
        {title}
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: usable, marginTop: 8 }}>
        {data.map((d, i) => {
          const h = Math.max(6, (d.valueNum / max) * usable);
          const opacity = 0.15 + 0.85 * (d.valueNum / max);
          return (
            <div key={i} style={{ width: 10, height: h, background: color, opacity, borderRadius: '4px 4px 0 0' }} />
          );
        })}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 6,
        }}
      >
        {data.map((d, i) => (
          <span key={i} style={{ fontSize: 7.5, color: THEME.muted, textAlign: 'center' }}>
            {d.label}
          </span>
        ))}
      </div>
    </div>
  );
}