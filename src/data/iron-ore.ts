import type { Commodity } from './types';

export const ironOre: Commodity = {
  id: 'COM-MET-IRO-008',
    nodeTags: [],
  slug: 'iron-ore',
  name: 'Iron Ore',
  status: 'Verified',
  nodeType: 'comNODE: base metals / bulk commodities',
  nodeClass: 'Ferrous Metal / Steelmaking Feedstock / Bulk Commodity',
  weight: 8,
  weightLabel: 'Critical, rapidly rising',
  confidence: 88,
  confidenceLabel: 'High',
  hsCode: '—',
  fingerprint:
    'The essential feedstock for steelmaking — no substitute exists at comparable scale for primary steel production, making iron ore the world most-traded commodity by tonnage. Africa is mid-transition from marginal to major supplier, anchored by Guinea Simandou, Africa largest mining project at $23B.',
  tags: ['#iron-ore', '#base-metals', '#bulk-commodity', '#steel', '#Simandou', '#Guinea', '#China', '#green-steel'],
  rankLabel: '#3 Africa Bulk Commodity',
  globalValue: '$240–250B',
  africaExportValue: 'Emerging',
  africaShare: '~4% → 13%',
  referencePrice: '$98–102/t',
  referencePriceDetail: '62% Fe, CFR China',
  yoyPrice: '-8%',
  followers: '1300',
  bookmarks: '710',

  snapshot: {
    globalMarketValue: '~$240–250B (modeled, 2.472Bt × ~$100/t)',
    globalExportValue: '~$140–150B (seaborne, modeled)',
    referencePrice: '~$98–102/tonne (62% Fe fines, CFR China)',
    globalProduction: '~2.472 billion tonnes (2025 est.)',
    africanProduction: '~59.3M tonnes Fe-content (2023, AfDB)',
    africaProductionShare: '~4% → 13%+ by early 2030s',
    strategicRole:
      'Essential feedstock for steelmaking — no substitute at comparable scale; world most-traded commodity by tonnage.',
    africanExportValue: 'Not yet meaningfully quantified (Simandou scaling)',
    africanShareGlobalExports: '~2–3% currently',
    africanReserves: '~13.8% of global resources (3rd-largest region)',
    africanReserveValue: '~$1.7T',
    exportRegions: ['West Africa (Guinea, Sierra Leone, Liberia, Mauritania)', 'Southern Africa (South Africa)'],
    primaryMarkets: ['China', 'Japan', 'South Korea', 'India', 'Europe'],
  },

  summaryGrid: {
    reserves: {
      value: '13.8%',
      unit: 'of global resources',
      yoy: 'Scaling',
      holders: [
        { flag: '🇿🇦', name: 'South Africa', value: '~40.4M t Fe' },
        { flag: '🇬🇳', name: 'Guinea', value: 'Simandou ~65% Fe' },
        { flag: '🇸🇱', name: 'Sierra Leone', value: 'Marampa, Tonkolili' },
      ],
    },
    exports: {
      label: 'Global Export Value',
      value: '$140–150B',
      detail: 'Simandou ramp-up',
    },
    health: {
      status: 'Healthy',
      weight: 'High (8/10)',
      confidence: '88%',
    },
  },

  production: {
    top3: {
      share: '~98%',
      combined: 'SA + Guinea',
      countries: ['South Africa', 'Guinea', 'Mauritania'],
    },
    top6: {
      share: 'West Africa scaling',
      combined: 'SA + W. Africa',
      countries: ['South Africa', 'Guinea', 'Mauritania', 'Sierra Leone', 'Liberia', 'Algeria'],
    },
    ranking: [
      { rank: 1, country: 'South Africa', flag: '🇿🇦', production: '~40.4M t Fe', productionNum: 40.4, share: 'majority' },
      { rank: 2, country: 'Guinea', flag: '🇬🇳', production: 'Simandou 120Mt/yr target', productionNum: 60, share: 'emerging' },
      { rank: 3, country: 'Mauritania', flag: '🇲🇷', production: 'established', productionNum: 12, share: '' },
      { rank: 4, country: 'Sierra Leone', flag: '🇸🇱', production: 'emerging', productionNum: 6, share: '' },
      { rank: 5, country: 'Liberia', flag: '🇱🇷', production: 'emerging', productionNum: 4, share: '' },
    ],
  },

  consumers: [
    { country: 'China', flag: '🇨🇳', value: '>70% seaborne demand', valueNum: 10, share: '1' },
    { country: 'Japan', flag: '🇯🇵', value: 'major steelmaker', valueNum: 5, share: '2' },
    { country: 'South Korea', flag: '🇰🇷', value: 'major steelmaker', valueNum: 4, share: '3' },
    { country: 'India', flag: '🇮🇳', value: 'fast-growing', valueNum: 4, share: '4' },
    { country: 'Europe', flag: '🇪🇺', value: 'SA exports', valueNum: 3, share: '5' },
  ],

  exporters: [
    { country: 'South Africa', flag: '🇿🇦', value: 'established', valueNum: 40.4, share: 'mature' },
    { country: 'Guinea', flag: '🇬🇳', value: 'Simandou ramp', valueNum: 60, share: 'new entrant' },
    { country: 'Mauritania', flag: '🇲🇷', value: 'smaller-scale', valueNum: 12, share: '' },
    { country: 'Sierra Leone', flag: '🇸🇱', value: 'emerging', valueNum: 6, share: '' },
    { country: 'Liberia', flag: '🇱🇷', value: 'emerging', valueNum: 4, share: '' },
  ],

  importers: [
    { country: 'China', flag: '🇨🇳', value: 'dominant', valueNum: 10, share: '1' },
    { country: 'Europe', flag: '🇪🇺', value: 'SA destination', valueNum: 4, share: '2' },
    { country: 'Japan', flag: '🇯🇵', value: 'established', valueNum: 4, share: '3' },
    { country: 'South Korea', flag: '🇰🇷', value: 'established', valueNum: 3, share: '4' },
  ],

  price: {
    benchmarks: ['62% Fe Fines CFR China', 'CME Iron Ore', 'Iron Ore CNY (Dalian)', 'Singapore Exchange'],
    drivers: [
      'Chinese construction/property-sector health', 'Chinese steel mill operating rates',
      'Persistent global oversupply', 'Simandou ramp-up pace',
      'Ore grade/quality differentials', 'Freight conditions', 'Green steel transition',
    ],
  },

  dna: {
    description:
      'Iron ore is the essential feedstock for steelmaking — the world most-traded commodity by tonnage. Africa holds ~13.8% of global resources but produces only ~4% currently; Guinea Simandou is the transformational new entrant, designed to reach 120 million tonnes/year by 2028.',
    qualityExamples: [
      { name: 'Simandou', api: '~65% Fe', sulfur: 'premium grade', qualityClass: 'High-grade / green steel' },
      { name: '62% Fe benchmark', api: '62% Fe', sulfur: 'standard', qualityClass: 'Benchmark fines' },
    ],
    africanGrades: [],
    benchmarks: ['62% Fe CFR China', 'CME', 'Dalian', 'SGX'],
    outputs: ['Sinter/pellet feed', 'Blast-furnace steelmaking', 'Direct-reduced iron (DRI) feedstock'],
    applications: [
      'Steel production', 'Construction & infrastructure', 'Automotive', 'Manufacturing',
      'Green steel (high-grade premium)',
    ],
    transformation: ['Mine', 'Beneficiation', 'Heavy-Haul Rail', 'Deep-Water Port', 'Vessel', 'Steelmaker'],
    identitySignals: [
      { label: 'Primary Industry', value: 'Base Metals / Steelmaking' },
      { label: 'Primary Value Chain', value: 'Mine → Beneficiation → Rail → Port → Steelmaker (China)' },
      { label: 'Primary Differentiators', value: 'Simandou ~65% Fe premium (green steel)' },
      { label: 'Primary Benchmarks', value: '62% Fe CFR China / CME' },
      { label: 'Primary Commercial Unit', value: 'Tonne' },
      { label: 'Economic Role in Africa', value: 'Emerging export revenue + infrastructure catalyst' },
    ],
  },

  origin: {
    reserves: {
      total: '~13.8% of global resources',
      globalShare: '3rd-largest region',
      largest: 'Guinea (Simandou >5Bt)',
      concentration: 'West Africa + South Africa',
    },
    topReserves: [
      { rank: 1, country: 'Guinea', flag: '🇬🇳', production: 'Simandou >5Bt @ 65% Fe', productionNum: 5000, share: '' },
      { rank: 2, country: 'South Africa', flag: '🇿🇦', production: '~40.4M t/yr', productionNum: 40.4, share: '' },
      { rank: 3, country: 'Sierra Leone', flag: '🇸🇱', production: 'Tonkolili 12.7Bt', productionNum: 12.7, share: '' },
    ],
    snapshot: {
      production: '~59.3M t Fe',
      annual: '2023 baseline',
      global: '~2.472Bt',
      share: '~4% → 13%',
    },
    basins: [
      { id: 'GEO-MET-IRO-SIM-001', name: 'Simandou', country: 'Guinea', environment: 'Greenfield', grades: ['~65% Fe'] },
      { id: 'GEO-MET-IRO-SIS-001', name: 'Sishen', country: 'South Africa', environment: 'Onshore', grades: [] },
      { id: 'GEO-MET-IRO-MAR-001', name: 'Marampa', country: 'Sierra Leone', environment: 'Onshore', grades: ['31% Fe'] },
      { id: 'GEO-MET-IRO-TON-001', name: 'Tonkolili', country: 'Sierra Leone', environment: 'Onshore', grades: ['31% Fe'] },
      { id: 'GEO-MET-IRO-ZAN-001', name: 'Zanaga', country: 'Republic of Congo', environment: 'Onshore', grades: ['34% Fe'] },
    ],
    environment: {
      onshore: ['Simandou', 'Sishen', 'Marampa', 'Tonkolili', 'Zanaga'],
      offshore: [],
      deepwater: [],
    },
    infrastructure: {
      extraction: ['Open-pit mines', 'Beneficiation plants'],
      midstream: ['Heavy-haul rail'],
      export: ['Port of Mabarya', 'Saldanha Bay terminal', 'Regional ports'],
      processing: ['Blast furnaces (off-continent)'],
    },
    flow: ['Mine', 'Beneficiation', 'Heavy-Haul Rail', 'Deep-Water Port', 'Vessel', 'Steelmaker (China)'],
    drivers: [
      'Simandou ramp-up trajectory', 'Chinese steel demand',
      'Green steel premium demand', 'Indian steel growth',
    ],
    constraints: [
      'Persistent global oversupply', 'China-centric demand dependency',
      'Resource-to-refining gap (1.2% of steel)', 'Infrastructure/capital intensity',
    ],
    opportunities: [
      'Simandou full ramp-up (120Mt/yr by 2028)', 'Shared-infrastructure replication',
      'Domestic steel-value-chain development', 'Beneficiation capacity',
    ],
  },

  connectedEntities: [
    { name: 'Guinea', flag: '🇬🇳', count: 5, kind: 'Origin' },
    { name: 'South Africa', flag: '🇿🇦', count: 4, kind: 'Origin' },
    { name: 'China', flag: '🇨🇳', count: 4, kind: 'Market' },
    { name: 'Simandou', count: 5, kind: 'Origin' },
    { name: 'Compagnie du TransGuinéen', count: 3, kind: 'Infrastructure' },
    { name: 'Sierra Leone', flag: '🇸🇱', count: 2, kind: 'Origin' },
    { name: 'Rio Tinto', count: 2, kind: 'Corporation' },
    { name: 'Winning Consortium Simandou', count: 2, kind: 'Corporation' },
    { name: 'Port of Mabarya', count: 2, kind: 'Infrastructure' },
    { name: 'European Union', flag: '🇪🇺', count: 2, kind: 'Market' },
  ],

  news: [
    {
      title: 'Simandou ships first commercial cargo',
      summary: 'First commercial shipment November 2025 (200,000 tonnes), arriving China January 2026 after a 46-day voyage — Africa largest mining project at $23B.',
      date: '2025',
      impact: 'high',
    },
    {
      title: 'Iron ore dips below $100/tonne',
      summary: '62% Fe benchmark dropped through the psychologically significant $100 level in June 2026 to ~$98.90, on oversupply and China property weakness.',
      date: '2026',
      impact: 'high',
    },
    {
      title: 'CTG rail/port model hailed as template',
      summary: 'The shared Compagnie du TransGuinéen rail-port vehicle was cited at Mining Indaba 2026 as a template for unlocking African bulk-commodity projects.',
      date: '2026',
      impact: 'medium',
    },
  ],
};