import type { Commodity } from './types';

export const copper: Commodity = {
  id: 'COM-MET-COP-002',
    nodeTags: [],
  slug: 'copper',
  name: 'Copper',
  status: 'Verified',
  nodeType: 'comNODE: base metals',
  nodeClass: 'Base Metal / Industrial Metal / Energy-Transition Metal',
  weight: 10,
  weightLabel: 'Critical',
  confidence: 90,
  confidenceLabel: 'High',
  hsCode: '—',
  fingerprint:
    'Core industrial and energy-transition metal — foundational to electrification, grid infrastructure, EVs, renewables and data-centre buildout. African copper production is extraordinarily concentrated, with DRC and Zambia together accounting for ~98% of continental output — the highest single-commodity geographic concentration on the continent.',
  tags: ['#copper', '#base-metals', '#energy-transition', '#electrification', '#critical-mineral', '#copperbelt', '#DRC', '#Zambia'],
  rankLabel: '#1 Africa Critical Mineral',
  globalValue: '$310–330B',
  africaExportValue: '$35–40B',
  africaShare: '20%',
  referencePrice: '$13,400/t',
  referencePriceDetail: 'LME, Aug 2026',
  yoyPrice: '+26% YoY',
  followers: '2200',
  bookmarks: '1240',

  snapshot: {
    globalMarketValue: '~$310–330B (refined + concentrate trade, modeled)',
    globalExportValue: '~$180B+ (refined copper trade)',
    referencePrice: '~$13,400/tonne (~$6.10/lb, LME, Aug 2026)',
    globalProduction: '~23.4M tonnes (mine production, 2025)',
    africanProduction: '~4.5M tonnes',
    africaProductionShare: '~19–20%',
    strategicRole:
      'Core industrial and energy-transition metal — foundational to electrification, grid infrastructure, EVs, renewables and data-centre buildout.',
    africanExportValue: '~$35–40B (modeled; DRC alone ~$25–28B)',
    africanShareGlobalExports: '~20%',
    africanReserves: '~90–100M tonnes',
    africanReserveValue: '~$1.2–1.3T',
    exportRegions: ['Central Africa (DRC)', 'Southern Africa (Zambia)'],
    primaryMarkets: ['China', 'Europe', 'India', 'Other Asia'],
  },

  summaryGrid: {
    reserves: {
      value: '$1.2T',
      unit: 'reserve value',
      yoy: 'Rising',
      holders: [
        { flag: '🇨🇩', name: 'DRC', value: '~3.5M t' },
        { flag: '🇿🇲', name: 'Zambia', value: '~0.89M t' },
        { flag: '🇿🇦', name: 'South Africa', value: 'minor' },
      ],
    },
    exports: {
      label: 'Global Exports',
      value: '$180B+',
      detail: 'Africa: ~20%',
    },
    health: {
      status: 'Healthy',
      weight: 'High (10/10)',
      confidence: '90%',
    },
  },

  production: {
    top3: {
      share: '98%',
      combined: '~4.4M t',
      countries: ['DRC', 'Zambia'],
    },
    top6: {
      share: '99%+',
      combined: '~4.5M t',
      countries: ['DRC', 'Zambia', 'South Africa', 'Namibia', 'Mauritania'],
    },
    ranking: [
      { rank: 1, country: 'DRC', flag: '🇨🇩', production: '~3.5M t', productionNum: 3.5, share: '78%' },
      { rank: 2, country: 'Zambia', flag: '🇿🇲', production: '~0.89M t', productionNum: 0.89, share: '20%' },
      { rank: 3, country: 'South Africa', flag: '🇿🇦', production: '~0.08M t', productionNum: 0.08, share: '2%' },
      { rank: 4, country: 'Namibia', flag: '🇳🇦', production: 'small', productionNum: 0.01, share: '<1%' },
      { rank: 5, country: 'Botswana', flag: '🇧🇼', production: 'small', productionNum: 0.01, share: '<1%' },
    ],
  },

  consumers: [
    { country: 'China', flag: '🇨🇳', value: '~14M t', valueNum: 14, share: '1' },
    { country: 'USA', flag: '🇺🇸', value: '~1.8M t', valueNum: 1.8, share: '2' },
    { country: 'Germany', flag: '🇩🇪', value: 'modeled', valueNum: 1.2, share: '3' },
    { country: 'Japan', flag: '🇯🇵', value: 'modeled', valueNum: 1.1, share: '4' },
    { country: 'South Korea', flag: '🇰🇷', value: 'modeled', valueNum: 0.9, share: '5' },
  ],

  exporters: [
    { country: 'DRC', flag: '🇨🇩', value: '~3.4M t', valueNum: 3.4, share: '76%' },
    { country: 'Zambia', flag: '🇿🇲', value: '~0.89M t', valueNum: 0.89, share: '20%' },
    { country: 'South Africa', flag: '🇿🇦', value: '~0.09M t', valueNum: 0.09, share: '2%' },
    { country: 'Namibia', flag: '🇳🇦', value: 'small', valueNum: 0.02, share: '<1%' },
    { country: 'Zimbabwe', flag: '🇿🇼', value: 'small', valueNum: 0.01, share: '<1%' },
  ],

  importers: [
    { country: 'China', flag: '🇨🇳', value: 'dominant buyer', valueNum: 10, share: '1' },
    { country: 'UAE', flag: '🇦🇪', value: 're-export hub', valueNum: 4, share: '2' },
    { country: 'Europe', flag: '🇪🇺', value: 'refining/fabrication', valueNum: 3, share: '3' },
    { country: 'India', flag: '🇮🇳', value: 'growing', valueNum: 2, share: '4' },
    { country: 'Singapore', flag: '🇸🇬', value: 'trading hub', valueNum: 1.5, share: '5' },
  ],

  price: {
    benchmarks: ['LME', 'COMEX', 'SHFE'],
    drivers: [
      'Global supply/demand balance', 'Energy-transition & electrification demand',
      'US tariff policy on refined copper', 'Ore grade decline at major mines',
      'China economic stimulus', 'LME/COMEX inventory levels', 'Mine disruptions',
      'Smelting/refining input constraints',
    ],
  },

  dna: {
    description:
      'Copper is a ductile, highly conductive industrial metal essential to global electrification. African supply is dominated by the DRC and Zambia, whose Copperbelt together accounts for ~98% of continental output and ~99%+ including South Africa, Namibia and Mauritania.',
    qualityExamples: [],
    africanGrades: [],
    benchmarks: ['LME', 'COMEX', 'SHFE'],
    outputs: ['Wire & cable', 'Electrical equipment', 'EV batteries & motors', 'Grid infrastructure', 'Renewable energy equipment', 'Construction & plumbing', 'Electronics'],
    applications: [
      'Electrification', 'Grid infrastructure', 'Electric vehicles', 'Renewable energy (solar, wind)',
      'Data centres & AI infrastructure', 'Construction & wiring', 'Industrial manufacturing',
      'Consumer electronics',
    ],
    transformation: ['Copper Ore', 'Concentrate', 'Smelter/Refinery', 'Cathode', 'Wire, Rod & Products', 'End Use'],
    identitySignals: [
      { label: 'Primary Industry', value: 'Base Metals / Energy-Transition' },
      { label: 'Primary Value Chain', value: 'Mine → Concentrate → Smelter/Refinery → Fabrication' },
      { label: 'Primary Differentiators', value: 'Energy-transition demand + concentration' },
      { label: 'Primary Benchmarks', value: 'LME / COMEX / SHFE' },
      { label: 'Primary Commercial Unit', value: 'Tonne' },
      { label: 'Economic Role in Africa', value: 'Export revenue + fiscal revenue + strategic mineral leverage' },
    ],
  },

  origin: {
    reserves: {
      total: '~90–100M tonnes',
      globalShare: '~20%',
      largest: 'DRC + Zambia (Copperbelt)',
      concentration: 'Central African Copperbelt',
    },
    topReserves: [
      { rank: 1, country: 'DRC', flag: '🇨🇩', production: '~3.5M t/yr', productionNum: 3.5, share: 'dominant' },
      { rank: 2, country: 'Zambia', flag: '🇿🇲', production: '~0.89M t/yr', productionNum: 0.89, share: '' },
    ],
    snapshot: {
      production: '~4.5M t',
      annual: '~2.8M t refined',
      global: '~23.4M t',
      share: '~19–20%',
    },
    basins: [
      { id: 'GEO-MET-COP-CB-001', name: 'Central African Copperbelt', country: 'DRC • Zambia', environment: 'Onshore', grades: ['Kamoa-Kakula', 'Tenke Fungurume', 'Kansanshi', 'Sentinel'] },
      { id: 'GEO-MET-COP-KAT-001', name: 'Katanga / Copperbelt Province', country: 'DRC', environment: 'Onshore', grades: ['Kolwezi', 'Kipushi'] },
    ],
    environment: {
      onshore: ['Copperbelt', 'Katanga', 'Northwest Zambia'],
      offshore: [],
      deepwater: [],
    },
    infrastructure: {
      extraction: ['Open-pit & underground mines', 'Concentrators'],
      midstream: ['Rail corridors', 'Road logistics'],
      export: ['Lobito Corridor', 'Durban port', 'Dar es Salaam port'],
      processing: ['Smelters', 'Refineries'],
    },
    flow: ['Mine', 'Concentrator', 'Smelter/Refinery', 'Rail/Road', 'Port', 'Vessel', 'Global buyer'],
    drivers: [
      'DRC/Zambia expansion investment (~$10B+ committed)', 'New mine commissioning',
      'Power infrastructure investment', 'Ore grade trends',
    ],
    constraints: [
      'Power/grid instability (Zambia)', 'Ore grade decline at legacy mines',
      'Underinvestment in processing', 'Transport & logistics bottlenecks',
      'Concentrate export policy shifts',
    ],
    opportunities: [
      'Brownfield expansion', 'Greenfield development', 'Kamoa-Kakula phase expansions',
      'Lobito Corridor development', 'Power generation investment', 'Domestic smelting expansion',
    ],
  },

  connectedEntities: [
    { name: 'DRC', flag: '🇨🇩', count: 6, kind: 'Origin' },
    { name: 'Zambia', flag: '🇿🇲', count: 5, kind: 'Origin' },
    { name: 'China', flag: '🇨🇳', count: 3, kind: 'Market' },
    { name: 'Lobito Corridor', count: 3, kind: 'Infrastructure' },
    { name: 'South Africa', flag: '🇿🇦', count: 2, kind: 'Origin / Logistics' },
    { name: 'India', flag: '🇮🇳', count: 2, kind: 'Market' },
    { name: 'LME', count: 2, kind: 'Benchmark' },
    { name: 'Ivanhoe Mines', count: 2, kind: 'Corporation' },
    { name: 'CMOC', count: 2, kind: 'Corporation' },
    { name: 'First Quantum Minerals', count: 2, kind: 'Corporation' },
  ],

  news: [
    {
      title: 'DRC overtakes Peru as world #2 copper producer',
      summary: 'The DRC became the world second-largest copper producer after Chile in 2025, with production nearing 3.5 million tonnes.',
      date: '2025',
      impact: 'high',
    },
    {
      title: 'Zambia achieves record copper output',
      summary: 'Zambia posted a record 890,346 tonnes in 2025 but still missed its own 1-million-tonne target.',
      date: '2025',
      impact: 'medium',
    },
    {
      title: 'Lobito Corridor reshapes export geography',
      summary: 'The Lobito Corridor is emerging as a strategically significant Atlantic export route for DRC and Zambian copper.',
      date: '2026',
      impact: 'medium',
    },
  ],
};