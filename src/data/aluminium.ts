import type { Commodity } from './types';

export const aluminium: Commodity = {
  id: 'COM-MET-ALU-017',
  nodeTags: [],
  slug: 'aluminium',
  name: 'Aluminium (Primary Smelted Metal)',
  status: 'Verified',
  nodeType: 'comNODE: base metals',
  nodeClass: 'Non-Ferrous Metal / Energy-Intensive Refined Metal / Downstream Bauxite Product',
  weight: 5,
  weightLabel: 'Modest',
  confidence: 85,
  confidenceLabel: 'High (global); Moderate (African-specific)',
  hsCode: 'HS 7601',
  fingerprint:
    'Africa\'s sharpest resource-to-refining gap: Guinea alone holds ~30% of global bauxite reserves, yet the entire African continent smelts only ~2% of the world\'s primary aluminium.',
  tags: ['#aluminium', '#base-metal', '#energy-intensive', '#bauxite-product', '#smelting', '#SouthAfrica', '#Mozambique', '#Egypt'],
  rankLabel: '#17 Africa Export',
  globalValue: '~$236B (73.78Mt × ~$3,200/t)',
  africaExportValue: '~$9–10B (all four African smelters combined)',
  africaShare: '~2% of global primary aluminium production',
  referencePrice: '~$3,200–3,335/tonne (LME cash, Aug 2026)',
  referencePriceDetail: 'Broke $3,000/t in early 2026; +39.94% YoY',
  yoyPrice: '+39.94% YoY (Jan 2026 peak)',
  followers: '',
  bookmarks: '',

  snapshot: {
    globalMarketValue: '~$236B (primary aluminium alone)',
    globalExportValue: 'Africa ~2% of global output; modest relative to bauxite endowment',
    referencePrice: 'LME cash ~$3,200–3,335/tonne (August 2026)',
    globalProduction: '~73.78M tonnes (2025, +1.05% YoY — five-year low growth rate)',
    africanProduction: '~1.5–1.6M tonnes (Hillside ~720kt, Mozal ~580kt, Egyptalum ~260–320kt, VALCO smaller)',
    africaProductionShare: '~2% of global production',
    strategicRole:
      'The world\'s most-produced non-ferrous metal — and the clearest illustration in this catalog of the gap between owning raw resources (bauxite) and capturing refined value (aluminium).',
    africanExportValue: 'Modest in aggregate; Mozal = ~30% of Mozambique\'s official national exports',
    africanShareGlobalExports: '~2%',
    africanReserves: 'N/A (aluminium is smelted, not mined — see bauxite for reserve data)',
    africanReserveValue: '$0 (smelted; see Bauxite)',
    exportRegions: ['Southern Africa (South Africa — Hillside)', 'Southeast Africa (Mozambique — Mozal)', 'North Africa (Egypt — Egyptalum)', 'West Africa (Ghana — VALCO)'],
    primaryMarkets: ['International markets (export-oriented smelters)'],
  },

  summaryGrid: {
    reserves: {
      value: 'N/A (smelted metal)',
      unit: 'tonnes/year capacity',
      yoy: 'Static',
      holders: [
        { flag: '🇿🇦', name: 'South Africa', value: '~720kt (Hillside)' },
        { flag: '🇲🇿', name: 'Mozambique', value: '~580kt (Mozal)' },
        { flag: '🇪🇬', name: 'Egypt', value: '~260–320kt (Egyptalum)' },
      ],
    },
    exports: {
      label: 'African Export Value',
      value: '~$9–10B',
      detail: '~2% of global production',
    },
    health: {
      status: 'Structurally Constrained',
      weight: '5/10',
      confidence: '85%',
    },
  },

  production: {
    top3: {
      share: '~2% of global',
      combined: '~1.5–1.6M tonnes',
      countries: ['South Africa', 'Mozambique', 'Egypt'],
    },
    top6: {
      share: '~2% of global',
      combined: '~1.5–1.6M tonnes (all African)',
      countries: ['South Africa', 'Mozambique', 'Egypt', 'Ghana'],
    },
    ranking: [
      { rank: 1, country: 'South Africa', flag: '🇿🇦', production: '~718–720kt (Hillside)', productionNum: 720, share: 'Largest African producer' },
      { rank: 2, country: 'Mozambique', flag: '🇲🇿', production: '~576–580kt (Mozal)', productionNum: 580, share: 'Largest private investment in Mozambique' },
      { rank: 3, country: 'Egypt', flag: '🇪🇬', production: '~260–320kt (Egyptalum)', productionNum: 290, share: 'Powered by Aswan Dam' },
      { rank: 4, country: 'Ghana', flag: '🇬🇭', production: 'Variable, often below nameplate', productionNum: 0, share: 'Power-constrained' },
    ],
  },

  consumers: [
    { country: 'International markets', flag: '🌍', value: 'Export-oriented smelters serve global buyers', valueNum: 10, share: '1' },
    { country: 'Mozambique (emerging)', flag: '🇲🇿', value: 'Mozal\'s nascent domestic downstream business', valueNum: 1, share: '2' },
  ],

  exporters: [
    { country: 'South Africa', flag: '🇿🇦', value: 'Hillside — largest SH smelter', valueNum: 720, share: 'Export-oriented' },
    { country: 'Mozambique', flag: '🇲🇿', value: 'Mozal — ~30% of national exports', valueNum: 580, share: 'Export-oriented' },
    { country: 'Egypt', flag: '🇪🇬', value: 'Egyptalum — Aswan Dam-powered', valueNum: 290, share: 'Mixed' },
    { country: 'Ghana', flag: '🇬🇭', value: 'VALCO — intermittent operation', valueNum: 0, share: 'Power-constrained' },
  ],

  importers: [
    { country: 'International markets', flag: '🌍', value: 'Primary destination for export-oriented smelters', valueNum: 10, share: '1' },
  ],

  price: {
    benchmarks: ['LME Aluminium (London Metal Exchange)', 'LME/Platts Alumina (feedstock benchmark)', 'SHFE (Shanghai Futures Exchange)', 'Regional premiums (LME Basis + Regional Premium)'],
    drivers: [
      'China\'s 45Mt production cap (~97% capacity)',
      'Non-China production declines (-6.7% YoY Jul 2026)',
      'LME warehouse stock drawdowns (lowest this century)',
      'Iranian strikes on Abu Dhabi Khalifa zone (EGA alumina refinery offline Mar–Jul 2026)',
      'Energy costs (~14,000 kWh/tonne via Hall-Héroult)',
      'Government support interventions (Tomago A$2.5B package)',
    ],
  },

  dna: {
    description:
      'Aluminium is the world\'s most-produced non-ferrous metal, essential to aerospace, automotive, packaging, construction and rail. Africa\'s aluminium sector represents the sharpest resource-to-refining gap in this entire catalog: Guinea alone holds ~30% of global bauxite reserves, yet the continent smelts only ~2% of global aluminium — a gap driven primarily by electricity availability and cost rather than resource scarcity.',
    qualityExamples: [],
    africanGrades: ['Primary smelted aluminium (99.7% purity)', 'Low-grade metal from lower-efficiency smelters'],
    benchmarks: ['LME Aluminium', 'LME/Platts Alumina', 'SHFE'],
    outputs: ['Primary aluminium metal', 'Aluminium alloy', 'Aluminium billets/slabs', 'Recycled aluminium (secondary)'],
    applications: ['Aerospace', 'Automotive lightweighting', 'Construction', 'Packaging (cans, foil)', 'Rail infrastructure', 'Solar racking / EV components'],
    transformation: ['Australian alumina production (Worsley refinery)', 'Shipping to African ports (Maputo, Richards Bay)', 'Smelting (massive electricity required: ~14,000 kWh/t)', 'Refined metal export', 'Limited domestic fabrication'],
    identitySignals: [
      { label: 'Primary Industry', value: 'Base Metal / Energy-Intensive Smelting' },
      { label: 'Primary Value Chain', value: 'Australian Alumina → Import → African Smelter → Export (limited domestic fabrication)' },
      { label: 'Primary Differentiators', value: 'Sharpest resource-to-refining gap in catalog; electricity is binding constraint' },
      { label: 'Primary Benchmarks', value: 'LME Aluminium / LME Platts Alumina / SHFE' },
      { label: 'Primary Commercial Unit', value: 'Metric tonne (99.7% purity)' },
      { label: 'Economic Role in Africa', value: 'Modest export revenue (locally significant in Mozambique) + substantial electricity claim + limited downstream potential' },
    ],
  },

  origin: {
    reserves: {
      total: 'N/A (smelted, not mined)',
      globalShare: '~2% of global production',
      largest: 'South Africa Hillside (largest SH smelter)',
      concentration: 'Southern Africa',
    },
    topReserves: [
      { rank: 1, country: 'South Africa', flag: '🇿🇦', production: '~720kt (Hillside)', productionNum: 720, share: '' },
      { rank: 2, country: 'Mozambique', flag: '🇲🇿', production: '~580kt (Mozal)', productionNum: 580, share: '' },
      { rank: 3, country: 'Egypt', flag: '🇪🇬', production: '~260–320kt (Egyptalum)', productionNum: 290, share: '' },
    ],
    snapshot: {
      production: '~1.5–1.6M tonnes (Africa)',
      annual: 'Combined four smelters',
      global: '~73.78M tonnes (2025)',
      share: '~2%',
    },
    basins: [
      { id: 'GEO-MET-ALU-SA-001', name: 'Richards Bay Complex', country: 'South Africa', environment: 'Onshore smelter', grades: [] },
      { id: 'GEO-MET-ALU-MZ-002', name: 'Maputo / Mozal', country: 'Mozambique', environment: 'Onshore smelter', grades: [] },
      { id: 'GEO-MET-ALU-EG-003', name: 'Luxor / Egyptalum', country: 'Egypt', environment: 'Onshore smelter', grades: [] },
    ],
    environment: {
      onshore: ['Richards Bay (South Africa)', 'Maputo (Mozambique)', 'Luxor (Egypt)', 'VALCO (Ghana)'],
      offshore: [],
      deepwater: [],
    },
    infrastructure: {
      extraction: ['No domestic mining required (bauxite imported as alumina)'],
      midstream: ['Australian alumina supply (Worsley refinery)', 'Shipping to African ports'],
      export: ['Richards Bay port (South Africa)', 'Port of Maputo (Mozambique)', 'Egyptian ports'],
      processing: ['Primary smelting (Hall-Héroult process)', 'Early-stage downstream fabrication (Mozal\'s domestic linkage)'],
    },
    flow: ['Australian Alumina (Worsley)', 'Shipping to Maputo/Richards Bay', 'Smelting (~14,000 kWh/t)', 'Refined metal export', 'Limited domestic fabrication'],
    drivers: [
      'Global market deficit (200–600kt projected 2026)',
      'LME price surge ($3,200–3,335/t Aug 2026)',
      'Mozal nascent domestic downstream linkage',
      'Recycling potential (95% energy saving vs primary)',
    ],
    constraints: [
      'Electricity availability and cost (30–40% of production costs)',
      'Feedstock import dependency (Australian alumina)',
      'Historical smelter closures (Bayside, Alscon)',
      'Power allocation policy tensions',
      'Limited African domestic demand for smelted aluminium',
    ],
    opportunities: [
      'Domestic alumina refining (closing Australia import dependency)',
      'Linking Guinea bauxite directly to African smelting',
      'Dedicated renewable power investment',
      'Downstream fabrication development',
      'Recycling capacity (95% energy reduction vs primary)',
    ],
  },

  connectedEntities: [
    { name: 'South Africa', flag: '🇿🇦', count: 4, kind: 'Origin' },
    { name: 'Mozambique', flag: '🇲🇿', count: 4, kind: 'Origin' },
    { name: 'Egypt', flag: '🇪🇬', count: 3, kind: 'Origin' },
    { name: 'Ghana', flag: '🇬🇭', count: 2, kind: 'Origin' },
    { name: 'South32', count: 3, kind: 'Corporation' },
    { name: 'Worsley Alumina (Australia)', count: 2, kind: 'Feedstock' },
    { name: 'LME', count: 2, kind: 'Institution' },
    { name: 'Bauxite (COM-MIN-BAU-001)', count: 2, kind: 'Cross-Reference' },
  ],

  news: [
    {
      title: 'LME aluminium breaks $3,000/t for first time in years',
      summary: '+39.94% YoY, driven by China cap, Middle East disruption, and inventory drawdowns.',
      date: '2026',
      impact: 'high',
    },
    {
      title: 'Mozal flagged as key deficit risk',
      summary: 'Potential Mozal closure could widen global deficit from 200kt to 600kt in 2026.',
      date: '2026',
      impact: 'high',
    },
    {
      title: 'Mozal begins supplying domestic downstream business',
      summary: 'Early-stage step toward local value-chain development.',
      date: '2025',
      impact: 'medium',
    },
  ],

  flags: [
    'Weakest current-year African-specific data confidence of any commodity built so far — most figures from 2019–2023 vintage sources.',
    'Aluminium Ingots (rank 73) flagged as overlapping value chain — see replacement candidate note.',
    'Alumina feedstock imported from Australia (Worsley) — Africa exports raw bauxite to China while importing refined alumina from Australia.',
  ],
};
