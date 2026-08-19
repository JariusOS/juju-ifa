import type { Commodity, ProducerRow } from './types';

export type SectionType =
  | 'prose'
  | 'kv'
  | 'chips'
  | 'list'
  | 'grouped'
  | 'table'
  | 'ranking'
  | 'risk'
  | 'network';

export interface KVRow {
  label: string;
  value: string;
  flag?: string;
}

export interface TableSection {
  columns: string[];
  rows: string[][];
}

export interface Grouped {
  title: string;
  items: string[];
}

export interface RiskTier {
  tier: string;
  level: string;
  factors: string[];
}

export interface NetworkGroup {
  group: string;
  links: string[];
}

export interface Section {
  key: string;
  title: string;
  type: SectionType;
  text?: string;
  kvs?: KVRow[];
  chips?: string[];
  items?: string[];
  groups?: Grouped[];
  table?: TableSection;
  ranking?: ProducerRow[];
  risk?: RiskTier[];
  network?: NetworkGroup[];
}

export interface BriefingItem {
  title: string;
  classification: string;
  core: string;
  impact: string;
  opportunity: string;
}

export interface Briefing {
  persona: string;
  location: string;
  updated: string;
  items: BriefingItem[];
}

function tradeRows(rows: { country: string; flag?: string; value: string; share: string }[]): KVRow[] {
  return rows.map((r) => ({ flag: r.flag, label: r.country, value: `${r.value}${r.share ? ' · ' + r.share : ''}` }));
}

// Assembles the full section tree from a Commodity (never loses data).
export function buildSections(c: Commodity): Section[] {
  const s: Section[] = [];
  const sd = c.snapshot;

  s.push({
    key: 'snapshot', title: 'Commodity Snapshot', type: 'kv',
    kvs: [
      { label: 'Global Market Value', value: sd.globalMarketValue },
      { label: 'Global Export Value', value: sd.globalExportValue },
      { label: 'Reference Price', value: sd.referencePrice },
      { label: 'Global Production', value: sd.globalProduction },
      { label: 'African Production', value: sd.africanProduction },
      { label: "Africa's Production Share", value: sd.africaProductionShare },
      { label: 'African Export Value', value: sd.africanExportValue },
      { label: 'African Share of Global Exports', value: sd.africanShareGlobalExports },
      { label: 'African Reserves', value: sd.africanReserves },
      { label: 'Reserve / Potential Value', value: sd.africanReserveValue },
      ...(sd.exportRegions.length ? [{ label: 'Primary Export Regions', value: sd.exportRegions.join(' • ') }] : []),
      ...(sd.primaryMarkets.length ? [{ label: 'Primary Markets', value: sd.primaryMarkets.join(' • ') }] : []),
    ],
  });

  if (sd.strategicRole && sd.strategicRole !== '—') {
    s.push({ key: 'role', title: 'Global Strategic Role', type: 'prose', text: sd.strategicRole });
  }
  if (c.fingerprint) {
    s.push({ key: 'fingerprint', title: 'Node Fingerprint', type: 'prose', text: c.fingerprint });
  }

  const prod = c.production;
  s.push({
    key: 'production', title: 'Production', type: 'kv',
    kvs: [
      ...(prod.top3.share ? [{ label: 'Top 3 Concentration', value: prod.top3.share + (prod.top3.combined ? ` (${prod.top3.combined})` : '') }] : []),
      ...(prod.top6.share ? [{ label: 'Top 6 Concentration', value: prod.top6.share + (prod.top6.combined ? ` (${prod.top6.combined})` : '') }] : []),
      ...(prod.top3.countries.length ? [{ label: 'Top 3 Producers', value: prod.top3.countries.join(', ') }] : []),
    ],
  });
  if (prod.ranking.length) {
    s.push({ key: 'production-ranking', title: 'Production Ranking', type: 'ranking', ranking: prod.ranking });
  }

  if (c.exporters.length) {
    s.push({ key: 'exporters', title: 'Top 5 Exporters (African)', type: 'kv', kvs: tradeRows(c.exporters) });
  }
  if (c.importers.length) {
    s.push({ key: 'importers', title: 'Top 5 Importers (from Africa)', type: 'kv', kvs: tradeRows(c.importers) });
  }
  if (c.consumers.length) {
    s.push({ key: 'consumers', title: 'Top 5 Global Consumers', type: 'kv', kvs: tradeRows(c.consumers) });
  }

  if (c.price.benchmarks.length || c.price.drivers.length) {
    s.push({
      key: 'price', title: 'Price & Market Structure', type: 'kv',
      kvs: [
        ...(c.price.benchmarks.length ? [{ label: 'Benchmarks', value: c.price.benchmarks.join(' • ') }] : []),
        ...(c.price.drivers.length ? [{ label: 'Price Drivers', value: c.price.drivers.join(' • ') }] : []),
      ],
    });
  }

  const dna = c.dna;
  if (dna.description) s.push({ key: 'dna-desc', title: 'Commodity DNA', type: 'prose', text: dna.description });
  const dnaKv: KVRow[] = [];
  if (dna.qualityExamples.length) {
    dnaKv.push({ label: 'Quality Examples', value: dna.qualityExamples.map((q) => `${q.name} (API ${q.api}, S ${q.sulfur}, ${q.qualityClass})`).join(' • ') });
  }
  if (dna.outputs.length) dnaKv.push({ label: 'Primary Outputs', value: dna.outputs.join(' • ') });
  if (dna.applications.length) dnaKv.push({ label: 'Applications', value: dna.applications.join(' • ') });
  if (dna.africanGrades.length) dnaKv.push({ label: 'African Grades', value: dna.africanGrades.join(' • ') });
  if (dna.identitySignals.length) {
    s.push({ key: 'dna-kv', title: 'Commodity DNA', type: 'kv', kvs: [...dnaKv, ...dna.identitySignals.map((i) => ({ label: i.label, value: i.value }))] });
  } else if (dnaKv.length) {
    s.push({ key: 'dna-kv', title: 'Commodity DNA', type: 'kv', kvs: dnaKv });
  }

  const o = c.origin;
  const origKv: KVRow[] = [];
  if (o.reserves.total && o.reserves.total !== '—') origKv.push({ label: 'Reserve Base', value: o.reserves.total + (o.reserves.globalShare ? ` · Global share ${o.reserves.globalShare}` : '') });
  if (o.reserves.largest && o.reserves.largest !== '—') origKv.push({ label: 'Largest Holder', value: o.reserves.largest });
  if (o.reserves.concentration) origKv.push({ label: 'Concentration', value: o.reserves.concentration });
  if (o.snapshot.production && o.snapshot.production !== '—') origKv.push({ label: 'Production Snapshot', value: `${o.snapshot.production} · Global ${o.snapshot.global} · Africa share ${o.snapshot.share}` });
  if (origKv.length) s.push({ key: 'origin', title: 'Origin & Reserves', type: 'kv', kvs: origKv });
  if (o.topReserves.length) s.push({ key: 'origin-top', title: 'Top Reserve Holders', type: 'ranking', ranking: o.topReserves });

  const envGroups: Grouped[] = [];
  if (o.environment.onshore.length) envGroups.push({ title: 'Onshore', items: o.environment.onshore });
  if (o.environment.offshore.length) envGroups.push({ title: 'Offshore', items: o.environment.offshore });
  if (o.environment.deepwater.length) envGroups.push({ title: 'Deepwater', items: o.environment.deepwater });
  if (envGroups.length) s.push({ key: 'environment', title: 'Production Environment', type: 'grouped', groups: envGroups });

  const infraGroups: Grouped[] = [];
  if (o.infrastructure.extraction.length) infraGroups.push({ title: 'Extraction', items: o.infrastructure.extraction });
  if (o.infrastructure.midstream.length) infraGroups.push({ title: 'Midstream', items: o.infrastructure.midstream });
  if (o.infrastructure.export.length) infraGroups.push({ title: 'Export', items: o.infrastructure.export });
  if (o.infrastructure.processing.length) infraGroups.push({ title: 'Processing', items: o.infrastructure.processing });
  if (infraGroups.length) s.push({ key: 'infrastructure', title: 'Production Infrastructure', type: 'grouped', groups: infraGroups });

  if (o.flow.length) {
    s.push({ key: 'flow', title: 'Production-to-Market Flow', type: 'chips', chips: o.flow });
  }
  if (o.drivers.length) s.push({ key: 'origin-drivers', title: 'Origin Drivers', type: 'chips', chips: o.drivers });
  if (o.constraints.length) s.push({ key: 'origin-constraints', title: 'Origin Constraints', type: 'chips', chips: o.constraints });
  if (o.opportunities.length) s.push({ key: 'origin-opportunities', title: 'Origin Opportunities', type: 'chips', chips: o.opportunities });

  if (o.basins.length) {
    s.push({
      key: 'basins', title: 'Production Geography / Basins', type: 'kv',
      kvs: o.basins.map((b) => ({ label: b.name, value: `${b.country} · ${b.environment}` })),
    });
  }

  if (c.connectedEntities.length) {
    s.push({
      key: 'network', title: 'Connected Entities', type: 'network',
      network: [{ group: 'Tracked', links: c.connectedEntities.map((e) => `${e.flag || ''}${e.name} (${e.kind})`) }],
    });
  }

  return s;
}