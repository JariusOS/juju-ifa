import type { Commodity } from './types';

export const refinedProducts: Commodity = {
  id: 'COM-ENE-REF-013',
    nodeTags: [],
  slug: 'refined-petroleum-products',
  name: 'Refined Petroleum Products',
  status: 'Verified',
  nodeType: 'comNODE: energy (downstream/refined)',
  nodeClass: 'Refined Fuel / Downstream Petroleum / Midstream-Downstream Hybrid',
  weight: 10,
  weightLabel: 'Critical, fastest-transforming',
  confidence: 88,
  confidenceLabel: 'High',
  hsCode: '—',
  fingerprint:
    'Immediately consumable end-form of crude oil — gasoline, diesel, jet fuel, naphtha, LPG and fuel oil. Africa is undergoing the single most rapid structural reversal in the catalog: Dangote Refinery reached full 650,000 bpd capacity in early 2026, flipping Nigeria from perennial fuel importer to net exporter for the first time in decades.',
  tags: ['#refined-products', '#gasoline', '#diesel', '#jet-fuel', '#Dangote', '#Nigeria', '#downstream', '#energy-security'],
  rankLabel: '#1 Africa Downstream',
  globalValue: 'Largest slice of ~$1.26T',
  africaExportValue: 'Emerging',
  africaShare: 'Import inversion',
  referencePrice: 'Crack spreads',
  referencePriceDetail: 'FOB Lagos emerging',
  yoyPrice: 'Volatile',
  followers: '1200',
  bookmarks: '680',

  snapshot: {
    globalMarketValue: 'Largest downstream slice of the ~$1.26T global crude oil market by value',
    globalExportValue: 'Product-specific crack spreads',
    referencePrice: 'Product-specific (gasoline/diesel/jet crack spreads over crude)',
    globalProduction: 'Refining capacity concentrated outside Africa historically',
    africanProduction: '~3M b/d imports (2023 baseline)',
    africaProductionShare: '~$17B annual import bill (2023)',
    strategicRole:
      'Immediately consumable end-form of crude — gasoline/diesel for transport, jet fuel for aviation, LPG for domestic/industrial use, naphtha/fuel oil for petrochemical and marine applications.',
    africanExportValue: 'Emerging via Dangote',
    africanShareGlobalExports: 'Newly emerging',
    africanReserves: 'N/A (downstream node)',
    africanReserveValue: 'N/A',
    exportRegions: ['Nigeria (Dangote)', 'Angola (planned)', 'Uganda (planned)'],
    primaryMarkets: ['Côte d\'Ivoire', 'Cameroon', 'Ghana', 'Togo', 'Tanzania', 'South Africa'],
  },

  summaryGrid: {
    reserves: {
      value: '650K bpd',
      unit: 'Dangote capacity',
      yoy: '+92% self-sufficiency',
      holders: [
        { flag: '🇳🇬', name: 'Nigeria (Dangote)', value: '650K bpd' },
        { flag: '🇦🇴', name: 'Angola (planned)', value: '300K bpd' },
      ],
    },
    exports: {
      label: 'Import Inversion',
      value: '$17B/yr',
      detail: 'Africa import bill (2023)',
    },
    health: {
      status: 'Healthy',
      weight: 'High (10/10)',
      confidence: '88%',
    },
  },

  production: {
    top3: {
      share: 'Single-facility',
      combined: 'Dangote 650K bpd',
      countries: ['Nigeria', 'Angola (planned)', 'Uganda (planned)'],
    },
    top6: {
      share: '1.2M bpd pipeline',
      combined: 'by 2030',
      countries: ['Nigeria', 'Angola', 'Uganda'],
    },
    ranking: [
      { rank: 1, country: 'Nigeria', flag: '🇳🇬', production: '650K bpd (Dangote)', productionNum: 650, share: 'dominant' },
      { rank: 2, country: 'Angola', flag: '🇦🇴', production: '300K bpd (planned 2030)', productionNum: 300, share: 'planned' },
      { rank: 3, country: 'Uganda', flag: '🇺🇬', production: 'leading contributor', productionNum: 60, share: 'pipeline' },
    ],
  },

  consumers: [
    { country: 'Côte d\'Ivoire', flag: '🇨🇮', value: 'PMS recipient', valueNum: 5, share: '1' },
    { country: 'Cameroon', flag: '🇨🇲', value: 'PMS recipient', valueNum: 4, share: '2' },
    { country: 'Ghana', flag: '🇬🇭', value: 'PMS recipient', valueNum: 4, share: '3' },
    { country: 'Tanzania', flag: '🇹🇿', value: 'PMS recipient', valueNum: 3, share: '4' },
    { country: 'South Africa', flag: '🇿🇦', value: 'discussions', valueNum: 2, share: '5' },
  ],

  exporters: [
    { country: 'Nigeria', flag: '🇳🇬', value: 'net exporter (first time)', valueNum: 650, share: 'transformational' },
  ],

  importers: [
    { country: 'Nigeria', flag: '🇳🇬', value: '$1.4B from UK (2025)', valueNum: 5, share: 'residual' },
    { country: 'South Africa', flag: '🇿🇦', value: 'seeking alternatives', valueNum: 4, share: 'import-reliant' },
  ],

  price: {
    benchmarks: ['FOB Lagos (emerging)', 'RBOB Gasoline', 'ICE Gasoil', 'Jet fuel assessments'],
    drivers: [
      'Middle East geopolitical tension', 'Global oil market volatility',
      'Dangote feedstock sourcing challenges', 'Nigerian regulatory policy (NMDPRA)',
      'Regional logistics cost differentials',
    ],
  },

  dna: {
    description:
      'Refined petroleum products are the immediately consumable end-form of crude oil. Africa has historically exported raw crude while importing nearly all refined fuel needs — a value-capture inversion now being reversed by the Dangote Refinery, which reached full 650,000 bpd capacity in early 2026.',
    qualityExamples: [],
    africanGrades: ['Euro V/VI gasoline (PMS)', 'Diesel', 'Jet fuel', 'Naphtha', 'LPG', 'Fuel oil'],
    benchmarks: ['FOB Lagos', 'RBOB', 'ICE Gasoil'],
    outputs: ['Gasoline', 'Diesel', 'Jet fuel', 'Naphtha', 'LPG', 'Fuel oil', 'Polypropylene'],
    applications: [
      'Transport', 'Aviation', 'Domestic/industrial fuel', 'Petrochemical feedstock',
      'Regional energy security',
    ],
    transformation: ['Crude Feedstock', 'Refining (Dangote)', 'Domestic Market (92%)', 'Export Cargo (FOB)', 'Regional African Destinations'],
    identitySignals: [
      { label: 'Primary Industry', value: 'Energy (Downstream)' },
      { label: 'Primary Value Chain', value: 'Crude → Refining → Domestic + Intra-African export' },
      { label: 'Primary Differentiators', value: 'Fastest structural reversal in catalog (import → export)' },
      { label: 'Primary Benchmarks', value: 'FOB Lagos / RBOB / ICE Gasoil' },
      { label: 'Primary Commercial Unit', value: 'Barrel / tonne' },
      { label: 'Economic Role in Africa', value: 'Import substitution + FX preservation + balance-of-payments strength' },
    ],
  },

  origin: {
    reserves: {
      total: 'N/A (downstream node)',
      globalShare: 'N/A',
      largest: 'Nigeria (Dangote)',
      concentration: 'Single facility',
    },
    topReserves: [
      { rank: 1, country: 'Nigeria', flag: '🇳🇬', production: '650K bpd', productionNum: 650, share: 'dominant' },
      { rank: 2, country: 'Angola', flag: '🇦🇴', production: '300K bpd planned', productionNum: 300, share: '' },
    ],
    snapshot: {
      production: '650K bpd (Dangote)',
      annual: 'Full capacity 2026',
      global: 'Concentrated off-continent',
      share: 'Nigeria-dominant',
    },
    basins: [],
    environment: {
      onshore: ['Lekki Free Trade Zone'],
      offshore: [],
      deepwater: [],
    },
    infrastructure: {
      extraction: ['NNPC crude allocation', 'Imported crude cargoes'],
      midstream: ['Refinery (Dangote)'],
      export: ['Nigerian ports/tankers'],
      processing: ['Dangote Petrochemicals (polypropylene)'],
    },
    flow: ['Crude Feedstock', 'Refinery Processing', 'Domestic Market', 'Export Cargo (FOB)', 'Regional Ports'],
    drivers: [
      'Dangote capacity expansion (→1.4M bpd)', 'New capacity (Akwa Ibom, Lobito, Soyo)',
      'NNPC allocation reliability', 'Middle East geopolitical tension',
    ],
    constraints: [
      'Single-facility concentration risk', 'Feedstock allocation shortfalls',
      'Incomplete import substitution', 'Global oil market volatility',
    ],
    opportunities: [
      'Dangote expansion to 1.4M bpd', 'Displacement of $17B import bill',
      'Intra-African trade networks', 'Petrochemical diversification',
    ],
  },

  connectedEntities: [
    { name: 'Nigeria', flag: '🇳🇬', count: 7, kind: 'Origin/Processing' },
    { name: 'Dangote Refinery', count: 6, kind: 'Infrastructure' },
    { name: 'Côte d\'Ivoire', flag: '🇨🇮', count: 2, kind: 'Market' },
    { name: 'Ghana', flag: '🇬🇭', count: 2, kind: 'Market' },
    { name: 'South Africa', flag: '🇿🇦', count: 2, kind: 'Market' },
    { name: 'NNPC', count: 3, kind: 'Institution' },
    { name: 'NMDPRA', count: 3, kind: 'Institution' },
    { name: 'Central Bank of Nigeria', count: 2, kind: 'Institution' },
    { name: 'Angola', flag: '🇦🇴', count: 2, kind: 'Origin/Processing' },
    { name: 'OPEC', count: 2, kind: 'Institution' },
  ],

  news: [
    {
      title: 'Nigeria flips from fuel importer to net exporter',
      summary: 'Dangote reached full 650,000 bpd capacity in early 2026, making Nigeria a net petrol exporter for the first time in decades.',
      date: '2026',
      impact: 'high',
    },
    {
      title: 'Dangote announces expansion to 1.4M bpd',
      summary: 'October 2025 expansion plans would make Dangote the largest single refinery in the world by current capacity rankings.',
      date: '2025',
      impact: 'high',
    },
    {
      title: 'Nigeria current account posts $14.04B surplus',
      summary: 'The Central Bank of Nigeria now explicitly treats Dangote as a structural driver of the national accounts.',
      date: '2025',
      impact: 'medium',
    },
  ],
};