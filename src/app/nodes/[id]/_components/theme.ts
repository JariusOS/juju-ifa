export const THEME = {
  bg: '#070D17',
  surface: '#0E1525',
  card: '#131D2E',
  cardAlt: '#182438',
  cardHover: '#1C2A42',
  geo: '#D4A82E',
  geoSoft: 'rgba(212,168,46,0.12)',
  geoBorder: 'rgba(212,168,46,0.18)',
  com: '#22C55E',
  comSoft: 'rgba(34,197,94,0.12)',
  comBorder: 'rgba(34,197,94,0.18)',
  biz: '#3B82F6',
  bizSoft: 'rgba(59,130,246,0.12)',
  bizBorder: 'rgba(59,130,246,0.18)',
  accent: '#D4A82E',
  accentSoft: 'rgba(212,168,46,0.10)',
  accentBorder: 'rgba(212,168,46,0.18)',
  purple: '#A78BFA',
  purpleSoft: 'rgba(167,139,250,0.12)',
  white: '#F1F5F9',
  muted: '#94A3B8',
  dim: '#64748B',
  faint: '#475569',
  border: 'rgba(255,255,255,0.06)',
  borderAccent: 'rgba(212,168,46,0.12)',
  borderSoft: 'rgba(255,255,255,0.04)',
  track: '#1E293B',
  success: '#22C55E',
  danger: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
};

export const cardStyle: React.CSSProperties = {
  background: THEME.card,
  border: `1px solid ${THEME.border}`,
  borderRadius: 14,
  padding: 16,
};

export const statStyle: React.CSSProperties = {
  fontFamily: 'ui-monospace, "SF Mono", "Cascadia Code", monospace',
  fontWeight: 700,
  color: THEME.white,
};

export type NodeClassType = 'GEO' | 'COM' | 'BIZ';

export function nodeClassColor(nc: string): string {
  if (nc === 'GEO') return THEME.geo;
  if (nc === 'BIZ') return THEME.biz;
  return THEME.com;
}

export function nodeClassSoft(nc: string): string {
  if (nc === 'GEO') return THEME.geoSoft;
  if (nc === 'BIZ') return THEME.bizSoft;
  return THEME.comSoft;
}

export function nodeClassBorder(nc: string): string {
  if (nc === 'GEO') return THEME.geoBorder;
  if (nc === 'BIZ') return THEME.bizBorder;
  return THEME.comBorder;
}
