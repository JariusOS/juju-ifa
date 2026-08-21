import type { Commodity } from './types';

export const cobalt: Commodity = {
  id: 'COM-MET-COB-010',
    nodeTags: [],
  slug: 'cobalt',
  name: 'Cobalt',
  status: 'Verified',
  nodeType: 'comNODE: battery/critical minerals',
  nodeClass: 'Battery Metal / Strategic Critical Mineral / Copper-Nickel Byproduct',
  weight: 9,
  weightLabel: 'Critical',
  confidence: 91,
  confidenceLabel: 'Very High',
  hsCode: '—',
  fingerprint:
    'Essential input for lithium-ion battery cathodes (EVs, energy storage), superalloys and hard metals. Among the most geopolitically contested critical minerals — extreme mine-supply concentration in the DRC (~72–73%) meets extreme refining concentration in China, at the center of active US-China strategic competition.',
  tags: ['#cobalt', '#battery-metal', '#critical-mineral', '#DRC', '#EV-batteries', '#LobitoCorridor', '#byproduct'],
  rankLabel: '#1 Africa Battery Metal',
  globalValue: '$18–19B',
  africaExportValue: 'Substantial (raw/ore form)',
  africaShare: '~72–73%',
  referencePrice: '$56,290/t',
  referencePriceDetail: 'LME, Apr 2026',
  yoyPrice: '+67.5%',
  followers: '1800',
  bookmarks: '1040',

  snapshot: {
    globalMarketValue: '~$18–19B (modeled, 330kt × ~$56,000/t)',
    globalExportValue: 'Concentrated in DRC-origin material, China-refined',
    referencePrice: '~$56,290/tonne (LME, April 2026, +67.48% YoY)',
    globalProduction: '~330,000 tonnes (2025, +8.0% YoY)',
    africanProduction: '~230,000–240,000 tonnes (DRC alone)',
    africaProductionShare: '~72–73%',
    strategicRole:
      'Essential input for lithium-ion battery cathodes (EVs, storage), superalloys and hard metals — among the most geopolitically contested critical minerals globally.',
    africanExportValue: 'Substantial, largely raw ore/hydroxide',
    africanShareGlobalExports: 'Very high in raw-material terms',
    africanReserves: '~6M tonnes (DRC, ~55% of global)',
    africanReserveValue: '~$130B',
    exportRegions: ['Central Africa (DRC, overwhelmingly)'],
    primaryMarkets: ['China', 'USA (emerging)'],
  },

  summaryGrid: {
    reserves: {
      value: '~6M t',
      unit: 'DRC reserves',
      yoy: 'Price surge',
      holders: [
        { flag: '🇨🇩', name: 'DRC', value: '~230–240K t/yr' },
        { flag: '🇮🇩', name: 'Indonesia', value: '~44–49K t/yr' },
      ],
    },
    exports: {
      label: 'Global Production',
      value: '330K t',
      detail: 'DRC: ~72–73%',
    },
    health: {
      status: 'Healthy',
      weight: 'High (9/10)',
      confidence: '91%',
    },
  },

  production: {
    top3: {
      share: '~87–88%',
      combined: 'DRC + Indonesia',
      countries: ['DRC', 'Indonesia'],
    },
    top6: {
      share: 'DRC dominant',
      combined: 'DRC + Indonesia + Russia',
      countries: ['DRC', 'Indonesia', 'Russia', 'Australia', 'Canada', 'Madagascar'],
    },
    ranking: [
      { rank: 1, country: 'DRC', flag: '🇨🇩', production: '~230K t', productionNum: 230, share: '~72–73%' },
      { rank: 2, country: 'Indonesia', flag: '🇮🇩', production: '~44–49K t', productionNum: 46, share: '~14–15%' },
      { rank: 3, country: 'Russia', flag: '🇷🇺', production: '<15K t', productionNum: 10, share: 'minor' },
      { rank: 4, country: 'Australia', flag: '🇦🇺', production: '<15K t', productionNum: 7, share: 'minor' },
      { rank: 5, country: 'Canada', flag: '🇨🇦', production: '<15K t', productionNum: 5, share: 'minor' },
    ],
  },

  consumers: [
    { country: 'EV/lithium-ion batteries', value: 'dominant', valueNum: 10, share: '1' },
    { country: 'Energy storage systems', value: 'growing', valueNum: 4, share: '2' },
    { country: 'Superalloys', value: 'stable', valueNum: 3, share: '3' },
    { country: 'US strategic stockpiling', value: 'new (non-cyclical)', valueNum: 5, share: '4' },
    { country: 'Hard metals/catalysts', value: 'established', valueNum: 2, share: '5' },
  ],

  exporters: [
    { country: 'DRC', flag: '🇨🇩', value: '~230K t', valueNum: 230, share: '~72–73%' },
  ],

  importers: [
    { country: 'China', flag: '🇨🇳', value: 'dominant refiner', valueNum: 10, share: '1' },
    { country: 'USA', flag: '🇺🇸', value: 'strategic stockpile', valueNum: 5, share: '2' },
  ],

  price: {
    benchmarks: ['LME Cobalt', 'Fastmarkets MB Cobalt', 'Hydroxide payable %'],
    drivers: [
      'DRC export policy (ban → quota system)', 'US strategic stockpiling ($12B)',
      'Structural supply-demand deficit (2026)', 'Quota administration friction',
      'LFP/cobalt-free chemistry adoption', 'Copper & nickel market dynamics (byproduct)',
    ],
  },

  dna: {
    description:
      'Cobalt is a battery-critical mineral whose supply is uniquely bifurcated: the DRC controls ~72–73% of mine supply while China controls the overwhelming majority of global refining. ~70% of global cobalt is extracted as a byproduct of copper mining in the Central African Copperbelt.',
    qualityExamples: [],
    africanGrades: ['Cobalt ore', 'Cobalt hydroxide', 'Cobalt metal (LME standard)', 'Cobalt sulfate (battery-grade)'],
    benchmarks: ['LME Cobalt', 'Fastmarkets MB Cobalt'],
    outputs: ['EV battery cathodes', 'Energy storage', 'Superalloys', 'Hard metals', 'Catalysts'],
    applications: [
      'EV battery cathodes', 'Energy storage systems', 'Aerospace superalloys',
      'US strategic stockpiling', 'Hard metals & catalysts',
    ],
    transformation: ['Copper-Cobalt Ore Body', 'Mine (byproduct extraction)', 'Hydroxide/Intermediate', 'Export Quota Licensing', 'Chinese Refining', 'Battery/Chemical Markets'],
    identitySignals: [
      { label: 'Primary Industry', value: 'Battery / Critical Minerals' },
      { label: 'Primary Value Chain', value: 'Mine (DRC) → Hydroxide → Chinese refining → Battery markets' },
      { label: 'Primary Differentiators', value: 'Extreme DRC mine concentration + byproduct dependency' },
      { label: 'Primary Benchmarks', value: 'LME Cobalt / Fastmarkets MB' },
      { label: 'Primary Commercial Unit', value: 'Tonne' },
      { label: 'Economic Role in Africa', value: 'Export revenue + demonstrated sovereign policy leverage' },
    ],
  },

  origin: {
    reserves: {
      total: '~6M t (DRC)',
      globalShare: '~55% (DRC) / 97% Africa',
      largest: 'DRC (Central African Copperbelt)',
      concentration: 'DRC overwhelming',
    },
    topReserves: [
      { rank: 1, country: 'DRC', flag: '🇨🇩', production: '~6M t', productionNum: 6, share: '~55% global' },
      { rank: 2, country: 'Indonesia', flag: '🇮🇩', production: 'HPAL byproduct', productionNum: 2, share: '' },
    ],
    snapshot: {
      production: '~230–240K t',
      annual: 'DRC output',
      global: '~330K t',
      share: '~72–73%',
    },
    basins: [
      { id: 'GEO-MET-COB-CB-001', name: 'Central African Copperbelt', country: 'DRC', environment: 'Onshore', grades: ['Tenke Fungurume', 'Kisanfu', 'Mutanda', 'Musonoi'] },
    ],
    environment: {
      onshore: ['Katanga / Copperbelt'],
      offshore: [],
      deepwater: [],
    },
    infrastructure: {
      extraction: ['Copper-cobalt mines (TFM, KFM, Mutanda, Musonoi, Etoile, Mutoshi)'],
      midstream: ['Concentrate/hydroxide production'],
      export: ['Lobito Corridor', 'Legacy China-linked routes'],
      processing: ['Chinese refining (dominant)'],
    },
    flow: ['Copper-Cobalt Ore Body', 'Mine (byproduct)', 'Hydroxide', 'Export Quota', 'Lobito Corridor / Legacy Route', 'Chinese Refining'],
    drivers: [
      'DRC export quota policy', 'US strategic stockpiling',
      'New project ramp-up (Musonoi, Mutanda)', 'Copper/nickel market dynamics',
    ],
    constraints: [
      'Byproduct dependency on copper', 'Quota administration friction',
      'LFP/cobalt-free substitution', 'Near-total absence of domestic refining',
    ],
    opportunities: [
      'Quota-driven price leverage', 'Lobito Corridor diversification',
      'US strategic partnership (Etoile/Mutoshi)', 'Domestic beneficiation',
    ],
  },

  connectedEntities: [
    { name: 'DRC', flag: '🇨🇩', count: 7, kind: 'Origin' },
    { name: 'China', flag: '🇨🇳', count: 4, kind: 'Market' },
    { name: 'USA', flag: '🇺🇸', count: 3, kind: 'Market' },
    { name: 'Central African Copperbelt', count: 4, kind: 'Origin' },
    { name: 'Lobito Corridor', count: 3, kind: 'Infrastructure' },
    { name: 'CMOC', count: 3, kind: 'Corporation' },
    { name: 'Glencore', count: 2, kind: 'Corporation' },
    { name: 'Gécamines', count: 2, kind: 'Institution' },
    { name: 'LME', count: 2, kind: 'Benchmark' },
    { name: 'DRC Ministry of Mines', count: 3, kind: 'Institution' },
  ],

  news: [
    {
      title: 'DRC export ban reverses cobalt price collapse',
      summary: 'The February 2025 export ban and quota system more than doubled prices within a year — from near nine-year lows to ~$56,290/t (LME, April 2026).',
      date: '2025–26',
      impact: 'high',
    },
    {
      title: 'US acquires Etoile and Mutoshi mines for $700M',
      summary: 'A direct US strategic win over Chinese bidders secured control of mines producing ~5% of global cobalt, following a two-year contest.',
      date: '2025–26',
      impact: 'high',
    },
    {
      title: 'US announces $12B strategic cobalt stockpile',
      summary: 'A genuinely new, non-cyclical demand component — a key driver of the 2025–26 price surge.',
      date: '2025',
      impact: 'medium',
    },
  ],
};