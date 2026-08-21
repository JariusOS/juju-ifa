import type { Commodity } from './types';

export const citrus: Commodity = {
  id: 'COM-AGR-CIT-016',
  nodeTags: [],
  slug: 'citrus',
  name: 'Citrus Fruits (Oranges, Mandarins, Grapefruit, Lemons & Limes)',
  status: 'Verified',
  nodeType: 'comNODE: agricultural',
  nodeClass: 'Fresh Fruit / Horticultural Export / Perishable Agro-Commodity',
  weight: 7,
  weightLabel: 'Significant',
  confidence: 90,
  confidenceLabel: 'High',
  hsCode: 'HS 0805',
  fingerprint:
    "One of the very few commodities where two African nations simultaneously hold the #1 and #2 global export positions — South Africa as the world's largest citrus exporter overall, and Egypt as the world's largest orange exporter for six consecutive years.",
  tags: ['#citrus', '#agricultural', '#horticulture', '#fresh-fruit', '#perishable', '#SouthAfrica', '#Egypt', '#Morocco'],
  rankLabel: '#16 Africa Export',
  globalValue: '~$10B (African citrus export value modeled)',
  africaExportValue: 'South Africa 203.4M cartons (3.05Mt); Egypt >2.2Mt oranges',
  africaShare: 'South Africa #1 global citrus exporter; Egypt #1 global orange exporter (6 years running)',
  referencePrice: 'No unified futures benchmark — carton/tonnage contracts by variety, season, destination',
  referencePriceDetail: 'Pricing varies by variety, grade, and destination contract',
  yoyPrice: 'South Africa +22% volume (2025 season)',
  followers: '',
  bookmarks: '',

  snapshot: {
    globalMarketValue: 'Not consistently aggregated as single figure — citrus trades across multiple distinct sub-categories',
    globalExportValue: 'South Africa world #1 citrus exporter; Egypt world #1 orange exporter',
    referencePrice: 'No unified global futures benchmark — carton/tonnage contract pricing by variety, season, destination',
    globalProduction: 'Brazil, China, EU, Mexico, Egypt lead in oranges; South Africa ranks 8th in production but 1st in exports',
    africanProduction: 'South Africa 3.05Mt citrus (2025); Egypt >2.2Mt citrus (2025)',
    africaProductionShare: 'South Africa: #1 citrus exporter globally; Egypt: #1 orange exporter (6 consecutive years)',
    strategicRole:
      'One of only a small number of commodities where African nations hold outright global export leadership — built on compliance and quality investment rather than resource extraction.',
    africanExportValue: 'South Africa: 54% of national fruit exports, 17% of agricultural exports; Egypt: citrus = largest share of $11.5B total agricultural exports',
    africanShareGlobalExports: 'South Africa world #1 by volume; Egypt world #1 oranges',
    africanReserves: 'N/A (perennial tree crop)',
    africanReserveValue: '$0 (agricultural)',
    exportRegions: ['Southern Africa (South Africa)', 'North Africa (Egypt)', 'Secondary: Eswatini, Botswana, Morocco'],
    primaryMarkets: ['Europe (36% of SA orange exports)', 'Middle East (21%)', 'Far East/Asia (11%)', 'Russia (10%)', 'North America (9%)'],
  },

  summaryGrid: {
    reserves: {
      value: 'N/A',
      unit: 'perennial crop',
      yoy: 'Active growth',
      holders: [
        { flag: '🇿🇦', name: 'South Africa', value: '3.05Mt (2025)' },
        { flag: '🇪🇬', name: 'Egypt', value: '>2.2Mt oranges (2025)' },
        { flag: '🇲🇦', name: 'Morocco', value: 'Secondary' },
      ],
    },
    exports: {
      label: 'African Export Value',
      value: '>5.2Mt combined',
      detail: 'SA + Egypt = #1 and #2 globally',
    },
    health: {
      status: 'Strong',
      weight: '7/10',
      confidence: '90%',
    },
  },

  production: {
    top3: {
      share: '~80%',
      combined: 'South Africa + Egypt + Morocco',
      countries: ['South Africa', 'Egypt', 'Morocco'],
    },
    top6: {
      share: 'World #1 and #2',
      combined: 'SA 3.05Mt + Egypt >2.2Mt',
      countries: ['South Africa', 'Egypt', 'Morocco', 'Eswatini', 'Botswana'],
    },
    ranking: [
      { rank: 1, country: 'South Africa', flag: '🇿🇦', production: '203.4M cartons (3.05Mt)', productionNum: 3.05, share: 'World #1 citrus exporter' },
      { rank: 2, country: 'Egypt', flag: '🇪🇬', production: '>2.2Mt citrus', productionNum: 2.2, share: 'World #1 orange exporter (6 yrs)' },
      { rank: 3, country: 'Morocco', flag: '🇲🇦', production: 'Not specified', productionNum: 0, share: '3rd-largest US tangerine source' },
      { rank: 4, country: 'Eswatini', flag: '🇸🇿', production: 'Minor supplementary', productionNum: 0, share: '' },
      { rank: 5, country: 'Botswana', flag: '🇧🇼', production: 'Minor supplementary', productionNum: 0, share: '' },
    ],
  },

  consumers: [
    { country: 'Europe', flag: '🇪🇺', value: '36% of SA orange exports', valueNum: 10, share: '1' },
    { country: 'Middle East', flag: '🌍', value: '21% of SA orange exports', valueNum: 6, share: '2' },
    { country: 'Far East / Asia', flag: '🌏', value: '11% of SA orange exports', valueNum: 3, share: '3' },
    { country: 'Russia', flag: '🇷🇺', value: '10% of SA orange exports', valueNum: 2.5, share: '4' },
    { country: 'North America', flag: '🇺🇸', value: '9% (growing)', valueNum: 2, share: '5' },
  ],

  exporters: [
    { country: 'South Africa', flag: '🇿🇦', value: '203.4M cartons (3.05Mt), +22% YoY', valueNum: 3050000, share: 'World #1 citrus exporter' },
    { country: 'Egypt', flag: '🇪🇬', value: '>2.2Mt citrus, 6th year #1 orange', valueNum: 2200000, share: 'World #1 orange exporter' },
    { country: 'Morocco', flag: '🇲🇦', value: '3rd-largest US tangerine source', valueNum: 0, share: '' },
    { country: 'Eswatini', flag: '🇸🇿', value: 'Minor, supplementary regional supply', valueNum: 0, share: '' },
    { country: 'Botswana', flag: '🇧🇼', value: 'Minor, supplementary regional supply', valueNum: 0, share: '' },
  ],

  importers: [
    { country: 'Europe (EU)', flag: '🇪🇺', value: 'Dominant SA destination (36%)', valueNum: 10, share: '1' },
    { country: 'Middle East', flag: '🌍', value: 'Second-largest SA destination (21%)', valueNum: 6, share: '2' },
    { country: 'USA', flag: '🇺🇸', value: 'Growing but volatile (tariff episode)', valueNum: 4, share: '3' },
    { country: 'Russia', flag: '🇷🇺', value: '10% of SA orange exports', valueNum: 2.5, share: '4' },
    { country: 'China', flag: '🇨🇳', value: 'CGA targeting improved access', valueNum: 2, share: '5' },
  ],

  price: {
    benchmarks: [
      'No unified futures benchmark',
      'Carton/tonnage contracts by variety, grade, season, destination',
      'Fresh vs processed (juice/concentrate) differential',
    ],
    drivers: [
      'Weather conditions in growing regions',
      'US and EU trade policy (tariffs, exemptions)',
      'Competing-origin supply dynamics',
      'New orchard maturation (multi-year growth driver)',
      'Port and logistics efficiency (Transnet 2025 investment)',
      'Input cost inflation',
    ],
  },

  dna: {
    description:
      'Citrus fruits encompass oranges, soft citrus/mandarins, grapefruit, lemons and limes — a high-value, quality- and compliance-sensitive fresh horticultural export requiring sophisticated cold-chain logistics, phytosanitary compliance, and market-access diplomacy. South Africa and Egypt hold rare dual global export leadership positions, built on compliance and quality investment rather than resource extraction.',
    qualityExamples: [],
    africanGrades: ['Navel oranges', 'Valencia oranges', 'Soft citrus/Mandarins', 'Grapefruit', 'Lemons', 'Limes'],
    benchmarks: ['No unified futures benchmark', 'Carton/tonnage contract pricing', 'CGA season reports'],
    outputs: ['Fresh fruit (exported)', 'Juice and concentrate', 'Essential oils', 'Dried peel'],
    applications: ['Fresh consumption', 'Juice manufacturing', 'Flavor house ingredients', 'Pharmaceutical applications', 'Aromatherapy and cosmetics'],
    transformation: [
      'Orchard (multi-year maturation)',
      'Harvest',
      'Packhouse/grading',
      'Cold-chain storage and transport',
      'Port',
      'Refrigerated vessel',
      'Destination market',
    ],
    identitySignals: [
      { label: 'Primary Industry', value: 'Agricultural / Horticultural' },
      { label: 'Primary Value Chain', value: 'Orchard → Harvest → Packhouse → Cold Chain → Port → Destination Market' },
      { label: 'Primary Differentiators', value: 'Dual African global export leadership + cold-chain/perishable compliance' },
      { label: 'Primary Benchmarks', value: 'No unified futures — carton/tonnage contracts' },
      { label: 'Primary Commercial Unit', value: '15kg carton / tonne' },
      { label: 'Economic Role in Africa', value: 'Export revenue + rural employment + a success model built on quality/compliance' },
    ],
  },

  origin: {
    reserves: {
      total: 'N/A (perennial tree crop)',
      globalShare: 'SA #1 citrus exporter; Egypt #1 orange exporter',
      largest: 'South Africa 3.05Mt (2025 season)',
      concentration: 'Southern + North Africa',
    },
    topReserves: [
      { rank: 1, country: 'South Africa', flag: '🇿🇦', production: '3.05Mt (2025)', productionNum: 3.05, share: 'World #1 citrus exporter' },
      { rank: 2, country: 'Egypt', flag: '🇪🇬', production: '>2.2Mt (2025)', productionNum: 2.2, share: 'World #1 orange exporter' },
    ],
    snapshot: {
      production: 'SA 3.05Mt + Egypt >2.2Mt',
      annual: 'Combined African leaders',
      global: 'Dominant in citrus exports',
      share: '#1 and #2 globally',
    },
    basins: [
      { id: 'GEO-AGR-CIT-SA-001', name: 'South African Growing Regions', country: 'Western Cape, Eastern Cape, Limpopo, Mpumalanga', environment: 'Onshore irrigated', grades: [] },
      { id: 'GEO-AGR-CIT-EG-002', name: 'Nile Delta Citrus Belt', country: 'Egypt', environment: 'Onshore irrigated', grades: [] },
    ],
    environment: {
      onshore: ['South African growing regions (Western Cape, Eastern Cape, Limpopo, Mpumalanga)', 'Nile Delta (Egypt)', 'Sundays River Valley'],
      offshore: [],
      deepwater: [],
    },
    infrastructure: {
      extraction: ['Orchards (multi-year maturation cycle)', 'Smallholder and commercial farms'],
      midstream: ['Packhouses', 'Grading facilities', 'Cold-chain storage'],
      export: ['South African ports (Transnet 2025 investment)', 'Egyptian port network'],
      processing: ['Juice and concentrate processing', 'Essential oil extraction'],
    },
    flow: ['Orchard', 'Harvest', 'Packhouse/Grading', 'Cold Chain', 'Port', 'Refrigerated Vessel', 'Destination Market'],
    drivers: [
      'Young-orchard maturation (SA 2032 target: 260M cartons)',
      'Egypt cultivation area expansion',
      'Transnet port investment',
      'Growing Middle Eastern/Asian demand',
      'Counter-seasonal positioning',
    ],
    constraints: [
      'US tariff volatility (30% imposed Aug 2025, partial exemption)',
      'EU trade deal risk flagged by SA industry',
      'Weather variability (drought, floods)',
      'Phytosanitary compliance costs',
      'Input cost inflation',
    ],
    opportunities: [
      'SA 2032 target (260M cartons, +100K jobs)',
      'US tariff exemption extension to mandarins',
      'Improved access in China, India, Japan, S Korea',
      'Egypt processing pivot as value-capture template',
      'Cold-chain expansion',
    ],
  },

  connectedEntities: [
    { name: 'South Africa', flag: '🇿🇦', count: 5, kind: 'Origin' },
    { name: 'Egypt', flag: '🇪🇬', count: 5, kind: 'Origin' },
    { name: 'Europe', flag: '🇪🇺', count: 3, kind: 'Market' },
    { name: 'USA', flag: '🇺🇸', count: 3, kind: 'Market' },
    { name: "Citrus Growers' Association of Southern Africa", count: 3, kind: 'Institution' },
    { name: 'Transnet', count: 2, kind: 'Corporation' },
    { name: 'USDA Foreign Agricultural Service', count: 2, kind: 'Institution' },
  ],

  news: [
    {
      title: 'South Africa records best-ever citrus season',
      summary: '203.4M cartons (3.05Mt) packed, +22% over 2024, exceeding 3Mt for first time.',
      date: '2025',
      impact: 'high',
    },
    {
      title: 'US imposes and partially reverses tariff on SA citrus',
      summary: '30% tariff in August 2025, orange-specific exemption granted for 2026, mandarins still excluded.',
      date: '2025/26',
      impact: 'high',
    },
    {
      title: 'Egypt shifts toward higher-value processing',
      summary: 'Deliberate pivot reduced fresh EU exports by 30%, creating market share opportunity for SA.',
      date: '2025',
      impact: 'medium',
    },
  ],

  flags: [
    'US tariff exemption renewal risk for 2026 — could be "far more severe if no agreement is reached" per CGA.',
    'New EU trade deal flagged as potential "major blow" to SA citrus and wine.',
    'Egypt processing pivot reduced EU volumes by 30%, directly captured by SA competitors.',
  ],
};
