import type { Commodity } from './types';

export const phosphate: Commodity = {
  id: 'COM-AGR-PHO-009',
    nodeTags: [],
  slug: 'phosphate',
  name: 'Phosphate',
  status: 'Verified',
  nodeType: 'comNODE: agricultural minerals',
  nodeClass: 'Fertilizer Mineral / Agro-Industrial Input / Food Security Commodity',
  weight: 9,
  weightLabel: 'Critical',
  confidence: 93,
  confidenceLabel: 'Very High',
  hsCode: '—',
  fingerprint:
    'Non-substitutable input for phosphorus-based fertilizer (DAP, MAP) underpinning ~90% of global phosphate consumption — phosphorus has no synthetic alternative in agriculture, making this the most food-security-critical commodity in the catalog. Morocco holds ~68–70% of global reserves.',
  tags: ['#phosphate', '#fertilizer', '#agricultural-minerals', '#food-security', '#Morocco', '#DAP', '#critical-mineral'],
  rankLabel: '#1 Africa Food Security',
  globalValue: '$37–40B',
  africaExportValue: 'Substantial (Morocco dominant)',
  africaShare: '~18–19%',
  referencePrice: '$150–158/t',
  referencePriceDetail: 'Rock, Morocco FOB 2026',
  yoyPrice: 'DAP +20–30%',
  followers: '1700',
  bookmarks: '960',

  snapshot: {
    globalMarketValue: '~$37–40B (rock, modeled)',
    globalExportValue: 'Tens of billions (rock + processed)',
    referencePrice: 'Rock ~$150–158/t (Morocco FOB) • DAP ~$640–760/t (spring 2026)',
    globalProduction: '~250 million tonnes (rock, 2025)',
    africanProduction: '~45–48 million tonnes',
    africaProductionShare: '~18–19%',
    strategicRole:
      'Non-substitutable input for phosphorus-based fertilizer (DAP, MAP) underpinning ~90% of global phosphate consumption — the most food-security-critical commodity in the catalog.',
    africanExportValue: 'Substantial (Morocco world leader via OCP)',
    africanShareGlobalExports: 'Very high relative to production share',
    africanReserves: '~50B tonnes (Morocco, ~68–70% of global)',
    africanReserveValue: '~$5T',
    exportRegions: ['Morocco (overwhelmingly dominant)', 'Egypt', 'Tunisia'],
    primaryMarkets: ['India', 'Europe', 'North America', 'Sub-Saharan Africa', 'East Asia/Oceania'],
  },

  summaryGrid: {
    reserves: {
      value: '~50B t',
      unit: 'Moroccan reserves',
      yoy: 'Multi-generational',
      holders: [
        { flag: '🇲🇦', name: 'Morocco', value: '~50B t (68–70%)' },
        { flag: '🇪🇬', name: 'Egypt', value: '~5.5M t/yr' },
        { flag: '🇹🇳', name: 'Tunisia', value: '~3.3M t/yr' },
      ],
    },
    exports: {
      label: 'Global Production',
      value: '250 Mt',
      detail: 'Africa: ~18–19%',
    },
    health: {
      status: 'Healthy',
      weight: 'High (9/10)',
      confidence: '93%',
    },
  },

  production: {
    top3: {
      share: '~99%',
      combined: 'Morocco + Egypt + Tunisia',
      countries: ['Morocco', 'Egypt', 'Tunisia'],
    },
    top6: {
      share: 'Morocco ~75–80% of Africa',
      combined: '45–48 Mt',
      countries: ['Morocco', 'Egypt', 'Tunisia', 'Senegal', 'Togo', 'Algeria'],
    },
    ranking: [
      { rank: 1, country: 'Morocco', flag: '🇲🇦', production: '36.0 Mt', productionNum: 36, share: '~14.4% global' },
      { rank: 2, country: 'Egypt', flag: '🇪🇬', production: '5.5 Mt', productionNum: 5.5, share: '2.2% global' },
      { rank: 3, country: 'Tunisia', flag: '🇹🇳', production: '3.3 Mt', productionNum: 3.3, share: '1.3% global' },
      { rank: 4, country: 'Senegal', flag: '🇸🇳', production: 'minor', productionNum: 0.5, share: '<1%' },
      { rank: 5, country: 'Togo', flag: '🇹🇬', production: 'minor', productionNum: 0.3, share: '<1%' },
    ],
  },

  consumers: [
    { country: 'India', flag: '🇮🇳', value: 'largest importer', valueNum: 10, share: '1' },
    { country: 'USA', flag: '🇺🇸', value: 'major importer', valueNum: 7, share: '2' },
    { country: 'Europe', flag: '🇪🇺', value: 'established', valueNum: 6, share: '3' },
    { country: 'Brazil', flag: '🇧🇷', value: 'growing', valueNum: 5, share: '4' },
    { country: 'China', flag: '🇨🇳', value: 'domestic', valueNum: 4, share: '5' },
  ],

  exporters: [
    { country: 'Morocco', flag: '🇲🇦', value: 'world leader', valueNum: 36, share: 'dominant' },
    { country: 'Egypt', flag: '🇪🇬', value: 'secondary', valueNum: 5.5, share: '' },
    { country: 'Tunisia', flag: '🇹🇳', value: 'smaller-scale', valueNum: 3.3, share: '' },
    { country: 'Senegal', flag: '🇸🇳', value: 'minor', valueNum: 0.5, share: '' },
  ],

  importers: [
    { country: 'India', flag: '🇮🇳', value: 'largest destination', valueNum: 10, share: '1' },
    { country: 'Europe', flag: '🇪🇺', value: 'major destination', valueNum: 7, share: '2' },
    { country: 'USA', flag: '🇺🇸', value: 'growing', valueNum: 5, share: '3' },
    { country: 'Sub-Saharan Africa', flag: '🌍', value: 'regional', valueNum: 4, share: '4' },
    { country: 'Oceania/East Asia', flag: '🌏', value: 'growing', valueNum: 3, share: '5' },
  ],

  price: {
    benchmarks: ['Morocco FOB', 'India CFR', 'DAP/MAP spot'],
    drivers: [
      'China export restrictions (~30% of global export supply removed)',
      'Global sulfur shortage', 'Elevated ammonia prices',
      'India subsidy policy & procurement', 'OCP quarterly pricing',
      'EU CBAM (ammonia-embedded imports)',
    ],
  },

  dna: {
    description:
      'Phosphate is a non-substitutable agricultural mineral — phosphorus has no synthetic alternative, making it the most food-security-critical commodity in the catalog. Morocco dominates global reserves (~68–70%) and is the world leading exporter via state-owned OCP Group integrated mine-to-fertilizer model.',
    qualityExamples: [],
    africanGrades: ['Phosphate rock', 'DAP', 'MAP'],
    benchmarks: ['Morocco FOB', 'India CFR'],
    outputs: ['Phosphate rock', 'Phosphoric acid', 'DAP', 'MAP', 'Fertilizer'],
    applications: [
      'Phosphorus-based fertilizer (DAP/MAP)', 'Global food production',
      'Animal feed supplements', 'Industrial phosphates',
    ],
    transformation: ['Mine', 'Beneficiation', 'Phosphoric Acid (needs sulfur)', 'DAP/MAP (needs ammonia)', 'Port', 'Global Buyer'],
    identitySignals: [
      { label: 'Primary Industry', value: 'Agricultural Minerals / Fertilizer' },
      { label: 'Primary Value Chain', value: 'Mine → Beneficiation → Phosphoric Acid → DAP/MAP → Food production' },
      { label: 'Primary Differentiators', value: 'Reserve dominance (~68–70% Morocco) + non-substitutability' },
      { label: 'Primary Benchmarks', value: 'Morocco FOB / India CFR' },
      { label: 'Primary Commercial Unit', value: 'Tonne / P₂O₅' },
      { label: 'Economic Role in Africa', value: 'Export revenue + rare downstream value capture (OCP)' },
    ],
  },

  origin: {
    reserves: {
      total: '~50B tonnes (Morocco)',
      globalShare: '~68–70%',
      largest: 'Morocco (incl. Western Sahara)',
      concentration: 'Morocco overwhelming',
    },
    topReserves: [
      { rank: 1, country: 'Morocco', flag: '🇲🇦', production: '~50B t', productionNum: 50, share: '68–70%' },
      { rank: 2, country: 'Egypt', flag: '🇪🇬', production: '~5.5M t/yr', productionNum: 5.5, share: '' },
      { rank: 3, country: 'Tunisia', flag: '🇹🇳', production: '~3.3M t/yr', productionNum: 3.3, share: '' },
    ],
    snapshot: {
      production: '~45–48M t',
      annual: 'African output',
      global: '~250M t',
      share: '~18–19%',
    },
    basins: [
      { id: 'GEO-AGR-PHO-KH-001', name: 'Khouribga', country: 'Morocco', environment: 'Onshore', grades: [] },
      { id: 'GEO-AGR-PHO-GA-001', name: 'Gantour', country: 'Morocco', environment: 'Onshore', grades: [] },
      { id: 'GEO-AGR-PHO-BG-001', name: 'Ben Guerir', country: 'Morocco', environment: 'Onshore', grades: [] },
      { id: 'GEO-AGR-PHO-BC-001', name: 'Boucraâ', country: 'Morocco (W. Sahara)', environment: 'Onshore', grades: [] },
    ],
    environment: {
      onshore: ['Khouribga', 'Gantour', 'Ben Guerir', 'Youssoufia', 'Meskala', 'Boucraâ'],
      offshore: [],
      deepwater: [],
    },
    infrastructure: {
      extraction: ['Phosphate mines', 'Beneficiation'],
      midstream: ['Sulfuric acid plants', 'Phosphoric acid plants'],
      export: ['Jorf Lasfar Industrial Complex'],
      processing: ['DAP/MAP manufacturing'],
    },
    flow: ['Mine', 'Beneficiation', 'Phosphoric Acid', 'DAP/MAP', 'Port (Jorf Lasfar)', 'Global Buyer'],
    drivers: [
      'Morocco capacity expansion (70Mt rock, 20Mt fertilizer by 2027)',
      'Global food production growth', 'Chinese export restriction redirect',
    ],
    constraints: [
      'Water availability (3–4 m³/tonne processed)', 'Sulfur/ammonia input costs',
      'Geopolitical shipping risk', 'China policy reversal risk',
    ],
    opportunities: [
      'Capacity expansion', 'Downstream DAP/MAP capture',
      'Sub-Saharan fertilizer access initiatives', 'Water-efficient processing',
    ],
  },

  connectedEntities: [
    { name: 'Morocco', flag: '🇲🇦', count: 6, kind: 'Origin' },
    { name: 'India', flag: '🇮🇳', count: 4, kind: 'Market' },
    { name: 'OCP Group', count: 4, kind: 'Corporation' },
    { name: 'Jorf Lasfar Industrial Complex', count: 3, kind: 'Infrastructure' },
    { name: 'Europe', flag: '🇪🇺', count: 3, kind: 'Market' },
    { name: 'Egypt', flag: '🇪🇬', count: 3, kind: 'Origin' },
    { name: 'Tunisia', flag: '🇹🇳', count: 3, kind: 'Origin' },
    { name: 'USGS', count: 2, kind: 'Institution' },
    { name: 'China', flag: '🇨🇳', count: 2, kind: 'Market' },
    { name: 'Khouribga', count: 2, kind: 'Origin' },
  ],

  news: [
    {
      title: 'China export restrictions trigger global DAP shock',
      summary: 'Chinese phosphate export restrictions removed an estimated 7–9 Mt (~30% of global export supply), driving DAP prices up 20–30% YoY by spring 2026.',
      date: '2025–26',
      impact: 'high',
    },
    {
      title: 'US adds phosphate rock to critical minerals list',
      summary: 'The US added phosphate rock to its Final List of Critical Minerals on November 7, 2025.',
      date: '2025',
      impact: 'medium',
    },
    {
      title: 'EU CBAM takes effect on ammonia-embedded fertilizer',
      summary: 'The EU Carbon Border Adjustment Mechanism became effective January 1, 2025, affecting ammonia-embedded fertilizer imports.',
      date: '2025',
      impact: 'medium',
    },
  ],
};