import type { Commodity } from './types';

export const coal: Commodity = {
  id: 'COM-ENE-COA-012',
    nodeTags: [],
  slug: 'coal',
  name: 'Coal',
  status: 'Verified',
  nodeType: 'comNODE: energy',
  nodeClass: 'Thermal/Coking Coal / Fossil Fuel / Steelmaking & Power Generation Input',
  weight: 7,
  weightLabel: 'Significant, declining',
  confidence: 90,
  confidenceLabel: 'High',
  hsCode: '—',
  fingerprint:
    'The most structurally challenged major energy commodity in the catalog — still essential for electricity generation and blast-furnace steelmaking (coking coal irreplaceable in BF-BOF), but facing sustained, policy-driven global demand decline. South Africa remains ~90%+ coal-dependent for domestic power.',
  tags: ['#coal', '#thermal-coal', '#coking-coal', '#fossil-fuel', '#SouthAfrica', '#energy-security', '#steel'],
  rankLabel: '#1 Africa Thermal Energy',
  globalValue: '$1.1–1.2T',
  africaExportValue: '~$6B',
  africaShare: '~2.5–2.7%',
  referencePrice: 'Newcastle ~$130/t',
  referencePriceDetail: 'Thermal, Aug 2026',
  yoyPrice: '-16% (SA revenue)',
  followers: '800',
  bookmarks: '430',

  snapshot: {
    globalMarketValue: '~$1.1–1.2T (modeled, ~9.1–9.2Bt)',
    globalExportValue: '~$140–150B (seaborne thermal, modeled)',
    referencePrice: 'Thermal (Newcastle) ~$130/t • Coking (PLV HCC) ~$225.50/t (Aug 2026)',
    globalProduction: '~9.1–9.2 billion tonnes (2025/26)',
    africanProduction: '~234–247 million tonnes (South Africa)',
    africaProductionShare: '~2.5–2.7%',
    strategicRole:
      'Essential for electricity generation and blast-furnace steelmaking (coking coal irreplaceable in BF-BOF, ~70% of crude steel); facing the first projected global production decline since the recent peak.',
    africanExportValue: '~$6B (South Africa, 2025 — $5.98B, down 16% YoY)',
    africanShareGlobalExports: '~4–5% (modeled)',
    africanReserves: '~35 billion tons (South Africa, ~173 years)',
    africanReserveValue: 'Multi-generational domestic runway',
    exportRegions: ['Southern Africa (South Africa dominant)', 'Mozambique (secondary)'],
    primaryMarkets: ['Europe', 'India', 'China', 'Other Asia'],
  },

  summaryGrid: {
    reserves: {
      value: '~35B t',
      unit: 'South African reserves',
      yoy: '~173 years',
      holders: [
        { flag: '🇿🇦', name: 'South Africa', value: '~234–247 Mt/yr' },
        { flag: '🇲🇿', name: 'Mozambique', value: '~15.9 Mt/yr' },
      ],
    },
    exports: {
      label: 'Global Production',
      value: '9.1 Bt',
      detail: 'First decline forecast 2026',
    },
    health: {
      status: 'Healthy',
      weight: 'Moderate (7/10)',
      confidence: '90%',
    },
  },

  production: {
    top3: {
      share: '~99%',
      combined: 'South Africa',
      countries: ['South Africa', 'Mozambique'],
    },
    top6: {
      share: 'SA + Mozambique',
      combined: 'Africa dominant',
      countries: ['South Africa', 'Mozambique'],
    },
    ranking: [
      { rank: 1, country: 'South Africa', flag: '🇿🇦', production: '~234–247 Mt', productionNum: 240, share: '>90% of Africa' },
      { rank: 2, country: 'Mozambique', flag: '🇲🇿', production: '~15.9 Mt', productionNum: 15.9, share: 'declining' },
    ],
  },

  consumers: [
    { country: 'China', flag: '🇨🇳', value: 'dominant importer', valueNum: 10, share: '1' },
    { country: 'India', flag: '🇮🇳', value: 'major, self-scaling', valueNum: 6, share: '2' },
    { country: 'Japan', flag: '🇯🇵', value: 'established', valueNum: 4, share: '3' },
    { country: 'South Korea', flag: '🇰🇷', value: 'established', valueNum: 4, share: '4' },
    { country: 'Europe', flag: '🇪🇺', value: 'counter-cyclical 2025', valueNum: 3, share: '5' },
  ],

  exporters: [
    { country: 'South Africa', flag: '🇿🇦', value: '71.86 Mt', valueNum: 71.86, share: '5th-largest' },
    { country: 'Mozambique', flag: '🇲🇿', value: '~15.9 Mt', valueNum: 15.9, share: 'coking coal' },
  ],

  importers: [
    { country: 'Europe', flag: '🇪🇺', value: '2025 growth', valueNum: 8, share: '1' },
    { country: 'India', flag: '🇮🇳', value: 'large-volume', valueNum: 7, share: '2' },
    { country: 'China', flag: '🇨🇳', value: 'established', valueNum: 5, share: '3' },
  ],

  price: {
    benchmarks: ['Newcastle 6000', 'API2 CIF ARA', 'Richards Bay FOB / globalCOAL RB', 'Qinhuangdao 5500', 'Australian PLV HCC'],
    drivers: [
      'Global demand trajectory (first decline 2026)', 'Chinese weather-driven electricity demand',
      'Indian domestic production growth', 'Oil price fuel-switching',
      'Indonesian supply disruptions', 'Chinese safety inspections',
      'EAF steelmaking adoption (coking)',
    ],
  },

  dna: {
    description:
      'Coal is a fossil fuel serving two structurally distinct markets — thermal (power generation) and coking (steelmaking, irreplaceable in BF-BOF). It is the only commodity in the catalog with a genuinely declining global demand trajectory, yet remains foundational to South Africa domestic electricity.',
    qualityExamples: [],
    africanGrades: ['Thermal coal', 'Coking (metallurgical) coal'],
    benchmarks: ['Newcastle 6000', 'API2 ARA', 'Richards Bay', 'PLV HCC'],
    outputs: ['Electricity', 'Coke (steelmaking)', 'Synthetic fuels (coal-to-liquids)'],
    applications: [
      'Electricity generation', 'Blast-furnace steelmaking (coking)', 'Industrial heat',
      'Coal-to-liquids (Sasol Secunda)',
    ],
    transformation: ['Mine (Mpumalanga)', 'Rail (Transnet)', 'Richards Bay Coal Terminal', 'Vessel', 'Global Buyer'],
    identitySignals: [
      { label: 'Primary Industry', value: 'Energy / Steelmaking' },
      { label: 'Primary Value Chain', value: 'Mine → Rail → Export Terminal → Power/Steel' },
      { label: 'Primary Differentiators', value: 'First commodity with declining global demand' },
      { label: 'Primary Benchmarks', value: 'Newcastle / API2 / Richards Bay / PLV HCC' },
      { label: 'Primary Commercial Unit', value: 'Tonne' },
      { label: 'Economic Role in Africa', value: 'Domestic energy security (dominant) + export revenue' },
    ],
  },

  origin: {
    reserves: {
      total: '~35 billion tons (SA)',
      globalShare: '~3.08%',
      largest: 'South Africa',
      concentration: 'South Africa + Mozambique',
    },
    topReserves: [
      { rank: 1, country: 'South Africa', flag: '🇿🇦', production: '~35B t', productionNum: 35, share: '~173 years' },
      { rank: 2, country: 'Mozambique', flag: '🇲🇿', production: '~15.9 Mt/yr', productionNum: 15.9, share: '' },
    ],
    snapshot: {
      production: '~234–247 Mt',
      annual: 'SA output',
      global: '~9.1 Bt',
      share: '~2.5–2.7%',
    },
    basins: [
      { id: 'GEO-ENE-COA-MPM-001', name: 'Mpumalanga coalfields', country: 'South Africa', environment: 'Onshore', grades: [] },
      { id: 'GEO-ENE-COA-GRO-001', name: 'Grootegeluk Mine', country: 'South Africa', environment: 'Onshore', grades: [] },
      { id: 'GEO-ENE-COA-WTB-001', name: 'Waterberg', country: 'South Africa', environment: 'Onshore', grades: [] },
    ],
    environment: {
      onshore: ['Mpumalanga', 'Waterberg', 'Grootegeluk'],
      offshore: [],
      deepwater: [],
    },
    infrastructure: {
      extraction: ['Grootegeluk', 'Khwezela', 'New Vaal', 'Wolvekrans'],
      midstream: ['Transnet Freight Rail'],
      export: ['Richards Bay Coal Terminal (91 Mt/yr nameplate)'],
      processing: ['Eskom power stations', 'Sasol Secunda'],
    },
    flow: ['Mine', 'Rail (Transnet)', 'Richards Bay Coal Terminal', 'Vessel', 'Global Buyer'],
    drivers: [
      'Transnet rail performance', 'Global production trends', 'Competing exporters',
      'European renewable variability (episodic demand)',
    ],
    constraints: [
      'Structural global demand decline', 'Rail capacity underperformance',
      'Domestic decommissioning targets (8GW by 2030)', 'Weaker global pricing',
    ],
    opportunities: [
      'Rail/logistics recovery', 'Opportunistic European demand capture',
      'Sasol coal-to-liquids demand floor',
    ],
  },

  connectedEntities: [
    { name: 'South Africa', flag: '🇿🇦', count: 6, kind: 'Origin' },
    { name: 'Richards Bay Coal Terminal', count: 4, kind: 'Infrastructure' },
    { name: 'Transnet Freight Rail', count: 3, kind: 'Infrastructure' },
    { name: 'Eskom', count: 3, kind: 'Institution' },
    { name: 'Europe', flag: '🇪🇺', count: 3, kind: 'Market' },
    { name: 'India', flag: '🇮🇳', count: 2, kind: 'Market' },
    { name: 'Mozambique', flag: '🇲🇿', count: 2, kind: 'Origin' },
    { name: 'Sasol Secunda', count: 3, kind: 'Infrastructure' },
    { name: 'Thungela Resources', count: 2, kind: 'Corporation' },
    { name: 'Exxaro Resources', count: 2, kind: 'Corporation' },
  ],

  news: [
    {
      title: '2026 projected as first global production decline',
      summary: 'Global coal production is forecast to decline 1.4% in 2026 to ~9.1Bt — the first annual decrease since the recent peak.',
      date: '2026',
      impact: 'high',
    },
    {
      title: 'SA coal export revenue falls 16% despite higher volume',
      summary: 'Export revenue fell to $5.98B in 2025 despite a 1.3% volume increase, reflecting weaker global prices.',
      date: '2025',
      impact: 'high',
    },
    {
      title: 'Transnet recovery opens rail to private operators',
      summary: 'Rule changes allowing private rail operators could unlock up to 1 million tonnes/year of additional export capacity over three years.',
      date: '2025–26',
      impact: 'medium',
    },
  ],
};