import type { Commodity } from './types';

export const pgms: Commodity = {
  id: 'COM-PME-PGM-006',
    nodeTags: [],
  slug: 'pgms',
  name: 'Platinum Group Metals',
  status: 'Verified',
  nodeType: 'comNODE: precious/industrial metals',
  nodeClass: 'Platinum Group Metal / Precious-Industrial Hybrid / Catalytic Metal',
  weight: 9,
  weightLabel: 'Critical',
  confidence: 89,
  confidenceLabel: 'High',
  hsCode: '—',
  fingerprint:
    'Core catalytic-conversion metal for vehicle emissions control, plus critical inputs for hydrogen fuel cells and emerging AI/data-centre applications. South Africa supplies >70% of global primary platinum and >80% of global rhodium, ruthenium and iridium — among the most extreme single-country supply concentrations in the catalog.',
  tags: ['#pgms', '#platinum', '#palladium', '#rhodium', '#precious-metals', '#catalytic', '#SouthAfrica', '#critical-mineral'],
  rankLabel: '#2 Africa Strategic Mineral',
  globalValue: '$25–30B',
  africaExportValue: '$15–18B',
  africaShare: '65–70%',
  referencePrice: 'Pt $1,780/oz',
  referencePriceDetail: 'Aug 2026',
  yoyPrice: 'Up 20% (Pd)',
  followers: '1100',
  bookmarks: '640',

  snapshot: {
    globalMarketValue: '~$25–30B (modeled, Pt + Pd + Rh mine-supply value)',
    globalExportValue: '~$20–25B (modeled)',
    referencePrice: 'Pt ~$1,770–1,790/oz • Pd ~$1,330–1,350/oz • Rh ~$10,100/oz (Aug 2026)',
    globalProduction: '~190–200 t (Pt) • ~200–210 t (Pd)',
    africanProduction: 'South Africa dominant (>70% Pt, >80% Rh)',
    africaProductionShare: '~65–70% (export value)',
    strategicRole:
      'Core catalytic-conversion metal for ICE/hybrid emissions control; critical for hydrogen fuel cells, chemical catalysis, electronics and emerging AI/data-centre applications.',
    africanExportValue: '~$15–18B (modeled)',
    africanShareGlobalExports: '~65–70%',
    africanReserves: '~63 million kg (South Africa alone, ~83% of global)',
    africanReserveValue: '~$2.5T',
    exportRegions: ['Southern Africa (South Africa dominant; Zimbabwe secondary)'],
    primaryMarkets: ['Europe', 'China', 'USA'],
  },

  summaryGrid: {
    reserves: {
      value: '~83%',
      unit: 'of global reserves (SA)',
      yoy: 'Structural deficit',
      holders: [
        { flag: '🇿🇦', name: 'South Africa', value: '~63M kg' },
        { flag: '🇿🇼', name: 'Zimbabwe', value: 'Great Dyke' },
      ],
    },
    exports: {
      label: 'Global Export Value',
      value: '$20–25B',
      detail: 'Africa: ~65–70%',
    },
    health: {
      status: 'Healthy',
      weight: 'High (9/10)',
      confidence: '89%',
    },
  },

  production: {
    top3: {
      share: '>70%',
      combined: 'SA dominant',
      countries: ['South Africa', 'Russia (Pd)', 'Zimbabwe'],
    },
    top6: {
      share: 'SA + ZW + Russia',
      combined: 'Extreme concentration',
      countries: ['South Africa', 'Zimbabwe', 'Russia', 'Canada', 'USA'],
    },
    ranking: [
      { rank: 1, country: 'South Africa', flag: '🇿🇦', production: '>70% global Pt', productionNum: 10, share: 'dominant' },
      { rank: 2, country: 'Zimbabwe', flag: '🇿🇼', production: 'Great Dyke', productionNum: 1, share: 'secondary' },
      { rank: 3, country: 'Russia', flag: '🇷🇺', production: 'Pd leader', productionNum: 8, share: 'Pd-only' },
      { rank: 4, country: 'Canada', flag: '🇨🇦', production: 'minor', productionNum: 0.5, share: 'minor' },
      { rank: 5, country: 'USA', flag: '🇺🇸', production: 'minor', productionNum: 0.3, share: 'minor' },
    ],
  },

  consumers: [
    { country: 'Automotive (catalysts)', value: 'largest consumer', valueNum: 10, share: '1' },
    { country: 'Jewelry', value: 'renewed interest', valueNum: 4, share: '2' },
    { country: 'Chemical/petroleum catalysis', value: 'established', valueNum: 3, share: '3' },
    { country: 'Electronics', value: 'established', valueNum: 2, share: '4' },
    { country: 'Hydrogen/AI infrastructure', value: 'emerging', valueNum: 1, share: '5' },
  ],

  exporters: [
    { country: 'South Africa', flag: '🇿🇦', value: '>70% global Pt', valueNum: 10, share: 'dominant' },
    { country: 'Zimbabwe', flag: '🇿🇼', value: 'Great Dyke', valueNum: 1, share: 'secondary' },
  ],

  importers: [
    { country: 'Switzerland', flag: '🇨🇭', value: 're-export/refining hub', valueNum: 8, share: '1' },
    { country: 'Germany', flag: '🇩🇪', value: 'industrial/automotive', valueNum: 6, share: '2' },
    { country: 'Belgium', flag: '🇧🇪', value: 'refining hub', valueNum: 5, share: '3' },
    { country: 'China', flag: '🇨🇳', value: 'fast-growing physical demand', valueNum: 7, share: '4' },
    { country: 'USA', flag: '🇺🇸', value: '~45% of Pt imports from SA', valueNum: 4, share: '5' },
  ],

  price: {
    benchmarks: ['NYMEX', 'LPPM', 'Rhodium (dealer/spot)'],
    drivers: [
      'Structural supply deficits (Pt)', 'South African mine rationalization',
      'SA power/electricity supply disruptions', 'Russian palladium inventory liquidation',
      'Chinese physical investment demand', 'Automotive production trends',
      'Emerging AI/data-centre demand', 'Geopolitical risk',
    ],
  },

  dna: {
    description:
      'Platinum group metals (platinum, palladium, rhodium, ruthenium, iridium, osmium) are catalytic metals essential to vehicle emissions control, chemical catalysis, electronics and emerging hydrogen/AI applications. South Africa hosts the Bushveld Complex, the world largest PGM resource.',
    qualityExamples: [],
    africanGrades: [],
    benchmarks: ['NYMEX', 'LPPM'],
    outputs: ['Catalytic converters', 'Fuel cells', 'Electronics', 'Jewelry', 'Chemical catalysts'],
    applications: [
      'Automotive emissions control', 'Jewelry', 'Chemical/petroleum catalysis',
      'Electronics', 'Hydrogen fuel cells', 'AI/data-centre infrastructure',
    ],
    transformation: ['Deep-Level Mine', 'Concentrator/Smelter', 'Refinery', 'Export Logistics', 'Global Refiners/Manufacturers'],
    identitySignals: [
      { label: 'Primary Industry', value: 'Precious/Industrial Metals' },
      { label: 'Primary Value Chain', value: 'Mine → Concentrator/Smelter → Refinery → Global manufacturers' },
      { label: 'Primary Differentiators', value: 'Extreme SA concentration (>80% Rh/Ru/Ir)' },
      { label: 'Primary Benchmarks', value: 'NYMEX / LPPM' },
      { label: 'Primary Commercial Unit', value: 'Troy ounce' },
      { label: 'Economic Role in Africa', value: 'Export revenue + fiscal revenue + deep-level mining employment' },
    ],
  },

  origin: {
    reserves: {
      total: '~63M kg (SA)',
      globalShare: '~83%',
      largest: 'South Africa (Bushveld)',
      concentration: 'Southern Africa',
    },
    topReserves: [
      { rank: 1, country: 'South Africa', flag: '🇿🇦', production: '~63M kg', productionNum: 63, share: '83%' },
      { rank: 2, country: 'Zimbabwe', flag: '🇿🇼', production: 'Great Dyke', productionNum: 5, share: '' },
    ],
    snapshot: {
      production: '>70% global Pt (SA)',
      annual: 'SA dominant',
      global: '~190–200 t Pt',
      share: 'SA-dominant',
    },
    basins: [
      { id: 'GEO-PME-PGM-BUS-001', name: 'Bushveld Complex', country: 'South Africa', environment: 'Deep-level underground', grades: ['Merensky Reef', 'Platreef', 'UG2 Reef'] },
      { id: 'GEO-PME-PGM-GRD-001', name: 'Great Dyke', country: 'Zimbabwe', environment: 'Onshore', grades: [] },
    ],
    environment: {
      onshore: ['Bushveld', 'Great Dyke'],
      offshore: [],
      deepwater: [],
    },
    infrastructure: {
      extraction: ['Deep-level mines', 'Concentrators'],
      midstream: ['Smelters', 'Refineries'],
      export: ['Rail network', 'Export terminals'],
      processing: ['Refineries (largely off-continent)'],
    },
    flow: ['Deep-Level Mine', 'Concentrator/Smelter', 'Refinery', 'Rail/Port', 'Vessel', 'Global Refiners/Manufacturers'],
    drivers: [
      'Platreef & newer resource development', 'Hydrogen fuel cell adoption',
      'AI/data-centre demand', 'Structural deficit pricing power',
    ],
    constraints: [
      'Electricity grid reliability (Eskom)', 'Deep-level mining costs',
      'Rail/logistics bottlenecks', 'Long-term EV transition risk',
    ],
    opportunities: [
      'Hydrogen fuel cell adoption', 'AI/data-centre demand (5x by 2030 est.)',
      'Electricity grid resilience investment', 'Recycling/secondary capture',
    ],
  },

  connectedEntities: [
    { name: 'South Africa', flag: '🇿🇦', count: 6, kind: 'Origin' },
    { name: 'Zimbabwe', flag: '🇿🇼', count: 3, kind: 'Origin' },
    { name: 'China', flag: '🇨🇳', count: 3, kind: 'Market' },
    { name: 'Bushveld Complex', count: 4, kind: 'Origin' },
    { name: 'Switzerland', flag: '🇨🇭', count: 2, kind: 'Market' },
    { name: 'USA', flag: '🇺🇸', count: 2, kind: 'Market' },
    { name: 'Eskom', count: 3, kind: 'Infrastructure' },
    { name: 'Valterra Platinum', count: 2, kind: 'Corporation' },
    { name: 'Implats', count: 2, kind: 'Corporation' },
    { name: 'World Platinum Investment Council', count: 2, kind: 'Institution' },
  ],

  news: [
    {
      title: 'Platinum hits all-time high of $2,734.72/oz',
      summary: 'January 2026 record driven by structural supply deficits and green-energy/AI demand narratives.',
      date: '2026',
      impact: 'high',
    },
    {
      title: 'Anglo American demerges platinum into Valterra',
      summary: 'Anglo American Platinum was demerged and listed as Valterra Platinum on the LSE in May 2025.',
      date: '2025',
      impact: 'medium',
    },
    {
      title: 'Structural platinum deficit persists',
      summary: 'Platinum has recorded structural global supply deficits for three consecutive years, with demand outpacing supply by ~1M oz in a recent year.',
      date: '2024–26',
      impact: 'medium',
    },
  ],
};