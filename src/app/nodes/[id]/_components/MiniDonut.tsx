import { THEME } from './theme';

interface MiniDonutProps {
  value: number;
  color?: string;
  track?: string;
  size?: number;
  stroke?: number;
  label?: React.ReactNode;
  labelColor?: string;
}

export default function MiniDonut({
  value,
  color = THEME.accent,
  track = THEME.track,
  size = 70,
  stroke = 5,
  label,
  labelColor = THEME.white,
}: MiniDonutProps) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(100, Math.max(0, value));
  const offset = circumference - (clamped / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={track}
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 800, color: labelColor, fontFamily: 'ui-monospace, monospace' }}>
          {label}
        </span>
      </div>
    </div>
  );
}