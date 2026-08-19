export const THEME = {
  bg: '#080808',
  surface: '#0E0E0E',
  card: '#151515',
  cardAlt: '#1A1A1A',
  accent: '#FF6B00',
  accentSoft: 'rgba(255,107,0,0.12)',
  white: '#FFFFFF',
  muted: 'rgba(255,255,255,0.35)',
  dim: 'rgba(255,255,255,0.18)',
  border: 'rgba(255,107,0,0.10)',
  borderSoft: 'rgba(255,255,255,0.05)',
  track: '#222222',
  success: '#22C55E',
  danger: '#EF4444',
  info: '#38BDF8',
};

export const cardStyle: React.CSSProperties = {
  background: THEME.card,
  border: `1px solid ${THEME.border}`,
  borderRadius: 16,
  padding: 16,
};

export const statStyle: React.CSSProperties = {
  fontFamily: 'ui-monospace, "SF Mono", "Cascadia Code", monospace',
  fontWeight: 700,
  color: THEME.white,
};