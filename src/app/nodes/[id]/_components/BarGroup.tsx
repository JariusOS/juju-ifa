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

export default function BarGroup({ data, color = THEME.accent, height = 72, title }: BarGroupProps) {
  const max = Math.max(...data.map((d) => d.valueNum));
  const usable = height - 28;

  return (
    <div style={{
      background: THEME.surface, border: `1px solid ${THEME.border}`,
      borderRadius: 10, padding: 12, flex: 1, minWidth: 0,
    }}>
      <div style={{ fontSize: 9, fontWeight: 700, color: THEME.dim, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        {title}
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: usable, marginTop: 8 }}>
        {data.map((d, i) => {
          const h = Math.max(6, (d.valueNum / max) * usable);
          const opacity = 0.2 + 0.8 * (d.valueNum / max);
          return (
            <div key={i} style={{
              width: 12, height: h, background: color, opacity,
              borderRadius: '3px 3px 0 0', transition: 'height 0.3s ease',
            }} />
          );
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
        {data.map((d, i) => (
          <span key={i} style={{ fontSize: 8, color: THEME.dim, textAlign: 'center' }}>
            {d.label}
          </span>
        ))}
      </div>
    </div>
  );
}
