import type { Commodity } from './types';

export const naturalGasLng: Commodity = {
  id: 'COM-ENE-LNG-003',
    nodeTags: [],
  slug: 'natural-gas-lng',
  name: 'Natural Gas / LNG',
  status: 'Verified',
  nodeType: 'comNODE: energy',
  nodeClass: 'Natural Gas / Liquefied Natural Gas / Fossil Fuel',
  weight: 9,
  weightLabel: 'Critical',
  confidence: 88,
  confidenceLabel: 'High',
  hsCode: '—',
  fingerprint:
    'Fastest-growing traded fossil fuel — a core transitional/bridge fuel for power generation, industrial heat and displacing coal/pipeline gas dependency, notably Europe post-2022. Africa is increasingly positioned as a lower-geopolitical-risk alternative supplier amid Middle East and Russian route disruption.',
  tags: ['#natural-gas', '#LNG', '#energy', '#fossil-fuel', '#transition-fuel', '#Nigeria', '#Mozambique', '#energy-security'],
  rankLabel: '#2 Africa Energy Export',
  globalValue: '$450–500B',
  africaExportValue: '$35–38B',
  africaShare: '9.1%',
  referencePrice: '$21/MMBtu',
  referencePriceDetail: 'JKM (Asia) Aug 2026',
  yoyPrice: 'Elevated',
  followers: '1900',
  bookmarks: '1030',

  snapshot: {
    globalMarketValue: '~$450–500B (LNG trade, modeled)',
    globalExportValue: '~$400B+ (modeled)',
    referencePrice: 'JKM ~$21/MMBtu (Asia) • TTF ~$15–16/MMBtu (Europe) • Henry Hub ~$3/MMBtu (US)',
    globalProduction: '436.98 Mt (LNG trade, 2025)',
    africanProduction: '39.77 Mt (LNG exports, 2025)',
    africaProductionShare: '~9.1%',
    strategicRole:
      'Fastest-growing traded fossil fuel; core transitional/bridge fuel for power generation, industrial heat and displacing coal/pipeline gas dependency (notably Europe post-2022 diversification away from Russian gas).',
    africanExportValue: '~$35–38B (modeled; Nigeria alone ~$14–15B)',
    africanShareGlobalExports: '~9%',
    africanReserves: '>620 Tcf (Nigeria alone >200 Tcf)',
    africanReserveValue: '~$1.9T',
    exportRegions: ['West Africa', 'North Africa', 'Southern/East Africa', 'Central Africa'],
    primaryMarkets: ['Europe', 'China', 'Japan', 'South Korea', 'India'],
  },

  summaryGrid: {
    reserves: {
      value: '>620 Tcf',
      unit: 'gas reserves',
      yoy: 'Rising',
      holders: [
        { flag: '🇳🇬', name: 'Nigeria', value: '>200 Tcf' },
        { flag: '🇩🇿', name: 'Algeria', value: 'major' },
        { flag: '🇲🇿', name: 'Mozambique', value: 'major' },
      ],
    },
    exports: {
      label: 'Global LNG Trade',
      value: '436.98 Mt',
      detail: 'Africa: 39.77 Mt (9.1%)',
    },
    health: {
      status: 'Healthy',
      weight: 'High (9/10)',
      confidence: '88%',
    },
  },

  production: {
    top3: {
      share: '~69%',
      combined: '~27.3 Mt',
      countries: ['Nigeria', 'Algeria', 'Angola'],
    },
    top6: {
      share: '~88%',
      combined: '~35 Mt',
      countries: ['Nigeria', 'Algeria', 'Angola', 'Mozambique', 'Equatorial Guinea', 'Mauritania/Senegal'],
    },
    ranking: [
      { rank: 1, country: 'Nigeria', flag: '🇳🇬', production: '14.78 Mt', productionNum: 14.78, share: '37.2%' },
      { rank: 2, country: 'Algeria', flag: '🇩🇿', production: '~8.0 Mt', productionNum: 8, share: '20%' },
      { rank: 3, country: 'Angola', flag: '🇦🇴', production: '~4.8 Mt', productionNum: 4.8, share: '12%' },
      { rank: 4, country: 'Mozambique', flag: '🇲🇿', production: '~3.6 Mt', productionNum: 3.6, share: '9%' },
      { rank: 5, country: 'Equatorial Guinea', flag: '🇬🇶', production: '~2.9 Mt', productionNum: 2.9, share: '7%' },
    ],
  },

  consumers: [
    { country: 'China', flag: '🇨🇳', value: 'largest importer', valueNum: 10, share: '1' },
    { country: 'Japan', flag: '🇯🇵', value: 'legacy buyer', valueNum: 7, share: '2' },
    { country: 'South Korea', flag: '🇰🇷', value: 'major buyer', valueNum: 6, share: '3' },
    { country: 'Europe', flag: '🇪🇺', value: 'structurally elevated', valueNum: 5, share: '4' },
    { country: 'India', flag: '🇮🇳', value: 'price-sensitive', valueNum: 3, share: '5' },
  ],

  exporters: [
    { country: 'Nigeria', flag: '🇳🇬', value: '14.78 Mt', valueNum: 14.78, share: '37.2%' },
    { country: 'Algeria', flag: '🇩🇿', value: '~8.0 Mt', valueNum: 8, share: '20%' },
    { country: 'Angola', flag: '🇦🇴', value: '~4.8 Mt', valueNum: 4.8, share: '12%' },
    { country: 'Mozambique', flag: '🇲🇿', value: '~3.6 Mt', valueNum: 3.6, share: '9%' },
    { country: 'Equatorial Guinea', flag: '🇬🇶', value: '~2.9 Mt', valueNum: 2.9, share: '7%' },
  ],

  importers: [
    { country: 'Europe', flag: '🇪🇺', value: 'dominant', valueNum: 10, share: '1' },
    { country: 'China', flag: '🇨🇳', value: 'growing', valueNum: 6, share: '2' },
    { country: 'India', flag: '🇮🇳', value: 'spot buyer', valueNum: 4, share: '3' },
    { country: 'Japan', flag: '🇯🇵', value: 'legacy', valueNum: 3, share: '4' },
    { country: 'South Korea', flag: '🇰🇷', value: 'legacy', valueNum: 3, share: '5' },
  ],

  price: {
    benchmarks: ['JKM', 'TTF', 'Henry Hub', 'JCC'],
    drivers: [
      'Liquefaction capacity outages', 'Middle East geopolitical risk',
      'European storage levels & winter demand', 'Asian spot buying intensity',
      'New capacity additions', 'Shipping/freight costs', 'Contract structure',
    ],
  },

  dna: {
    description:
      'Natural gas is a fast-growing traded fossil fuel and transition energy. LNG is produced by liquefying gas for transport, with African supply concentrated in Nigeria (37% of continental exports) and poised for major expansion via Mozambique, Mauritania/Senegal and Algeria.',
    qualityExamples: [],
    africanGrades: [],
    benchmarks: ['JKM', 'TTF', 'Henry Hub', 'JCC'],
    outputs: ['Liquefied natural gas (LNG)', 'Power generation', 'Industrial heat', 'Fertilizer/ammonia feedstock', 'Petrochemical feedstock', 'Domestic gas'],
    applications: [
      'Power generation', 'Coal-to-gas switching', 'European energy security',
      'Industrial heat & feedstock', 'Data centre electricity demand', 'Winter heating',
      'Emerging-market grid expansion',
    ],
    transformation: ['Gas Field', 'Gathering/Processing', 'Liquefaction Terminal', 'LNG Carrier', 'Regasification Terminal', 'End Market'],
    identitySignals: [
      { label: 'Primary Industry', value: 'Energy' },
      { label: 'Primary Value Chain', value: 'Upstream → Liquefaction → Shipping → Regasification → Power/Industrial' },
      { label: 'Primary Benchmarks', value: 'JKM / TTF / Henry Hub' },
      { label: 'Primary Commercial Unit', value: 'MMBtu / Mtpa' },
      { label: 'Strategic Advantage', value: 'Chokepoint-bypass geography (no Suez/Hormuz transit)' },
      { label: 'Economic Role in Africa', value: 'Export revenue + fiscal revenue + flaring reduction + domestic energy access' },
    ],
  },

  origin: {
    reserves: {
      total: '>620 Tcf',
      globalShare: '~7%',
      largest: 'Nigeria (>200 Tcf)',
      concentration: 'Nigeria, Algeria, Mozambique',
    },
    topReserves: [
      { rank: 1, country: 'Nigeria', flag: '🇳🇬', production: '>200 Tcf', productionNum: 200, share: '' },
      { rank: 2, country: 'Algeria', flag: '🇩🇿', production: 'major', productionNum: 60, share: '' },
      { rank: 3, country: 'Mozambique', flag: '🇲🇿', production: 'major', productionNum: 50, share: '' },
    ],
    snapshot: {
      production: '39.77 Mt',
      annual: 'LNG exports',
      global: '436.98 Mt',
      share: '~9.1%',
    },
    basins: [
      { id: 'GEO-ENE-GAS-NGD-001', name: 'Niger Delta', country: 'Nigeria', environment: 'Onshore • Offshore', grades: [] },
      { id: 'GEO-ENE-GAS-ROV-001', name: 'Rovuma Basin', country: 'Mozambique', environment: 'Offshore', grades: [] },
      { id: 'GEO-ENE-GAS-GTA-001', name: 'Greater Tortue Ahmeyim', country: 'Mauritania • Senegal', environment: 'Offshore', grades: [] },
    ],
    environment: {
      onshore: ['Niger Delta', 'Algerian fields'],
      offshore: ['Rovuma Basin', 'Greater Tortue Ahmeyim', 'West Africa offshore'],
      deepwater: ['Mozambique', 'West Africa'],
    },
    infrastructure: {
      extraction: ['Gas fields', 'Gathering systems'],
      midstream: ['Processing plants', 'Liquefaction terminals'],
      export: ['LNG carriers', 'Export terminals'],
      processing: ['Regasification terminals (buyer-side)'],
    },
    flow: ['Gas Field', 'Gathering/Processing', 'Liquefaction Terminal', 'Storage', 'LNG Carrier', 'Regasification Terminal', 'End Market'],
    drivers: [
      'New liquefaction capacity', 'Project financing availability',
      'European diversification demand', 'Chokepoint-bypass geography',
    ],
    constraints: [
      'Long project timelines', 'Security risk (Cabo Delgado)',
      'Capital intensity ($20–30B mega-projects)', 'Long-term European demand uncertainty',
    ],
    opportunities: [
      'New capacity commissioning (Mozambique, Rovuma)', 'Mauritania/Senegal Phase 2',
      'Algeria capacity doubling', 'FLNG technology for stranded gas',
      'Domestic gas allocation',
    ],
  },

  connectedEntities: [
    { name: 'Nigeria', flag: '🇳🇬', count: 5, kind: 'Origin' },
    { name: 'Algeria', flag: '🇩🇿', count: 4, kind: 'Origin' },
    { name: 'Mozambique', flag: '🇲🇿', count: 4, kind: 'Origin' },
    { name: 'Europe', flag: '🇪🇺', count: 4, kind: 'Market' },
    { name: 'Angola', flag: '🇦🇴', count: 3, kind: 'Origin' },
    { name: 'China', flag: '🇨🇳', count: 2, kind: 'Market' },
    { name: 'NLNG Bonny Island', count: 3, kind: 'Infrastructure' },
    { name: 'TotalEnergies', count: 2, kind: 'Corporation' },
    { name: 'Eni', count: 2, kind: 'Corporation' },
    { name: 'JKM', count: 2, kind: 'Benchmark' },
  ],

  news: [
    {
      title: 'Global LNG trade hits record 436.98 Mt in 2025',
      summary: 'Global LNG trade reached an all-time high in 2025 (+6.3% YoY), with Africa contributing a growing ~9.1% share.',
      date: '2025',
      impact: 'high',
    },
    {
      title: 'Mauritania and Senegal become LNG exporters',
      summary: 'The jointly-developed offshore Greater Tortue Ahmeyim field delivered first cargo in April 2025 — a template for shared cross-border gas development.',
      date: '2025',
      impact: 'medium',
    },
    {
      title: 'Mozambique LNG restarts after 5-year suspension',
      summary: 'The TotalEnergies-led Mozambique LNG project restarted in 2025 after security-driven suspension, targeting first production by 2029.',
      date: '2025',
      impact: 'medium',
    },
  ],
};