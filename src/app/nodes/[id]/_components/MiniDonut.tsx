export default function MiniDonut({ value, color = 'var(--accent)', size = 60, stroke = 4, label, labelColor = 'var(--text-1)' }: {
  value: number; color?: string; size?: number; stroke?: number; label?: React.ReactNode; labelColor?: string;
}) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (Math.min(100, Math.max(0, value)) / 100) * circ;
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--track)" strokeWidth={stroke} />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span className="mono" style={{ fontSize: 11, fontWeight: 700, color: labelColor }}>{label}</span>
      </div>
    </div>
  );
}
