function cv(name: string): string {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

export function t() {
  return {
    get bg() { return cv('--bg'); },
    get raised() { return cv('--bg-raised'); },
    get card() { return cv('--bg-card'); },
    get cardHover() { return cv('--bg-card-hover'); },
    get surface() { return cv('--bg-surface'); },
    get border() { return cv('--border'); },
    get borderStrong() { return cv('--border-strong'); },
    get t1() { return cv('--text-1'); },
    get t2() { return cv('--text-2'); },
    get t3() { return cv('--text-3'); },
    get t4() { return cv('--text-4'); },
    get t5() { return cv('--text-5'); },
    get geo() { return cv('--geo'); },
    get com() { return cv('--com'); },
    get biz() { return cv('--biz'); },
    get purple() { return cv('--purple'); },
    get accent() { return cv('--accent'); },
    get accentSoft() { return cv('--accent-soft'); },
    get accentBorder() { return cv('--accent-border'); },
    get success() { return cv('--success'); },
    get warning() { return cv('--warning'); },
    get danger() { return cv('--danger'); },
    get info() { return cv('--info'); },
    get track() { return cv('--track'); },
    get shadow() { return cv('--shadow'); },
  };
}

/* Static fallback for SSR / non-client components */
export const THEME = {
  bg: 'var(--bg)',
  raised: 'var(--bg-raised)',
  card: 'var(--bg-card)',
  cardHover: 'var(--bg-card-hover)',
  surface: 'var(--bg-surface)',
  border: 'var(--border)',
  borderStrong: 'var(--border-strong)',
  borderAccent: 'var(--accent-border)',
  borderSoft: 'var(--border)',
  t1: 'var(--text-1)',
  t2: 'var(--text-2)',
  t3: 'var(--text-3)',
  t4: 'var(--text-4)',
  t5: 'var(--text-5)',
  white: 'var(--text-1)',
  muted: 'var(--text-3)',
  dim: 'var(--text-4)',
  faint: 'var(--text-5)',
  geo: 'var(--geo)',
  geoSoft: 'color-mix(in srgb, var(--geo) 12%, transparent)',
  geoBorder: 'color-mix(in srgb, var(--geo) 18%, transparent)',
  com: 'var(--com)',
  comSoft: 'color-mix(in srgb, var(--com) 12%, transparent)',
  comBorder: 'color-mix(in srgb, var(--com) 18%, transparent)',
  biz: 'var(--biz)',
  bizSoft: 'color-mix(in srgb, var(--biz) 12%, transparent)',
  bizBorder: 'color-mix(in srgb, var(--biz) 18%, transparent)',
  accent: 'var(--accent)',
  accentSoft: 'var(--accent-soft)',
  accentBorder: 'var(--accent-border)',
  purple: 'var(--purple)',
  purpleSoft: 'color-mix(in srgb, var(--purple) 12%, transparent)',
  success: 'var(--success)',
  danger: 'var(--danger)',
  warning: 'var(--warning)',
  info: 'var(--info)',
  track: 'var(--track)',
  shadow: 'var(--shadow)',
};

export const cardStyle: React.CSSProperties = {
  background: 'var(--bg-card)',
  border: '1px solid var(--border)',
  borderRadius: 10,
  padding: 16,
};

export const statStyle: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
  fontWeight: 700,
  color: 'var(--text-1)',
};

export type NodeClassType = 'GEO' | 'COM' | 'BIZ';

export function nodeClassColor(nc: string): string {
  if (nc === 'GEO') return 'var(--geo)';
  if (nc === 'BIZ') return 'var(--biz)';
  return 'var(--com)';
}

export function nodeClassColorVar(nc: string): string {
  if (nc === 'GEO') return '--geo';
  if (nc === 'BIZ') return '--biz';
  return '--com';
}

export function nodeClassSoft(nc: string): string {
  if (nc === 'GEO') return 'color-mix(in srgb, var(--geo) 10%, transparent)';
  if (nc === 'BIZ') return 'color-mix(in srgb, var(--biz) 10%, transparent)';
  return 'color-mix(in srgb, var(--com) 10%, transparent)';
}

export function nodeClassBorder(nc: string): string {
  if (nc === 'GEO') return 'color-mix(in srgb, var(--geo) 18%, transparent)';
  if (nc === 'BIZ') return 'color-mix(in srgb, var(--biz) 18%, transparent)';
  return 'color-mix(in srgb, var(--com) 18%, transparent)';
}
