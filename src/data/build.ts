import type { Commodity, ProducerRow, TradeRow, EntityRow, NewsItem } from './types';
import type { MasterRecord, RankedRow } from './master-types';
import { countryInfo } from './countries';
import { deriveComId, FLAGS } from './comids';

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function categoryFrom(tags: string[]): { type: string; cls: string } {
  if (tags.some((t) => t.includes('EnergyCommodity'))) return { type: 'comNODE: energy', cls: 'Energy Commodity / Fossil Fuel' };
  if (tags.some((t) => t.includes('PreciousMinerals'))) return { type: 'comNODE: precious metals', cls: 'Precious Metal / Mineral' };
  if (tags.some((t) => t.includes('CriticalMinerals'))) return { type: 'comNODE: critical minerals', cls: 'Critical Minerals / Strategic Mineral' };
  if (tags.some((t) => t.includes('BaseMetals'))) return { type: 'comNODE: base metals', cls: 'Base Metal / Industrial Metal' };
  if (tags.some((t) => t.includes('AgriculturalProducts'))) return { type: 'comNODE: agricultural', cls: 'Agricultural Commodity / Agro-Export' };
  if (tags.some((t) => t.includes('IndustrialMinerals'))) return { type: 'comNODE: industrial minerals', cls: 'Industrial Mineral' };
  if (tags.some((t) => t.includes('ChemicalCommodity'))) return { type: 'comNODE: chemicals', cls: 'Chemical / Processed Commodity' };
  if (tags.some((t) => t.includes('MarineProducts'))) return { type: 'comNODE: marine', cls: 'Marine Product / Seafood' };
  if (tags.some((t) => t.includes('ForestProducts'))) return { type: 'comNODE: forestry', cls: 'Forest Product' };
  if (tags.some((t) => t.includes('ConstructionMaterials'))) return { type: 'comNODE: construction materials', cls: 'Construction Material' };
  return { type: 'comNODE: commodity', cls: 'Commodity' };
}

function weightFrom(rank: number): { weight: number; label: string } {
  if (rank <= 3) return { weight: 10, label: 'Critical' };
  if (rank <= 10) return { weight: 9, label: 'Critical' };
  if (rank <= 30) return { weight: 8, label: 'High' };
  if (rank <= 60) return { weight: 7, label: 'Significant' };
  return { weight: 6, label: 'Moderate' };
}

function confFrom(label: string): number {
  const l = label.toLowerCase();
  if (l.includes('high')) return 88;
  if (l.includes('partial')) return 40;
  if (l.includes('medium')) return 70;
  if (l.includes('low')) return 55;
  return 50;
}

function toTradeRow(r: RankedRow): TradeRow {
  const info = countryInfo(r.country);
  return { country: info.name || r.country, flag: info.flag, value: r.detail, valueNum: r.valueNum, share: r.share };
}

function toProducerRow(r: RankedRow, rank: number): ProducerRow {
  const info = countryInfo(r.country);
  return { rank, country: info.name || r.country, flag: info.flag, production: r.detail, productionNum: r.valueNum, share: r.share };
}

function sumShare(rows: RankedRow[], n: number): string {
  let sum = 0;
  for (let i = 0; i < Math.min(n, rows.length); i++) {
    const m = rows[i].share.match(/([\d.]+)/);
    if (m) sum += parseFloat(m[1]);
  }
  return sum > 0 ? `${Math.round(sum * 10) / 10}%` : '';
}

function deriveNews(rec: MasterRecord): NewsItem[] {
  const lead = rec.top5Producers[0]?.country;
  const leadName = lead ? countryInfo(lead).name : '';
  const out: NewsItem[] = [];
  if (leadName) {
    out.push({
      title: `${leadName} anchors African ${rec.name} output`,
      summary: `${leadName} is the leading African producer, contributing the largest share of continental ${rec.name} export value.`,
      date: 'master reference',
      impact: 'medium',
    });
  }
  out.push({
    title: `${rec.name} — African export rank #${rec.rank}`,
    summary: rec.description,
    date: 'master reference',
    impact: rec.confidence.toLowerCase().includes('high') ? 'high' : 'medium',
  });
  return out.slice(0, 3);
}

function deriveEntities(rec: MasterRecord): EntityRow[] {
  const counts = new Map<string, { count: number; role: string }>();
  const tally = (rows: RankedRow[], role: string) => {
    for (const r of rows) {
      const key = r.country.toUpperCase();
      const c = counts.get(key) || { count: 0, role };
      c.count += 1;
      if (!counts.has(key)) c.role = role;
      counts.set(key, c);
    }
  };
  tally(rec.top3, 'Origin');
  tally(rec.top5Producers, 'Origin');
  tally(rec.top5Exporters, 'Exporter');
  tally(rec.top5Importers, 'Market');
  return [...counts.entries()]
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 10)
    .map(([key, v]) => {
      const info = countryInfo(key);
      return { name: info.name || key, flag: info.flag, count: v.count, kind: v.role };
    });
}

// Build a commodity purely from the commodity INDEX (reference-grade, ~50%).
export function buildFromIndex(rec: MasterRecord): Commodity {
  const slug = slugify(rec.name);
  const cat = categoryFrom(rec.tags);
  const weight = weightFrom(rec.rank);
  const conf = confFrom(rec.confidence);

  const producers = rec.top5Producers;
  const consumers = rec.top5Consumers;
  const exporters = rec.top5Exporters.length ? rec.top5Exporters : producers.slice(0, 5);
  const importers = rec.top5Importers;

  return {
    id: deriveComId(rec.rank, rec.name),
    slug,
    name: rec.name,
    status: 'Verified (index reference)',
    nodeType: cat.type,
    nodeClass: cat.cls,
    avatarUrl: `/commodities/${slug}.png`,
    weight: weight.weight,
    weightLabel: weight.label,
    confidence: conf,
    confidenceLabel: `${rec.confidence} (commodity index reference)`,
    hsCode: rec.hsCode,
    fingerprint: rec.description,
    tags: [`#${slug}`],
    nodeTags: rec.tags,
    rankLabel: `#${rec.rank} Africa Export`,
    globalValue: rec.globalValue,
    africaExportValue: rec.exportValue,
    africaShare: rec.africaShare,
    referencePrice: rec.price,
    referencePriceDetail: 'index reference',
    yoyPrice: rec.yoy,
    followers: String(Math.max(200, Math.round((1011 - rec.rank) * 12))),
    bookmarks: String(Math.max(80, Math.round((1011 - rec.rank) * 8))),
    flags: FLAGS[rec.name],

    snapshot: {
      globalMarketValue: rec.globalValue,
      globalExportValue: rec.exportValue,
      referencePrice: rec.price,
      globalProduction: '—',
      africanProduction: '—',
      africaProductionShare: rec.africaShare,
      strategicRole: rec.description,
      africanExportValue: rec.exportValue,
      africanShareGlobalExports: rec.africaShare,
      africanReserves: rec.valueLine,
      africanReserveValue: rec.valueLine,
      exportRegions: [],
      primaryMarkets: [...new Set(importers.map((r) => countryInfo(r.country).name))],
    },

    summaryGrid: {
      reserves: {
        value: rec.valueLine.split(':')[1]?.trim() || '—',
        unit: rec.valueLine.split(':')[0] || 'value',
        yoy: rec.yoy,
        holders: rec.top3.slice(0, 3).map((r) => {
          const info = countryInfo(r.country);
          return { flag: info.flag, name: info.name || r.country, value: r.detail };
        }),
      },
      exports: {
        label: 'African Export',
        value: rec.exportValue,
        detail: `Global ${rec.globalValue} · Africa share ${rec.africaShare}`,
      },
      health: {
        status: conf >= 80 ? 'Strong' : conf >= 60 ? 'High' : conf >= 40 ? 'Moderate' : 'Low',
        weight: weight.label,
        confidence: `${conf}%`,
      },
    },

    production: {
      top3: { share: sumShare(producers, 3), combined: '', countries: producers.slice(0, 3).map((r) => countryInfo(r.country).name) },
      top6: { share: sumShare(producers, 6), combined: '', countries: producers.slice(0, 6).map((r) => countryInfo(r.country).name) },
      ranking: producers.map((r, i) => toProducerRow(r, i + 1)),
    },

    consumers: consumers.map(toTradeRow),
    exporters: exporters.map(toTradeRow),
    importers: importers.map(toTradeRow),

    price: { benchmarks: [], drivers: [] },

    dna: {
      description: rec.description,
      qualityExamples: [],
      africanGrades: [],
      benchmarks: [],
      outputs: [],
      applications: [rec.description],
      transformation: [],
      identitySignals: [
        { label: 'Export Rank', value: `#${rec.rank}` },
        { label: 'Export Value', value: rec.exportValue },
        { label: 'Global Value', value: rec.globalValue },
        { label: 'Africa Share', value: rec.africaShare },
        { label: 'YoY Growth', value: rec.yoy },
        { label: 'Confidence', value: rec.confidence },
        { label: 'UN Comtrade', value: rec.hsCode },
      ],
    },

    origin: {
      reserves: {
        total: rec.valueLine,
        globalShare: rec.africaShare,
        largest: rec.top3[0] ? countryInfo(rec.top3[0].country).name : '—',
        concentration: rec.top3.map((r) => countryInfo(r.country).name).join(', '),
      },
      topReserves: rec.top3.map((r, i) => toProducerRow(r, i + 1)),
      snapshot: { production: '—', annual: '—', global: rec.globalValue, share: rec.africaShare },
      basins: [],
      environment: { onshore: [], offshore: [], deepwater: [] },
      infrastructure: { extraction: [], midstream: [], export: [], processing: [] },
      flow: [],
      drivers: [],
      constraints: [],
      opportunities: [],
    },

    connectedEntities: deriveEntities(rec),
    news: deriveNews(rec),
  };
}