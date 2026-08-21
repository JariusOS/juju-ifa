import type { Commodity } from './types';

export const diamonds: Commodity = {
  id: 'COM-PME-DIA-007',
    nodeTags: [],
  slug: 'diamonds',
  name: 'Diamonds',
  status: 'Verified',
  nodeType: 'comNODE: precious minerals',
  nodeClass: 'Gemstone / Precious Mineral / Industrial-Gem Hybrid',
  weight: 8,
  weightLabel: 'Critical, structurally declining',
  confidence: 87,
  confidenceLabel: 'High',
  hsCode: '—',
  fingerprint:
    'Primary source of natural gem-quality diamonds for jewelry markets — facing the most significant structural demand disruption of any commodity in this catalog due to lab-grown diamond substitution. Extreme national concentration in Botswana (~80% of export earnings, ~30% of GDP).',
  tags: ['#diamonds', '#precious-minerals', '#gemstones', '#Botswana', '#lab-grown', '#KimberleyProcess', '#DeBeers'],
  rankLabel: '#1 Africa Gemstone',
  globalValue: '$9.2B',
  africaExportValue: '$6–7B',
  africaShare: '~60–65%',
  referencePrice: '$93.43/carat',
  referencePriceDetail: 'Global average, 2025',
  yoyPrice: '-19% (Q1 2026)',
  followers: '900',
  bookmarks: '520',

  snapshot: {
    globalMarketValue: '~$9.2B (rough production value, 2025, KP)',
    globalExportValue: 'Rough trade ~ production value',
    referencePrice: '~$93.43/carat (global average, 2025)',
    globalProduction: '98.8M carats (2025, -8.4% YoY)',
    africanProduction: '~55–65M carats',
    africaProductionShare: '~55–65% of volume',
    strategicRole:
      'Primary source of natural gem-quality diamonds; facing the most significant structural demand disruption in the catalog via lab-grown diamond substitution.',
    africanExportValue: '~$6–7B (modeled)',
    africanShareGlobalExports: '~60–65%',
    africanReserves: 'Concentrated (Botswana, South Africa, Namibia, Angola, DRC)',
    africanReserveValue: '~$180B',
    exportRegions: ['Southern Africa', 'Central Africa', 'West Africa'],
    primaryMarkets: ['UAE (Dubai)', 'Belgium (Antwerp)', 'India', 'Hong Kong', 'Israel'],
  },

  summaryGrid: {
    reserves: {
      value: '~$6–7B',
      unit: 'African export value',
      yoy: 'Declining',
      holders: [
        { flag: '🇧🇼', name: 'Botswana', value: '~21M carats' },
        { flag: '🇦🇴', name: 'Angola', value: '~14–15M carats' },
        { flag: '🇿🇦', name: 'South Africa', value: '~5.3M carats' },
      ],
    },
    exports: {
      label: 'Global Production Value',
      value: '$9.23B',
      detail: 'Africa: ~60–65%',
    },
    health: {
      status: 'Healthy',
      weight: 'High (8/10)',
      confidence: '87%',
    },
  },

  production: {
    top3: {
      share: '~95%',
      combined: 'Top 5 Africa',
      countries: ['Botswana', 'Angola', 'DRC', 'South Africa', 'Namibia'],
    },
    top6: {
      share: '~95% African output',
      combined: 'Top 5 + Zimbabwe',
      countries: ['Botswana', 'Angola', 'DRC', 'South Africa', 'Zimbabwe', 'Namibia'],
    },
    ranking: [
      { rank: 1, country: 'Botswana', flag: '🇧🇼', production: '~21M carats', productionNum: 21, share: '$117/carat' },
      { rank: 2, country: 'Angola', flag: '🇦🇴', production: '~14M carats', productionNum: 14, share: '$100/carat' },
      { rank: 3, country: 'DRC', flag: '🇨🇩', production: '~9.8M carats', productionNum: 9.8, share: '$10.83/carat' },
      { rank: 4, country: 'South Africa', flag: '🇿🇦', production: '~5.3M carats', productionNum: 5.3, share: '$124/carat' },
      { rank: 5, country: 'Namibia', flag: '🇳🇦', production: '~2.3M carats', productionNum: 2.3, share: '$395/carat' },
    ],
  },

  consumers: [
    { country: 'India', flag: '🇮🇳', value: '$11.07B imports', valueNum: 11, share: '1' },
    { country: 'UAE (Dubai)', flag: '🇦🇪', value: '27% rough exports', valueNum: 8, share: '2' },
    { country: 'Belgium (Antwerp)', flag: '🇧🇪', value: '22.7% rough exports', valueNum: 7, share: '3' },
    { country: 'Hong Kong', flag: '🇭🇰', value: 'major buyer', valueNum: 4, share: '4' },
    { country: 'USA', flag: '🇺🇸', value: 'largest retail market', valueNum: 5, share: '5' },
  ],

  exporters: [
    { country: 'Botswana', flag: '🇧🇼', value: '~21M carats', valueNum: 21, share: '#1 historically' },
    { country: 'Angola', flag: '🇦🇴', value: '~14M carats', valueNum: 14, share: '#1 by value 2024' },
    { country: 'South Africa', flag: '🇿🇦', value: '~5.3M carats', valueNum: 5.3, share: 'declining' },
    { country: 'DRC', flag: '🇨🇩', value: '~9.8M carats', valueNum: 9.8, share: 'artisanal' },
    { country: 'Namibia', flag: '🇳🇦', value: '~2.3M carats', valueNum: 2.3, share: 'highest $/carat' },
  ],

  importers: [
    { country: 'UAE', flag: '🇦🇪', value: 'dominant hub', valueNum: 10, share: '1' },
    { country: 'Belgium', flag: '🇧🇪', value: 'Antwerp hub', valueNum: 7, share: '2' },
    { country: 'Hong Kong', flag: '🇭🇰', value: 'major destination', valueNum: 5, share: '3' },
    { country: 'India', flag: '🇮🇳', value: 'cutting/polishing', valueNum: 9, share: '4' },
  ],

  price: {
    benchmarks: ['Kimberley Process', 'De Beers sights', 'ALROSA contracts', 'Tenders'],
    drivers: [
      'Lab-grown diamond price competition (structural)',
      'Chinese luxury demand softness', 'De Beers supply discipline',
      'Younger-generation preference shifts', 'Sanctions on Russian-origin stones',
      'Sovereign credit implications (Botswana)',
    ],
  },

  dna: {
    description:
      'Diamonds are precious gemstones whose value-per-carat varies enormously across producers — from ~$10/carat (DRC) to ~$395/carat (Namibia). The sector faces a structural substitute-product threat from lab-grown diamonds, unique among the catalog commodities.',
    qualityExamples: [],
    africanGrades: ['Gem-quality', 'Industrial-grade', 'Marine/alluvial (Namibia)', 'Large-stone (Lesotho)'],
    benchmarks: ['Kimberley Process', 'Producer sales channels'],
    outputs: ['Rough diamonds', 'Polished diamonds', 'Jewelry', 'Industrial abrasives'],
    applications: [
      'Bridal/engagement jewelry', 'Luxury spending', 'Industrial cutting/abrasive',
      'Provenance/certified natural stones',
    ],
    transformation: ['Mine', 'Sorting/Grading (Gaborone)', 'Rough Export', 'Cutting/Polishing (India)', 'Trading Hub (UAE/Belgium)', 'Retail Market'],
    identitySignals: [
      { label: 'Primary Industry', value: 'Precious Minerals / Gemstones' },
      { label: 'Primary Value Chain', value: 'Mine → Sorting → Cutting (India) → Trading (UAE/Belgium) → Retail' },
      { label: 'Primary Differentiators', value: 'Lab-grown substitution threat (structural)' },
      { label: 'Primary Benchmarks', value: 'Kimberley Process data' },
      { label: 'Primary Commercial Unit', value: 'Carat' },
      { label: 'Economic Role in Africa', value: 'Sovereign wealth (Botswana) + fiscal revenue + informal-sector livelihoods' },
    ],
  },

  origin: {
    reserves: {
      total: 'Concentrated (not consistently reported)',
      globalShare: '~60–65% of volume',
      largest: 'Botswana (Jwaneng, Orapa)',
      concentration: 'Southern + Central Africa',
    },
    topReserves: [
      { rank: 1, country: 'Botswana', flag: '🇧🇼', production: '~21M carats', productionNum: 21, share: '' },
      { rank: 2, country: 'Angola', flag: '🇦🇴', production: '~14M carats', productionNum: 14, share: '' },
      { rank: 3, country: 'DRC', flag: '🇨🇩', production: '~9.8M carats', productionNum: 9.8, share: '' },
    ],
    snapshot: {
      production: '~55–65M carats',
      annual: 'African output',
      global: '98.8M carats',
      share: '~55–65%',
    },
    basins: [
      { id: 'GEO-PME-DIA-JWN-001', name: 'Jwaneng Mine', country: 'Botswana', environment: 'Open-pit', grades: [] },
      { id: 'GEO-PME-DIA-ORP-001', name: 'Orapa Mine', country: 'Botswana', environment: 'Open-pit', grades: [] },
      { id: 'GEO-PME-DIA-CAT-001', name: 'Catoca Mine', country: 'Angola', environment: 'Kimberlite', grades: [] },
    ],
    environment: {
      onshore: ['Jwaneng', 'Orapa', 'Catoca', 'Luele', 'Venetia', 'Chiadzwa'],
      offshore: ['Namibia marine deposits'],
      deepwater: [],
    },
    infrastructure: {
      extraction: ['Kimberlite mines', 'Artisanal operations'],
      midstream: ['Gaborone sorting facility (~40M carats/yr)'],
      export: ['Trading hubs (UAE, Belgium)'],
      processing: ['Cutting/polishing (India)'],
    },
    flow: ['Mine', 'Sorting/Grading', 'Rough Export', 'Cutting/Polishing', 'Trading Hub', 'Retail Market'],
    drivers: [
      'De Beers output discipline', 'Angola counter-cyclical expansion',
      'Sovereign ownership consolidation',
    ],
    constraints: [
      'Lab-grown substitution (structural)', 'Chinese luxury softness',
      'Value-capture leakage to India/Belgium', 'DRC informal-sector dependency',
    ],
    opportunities: [
      'Botswana–De Beers sovereign ownership', 'Value-per-carat optimization',
      'Provenance/certification differentiation', 'Namibian marine deposits',
    ],
  },

  connectedEntities: [
    { name: 'Botswana', flag: '🇧🇼', count: 6, kind: 'Origin' },
    { name: 'Angola', flag: '🇦🇴', count: 5, kind: 'Origin' },
    { name: 'South Africa', flag: '🇿🇦', count: 4, kind: 'Origin' },
    { name: 'Namibia', flag: '🇳🇦', count: 3, kind: 'Origin' },
    { name: 'India', flag: '🇮🇳', count: 3, kind: 'Market' },
    { name: 'UAE (Dubai)', flag: '🇦🇪', count: 3, kind: 'Market' },
    { name: 'Debswana', count: 3, kind: 'Institution' },
    { name: 'De Beers', count: 4, kind: 'Corporation' },
    { name: 'Kimberley Process', count: 3, kind: 'Institution' },
    { name: 'Gaborone sorting facility', count: 2, kind: 'Infrastructure' },
  ],

  news: [
    {
      title: 'Botswana loses #1 producer-by-value crown to Angola',
      summary: 'Angola overtook Botswana as Africa top diamond producer by value in 2024 — the first such shift in 20 years.',
      date: '2024',
      impact: 'high',
    },
    {
      title: 'Botswana sovereign credit downgraded',
      summary: 'S&P cut Botswana credit rating in direct response to diamond market weakness — a rare commodity-to-sovereign-risk transmission.',
      date: '2026',
      impact: 'high',
    },
    {
      title: 'De Beers ownership transition in play',
      summary: 'Anglo American selected Global Diamond Consortium as preferred bidder by July 2026, with Botswana holding right-of-first-refusal and Q4 2026 targeted close.',
      date: '2026',
      impact: 'high',
    },
  ],
};