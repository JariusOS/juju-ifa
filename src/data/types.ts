export interface TradeRow {
  country: string;
  flag?: string;
  value: string;
  valueNum: number;
  share: string;
}

export interface ProducerRow {
  rank: number;
  country: string;
  flag?: string;
  production: string;
  productionNum: number;
  share: string;
}

export interface BasinRow {
  id: string;
  name: string;
  country: string;
  environment: string;
  grades: string[];
}

export interface EntityRow {
  name: string;
  flag?: string;
  count: number;
  kind: string;
}

export interface NewsItem {
  title: string;
  summary: string;
  date: string;
  impact: 'high' | 'medium' | 'low';
}

export interface Commodity {
  id: string;
  slug: string;
  name: string;
  status: string;
  nodeType: string;
  nodeClass: string;
  weight: number;
  weightLabel: string;
  confidence: number;
  confidenceLabel: string;
  hsCode: string;
  fingerprint: string;
  tags: string[];
  nodeTags: string[];

  rankLabel: string;
  globalValue: string;
  africaExportValue: string;
  africaShare: string;
  referencePrice: string;
  referencePriceDetail: string;
  yoyPrice: string;
  followers: string;
  bookmarks: string;

  snapshot: {
    globalMarketValue: string;
    globalExportValue: string;
    referencePrice: string;
    globalProduction: string;
    africanProduction: string;
    africaProductionShare: string;
    strategicRole: string;
    africanExportValue: string;
    africanShareGlobalExports: string;
    africanReserves: string;
    africanReserveValue: string;
    exportRegions: string[];
    primaryMarkets: string[];
  };

  summaryGrid: {
    reserves: { value: string; unit: string; yoy: string; holders: { flag: string; name: string; value: string }[] };
    exports: { label: string; value: string; detail: string };
    health: { status: string; weight: string; confidence: string };
  };

  production: {
    top3: { share: string; combined: string; countries: string[] };
    top6: { share: string; combined: string; countries: string[] };
    ranking: ProducerRow[];
  };

  consumers: TradeRow[];
  exporters: TradeRow[];
  importers: TradeRow[];

  price: {
    benchmarks: string[];
    drivers: string[];
  };

  dna: {
    description: string;
    qualityExamples: { name: string; api: string; sulfur: string; qualityClass: string }[];
    africanGrades: string[];
    benchmarks: string[];
    outputs: string[];
    applications: string[];
    transformation: string[];
    identitySignals: { label: string; value: string }[];
  };

  origin: {
    reserves: { total: string; globalShare: string; largest: string; concentration: string };
    topReserves: ProducerRow[];
    snapshot: { production: string; annual: string; global: string; share: string };
    basins: BasinRow[];
    environment: { onshore: string[]; offshore: string[]; deepwater: string[] };
    infrastructure: { extraction: string[]; midstream: string[]; export: string[]; processing: string[] };
    flow: string[];
    drivers: string[];
    constraints: string[];
    opportunities: string[];
  };

  connectedEntities: EntityRow[];
  news: NewsItem[];
  flags?: string[];
  sections?: import('./sections').Section[];
  briefing?: import('./sections').Briefing;
}