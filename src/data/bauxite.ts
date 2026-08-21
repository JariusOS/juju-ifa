import type { Commodity } from './types';

export const bauxite: Commodity = {
  id: 'COM-MET-BAU-011',
    nodeTags: [],
  slug: 'bauxite',
  name: 'Bauxite',
  status: 'Verified',
  nodeType: 'comNODE: bulk minerals',
  nodeClass: 'Aluminum Ore / Bulk Commodity / Refining Feedstock',
  weight: 8,
  weightLabel: 'Critical, rising',
  confidence: 90,
  confidenceLabel: 'High',
  hsCode: '—',
  fingerprint:
    'The essential upstream feedstock for the entire aluminum value chain (bauxite → alumina → aluminum) — no viable substitute for primary aluminum at scale. Guinea is the world single largest bauxite producer, holding ~7.4B tonnes (~30% of global reserves), with China absorbing >70% of its exports.',
  tags: ['#bauxite', '#aluminum', '#bulk-minerals', '#Guinea', '#China', '#cobalt-playbook', '#critical-mineral'],
  rankLabel: '#1 Africa Bulk Feedstock',
  globalValue: '$18–20B',
  africaExportValue: 'China-concentrated',
  africaShare: '~16–32%',
  referencePrice: '$32–39/dmt',
  referencePriceDetail: 'FOB Guinea, 2026',
  yoyPrice: 'Near 4-yr lows',
  followers: '1000',
  bookmarks: '560',

  snapshot: {
    globalMarketValue: '~$18–20B (modeled, ~450Mt × $40–45/t)',
    globalExportValue: 'Overwhelmingly Guinea-to-China flows',
    referencePrice: 'Bauxite FOB Guinea ~$32–39/dmt • CIF China ~$59–70/dmt',
    globalProduction: '~451.3 million tonnes (2025)',
    africanProduction: 'Guinea alone ~130–183 Mt',
    africaProductionShare: '~16–32% (methodology-dependent)',
    strategicRole:
      'Essential upstream feedstock for the aluminum value chain — no viable substitute for primary aluminum production at scale.',
    africanExportValue: 'Substantial and China-concentrated',
    africanShareGlobalExports: 'Very high (Guinea world top exporter)',
    africanReserves: '~7.4B tonnes (Guinea, ~30% of global)',
    africanReserveValue: '~$220B',
    exportRegions: ['West Africa (Guinea, overwhelmingly dominant)'],
    primaryMarkets: ['China', 'India', 'Middle East'],
  },

  summaryGrid: {
    reserves: {
      value: '~7.4B t',
      unit: 'Guinean reserves',
      yoy: 'Largest national base',
      holders: [
        { flag: '🇬🇳', name: 'Guinea', value: '~7.4B t (30%)' },
        { flag: '🇦🇺', name: 'Australia', value: '~97–105 Mt/yr' },
        { flag: '🇨🇳', name: 'China', value: '~90.5 Mt/yr' },
      ],
    },
    exports: {
      label: 'Global Production',
      value: '451.3 Mt',
      detail: 'China: >70% of Guinea',
    },
    health: {
      status: 'Healthy',
      weight: 'High (8/10)',
      confidence: '90%',
    },
  },

  production: {
    top3: {
      share: '~70%+',
      combined: 'Guinea + Australia + China',
      countries: ['Guinea', 'Australia', 'China'],
    },
    top6: {
      share: 'Guinea dominant',
      combined: 'Guinea + AU + CN + BR + IN + ID',
      countries: ['Guinea', 'Australia', 'China', 'Brazil', 'India', 'Indonesia'],
    },
    ranking: [
      { rank: 1, country: 'Guinea', flag: '🇬🇳', production: '~130–183 Mt', productionNum: 183, share: '~29–41%' },
      { rank: 2, country: 'Australia', flag: '🇦🇺', production: '~97–105 Mt', productionNum: 101, share: '~22.7%' },
      { rank: 3, country: 'China', flag: '🇨🇳', production: '~90.5 Mt', productionNum: 90.5, share: '~20%' },
      { rank: 4, country: 'Brazil', flag: '🇧🇷', production: '~31–33 Mt', productionNum: 32, share: '~7%' },
      { rank: 5, country: 'India', flag: '🇮🇳', production: '~23–32 Mt', productionNum: 27, share: '~5–7%' },
    ],
  },

  consumers: [
    { country: 'China', flag: '🇨🇳', value: '>70% of Guinea exports', valueNum: 10, share: '1' },
    { country: 'India', flag: '🇮🇳', value: 'growing', valueNum: 3, share: '2' },
    { country: 'Middle East', flag: '🌍', value: 'smelting demand', valueNum: 2, share: '3' },
  ],

  exporters: [
    { country: 'Guinea', flag: '🇬🇳', value: 'world largest', valueNum: 183, share: 'dominant' },
  ],

  importers: [
    { country: 'China', flag: '🇨🇳', value: '>70% of Guinea exports', valueNum: 10, share: '1' },
    { country: 'India', flag: '🇮🇳', value: 'secondary', valueNum: 3, share: '2' },
  ],

  price: {
    benchmarks: ['Fastmarkets Bauxite FOB Guinea', 'Fastmarkets Bauxite CIF China', 'SMM Imported Bauxite Index', 'Fastmarkets Alumina Index FOB Australia'],
    drivers: [
      'Structural oversupply', 'Guinea export-management policy (cobalt playbook)',
      'China alumina refining capacity expansion', 'Freight & bunker costs',
      'Strait of Hormuz disruption', 'Rainy season & shipment timing',
    ],
  },

  dna: {
    description:
      'Bauxite is the essential upstream feedstock for aluminum. Guinea is the world single largest producer and exporter, with the largest national reserve base (~7.4B tonnes). A FOB-to-CIF China price spread of ~60–80% markup captures value outside Guinea — among the widest leakage patterns in the catalog.',
    qualityExamples: [
      { name: 'Guinea bauxite', api: 'high grade', sulfur: '—', qualityClass: 'Boké region' },
    ],
    africanGrades: ['Guinean Boké ore'],
    benchmarks: ['FOB Guinea', 'CIF China', 'SMM Index', 'Alumina FOB Australia'],
    outputs: ['Alumina', 'Aluminum metal', 'Aluminum products'],
    applications: [
      'Chinese alumina refining', 'Aluminum smelting', 'Construction, transport & packaging',
      'Clean energy (solar, EVs, grid)',
    ],
    transformation: ['Mine (Boké)', 'Rail/Road', 'Port', 'Vessel', 'Chinese Refinery', 'Aluminum Smelter'],
    identitySignals: [
      { label: 'Primary Industry', value: 'Bulk Minerals / Aluminum' },
      { label: 'Primary Value Chain', value: 'Mine → Rail → Port → Vessel → Chinese refining → Smelter' },
      { label: 'Primary Differentiators', value: 'World-largest producer + reserve base' },
      { label: 'Primary Benchmarks', value: 'FOB Guinea / CIF China / Alumina' },
      { label: 'Primary Commercial Unit', value: 'Tonne (dmt)' },
      { label: 'Economic Role in Africa', value: 'Export revenue + emerging downstream ambition' },
    ],
  },

  origin: {
    reserves: {
      total: '~7.4B tonnes (Guinea)',
      globalShare: '~30%',
      largest: 'Guinea (world largest)',
      concentration: 'Guinea overwhelmingly',
    },
    topReserves: [
      { rank: 1, country: 'Guinea', flag: '🇬🇳', production: '~7.4B t', productionNum: 7400, share: '~30%' },
      { rank: 2, country: 'Australia', flag: '🇦🇺', production: '~5.5B t', productionNum: 5500, share: '' },
    ],
    snapshot: {
      production: '~130–183 Mt',
      annual: 'Guinean output',
      global: '~451.3 Mt',
      share: '~29–41%',
    },
    basins: [
      { id: 'GEO-MET-BAU-BOK-001', name: 'Boké region', country: 'Guinea', environment: 'Onshore', grades: [] },
    ],
    environment: {
      onshore: ['Boké region'],
      offshore: [],
      deepwater: [],
    },
    infrastructure: {
      extraction: ['Boké mining complex'],
      midstream: ['Rail/road transport'],
      export: ['Guinean export ports'],
      processing: ['Planned alumina refineries (5–6 by 2030)'],
    },
    flow: ['Mine (Boké)', 'Rail/Road', 'Port', 'Vessel', 'Chinese Port', 'Alumina Refinery', 'Aluminum Smelter'],
    drivers: [
      'Guinea export-volume decisions', 'Chinese domestic production decline',
      'Australian growth', 'New project commissioning',
    ],
    constraints: [
      'Structural oversupply', 'Extreme single-buyer concentration (>70% China)',
      'Value-capture leakage (FOB→CIF spread)', 'Policy volatility (resource nationalism)',
    ],
    opportunities: [
      'Export-management leverage (cobalt playbook)', 'Domestic alumina refining (8–10x value)',
      'Closing FOB→CIF spread', 'Continued Chinese demand growth',
    ],
  },

  connectedEntities: [
    { name: 'Guinea', flag: '🇬🇳', count: 6, kind: 'Origin' },
    { name: 'China', flag: '🇨🇳', count: 4, kind: 'Market' },
    { name: 'Boké region', count: 3, kind: 'Origin' },
    { name: 'SMB', count: 3, kind: 'Corporation' },
    { name: 'CBG', count: 2, kind: 'Corporation' },
    { name: 'Chalco', count: 2, kind: 'Corporation' },
    { name: 'Hongqiao', count: 2, kind: 'Corporation' },
    { name: 'Emirates Global Aluminium', count: 2, kind: 'Corporation' },
    { name: 'Guinean Ministry of Mines', count: 3, kind: 'Institution' },
    { name: 'Australia', flag: '🇦🇺', count: 2, kind: 'Competitor' },
  ],

  news: [
    {
      title: 'Guinea implements export caps modeled on cobalt',
      summary: 'April 2026 export reduction measures target bauxite prices above $100/dmt, explicitly citing the DRC cobalt export-ban precedent.',
      date: '2026',
      impact: 'high',
    },
    {
      title: 'Emirates Global Aluminium licence revoked',
      summary: 'Authorities stripped EGA of its Guinean mining rights (Aug 2025) and transferred the concession to a state-owned entity — a concrete act of resource nationalism.',
      date: '2025',
      impact: 'high',
    },
    {
      title: 'Chinese bauxite imports hit record 201.2 Mt',
      summary: '2025 imports rose 26% to a historic high, with Guinea supplying ~149 Mt (+35% YoY) — deepening structural Chinese dependency.',
      date: '2025',
      impact: 'medium',
    },
  ],
};