import type { Commodity } from './types';

export const cashew: Commodity = {
  id: 'COM-AGR-CSH-021',
  nodeTags: [],
  slug: 'cashew',
  name: 'Cashew (Raw Cashew Nut & Processed Kernel)',
  status: 'Verified',
  nodeType: 'comNODE: agricultural',
  nodeClass: 'Tree Nut / Agro-Export / Emerging Value-Chain Processing Success',
  weight: 7,
  weightLabel: 'Significant',
  confidence: 91,
  confidenceLabel: 'High',
  hsCode: 'HS 0801',
  fingerprint:
    'One of this catalog\'s clearest, most concretely quantified downstream value-chain transformation stories — Côte d\'Ivoire overtook India in 2025 to become the world\'s #2 cashew kernel exporter, trailing only Vietnam.',
  tags: ['#cashew', '#agricultural', '#tree-nut', '#value-chain', '#processing', '#CoteDIvoire', '#Tanzania', '#Nigeria'],
  rankLabel: '#21 Africa Export',
  globalValue: '$9.07B (2025, ICN)',
  africaExportValue: '~$623–625M (Côte d\'Ivoire kernels alone, +67% YoY)',
  africaShare: '>55% of global raw cashew nut production',
  referencePrice: 'No unified futures — government farmgate pricing (Côte d\'Ivoire 425 CFA/kg)',
  referencePriceDetail: 'Côte d\'Ivoire government-set purchase price: 425 CFA francs/kg (~$0.66)',
  yoyPrice: 'Kernel export revenue +67% (Côte d\'Ivoire 2025)',
  followers: '',
  bookmarks: '',

  snapshot: {
    globalMarketValue: '$9.07 billion (2025, ICN Nuts and Dried Fruits Global Statistical Review), expected CAGR 5.4%',
    globalExportValue: 'Vietnam ~$4.37B kernels (2024); Côte d\'Ivoire ~$623–625M kernels (2025)',
    referencePrice: 'No unified futures benchmark — national government purchase-price systems and direct kernel-export contracts',
    globalProduction: '~5.21–5.5M tonnes (2025, in-shell/raw nuts) — world\'s second most-produced tree nut after almonds',
    africanProduction: '>55% of global raw cashew nut production (African Cashew Alliance / INC)',
    africaProductionShare: '>55%, with one industry forecast projecting 70% by 2026',
    strategicRole:
      'One of the most concrete, quantified reversals of an African commodity value chain documented in this catalog — from raw-nut exporter to processed-kernel export leadership.',
    africanExportValue: 'Côte d\'Ivoire ~$623–625M kernel exports (2025); broader Africa Cashew Market valued at $3.3B (2025), projected $5.02B by 2031',
    africanShareGlobalExports: 'Côte d\'Ivoire overtook India in 2025 to become world\'s #2 kernel exporter',
    africanReserves: 'N/A (perennial tree crop)',
    africanReserveValue: 'N/A',
    exportRegions: ['West Africa (Côte d\'Ivoire dominant, plus Benin, Nigeria, Burkina Faso, Guinea-Bissau)', 'East Africa (Tanzania)'],
    primaryMarkets: ['Vietnam (historically dominant raw-nut buyer)', 'India (major processor)', 'European Union (growing kernel destination)', 'USA (growing, newly complicated by tariffs)'],
  },

  summaryGrid: {
    reserves: {
      value: 'N/A',
      unit: 'perennial crop',
      yoy: 'Rapid growth',
      holders: [
        { flag: '🇨🇮', name: 'Côte d\'Ivoire', value: '1.3–1.5Mt (2025)' },
        { flag: '🇹🇿', name: 'Tanzania', value: '~408–450Kt' },
        { flag: '🇳🇬', name: 'Nigeria', value: '$398M H1 2025' },
      ],
    },
    exports: {
      label: 'African Export Value',
      value: '$3.3B (2025)',
      detail: 'Côte d\'Ivoire #2 kernel exporter globally',
    },
    health: {
      status: 'Rising',
      weight: '7/10',
      confidence: '91%',
    },
  },

  production: {
    top3: {
      share: '~75%',
      combined: 'Côte d\'Ivoire + Tanzania + Nigeria',
      countries: ['Côte d\'Ivoire', 'Tanzania', 'Nigeria'],
    },
    top6: {
      share: '>55% of global production',
      combined: 'Africa-wide',
      countries: ['Côte d\'Ivoire', 'Tanzania', 'Nigeria', 'Benin', 'Burkina Faso', 'Guinea-Bissau'],
    },
    ranking: [
      { rank: 1, country: 'Côte d\'Ivoire', flag: '🇨🇮', production: '1.3–1.5M tonnes', productionNum: 1.4, share: '52.1% of African production' },
      { rank: 2, country: 'Tanzania', flag: '🇹🇿', production: '~408,600–450,000 tonnes', productionNum: 425, share: '12.5%' },
      { rank: 3, country: 'Nigeria', flag: '🇳🇬', production: 'Significant, fast-growing', productionNum: 0, share: '11.7%' },
      { rank: 4, country: 'Benin', flag: '🇧🇯', production: '~203,844–225,000 tonnes', productionNum: 215, share: '8.8%' },
      { rank: 5, country: 'Burkina Faso', flag: '🇧🇫', production: 'Growing, part of West Africa\'s 20–50% output increase', productionNum: 0, share: '' },
      { rank: 6, country: 'Guinea-Bissau', flag: '🇬🇼', production: 'Established smaller producer', productionNum: 0, share: '' },
    ],
  },

  consumers: [
    { country: 'Vietnam', flag: '🇻🇳', value: 'Historically dominant raw-nut buyer (~80% of Ivorian output)', valueNum: 10, share: '1' },
    { country: 'India', flag: '🇮🇳', value: 'Major secondary processor and market', valueNum: 6, share: '2' },
    { country: 'European Union', flag: '🇪🇺', value: 'Growing kernel destination, 8–10% traceability premium', valueNum: 4, share: '3' },
    { country: 'USA', flag: '🇺🇸', value: 'Growing kernel importer (new tariff headwind)', valueNum: 3, share: '4' },
    { country: 'China', flag: '🇨🇳', value: 'Growing market', valueNum: 2, share: '5' },
  ],

  exporters: [
    { country: 'Côte d\'Ivoire', flag: '🇨🇮', value: '~623–625M kernels (+67% YoY)', valueNum: 625, share: 'World #1 producer, #2 kernel exporter' },
    { country: 'Tanzania', flag: '🇹🇿', value: '~408–450Kt, predominantly raw nuts', valueNum: 425, share: 'East Africa\'s leading producer' },
    { country: 'Nigeria', flag: '🇳🇬', value: '$398M in H1 2025 alone', valueNum: 398, share: 'Fast-growing' },
    { country: 'Benin', flag: '🇧🇯', value: '~204–225Kt, predominantly raw nuts', valueNum: 215, share: 'Major agricultural earnings source' },
    { country: 'Guinea-Bissau', flag: '🇬🇼', value: 'Established smaller producer', valueNum: 0, share: '' },
  ],

  importers: [
    { country: 'Vietnam', flag: '🇻🇳', value: 'Historically dominant (80% of Ivorian output)', valueNum: 10, share: '1' },
    { country: 'India', flag: '🇮🇳', value: 'Major secondary processor', valueNum: 6, share: '2' },
    { country: 'European Union', flag: '🇪🇺', value: 'Growing kernel destination', valueNum: 4, share: '3' },
    { country: 'USA', flag: '🇺🇸', value: 'Growing but tariff-complicated', valueNum: 3, share: '4' },
    { country: 'China', flag: '🇨🇳', value: 'Growing market', valueNum: 2, share: '5' },
  ],

  price: {
    benchmarks: [
      'No formal futures exchange',
      'Côte d\'Ivoire CCA government farmgate price (425 CFA/kg)',
      'Direct kernel-export contracts',
    ],
    drivers: [
      'Domestic processing capacity expansion shifting value capture',
      'Traceability/sustainability certification (8–10% EU premium)',
      'Government farmgate pricing policy',
      'Smuggling crackdowns recapturing diverted volume',
      'US tariff policy (21% on Ivorian exports)',
      'Vietnamese processor demand shifts',
    ],
  },

  dna: {
    description:
      'Cashew is a tree nut whose raw nuts (in-shell) are processed into kernels for the snack, food-ingredient and confectionery industries. Africa produces >55% of global raw cashew nuts but historically exported almost all raw material to Asian processors. Côte d\'Ivoire\'s dramatic shift toward domestic processing — overtook India as the world\'s #2 kernel exporter in 2025 — represents one of the most concrete, quantified African downstream value-chain transformation stories in this catalog.',
    qualityExamples: [],
    africanGrades: ['Raw Cashew Nut (in-shell)', 'Processed Cashew Kernel (W180, W240, W320, etc.)', 'Grade-specific kernel exports'],
    benchmarks: ['CCA government farmgate price (425 CFA/kg)', 'Vietnam kernel export pricing (~$6,000/t)', 'EU traceability-premium pricing'],
    outputs: ['Raw cashew nut (in-shell)', 'Processed cashew kernels', 'Cashew nut shell liquid (CNSL)', 'Cashew-based products (spreads, pesto ingredients)'],
    applications: [
      'Snack food and confectionery', 'Nut-based spreads and sauces', 'Energy bars and health food',
      'Food manufacturing (Barilla pesto)', 'Cosmetics and pharmaceuticals',
    ],
    transformation: ['Smallholder Farm', 'CCA-Regulated Purchase System', 'Domestic Processing Plant (37+ in Côte d\'Ivoire)', 'Kernel Export (EU/US) OR Raw Nut Export (Vietnam/India, declining share)'],
    identitySignals: [
      { label: 'Primary Industry', value: 'Agricultural / Tree Nut / Processing' },
      { label: 'Primary Value Chain', value: 'Smallholder Farm → CCA Purchase → Domestic Processing → Kernel Export' },
      { label: 'Primary Differentiators', value: 'Clearest African downstream value-chain transformation in catalog' },
      { label: 'Primary Benchmarks', value: 'CCA farmgate price / Vietnam kernel export pricing' },
      { label: 'Primary Commercial Unit', value: 'Kilogram (raw nut); Tonne (kernel)' },
      { label: 'Economic Role in Africa', value: 'Diversifying export revenue + smallholder livelihoods + gender-notable industrial employment (70% women)' },
    ],
  },

  origin: {
    reserves: {
      total: 'N/A (perennial crop)',
      globalShare: '>55% of global raw production',
      largest: 'Côte d\'Ivoire 1.3–1.5Mt (2025)',
      concentration: 'West Africa',
    },
    topReserves: [
      { rank: 1, country: 'Côte d\'Ivoire', flag: '🇨🇮', production: '1.3–1.5Mt (2025)', productionNum: 1.4, share: '52.1% of African production' },
      { rank: 2, country: 'Tanzania', flag: '🇹🇿', production: '~408–450Kt', productionNum: 425, share: 'East Africa\'s leading producer' },
    ],
    snapshot: {
      production: '>55% of global raw production',
      annual: 'African output, >55% global share',
      global: '~5.21–5.5M tonnes (2025)',
      share: '>55%',
    },
    basins: [
      { id: 'GEO-AGR-CSH-WAF-001', name: 'West African Cashew Belt', country: 'Côte d\'Ivoire • Benin • Nigeria • Burkina Faso • Guinea-Bissau', environment: 'Onshore', grades: [] },
      { id: 'GEO-AGR-CSH-EAF-002', name: 'East African Cashew Region', country: 'Tanzania', environment: 'Onshore', grades: [] },
    ],
    environment: {
      onshore: ['West African cashew belt (Côte d\'Ivoire, Benin, Nigeria, Burkina Faso)', 'East Africa (Tanzania)'],
      offshore: [],
      deepwater: [],
    },
    infrastructure: {
      extraction: ['Smallholder farms'],
      midstream: ['CCA-regulated purchase system', '37+ domestic processing plants (Côte d\'Ivoire)', 'Three new agro-industrial processing zones'],
      export: ['Côte d\'Ivoire kernel export terminals', 'Regional ports for raw-nut export'],
      processing: ['Domestic kernel processing (350K+ tonnes capacity, growing to 830Kt installed)'],
    },
    flow: ['Smallholder Farm', 'CCA-Regulated Purchase', 'Domestic Processing Plant', 'Kernel Export (EU/US) OR Raw Nut Export (Vietnam/India, declining)'],
    drivers: [
      'Côte d\'Ivoire processing capacity scale-up (6.22% → 21% → 50% target by 2030)',
      'January 24–March 15 exclusive domestic-processor supply period',
      'EU traceability premium (8–10%)',
      'Anti-smuggling enforcement recapturing diverted volume',
      'Nigeria processing-capacity expansion ambition',
    ],
    constraints: [
      'US 21% tariff on Ivorian cashew exports',
      'Vietnamese processor demand shifts (reduced 2025 purchasing)',
      'Smuggling leakage risk (historical)',
      '2030 processing target execution risk',
      'Climate/weather variability',
    ],
    opportunities: [
      'Processing capacity scale-up toward 2030 target',
      'Further kernel-export market share gains vs Vietnam/India',
      'EU traceability-premium capture',
      'Nigeria and other producers replicating Ivorian model',
      'Agro-industrial zone development (12K+ additional jobs)',
    ],
  },

  connectedEntities: [
    { name: 'Côte d\'Ivoire', flag: '🇨🇮', count: 5, kind: 'Origin' },
    { name: 'Tanzania', flag: '🇹🇿', count: 3, kind: 'Origin' },
    { name: 'Nigeria', flag: '🇳🇬', count: 3, kind: 'Origin' },
    { name: 'Benin', flag: '🇧🇯', count: 3, kind: 'Origin' },
    { name: 'Vietnam', flag: '🇻🇳', count: 3, kind: 'Market' },
    { name: 'European Union', flag: '🇪🇺', count: 2, kind: 'Market' },
    { name: 'Conseil du Coton et de l\'Anacarde (CCA)', count: 3, kind: 'Institution' },
    { name: 'African Cashew Alliance', count: 2, kind: 'Institution' },
    { name: 'Cotton (COM-AGR-COT-001)', count: 2, kind: 'Cross-Reference' },
  ],

  news: [
    {
      title: 'Côte d\'Ivoire overtakes India as world\'s #2 kernel exporter',
      summary: 'Historic milestone — trailing only Vietnam, while remaining world\'s #1 raw producer.',
      date: '2025',
      impact: 'high',
    },
    {
      title: '30+ processing plants inaugurated in 2024',
      summary: 'Created 15,000+ direct jobs, 70% held by women.',
      date: '2024',
      impact: 'high',
    },
    {
      title: 'US imposes 21% tariff on Ivorian cashew exports',
      summary: 'New headwind during the same period as historic kernel-export milestone.',
      date: '2025',
      impact: 'medium',
    },
  ],

  flags: [
    'Côte d\'Ivoire exact 2025 production figure varies (1.15M, 1.3M, "exceeded 1.5M") — likely in-season upward revision.',
    'Vietnamese processor purchasing reduction in 2025 — monitoring required for price implications.',
    'US 21% tariff a direct current headwind for Ivorian exports.',
  ],
};
