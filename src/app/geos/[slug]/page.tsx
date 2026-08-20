'use client';

import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { GEONODES, GEONODE_BY_SLUG } from '@/data/geonodes';
import { THEME } from '@/app/nodes/[id]/_components/theme';
import type { GeoNode } from '@/data/types';

function parseShare(s: string): number {
  const m = s.match(/([\d.]+)/);
  return m ? Math.min(100, Math.max(0, parseFloat(m[1]))) : 0;
}

const TIER_COLORS: Record<string, { bg: string; fg: string }> = {
  Elite: { bg: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(234,179,8,0.08))', fg: '#F59E0B' },
  Standard: { bg: 'rgba(59,130,246,0.12)', fg: '#3B82F6' },
  Emerging: { bg: 'rgba(148,163,184,0.12)', fg: '#94A3B8' },
};

const NEWS_TEMPLATES: ((n: GeoNode) => { title: string; summary: string })[] = [
  (n) => ({
    title: `${n.name} Eyes Export Diversification Beyond ${n.top5Exports[0]?.name || 'Primary Commodities'}`,
    summary: `Officials in ${n.capital} signal a push to expand the export basket as ${n.name.toLowerCase()}'s share of African trade sits at ${n.continentalShare}.`,
  }),
  (n) => ({
    title: `${n.top5Exports[0]?.name || 'Key Sector'} Prices Boost ${n.name} Revenue Outlook`,
    summary: `Rising global demand for ${n.top5Exports[0]?.name?.toLowerCase() || 'core commodities'} could add billions to ${n.name}'s ${n.exportValue} annual export bill.`,
  }),
  (n) => ({
    title: `Infrastructure Push: ${n.economicAssets[0] || 'Key Asset'} Upgrade Underway`,
    summary: `Investment in ${n.economicAssets[0]?.toLowerCase() || 'strategic infrastructure'} aims to strengthen ${n.name}'s position as a ${n.region} trade hub.`,
  }),
  (n) => ({
    title: `${n.name} Partners With ${GEONODES.find((g) => g.id === n.connectedGeoNodes[0])?.name || 'Regional Ally'} on Cross-Border Trade`,
    summary: `The bilateral corridor between ${n.name} and ${GEONODES.find((g) => g.id === n.connectedGeoNodes[0])?.name || 'its neighbour'} targets a 20% increase in goods flow within two years.`,
  }),
  (n) => ({
    title: `African Continental Free Trade Area: ${n.name}'s ${n.top5Exports[1]?.name || 'Secondary Export'} Sector Poised to Gain`,
    summary: `AfCFTA tariff reductions could lift ${n.name}'s non-primary exports, diversifying an economy currently dominated by ${n.top5Exports[0]?.name?.toLowerCase() || 'key commodities'}.`,
  }),
  (n) => ({
    title: `${n.name} GDP Growth Forecast Revised Upward on ${n.top5Exports[0]?.name || 'Commodity'} Boom`,
    summary: `Analysts raise ${n.name}'s near-term growth outlook to match the strength of its ${n.exportValue} export economy, anchored by ${n.top5Exports[0]?.name?.toLowerCase() || 'core exports'}.`,
  }),
  (n) => ({
    title: `${n.economicAssets[1] || 'Major Facility'} in ${n.name} Records ${n.tags.includes('oil') ? 'record throughput' : 'output gains'}`,
    summary: `Operational improvements at ${n.economicAssets[1]?.toLowerCase() || 'a key facility'} underscore ${n.name}'s drive to maximise value from its natural resource base.`,
  }),
  (n) => ({
    title: `Youth Demographics: ${n.profileMetrics[2]?.value || 'N/A'} of ${n.name} Under 30 Shapes Policy Debate`,
    summary: `With ${n.profileMetrics[2]?.value || 'a large'} youth population, ${n.name} faces both a demographic dividend and pressure to create jobs in ${n.top5Exports[0]?.name?.toLowerCase() || 'export sectors'}.`,
  }),
];

const NEWS_DATES = [
  '15 Aug 2026', '02 Aug 2026', '21 Jul 2026', '08 Jul 2026', '25 Jun 2026',
];

function generateNews(n: GeoNode) {
  const seed = n.rank;
  const used = new Set<number>();
  const items: { title: string; summary: string; date: string }[] = [];
  for (let i = 0; i < 5; i++) {
    let idx = (seed + i * 3) % NEWS_TEMPLATES.length;
    while (used.has(idx)) idx = (idx + 1) % NEWS_TEMPLATES.length;
    used.add(idx);
    const { title, summary } = NEWS_TEMPLATES[idx](n);
    items.push({ title, summary, date: NEWS_DATES[i] });
  }
  return items;
}

function generateBriefing(n: GeoNode): string[] {
  const topCommodity = n.top5Exports[0]?.name || 'primary commodities';
  const secondCommodity = n.top5Exports[1]?.name || 'secondary goods';
  const connectedGeo = GEONODES.find((g) => g.id === n.connectedGeoNodes[0]);
  const paragraphs: string[] = [];
  paragraphs.push(
    `${n.fullName} (${n.iso3}) is ranked #${n.rank} among Africa's top commodity-exporting nations with annual exports of ${n.exportValue}, representing ${n.continentalShare} of continental trade. Its economy is anchored by ${topCommodity}, which alone accounts for ${n.top5Exports[0]?.share || 'a significant'} share of total exports, followed by ${secondCommodity} at ${n.top5Exports[1]?.share || 'notable volume'}. With a GDP of ${n.gdp} and GDP per capita of ${n.gdpPerCapita}, ${n.name} occupies a ${n.tier.toLowerCase()}-tier position in Africa's commodity hierarchy.`
  );
  paragraphs.push(
    `The country's strategic economic assets—including ${n.economicAssets.slice(0, 3).join(', ')}—provide the infrastructure backbone for resource extraction and export logistics. ${n.connectedComNodes.length > 0 ? `Its commodity network links it to global markets through ${n.connectedComNodes.join(', ')} flows, ` : ''}${connectedGeo ? `while regional ties with ${connectedGeo.name} and other ${n.region} partners support cross-border trade corridors.` : `strengthening its ${n.region} trade position.`}`
  );
  if (n.tier === 'Elite') {
    paragraphs.push(
      `As an Elite-tier node, ${n.name} benefits from diversified infrastructure, established trade relationships, and institutional depth. Key risks include over-reliance on ${topCommodity} price cycles and the need to convert resource wealth into broad-based development, given poverty rates of ${n.profileMetrics[3]?.value || 'unknown'}.`
    );
  } else if (n.tier === 'Standard') {
    paragraphs.push(
      `As a Standard-tier node, ${n.name} has a credible commodity export platform but faces challenges in value addition and diversification. With a population of ${n.population} and a literacy rate of ${n.profileMetrics[4]?.value || 'unknown'}, the human capital base supports further industrialisation. Key watch items: infrastructure bottlenecks, commodity price exposure, and regional integration opportunities under AfCFTA.`
    );
  } else {
    paragraphs.push(
      `As an Emerging-tier node, ${n.name} has significant upside potential but infrastructure gaps and institutional constraints limit near-term export growth. The country's ${n.profileMetrics[1]?.value || 'development indicators'} and poverty rate of ${n.profileMetrics[3]?.value || 'unknown'} underscore the urgency of translating resource potential into inclusive economic growth.`
    );
  }
  return paragraphs;
}

function MetricCard({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div style={{ background: THEME.surface, border: `1px solid ${THEME.border}`, borderRadius: 8, padding: '8px 10px' }}>
      <div style={{ fontSize: 9, color: THEME.dim, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</div>
      <div className="mono" style={{ fontSize: 14, fontWeight: 700, color: accent || THEME.t1, marginTop: 2 }}>{value}</div>
    </div>
  );
}

export default function GeoNodeProfile() {
  const params = useParams();
  const slug = (params.slug as string) || '';
  const geo = GEONODE_BY_SLUG[slug];

  const news = useMemo(() => (geo ? generateNews(geo) : []), [geo]);
  const briefingParagraphs = useMemo(() => (geo ? generateBriefing(geo) : []), [geo]);

  const similarNodes = useMemo(() => {
    if (!geo) return [];
    return GEONODES
      .filter((g) => g.region === geo.region && g.id !== geo.id)
      .sort((a, b) => a.rank - b.rank)
      .slice(0, 5);
  }, [geo]);

  const relatedNodes = useMemo(() => {
    if (!geo || geo.connectedComNodes.length === 0) return [];
    return GEONODES
      .filter((g) => g.id !== geo.id && g.connectedComNodes.some((c) => geo.connectedComNodes.includes(c)))
      .sort((a, b) => a.rank - b.rank)
      .slice(0, 5);
  }, [geo]);

  const mentionedNodes = useMemo(() => {
    if (!geo) return [];
    return GEONODES
      .filter((g) => g.connectedGeoNodes.includes(geo.id))
      .sort((a, b) => a.rank - b.rank)
      .slice(0, 5);
  }, [geo]);

  if (!geo) {
    return (
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 16px', textAlign: 'center', minHeight: '100vh' }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: THEME.t1, marginBottom: 8 }}>Node not found</div>
        <div style={{ fontSize: 13, color: THEME.muted, marginBottom: 16 }}>No geonode matches slug: {slug}</div>
        <Link href="/geos" style={{ color: THEME.accent, fontSize: 13, textDecoration: 'none' }}>Back to Geos</Link>
      </div>
    );
  }

  const tier = TIER_COLORS[geo.tier] || TIER_COLORS.Emerging;
  const topExportShare = parseShare(geo.top5Exports[0]?.share || '0');

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 16px', background: THEME.bg, minHeight: '100vh' }}>
      <div style={{ paddingBottom: 40 }}>
        {/* Back Nav */}
        <div style={{ padding: '12px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Link href="/geos" style={{ color: THEME.accent, fontSize: 16, fontWeight: 600, textDecoration: 'none' }}>‹</Link>
          <span style={{ fontSize: 13, color: THEME.muted }}>All Geos</span>
        </div>

        {/* ── Hero ── */}
        <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 12 }} id="sec-overview">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 10, background: tier.bg,
              border: `1.5px solid ${tier.fg}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <span style={{ fontSize: 22, fontWeight: 700, color: tier.fg }}>{geo.name.charAt(0)}</span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: tier.fg, background: tier.bg, padding: '2px 6px', borderRadius: 3 }}>#{geo.rank} {geo.tier}</span>
                <span className="mono" style={{ fontSize: 9, color: THEME.dim }}>{geo.iso2}/{geo.iso3}</span>
                <span style={{ fontSize: 9, color: THEME.muted, padding: '1px 6px', borderRadius: 4, border: `1px solid ${THEME.border}` }}>{geo.region}</span>
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, color: THEME.t1, marginTop: 2 }}>{geo.fullName}</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginBottom: 12 }}>
            <MetricCard label="Export Value" value={geo.exportValue} accent={tier.fg} />
            <MetricCard label="Continental Share" value={geo.continentalShare} />
            <MetricCard label="ISO3" value={geo.iso3} />
          </div>

          <div style={{ padding: '8px 10px', borderRadius: 6, background: THEME.surface, border: `1px solid ${THEME.border}`, fontSize: 11, color: THEME.muted, lineHeight: 1.6, fontStyle: 'italic' }}>
            &ldquo;{geo.narrative}&rdquo;
          </div>
        </div>

        {/* ── Metrics Grid ── */}
        <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
            <span style={{ width: 2, height: 12, borderRadius: 1, background: THEME.geo }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: THEME.t1, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Key Metrics</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
            <MetricCard label="Population" value={geo.population} />
            <MetricCard label="GDP" value={geo.gdp} />
            <MetricCard label="GDP / Capita" value={geo.gdpPerCapita} />
            <MetricCard label="Continental Share" value={geo.continentalShare} accent={tier.fg} />
          </div>
        </div>

        {/* ── Top 5 Exports ── */}
        <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
            <span style={{ width: 2, height: 12, borderRadius: 1, background: THEME.com }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: THEME.t1, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Top 5 Exports</span>
          </div>
          {geo.top5Exports.map((exp, i) => {
            const pct = parseShare(exp.share);
            return (
              <div key={i} style={{ padding: '8px 0', borderTop: i === 0 ? 'none' : `1px solid ${THEME.border}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: THEME.t1 }}>{exp.name}</span>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span className="mono" style={{ fontSize: 11, color: THEME.muted }}>{exp.value}</span>
                    <span className="mono" style={{ fontSize: 10, fontWeight: 700, color: tier.fg }}>{exp.share}</span>
                  </div>
                </div>
                <div style={{ width: '100%', height: 6, borderRadius: 3, background: THEME.surface, overflow: 'hidden' }}>
                  <div style={{ width: `${pct}%`, height: '100%', borderRadius: 3, background: tier.fg, opacity: 0.8 }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Profile Metrics ── */}
        <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
            <span style={{ width: 2, height: 12, borderRadius: 1, background: THEME.purple }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: THEME.t1, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Profile Metrics</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6 }}>
            {geo.profileMetrics.map((pm) => (
              <div key={pm.label} style={{ background: THEME.surface, border: `1px solid ${THEME.border}`, borderRadius: 8, padding: '8px 10px', textAlign: 'center' }}>
                <div style={{ fontSize: 9, color: THEME.dim, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 2 }}>{pm.label}</div>
                <div className="mono" style={{ fontSize: 13, fontWeight: 700, color: THEME.t1 }}>{pm.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Economic Assets ── */}
        <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
            <span style={{ width: 2, height: 12, borderRadius: 1, background: 'var(--biz)' }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: THEME.t1, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Economic Assets</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {geo.economicAssets.map((asset, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 0', borderTop: i === 0 ? 'none' : `1px solid ${THEME.border}` }}>
                <span style={{ width: 4, height: 4, borderRadius: 2, background: THEME.geo, flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: THEME.t2, lineHeight: 1.4 }}>{asset}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Connected Commodities ── */}
        {geo.connectedComNodes.length > 0 && (
          <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
              <span style={{ width: 2, height: 12, borderRadius: 1, background: THEME.com }} />
              <span style={{ fontSize: 10, fontWeight: 700, color: THEME.t1, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Connected Commodities</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {geo.connectedComNodes.map((com) => (
                <Link key={com} href={`/nodes/${encodeURIComponent(com)}`} style={{
                  fontSize: 11, fontWeight: 600, color: THEME.com, padding: '4px 10px', borderRadius: 6,
                  background: THEME.comSoft, border: `1px solid ${THEME.comBorder}`, textDecoration: 'none',
                }}>{com}</Link>
              ))}
            </div>
          </div>
        )}

        {/* ── Connected Geographies ── */}
        {geo.connectedGeoNodes.length > 0 && (
          <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
              <span style={{ width: 2, height: 12, borderRadius: 1, background: THEME.geo }} />
              <span style={{ fontSize: 10, fontWeight: 700, color: THEME.t1, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Connected Geographies</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {geo.connectedGeoNodes.map((gid) => {
                const linked = GEONODE_BY_SLUG[Object.keys(GEONODE_BY_SLUG).find((k) => GEONODE_BY_SLUG[k].id === gid) || ''] || GEONODES.find((g) => g.id === gid);
                if (!linked) return null;
                return (
                  <Link key={gid} href={`/geos/${linked.slug}`} style={{
                    fontSize: 11, fontWeight: 600, color: THEME.geo, padding: '4px 10px', borderRadius: 6,
                    background: THEME.geoSoft, border: `1px solid ${THEME.geoBorder}`, textDecoration: 'none',
                    display: 'flex', alignItems: 'center', gap: 5,
                  }}>
                    <span>{linked.name}</span>
                    <span className="mono" style={{ fontSize: 9, color: THEME.dim }}>{linked.iso2}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Related News ── */}
        <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <span style={{ width: 2, height: 12, borderRadius: 1, background: THEME.warning }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: THEME.t1, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Related Intelligence</span>
          </div>
          {news.map((item, i) => (
            <div key={i} style={{ padding: '8px 0', borderTop: i === 0 ? 'none' : `1px solid ${THEME.border}` }}>
              <div style={{ fontSize: 9, color: THEME.dim, marginBottom: 3 }}>{item.date}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: THEME.t1, marginBottom: 3, lineHeight: 1.4 }}>{item.title}</div>
              <div style={{ fontSize: 11, color: THEME.muted, lineHeight: 1.5 }}>{item.summary}</div>
            </div>
          ))}
        </div>

        {/* ── Similar Nodes ── */}
        {similarNodes.length > 0 && (
          <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
              <span style={{ width: 2, height: 12, borderRadius: 1, background: THEME.geo }} />
              <span style={{ fontSize: 10, fontWeight: 700, color: THEME.t1, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Similar Nodes</span>
              <span style={{ fontSize: 9, color: THEME.dim }}>({geo.region})</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {similarNodes.map((g) => {
                const gTier = TIER_COLORS[g.tier] || TIER_COLORS.Emerging;
                return (
                  <Link key={g.id} href={`/geos/${g.slug}`} style={{
                    background: THEME.surface, border: `1px solid ${THEME.border}`, borderRadius: 8,
                    padding: '8px 10px', textDecoration: 'none', flex: '1 1 calc(50% - 4px)', minWidth: 140,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: gTier.fg, background: gTier.bg, padding: '1px 5px', borderRadius: 3 }}>{g.tier}</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: THEME.t1 }}>{g.name}</span>
                    </div>
                    <div style={{ fontSize: 10, color: THEME.muted }}>{g.exportValue} · {g.region}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Related Nodes ── */}
        {relatedNodes.length > 0 && (
          <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
              <span style={{ width: 2, height: 12, borderRadius: 1, background: THEME.com }} />
              <span style={{ fontSize: 10, fontWeight: 700, color: THEME.t1, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Related Nodes</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {relatedNodes.map((g) => {
                const gTier = TIER_COLORS[g.tier] || TIER_COLORS.Emerging;
                const shared = g.connectedComNodes.filter((c) => geo.connectedComNodes.includes(c));
                return (
                  <Link key={g.id} href={`/geos/${g.slug}`} style={{
                    background: THEME.surface, border: `1px solid ${THEME.border}`, borderRadius: 8,
                    padding: '8px 10px', textDecoration: 'none', flex: '1 1 calc(50% - 4px)', minWidth: 140,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: gTier.fg, background: gTier.bg, padding: '1px 5px', borderRadius: 3 }}>{g.tier}</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: THEME.t1 }}>{g.name}</span>
                    </div>
                    <div style={{ fontSize: 10, color: THEME.muted }}>{g.exportValue} · {shared.length} shared commodity{shared.length !== 1 ? 'ies' : 'y'}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Mentioned in Network ── */}
        {mentionedNodes.length > 0 && (
          <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
              <span style={{ width: 2, height: 12, borderRadius: 1, background: THEME.purple }} />
              <span style={{ fontSize: 10, fontWeight: 700, color: THEME.t1, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Mentioned in Network</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {mentionedNodes.map((g) => {
                const gTier = TIER_COLORS[g.tier] || TIER_COLORS.Emerging;
                return (
                  <Link key={g.id} href={`/geos/${g.slug}`} style={{
                    background: THEME.surface, border: `1px solid ${THEME.border}`, borderRadius: 8,
                    padding: '8px 10px', textDecoration: 'none', flex: '1 1 calc(50% - 4px)', minWidth: 140,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: gTier.fg, background: gTier.bg, padding: '1px 5px', borderRadius: 3 }}>{g.tier}</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: THEME.t1 }}>{g.name}</span>
                    </div>
                    <div style={{ fontSize: 10, color: THEME.muted }}>{g.exportValue} · {g.region}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Strategic Briefing ── */}
        <div style={{ background: THEME.card, border: `1px solid ${THEME.border}`, borderRadius: 10, padding: 16, marginBottom: 12 }}>
          <div style={{ background: THEME.surface, border: `1px solid ${THEME.border}`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: THEME.accent, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>Strategic Intelligence Briefing</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: THEME.t1, marginBottom: 3 }}>{geo.name}</div>
            <div style={{ fontSize: 10, color: THEME.muted }}>
              {geo.region} · {geo.tier} Tier · {geo.iso3}
            </div>
          </div>
          {briefingParagraphs.map((p, i) => (
            <p key={i} style={{ fontSize: 12, color: THEME.muted, lineHeight: 1.65, marginBottom: i < briefingParagraphs.length - 1 ? 10 : 0 }}>{p}</p>
          ))}
        </div>

        {/* ── Back Nav ── */}
        <div style={{ padding: '16px 0', textAlign: 'center' }}>
          <Link href="/geos" style={{ color: THEME.accent, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>‹ Back to All Geos</Link>
        </div>
      </div>
    </div>
  );
}
