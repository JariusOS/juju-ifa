import type { Commodity } from './types';

export const gold: Commodity = {
  id: 'COM-PME-GLD-004',
    nodeTags: [],
  slug: 'gold',
  name: 'Gold',
  status: 'Verified',
  nodeType: 'comNODE: precious metals',
  nodeClass: 'Precious Metal / Monetary Asset / Store of Value',
  weight: 10,
  weightLabel: 'Critical',
  confidence: 92,
  confidenceLabel: 'Very High',
  hsCode: '—',
  fingerprint:
    'Primary monetary/reserve asset and safe-haven store of value — simultaneously an industrial/consumer commodity and a central-bank reserve instrument. Africa is the world leading gold-producing region by continent, generating ~1,010 tonnes against a global mine total of ~3,672 tonnes.',
  tags: ['#gold', '#precious-metals', '#monetary-asset', '#safe-haven', '#central-banks', '#Ghana', '#store-of-value'],
  rankLabel: '#1 Africa Precious Metals',
  globalValue: '$24T+',
  africaExportValue: '>$45B',
  africaShare: '27–28%',
  referencePrice: '$4,900/oz',
  referencePriceDetail: 'LBMA, Q2 2026',
  yoyPrice: '+56% (2025)',
  followers: '2600',
  bookmarks: '1520',

  snapshot: {
    globalMarketValue: '~$24T+ (above-ground stock) • ~$180B+ (annual mine-supply value)',
    globalExportValue: '~$250B+ (modeled, refined + doré trade)',
    referencePrice: '~$4,900/oz (LBMA, Q2 2026); ATH ~$5,608/oz (Jan 2026)',
    globalProduction: '~3,672 tonnes (2025, WGC)',
    africanProduction: '~1,010 tonnes',
    africaProductionShare: '~27–28%',
    strategicRole:
      'Primary monetary/reserve asset and safe-haven store of value; central-bank reserve instrument; industrial/technology input.',
    africanExportValue: '>$45B (2025, projected)',
    africanShareGlobalExports: '~18–20% (modeled)',
    africanReserves: 'Substantial (SA, Ghana, Mali, Burkina Faso, Tanzania, DRC)',
    africanReserveValue: '~$3.5T',
    exportRegions: ['West Africa (Ghana, Mali, Burkina Faso)', 'Southern Africa (South Africa)', 'East Africa (Tanzania, Sudan)'],
    primaryMarkets: ['Switzerland', 'UAE (Dubai)', 'India', 'China', 'UK (LBMA)'],
  },

  summaryGrid: {
    reserves: {
      value: '~1,010 t',
      unit: 'mine production',
      yoy: '~1–2% growth',
      holders: [
        { flag: '🇬🇭', name: 'Ghana', value: '~150–159 t' },
        { flag: '🇲🇱', name: 'Mali', value: '~65–100 t' },
        { flag: '🇿🇦', name: 'South Africa', value: '~99–110 t' },
      ],
    },
    exports: {
      label: 'Global Export Value',
      value: '$250B+',
      detail: 'Africa: >$45B',
    },
    health: {
      status: 'Healthy',
      weight: 'High (10/10)',
      confidence: '92%',
    },
  },

  production: {
    top3: {
      share: '~35–37%',
      combined: '~350–370 t',
      countries: ['Ghana', 'Mali', 'South Africa'],
    },
    top6: {
      share: 'West Africa dominant',
      combined: '>400 t (W. Africa)',
      countries: ['Ghana', 'Mali', 'South Africa', 'Burkina Faso', 'Tanzania', 'Sudan'],
    },
    ranking: [
      { rank: 1, country: 'Ghana', flag: '🇬🇭', production: '~150–159 t', productionNum: 155, share: '15–16%' },
      { rank: 2, country: 'Mali', flag: '🇲🇱', production: '~65–100 t', productionNum: 82, share: '7–10%' },
      { rank: 3, country: 'South Africa', flag: '🇿🇦', production: '~99–110 t', productionNum: 104, share: '10–11%' },
      { rank: 4, country: 'Burkina Faso', flag: '🇧🇫', production: 'modeled', productionNum: 55, share: '~5%' },
      { rank: 5, country: 'Tanzania', flag: '🇹🇿', production: 'growing', productionNum: 48, share: '~5%' },
    ],
  },

  consumers: [
    { country: 'Central Banks', value: '863 t', valueNum: 863, share: '1' },
    { country: 'Investment (bars/coins/ETFs)', value: '2,175 t', valueNum: 2175, share: '2' },
    { country: 'Jewelry', value: 'declining', valueNum: 1400, share: '3' },
    { country: 'Technology (incl. AI)', value: '82 t (Q1 2026)', valueNum: 82, share: '4' },
    { country: 'ETF flows', value: '801 t', valueNum: 801, share: '5' },
  ],

  exporters: [
    { country: 'Ghana', flag: '🇬🇭', value: '~150–159 t', valueNum: 155, share: '15–16%' },
    { country: 'Mali', flag: '🇲🇱', value: '~65–100 t', valueNum: 82, share: '7–10%' },
    { country: 'South Africa', flag: '🇿🇦', value: '~99–110 t', valueNum: 104, share: '10–11%' },
    { country: 'Burkina Faso', flag: '🇧🇫', value: 'modeled', valueNum: 55, share: '~5%' },
    { country: 'Tanzania', flag: '🇹🇿', value: 'growing', valueNum: 48, share: '~5%' },
  ],

  importers: [
    { country: 'Switzerland', flag: '🇨🇭', value: 'refining hub', valueNum: 10, share: '1' },
    { country: 'UAE (Dubai)', flag: '🇦🇪', value: 'trading hub', valueNum: 8, share: '2' },
    { country: 'India', flag: '🇮🇳', value: 'largest consumer', valueNum: 6, share: '3' },
    { country: 'China', flag: '🇨🇳', value: 'major buyer', valueNum: 5, share: '4' },
    { country: 'UK (LBMA)', flag: '🇬🇧', value: 'benchmark hub', valueNum: 4, share: '5' },
  ],

  price: {
    benchmarks: ['LBMA Gold Price', 'COMEX Gold', 'Shanghai Gold Exchange'],
    drivers: [
      'Central bank buying (structural)', 'US dollar strength/weakness',
      'Geopolitical uncertainty & safe-haven demand', 'Inflation expectations',
      'Investment/ETF flows', 'Real interest rates', 'Mine supply constraints',
    ],
  },

  dna: {
    description:
      'Gold is a precious metal that functions simultaneously as an industrial/consumer commodity and as a monetary reserve asset. Africa is the world leading gold-producing region by continent, with West Africa (Ghana, Mali, Burkina Faso) the dominant sub-region.',
    qualityExamples: [],
    africanGrades: [],
    benchmarks: ['LBMA', 'COMEX', 'Shanghai Gold Exchange'],
    outputs: ['Bars', 'Coins', 'ETFs', 'Jewelry', 'Industrial/electronics', 'Central-bank reserves'],
    applications: [
      'Central-bank reserves', 'Safe-haven investment', 'Jewelry', 'Technology/electronics (incl. AI)',
      'Monetary de-dollarization',
    ],
    transformation: ['Mine', 'Doré Production', 'Export', 'Refining (largely off-continent)', 'Global Bullion Market'],
    identitySignals: [
      { label: 'Primary Industry', value: 'Precious Metals / Monetary' },
      { label: 'Primary Value Chain', value: 'Mine → Doré → Refining (Swiss) → Global bullion market' },
      { label: 'Primary Differentiators', value: 'Monetary reserve dual-nature' },
      { label: 'Primary Benchmarks', value: 'LBMA / COMEX / SGE' },
      { label: 'Primary Commercial Unit', value: 'Troy ounce' },
      { label: 'Economic Role in Africa', value: 'Export revenue + fiscal revenue + formal/informal employment' },
    ],
  },

  origin: {
    reserves: {
      total: 'Substantial (not consistently reported)',
      globalShare: '~27–28% of production',
      largest: 'South Africa (Witwatersrand)',
      concentration: 'West Africa + Southern Africa',
    },
    topReserves: [
      { rank: 1, country: 'Ghana', flag: '🇬🇭', production: '~150–159 t/yr', productionNum: 155, share: '' },
      { rank: 2, country: 'South Africa', flag: '🇿🇦', production: '~99–110 t/yr', productionNum: 104, share: '' },
      { rank: 3, country: 'Mali', flag: '🇲🇱', production: '~65–100 t/yr', productionNum: 82, share: '' },
    ],
    snapshot: {
      production: '~1,010 t',
      annual: 'African production',
      global: '~3,672 t',
      share: '~27–28%',
    },
    basins: [
      { id: 'GEO-PME-GLD-WIT-001', name: 'Witwatersrand Basin', country: 'South Africa', environment: 'Deep-level underground', grades: [] },
      { id: 'GEO-PME-GLD-ASH-001', name: 'Ashanti Gold Belt', country: 'Ghana', environment: 'Onshore', grades: [] },
      { id: 'GEO-PME-GLD-LOU-001', name: 'Loulo-Gounkoto Complex', country: 'Mali', environment: 'Onshore', grades: [] },
    ],
    environment: {
      onshore: ['Ashanti Gold Belt', 'West African belts', 'East African belts'],
      offshore: [],
      deepwater: [],
    },
    infrastructure: {
      extraction: ['Formal mines', 'Artisanal/small-scale (ASGM)'],
      midstream: ['Aggregation hubs'],
      export: ['Refineries (off-continent)', 'Trading hubs (Dubai)'],
      processing: ['Swiss refining'],
    },
    flow: ['Mine', 'Processing/Doré', 'Export (formal or informal)', 'Refining (largely off-continent)', 'Global Bullion Market'],
    drivers: [
      'New mine commissioning & expansions', 'Artisanal/ASGM output growth',
      'Central-bank reserve demand', 'Investment/ETF demand',
    ],
    constraints: [
      'Structurally slow global mine-supply growth', '30-year low in new discoveries',
      'Ore grade decline (South Africa)', 'Conflict & instability in select states',
      'Informal export leakage',
    ],
    opportunities: [
      'Mine expansion & revival (Obuasi model)', 'Formalization (GoldBod model)',
      'Domestic refining capacity', 'Digital export tracking', 'Traceability systems',
    ],
  },

  connectedEntities: [
    { name: 'Ghana', flag: '🇬🇭', count: 5, kind: 'Origin' },
    { name: 'Mali', flag: '🇲🇱', count: 4, kind: 'Origin' },
    { name: 'South Africa', flag: '🇿🇦', count: 4, kind: 'Origin' },
    { name: 'Switzerland', flag: '🇨🇭', count: 3, kind: 'Market' },
    { name: 'UAE (Dubai)', flag: '🇦🇪', count: 3, kind: 'Market' },
    { name: 'India', flag: '🇮🇳', count: 2, kind: 'Market' },
    { name: 'Central Banks', count: 4, kind: 'Institution' },
    { name: 'World Gold Council', count: 2, kind: 'Institution' },
    { name: 'LBMA', count: 2, kind: 'Benchmark' },
    { name: 'GoldBod', count: 2, kind: 'Institution' },
  ],

  news: [
    {
      title: 'Gold hits all-time high above $5,600/oz',
      summary: 'Gold reached a record ~$5,608/oz in January 2026 before a notable correction, after a 56% price surge in 2025.',
      date: '2026',
      impact: 'high',
    },
    {
      title: 'Ghana overtakes South Africa as Africa top producer',
      summary: 'Ghana has overtaken South Africa as Africa leading gold producer, reflecting South Africa declining deep-mine economics.',
      date: '2024/25',
      impact: 'medium',
    },
    {
      title: 'Central banks buy 863t of gold in 2025',
      summary: 'Fourth consecutive year of historically elevated central-bank buying, representing a structurally different demand pillar.',
      date: '2025',
      impact: 'medium',
    },
  ],
};