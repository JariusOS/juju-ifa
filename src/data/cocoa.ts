import type { Commodity } from './types';

export const cocoa: Commodity = {
  id: 'COM-AGR-COC-005',
    nodeTags: [],
  slug: 'cocoa',
  name: 'Cocoa',
  status: 'Verified',
  nodeType: 'comNODE: agricultural',
  nodeClass: 'Tree Crop / Soft Commodity / Agro-Export',
  weight: 9,
  weightLabel: 'Critical',
  confidence: 91,
  confidenceLabel: 'High',
  hsCode: '—',
  fingerprint:
    'Sole raw input for global chocolate and confectionery manufacturing — no substitutable commodity exists at comparable scale. West Africa holds ~65% of global production, making cocoa the single most structurally irreplaceable African commodity in the catalog.',
  tags: ['#cocoa', '#agricultural', '#soft-commodity', '#tree-crop', '#agro-export', '#CoteDIvoire', '#Ghana', '#chocolate'],
  rankLabel: '#1 Africa Agro-Export',
  globalValue: '~$20B',
  africaExportValue: '$12–13B',
  africaShare: '65%',
  referencePrice: '$4,300/t',
  referencePriceDetail: 'ICE New York, May 2026',
  yoyPrice: '-65% vs peak',
  followers: '1500',
  bookmarks: '780',

  snapshot: {
    globalMarketValue: '~$20B (bean-level export value, modeled)',
    globalExportValue: '~$19–20B (bean-level, modeled)',
    referencePrice: '~$4,300/tonne (ICE New York, late May 2026); ATH >$12,000/t (Dec 2024)',
    globalProduction: '~4.723–4.84M tonnes (2024/25)',
    africanProduction: '~3.14M tonnes',
    africaProductionShare: '~65%',
    strategicRole:
      'Sole raw input for global chocolate and confectionery manufacturing; no substitutable commodity exists at comparable scale.',
    africanExportValue: '~$12–13B (modeled, bean-level)',
    africanShareGlobalExports: '~65%',
    africanReserves: 'N/A (annual crop)',
    africanReserveValue: '$0 (agricultural)',
    exportRegions: ['West Africa (Côte d\'Ivoire, Ghana, Nigeria, Cameroon)'],
    primaryMarkets: ['Netherlands', 'Germany', 'USA', 'Belgium', 'Malaysia'],
  },

  summaryGrid: {
    reserves: {
      value: 'N/A',
      unit: 'annual crop',
      yoy: 'Volatile',
      holders: [
        { flag: '🇨🇮', name: 'Côte d\'Ivoire', value: '~1.85M t' },
        { flag: '🇬🇭', name: 'Ghana', value: '~600K t' },
        { flag: '🇳🇬', name: 'Nigeria', value: '~350K t' },
      ],
    },
    exports: {
      label: 'Global Export Value',
      value: '$19–20B',
      detail: 'Africa: ~65%',
    },
    health: {
      status: 'Healthy',
      weight: 'High (9/10)',
      confidence: '91%',
    },
  },

  production: {
    top3: {
      share: '~89%',
      combined: '~2.8M t',
      countries: ['Côte d\'Ivoire', 'Ghana', 'Nigeria'],
    },
    top6: {
      share: '~65% global',
      combined: '~3.14M t (Africa)',
      countries: ['Côte d\'Ivoire', 'Ghana', 'Nigeria', 'Cameroon'],
    },
    ranking: [
      { rank: 1, country: 'Côte d\'Ivoire', flag: '🇨🇮', production: '~1.85M t', productionNum: 1.85, share: '59%' },
      { rank: 2, country: 'Ghana', flag: '🇬🇭', production: '~600K t', productionNum: 0.6, share: '19%' },
      { rank: 3, country: 'Nigeria', flag: '🇳🇬', production: '~350K t', productionNum: 0.35, share: '11%' },
      { rank: 4, country: 'Cameroon', flag: '🇨🇲', production: '~342K t', productionNum: 0.342, share: '11%' },
    ],
  },

  consumers: [
    { country: 'Europe', flag: '🇪🇺', value: '>1/3 of beans', valueNum: 10, share: '1' },
    { country: 'USA', flag: '🇺🇸', value: 'major grinder', valueNum: 6, share: '2' },
    { country: 'Indonesia', flag: '🇮🇩', value: 'growing', valueNum: 3, share: '3' },
    { country: 'Germany', flag: '🇩🇪', value: 'major', valueNum: 4, share: '4' },
    { country: 'Côte d\'Ivoire', flag: '🇨🇮', value: 'domestic grinding', valueNum: 2, share: '5' },
  ],

  exporters: [
    { country: 'Côte d\'Ivoire', flag: '🇨🇮', value: '~1.85M t', valueNum: 1.85, share: '59%' },
    { country: 'Ghana', flag: '🇬🇭', value: '~600K t', valueNum: 0.6, share: '19%' },
    { country: 'Nigeria', flag: '🇳🇬', value: '~350K t', valueNum: 0.35, share: '11%' },
    { country: 'Cameroon', flag: '🇨🇲', value: '~342K t', valueNum: 0.342, share: '11%' },
  ],

  importers: [
    { country: 'Netherlands', flag: '🇳🇱', value: 'world largest grinder', valueNum: 10, share: '1' },
    { country: 'Germany', flag: '🇩🇪', value: 'major grinder', valueNum: 7, share: '2' },
    { country: 'USA', flag: '🇺🇸', value: 'major importer', valueNum: 6, share: '3' },
    { country: 'Belgium', flag: '🇧🇪', value: 'chocolate hub', valueNum: 5, share: '4' },
    { country: 'Malaysia', flag: '🇲🇾', value: 'growing hub', valueNum: 3, share: '5' },
  ],

  price: {
    benchmarks: ['ICE Futures US (New York)', 'ICE Futures Europe (London)', 'ICCO daily price'],
    drivers: [
      'West African weather (Harmattan, El Niño)', 'Crop disease & aging tree stock',
      'Supply/demand balance', 'Fund/speculative positioning',
      'Bloomberg Commodity Index inclusion', 'Certified stock levels',
      'European & North American grind data',
    ],
  },

  dna: {
    description:
      'Cocoa is a tree crop whose beans are the sole raw input for chocolate manufacturing. Production is uniquely smallholder-dependent and concentrated in West Africa, which holds ~65% of global output — the most structurally irreplaceable African commodity in the catalog.',
    qualityExamples: [],
    africanGrades: ['Main crop beans', 'Fine/flavour beans'],
    benchmarks: ['ICE NY', 'ICE London', 'ICCO'],
    outputs: ['Cocoa liquor', 'Cocoa butter', 'Cocoa powder', 'Chocolate & confectionery'],
    applications: [
      'Chocolate manufacturing', 'Confectionery', 'Cocoa butter (cosmetics)',
      'Cocoa powder (industrial)',
    ],
    transformation: ['Smallholder Farm', 'Buying Station/Cooperative', 'Marketing Board/Exporter', 'Port', 'Grinding Hub (Europe/US)', 'Chocolate Manufacturer'],
    identitySignals: [
      { label: 'Primary Industry', value: 'Agricultural / Soft Commodity' },
      { label: 'Primary Value Chain', value: 'Farm → Buying → Marketing Board → Grinding (off-continent) → Chocolate' },
      { label: 'Primary Differentiators', value: 'Structural irreplaceability (~65% global share)' },
      { label: 'Primary Benchmarks', value: 'ICE NY / ICE London / ICCO' },
      { label: 'Primary Commercial Unit', value: 'Tonne' },
      { label: 'Economic Role in Africa', value: 'Export revenue + smallholder livelihoods + fiscal revenue' },
    ],
  },

  origin: {
    reserves: {
      total: 'N/A (annual crop)',
      globalShare: '~65%',
      largest: 'Côte d\'Ivoire + Ghana (~half world)',
      concentration: 'West Africa',
    },
    topReserves: [
      { rank: 1, country: 'Côte d\'Ivoire', flag: '🇨🇮', production: '~1.85M t', productionNum: 1.85, share: '~59%' },
      { rank: 2, country: 'Ghana', flag: '🇬🇭', production: '~600K t', productionNum: 0.6, share: '~19%' },
    ],
    snapshot: {
      production: '~3.14M t',
      annual: 'African output',
      global: '~4.7M t',
      share: '~65%',
    },
    basins: [
      { id: 'GEO-AGR-COC-WAF-001', name: 'West African Cocoa Belt', country: 'Côte d\'Ivoire • Ghana', environment: 'Onshore tree crop', grades: [] },
    ],
    environment: {
      onshore: ['West African cocoa belt', 'Côte d\'Ivoire', 'Ghana', 'Nigeria', 'Cameroon'],
      offshore: [],
      deepwater: [],
    },
    infrastructure: {
      extraction: ['Smallholder farms'],
      midstream: ['Buying stations', 'Licensed buying companies'],
      export: ['Port of Abidjan', 'Port of San Pédro', 'Port of Tema', 'Port of Takoradi'],
      processing: ['European grinding terminals'],
    },
    flow: ['Smallholder Farm', 'Buying Station/Cooperative', 'Marketing Board/Exporter', 'Port', 'Vessel', 'Grinding Hub', 'Chocolate Manufacturer'],
    drivers: [
      'Replanting & yield-improvement investment', 'Disease management',
      'Farmgate pricing policy',
    ],
    constraints: [
      'Aging tree stock', 'Crop disease (black pod, swollen shoot)',
      'Weather variability', 'Structural yield decline', 'Farmgate/international price disconnect',
    ],
    opportunities: [
      'Plantation rehabilitation', 'Disease-resistant varieties',
      'Domestic grinding expansion', 'Ghana–Côte d\'Ivoire pricing coordination',
      'Sustainability certification', 'EUDR traceability',
    ],
  },

  connectedEntities: [
    { name: 'Côte d\'Ivoire', flag: '🇨🇮', count: 5, kind: 'Origin' },
    { name: 'Ghana', flag: '🇬🇭', count: 5, kind: 'Origin' },
    { name: 'Netherlands', flag: '🇳🇱', count: 3, kind: 'Market' },
    { name: 'Nigeria', flag: '🇳🇬', count: 3, kind: 'Origin' },
    { name: 'Cameroon', flag: '🇨🇲', count: 3, kind: 'Origin' },
    { name: 'ICCO', count: 3, kind: 'Institution' },
    { name: 'COCOBOD', count: 3, kind: 'Institution' },
    { name: 'Conseil du Café-Cacao', count: 2, kind: 'Institution' },
    { name: 'Barry Callebaut', count: 2, kind: 'Corporation' },
    { name: 'Germany', flag: '🇩🇪', count: 2, kind: 'Market' },
  ],

  news: [
    {
      title: 'Cocoa prices crash 65% from all-time high',
      summary: 'Prices fell from a December 2024 high above $12,000/tonne to ~$2,846/tonne in early 2026 — one of the most extreme boom-bust cycles in the catalog.',
      date: '2024–26',
      impact: 'high',
    },
    {
      title: '2024/25 season flips to surplus',
      summary: 'The global season moved from a 489,000-tonne deficit in 2023/24 to a modest surplus in 2024/25.',
      date: '2025',
      impact: 'medium',
    },
    {
      title: 'Cocoa added to Bloomberg Commodity Index',
      summary: 'Cocoa futures joined the BCOM index in January 2026, likely increasing fund/passive-investment flows.',
      date: '2026',
      impact: 'medium',
    },
  ],
};