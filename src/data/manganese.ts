import type { Commodity } from './types';

export const manganese: Commodity = {
  id: 'COM-CRM-MAN-015',
  slug: 'manganese',
  name: 'Manganese',
  status: 'Verified',
  nodeTags: [] as string[],
  nodeType: 'comNODE: base/battery metals',
  nodeClass: 'Ferroalloy Metal / Steelmaking Input / Emerging Battery Metal',
  weight: 8,
  weightLabel: 'Critical',
  confidence: 87,
  confidenceLabel: 'High',
  hsCode: 'HS 2602',
  fingerprint:
    'An essential steelmaking alloy (~90% of demand, ~6kg per tonne of steel, no viable substitute) that is simultaneously emerging as a genuine battery-grade material for next-generation lithium-ion cathode chemistries.',
  tags: [
    '#manganese',
    '#ferroalloy',
    '#steelmaking',
    '#battery-metal',
    '#critical-mineral',
    '#SouthAfrica',
    '#Gabon',
    '#Ghana',
  ],
  rankLabel: '#15 Africa Export',
  globalValue: '~$57.3Mt × ~$850–1,354/t',
  africaExportValue: '~$4–5B+ annually',
  africaShare: '~22–23% of global production; 43% of global reserves',
  referencePrice: '~$4.7–5.2/dmtu (44% Mn lumpy ore, CFR China)',
  referencePriceDetail:
    'Gabonese 44.5% Mn premium ~$5.10/dmtu CIF China (Aug 2026)',
  yoyPrice:
    'Flat through Q1 2025; Q2 2026: USA $1,354/t, China $1,097/t',
  followers: '',
  bookmarks: '',

  snapshot: {
    globalMarketValue:
      'Modeled from ~57.3Mt (2025) × blended CIF China benchmark pricing',
    globalExportValue:
      'South Africa $2.59B + Gabon $1.23B + Ghana $224M (2020 baseline, likely higher now)',
    referencePrice:
      'Benchmark 44% Mn lumpy ore, CFR China ~$4.7–5.2/dmtu (mid-2026)',
    globalProduction:
      '~57.3M tonnes (2025, +10.8% YoY), forecast ~59.1M tonnes in 2026',
    africanProduction:
      '~12.6–13M tonnes (South Africa ~7.2–7.4Mt + Gabon ~4.6Mt + Ghana ~0.82–1Mt)',
    africaProductionShare: '~22–23% of global production',
    strategicRole:
      'An essential steelmaking alloy with ~90% of demand in steel (no viable substitute per tonne), simultaneously emerging as a genuine battery-grade material for next-generation cathode chemistries.',
    africanExportValue:
      'South Africa ~$2.59B, Gabon ~$1.23B, Ghana ~$224M (2020 baseline)',
    africanShareGlobalExports:
      "Very high — South Africa, Gabon, Ghana and Côte d'Ivoire collectively hold 43% of global manganese reserves",
    africanReserves:
      'South Africa ~560Mt (~38% of world total); Gabon ~61Mt (~4%); Kalahari Basin believed to hold >70% of global reserves',
    africanReserveValue: 'Exceptionally long multi-decade production runway',
    exportRegions: [
      'Southern Africa (South Africa, dominant)',
      'Central Africa (Gabon, second)',
      'West Africa (Ghana, Côte d\'Ivoire, secondary)',
    ],
    primaryMarkets: [
      'China (overwhelmingly dominant)',
      'India',
      'Japan / South Korea',
    ],
  },

  summaryGrid: {
    reserves: {
      value: '~560Mt (South Africa alone)',
      unit: 'metric tons',
      yoy: 'Stable',
      holders: [
        { flag: '🇿🇦', name: 'South Africa', value: '~560Mt (~38%)' },
        { flag: '🇬🇦', name: 'Gabon', value: '~61Mt (~4%)' },
        { flag: '🇬🇭', name: 'Ghana', value: 'Growing' },
      ],
    },
    exports: {
      label: 'African Export Value',
      value: '~$4–5B+',
      detail: 'South Africa + Gabon + Ghana',
    },
    health: { status: 'Critical', weight: '8/10', confidence: '87%' },
  },

  production: {
    top3: {
      share: '~60%+ of global seaborne supply',
      combined: 'South Africa + Gabon + Australia',
      countries: ['South Africa', 'Gabon', 'Australia'],
    },
    top6: {
      share: '~22–23%',
      combined: '~12.6–13M tonnes (Africa)',
      countries: ['South Africa', 'Gabon', 'Ghana', "Côte d'Ivoire"],
    },
    ranking: [
      {
        rank: 1,
        country: 'South Africa',
        flag: '🇿🇦',
        production: '~7.2–7.4 Mt',
        productionNum: 7.3,
        share: 'Largest producer',
      },
      {
        rank: 2,
        country: 'Gabon',
        flag: '🇬🇦',
        production: '~4.6 Mt',
        productionNum: 4.6,
        share: 'Second-largest',
      },
      {
        rank: 3,
        country: 'Australia',
        flag: '🇦🇺',
        production: '~3.3 Mt (recovering)',
        productionNum: 3.3,
        share: 'Recovering from cyclone',
      },
      {
        rank: 4,
        country: 'Ghana',
        flag: '🇬🇭',
        production: '~0.82–1.0 Mt (rising)',
        productionNum: 0.9,
        share: 'Fastest-growing African source',
      },
      {
        rank: 5,
        country: 'China',
        flag: '🇨🇳',
        production: '~0.77 Mt (declining)',
        productionNum: 0.77,
        share: 'Declining domestic base',
      },
      {
        rank: 6,
        country: 'India',
        flag: '🇮🇳',
        production: '~1.3–1.8 Mt',
        productionNum: 1.5,
        share: '',
      },
      {
        rank: 7,
        country: 'Brazil',
        flag: '🇧🇷',
        production: '~1.0 Mt',
        productionNum: 1.0,
        share: '',
      },
    ],
  },

  consumers: [
    {
      country: 'China',
      flag: '🇨🇳',
      value: '$4.09B imports (2020 baseline, likely higher)',
      valueNum: 10,
      share: '1',
    },
    {
      country: 'India',
      flag: '🇮🇳',
      value: 'Major importer despite domestic production',
      valueNum: 5,
      share: '2',
    },
    {
      country: 'Japan / South Korea',
      flag: '🇯🇵',
      value: 'Established importers, quality premiums',
      valueNum: 3,
      share: '3',
    },
  ],

  exporters: [
    {
      country: 'South Africa',
      flag: '🇿🇦',
      value: '~7.2–7.4Mt production',
      valueNum: 7.3,
      share: 'Swing supplier',
    },
    {
      country: 'Gabon',
      flag: '🇬🇦',
      value: '~4.6Mt, premium 44.5% Mn ore',
      valueNum: 4.6,
      share: 'Moanda mine',
    },
    {
      country: 'Ghana',
      flag: '🇬🇭',
      value: '~0.82–1Mt, fastest-growing',
      valueNum: 0.9,
      share: 'Nsuta mine',
    },
    {
      country: "Côte d'Ivoire",
      flag: '🇨🇮',
      value: 'Minor but established',
      valueNum: 0,
      share: '',
    },
  ],

  importers: [
    {
      country: 'China',
      flag: '🇨🇳',
      value: 'Overwhelmingly dominant destination',
      valueNum: 10,
      share: '1',
    },
    {
      country: 'India',
      flag: '🇮🇳',
      value: 'Established secondary destination',
      valueNum: 5,
      share: '2',
    },
    {
      country: 'Norway / Russia / South Korea',
      flag: '🇳🇴',
      value: 'Smaller but established',
      valueNum: 2,
      share: '3',
    },
  ],

  price: {
    benchmarks: [
      '44% Mn Lumpy Ore CFR China (core global reference)',
      'Regional CIF adjustments (Europe, India)',
      'SMM (Shanghai Metals Market)',
      'Mysteel',
    ],
    drivers: [
      'Chinese steel production and alloy-plant output rates',
      'Supply disruptions at major single mines',
      'South African and Gabonese logistics corridor capacity',
      'Grade/quality differentials (1% Mn variation moves dmtu price)',
      'Freight cost structure (SA→China 15–20% of landed cost vs Australia 8–12%)',
      'Emerging battery-grade manganese demand',
    ],
  },

  dna: {
    description:
      "Manganese is a ferroalloy metal essential to steelmaking (~90% of demand, ~6kg of ore per tonne of steel, no viable substitute) that is simultaneously emerging as a genuine battery-grade material for next-generation lithium-ion cathode chemistries. Africa holds 43% of global reserves with South Africa's Kalahari Basin potentially holding >70% of world reserves.",
    qualityExamples: [],
    africanGrades: [
      '44% Mn lumpy ore (standard benchmark)',
      '44.5% Mn premium (Gabonese Comilog)',
      '36–38% Mn (South African grade)',
      'Battery-grade manganese sulfate (emerging)',
    ],
    benchmarks: [
      '44% Mn Lumpy Ore CFR China',
      'LME/Platts Alumina',
      'SMM',
      'Mysteel',
    ],
    outputs: [
      'Ferromanganese alloy',
      'Silicomanganese alloy',
      'Battery-grade manganese sulfate (emerging)',
      'Manganese metal',
    ],
    applications: [
      'Steelmaking (no viable substitute)',
      'EV battery cathode chemistries',
      'Ferroalloy production',
      'Dry cell batteries',
      'Water treatment',
    ],
    transformation: [
      'Mine (Kalahari Basin, Moanda, Nsuta)',
      'Rail/road transport',
      'Port terminal',
      'Vessel',
      'Chinese steel mills (dominant)',
      'Battery-cathode manufacturers (emerging)',
    ],
    identitySignals: [
      {
        label: 'Primary Industry',
        value: 'Base Metal / Ferroalloy / Emerging Battery Material',
      },
      {
        label: 'Primary Value Chain',
        value:
          'Mine → Rail → Port → Steel Mills + Battery Manufacturers',
      },
      {
        label: 'Primary Differentiators',
        value:
          'Irreplaceable steelmaking input + emerging battery diversification',
      },
      {
        label: 'Primary Benchmarks',
        value: '44% Mn CFR China / SMM / Mysteel',
      },
      {
        label: 'Primary Commercial Unit',
        value: 'Dry metric tonne unit (dmtu)',
      },
      {
        label: 'Economic Role in Africa',
        value:
          'Export revenue + fiscal revenue + emerging battery-materials value capture',
      },
    ],
  },

  origin: {
    reserves: {
      total: '~560Mt (South Africa); ~61Mt (Gabon)',
      globalShare: '43% (combined African nations)',
      largest:
        'South Africa Kalahari Basin (>70% of global reserves by some estimates)',
      concentration: 'Southern/Central Africa',
    },
    topReserves: [
      {
        rank: 1,
        country: 'South Africa',
        flag: '🇿🇦',
        production: '~560Mt',
        productionNum: 560,
        share: '~38% of global',
      },
      {
        rank: 2,
        country: 'Gabon',
        flag: '🇬🇦',
        production: '~61Mt',
        productionNum: 61,
        share: '~4% of global',
      },
    ],
    snapshot: {
      production: '~12.6–13M tonnes (Africa)',
      annual: 'Combined SA + Gabon + Ghana',
      global: '~57.3M tonnes (2025)',
      share: '~22–23%',
    },
    basins: [
      {
        id: 'GEO-CRM-MAN-SA-001',
        name: 'Kalahari Basin',
        country: 'South Africa',
        environment: 'Onshore',
        grades: ['36–38% Mn', '44% Mn'],
      },
      {
        id: 'GEO-CRM-MAN-GA-002',
        name: 'Moanda / Franceville Basin',
        country: 'Gabon',
        environment: 'Onshore',
        grades: ['44.5% Mn premium'],
      },
      {
        id: 'GEO-CRM-MAN-GH-003',
        name: 'Nsuta Mine',
        country: 'Ghana',
        environment: 'Onshore',
        grades: [],
      },
    ],
    environment: {
      onshore: [
        'Kalahari Basin (South Africa)',
        'Moanda/Franceville Basin (Gabon)',
        'Nsuta Mine (Ghana)',
      ],
      offshore: [],
      deepwater: [],
    },
    infrastructure: {
      extraction: [
        'Open-pit mining (Kalahari Basin, Moanda, Nsuta)',
      ],
      midstream: [
        'Rail transport (Northern Cape to Durban)',
        'Road transport to port terminals',
      ],
      export: [
        'Port of Durban (South Africa)',
        'Port of Owendo (Gabon)',
        'Takoradi-region ports (Ghana)',
      ],
      processing: [
        'Ferromanganese smelting',
        'Battery-grade sulfate production (MMC project)',
      ],
    },
    flow: [
      'Mine',
      'Rail/Road Transport',
      'Dedicated Port Terminal',
      'Vessel',
      'China (dominant) / India / Other Asian buyers',
    ],
    drivers: [
      'Ghana Nsuta mine ramp-up',
      'Battery-grade demand diversification',
      'China declining domestic production deepening import reliance',
      'South African reserve base providing long-term security',
    ],
    constraints: [
      'Both primary African export corridors near capacity (Durban rail, Owendo port)',
      'Freight cost disadvantage vs Australia',
      'Chinese demand cyclicality',
      'Data variance across sources (production tonnes)',
    ],
    opportunities: [
      'Logistics corridor investment (Durban rail, Owendo port)',
      'Battery-grade manganese sulfate development (MMC $25M project)',
      'Coordinated producer leverage (SA + Gabon + Australia >60% seaborne supply)',
      'Downstream ferroalloy processing expansion',
    ],
  },

  connectedEntities: [
    { name: 'South Africa', flag: '🇿🇦', count: 5, kind: 'Origin' },
    { name: 'Gabon', flag: '🇬🇦', count: 5, kind: 'Origin' },
    { name: 'Ghana', flag: '🇬🇭', count: 3, kind: 'Origin' },
    { name: 'China', flag: '🇨🇳', count: 3, kind: 'Market' },
    { name: 'South32', count: 2, kind: 'Corporation' },
    { name: 'Eramet / Comilog', count: 2, kind: 'Corporation' },
    { name: 'USGS', count: 2, kind: 'Institution' },
  ],

  news: [
    {
      title: 'Global manganese production rises 10.8% to 57.3Mt',
      summary:
        'Driven by Ghana Nsuta ramp-up and Australia Groote Eylandt recovery from cyclone.',
      date: '2025',
      impact: 'medium',
    },
    {
      title:
        'Manganese Metal Company targets battery-grade sulfate by end-2026',
      summary:
        '$25M South African plant targeting 5,000t/year of battery-grade material.',
      date: '2026',
      impact: 'high',
    },
    {
      title: 'Both African export corridors near capacity',
      summary:
        'Durban rail and Owendo port independently reported at or near capacity.',
      date: '2025',
      impact: 'high',
    },
  ],

  flags: [
    'Widest cross-source data variance of any commodity built so far — SA production figures range 6.2Mt to 26Mt; global totals range 18.5Mt to 57.3Mt.',
    'Both primary African export corridors (Durban rail, Owendo port) reported near capacity — a current, not hypothetical, constraint.',
    'Freight cost disadvantage vs Australian producers (15–20% of landed cost vs 8–12%).',
  ],
};
