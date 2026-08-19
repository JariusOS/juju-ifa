import type { Commodity } from './types';

export const crudeOil: Commodity = {
  id: 'COM-ENE-OIL-001',
    nodeTags: [],
  slug: 'crude-oil',
  name: 'Crude Oil',
  status: 'Verified',
  nodeType: 'comNODE: energy',
  nodeClass: 'Petroleum / Hydrocarbon / Fossil Fuel',
  weight: 10,
  weightLabel: 'Critical',
  confidence: 96,
  confidenceLabel: 'Very High',
  hsCode: 'HS-2709',
  fingerprint:
    'Crude oil is a naturally occurring liquid hydrocarbon mixture that remains the primary liquid energy commodity and major feedstock for transportation fuels, petrochemicals and industrial products. African crude supplies are geographically concentrated across North, West and Central Africa, creating a critical strategic link between African producing states, global refineries and consuming economies.',
  tags: [
    '#crude-oil', '#petroleum', '#hydrocarbons', '#energy', '#fossil-fuel',
    '#upstream', '#downstream', '#refining', '#OPEC', '#OPEC+',
    '#strategic-commodity', '#energy-security',
  ],
  rankLabel: '#1 Africa Energy',
  globalValue: '$1.26T',
  africaExportValue: '$220B',
  africaShare: '17.5%',
  referencePrice: '$80/Bbl',
  referencePriceDetail: 'Reference Price',
  yoyPrice: '+3.2% YoY',
  followers: '2500',
  bookmarks: '1380',

  snapshot: {
    globalMarketValue: '~$1.26T',
    globalExportValue: '~$1.26T',
    referencePrice: '~$80/barrel',
    globalProduction: '~72.6M b/d',
    africanProduction: '~6.10M b/d',
    africaProductionShare: '~8.4%',
    strategicRole:
      'Primary liquid energy commodity and major feedstock for transportation fuels, petrochemicals and industrial products.',
    africanExportValue: '~$220B',
    africanShareGlobalExports: '~17.5%',
    africanReserves: '>120B barrels',
    africanReserveValue: '~$8.5T',
    exportRegions: ['West Africa', 'North Africa', 'Central Africa'],
    primaryMarkets: ['Europe', 'China', 'India', 'Other Asia'],
  },

  summaryGrid: {
    reserves: {
      value: '$1.1T',
      unit: 'reserve value',
      yoy: '+2.5% YOY',
      holders: [
        { flag: '🇳🇬', name: 'Nigeria', value: '~37.5B bbl' },
        { flag: '🇱🇾', name: 'Libya', value: '~48B bbl' },
        { flag: '🇦🇴', name: 'Angola', value: '~2.6B bbl' },
      ],
    },
    exports: {
      label: 'Global Exports',
      value: 'Qty: $1.26T',
      detail: 'Max: $220B Africa',
    },
    health: {
      status: 'Healthy',
      weight: 'High (10/10)',
      confidence: '96%',
    },
  },

  production: {
    top3: {
      share: '59%',
      combined: '~3.61M b/d',
      countries: ['Nigeria', 'Libya', 'Angola'],
    },
    top6: {
      share: '86%',
      combined: '~5.22M b/d',
      countries: ['Nigeria', 'Libya', 'Angola', 'Algeria', 'Egypt', 'Congo'],
    },
    ranking: [
      { rank: 1, country: 'Nigeria', flag: '🇳🇬', production: '~1.345M b/d', productionNum: 1.345, share: '22.0%' },
      { rank: 2, country: 'Libya', flag: '🇱🇾', production: '~1.136M b/d', productionNum: 1.136, share: '18.6%' },
      { rank: 3, country: 'Angola', flag: '🇦🇴', production: '~1.125M b/d', productionNum: 1.125, share: '18.4%' },
      { rank: 4, country: 'Algeria', flag: '🇩🇿', production: '~907K b/d', productionNum: 0.907, share: '14.9%' },
      { rank: 5, country: 'Egypt', flag: '🇪🇬', production: '~450K b/d', productionNum: 0.45, share: '7.4%' },
      { rank: 6, country: 'Congo', flag: '🇨🇬', production: '~260K b/d', productionNum: 0.26, share: '4.3%' },
      { rank: 7, country: 'Gabon', flag: '🇬🇦', production: '~224K b/d', productionNum: 0.224, share: '3.7%' },
      { rank: 8, country: 'Ghana', flag: '🇬🇭', production: '~132K b/d', productionNum: 0.132, share: '2.2%' },
      { rank: 9, country: 'South Sudan', flag: '🇸🇸', production: '~76K b/d', productionNum: 0.076, share: '1.2%' },
      { rank: 10, country: 'Equatorial Guinea', flag: '🇬🇶', production: '~57K b/d', productionNum: 0.057, share: '0.9%' },
    ],
  },

  consumers: [
    { country: 'USA', flag: '🇺🇸', value: '~19.0–20.2M', valueNum: 20.2, share: '1' },
    { country: 'China', flag: '🇨🇳', value: '~16.2–16.4M', valueNum: 16.4, share: '2' },
    { country: 'India', flag: '🇮🇳', value: '~5.2–5.6M', valueNum: 5.6, share: '3' },
    { country: 'Japan', flag: '🇯🇵', value: '~3.1–3.4M', valueNum: 3.4, share: '4' },
    { country: 'South Korea', flag: '🇰🇷', value: '~2.5–2.6M', valueNum: 2.6, share: '5' },
  ],

  exporters: [
    { country: 'Nigeria', flag: '🇳🇬', value: '~1.38M b/d', valueNum: 1.38, share: '26.5%' },
    { country: 'Libya', flag: '🇱🇾', value: '~1.12M b/d', valueNum: 1.12, share: '21.5%' },
    { country: 'Angola', flag: '🇦🇴', value: '~1.01M b/d', valueNum: 1.01, share: '19.4%' },
    { country: 'Algeria', flag: '🇩🇿', value: '~0.52M b/d', valueNum: 0.52, share: '10.0%' },
    { country: 'Egypt', flag: '🇪🇬', value: '~0.10M b/d', valueNum: 0.1, share: '1.9%' },
  ],

  importers: [
    { country: 'China', flag: '🇨🇳', value: '~1.25M b/d', valueNum: 1.25, share: '24.0%' },
    { country: 'India', flag: '🇮🇳', value: '~0.75M b/d', valueNum: 0.75, share: '14.4%' },
    { country: 'Netherlands', flag: '🇳🇱', value: '~0.52M b/d', valueNum: 0.52, share: '10.0%' },
    { country: 'France', flag: '🇫🇷', value: '~0.36M b/d', valueNum: 0.36, share: '6.9%' },
    { country: 'USA', flag: '🇺🇸', value: '~0.31M b/d', valueNum: 0.31, share: '6.0%' },
  ],

  price: {
    benchmarks: ['Brent', 'WTI', 'Dubai/Oman'],
    drivers: [
      'Global supply', 'Global demand', 'OPEC+ production policy',
      'Geopolitical disruption', 'Sanctions', 'Refinery demand',
      'Inventory levels', 'Shipping costs', 'Grade quality',
      'Regional supply-demand balance',
    ],
  },

  dna: {
    description:
      'Crude oil is a naturally occurring liquid hydrocarbon mixture composed primarily of hydrocarbons with smaller quantities of non-hydrocarbon compounds. Crude quality is principally differentiated by API gravity and sulfur content — characteristics that influence refinery configuration, processing complexity, product yields and commercial value.',
    qualityExamples: [
      { name: 'Saharan Blend', api: '~44°', sulfur: '~0.10%', qualityClass: 'Light & Sweet' },
      { name: 'Bonny Light', api: '~36.7°', sulfur: '~0.10%', qualityClass: 'Light & Sweet' },
    ],
    africanGrades: [
      'Saharan Blend', 'Bonny Light', 'Qua Iboe', 'Forcados', 'Bonga', 'Escravos',
      'Es Sider', 'Sharara', 'Sarir', 'Cabinda', 'Dalia', 'Girassol', 'Nemba',
      'Hungo', 'Djeno', 'Western Desert', 'Suez', 'Belayim',
    ],
    benchmarks: ['Brent', 'WTI', 'Dubai', 'Oman'],
    outputs: [
      'Gasoline', 'Diesel', 'Jet Fuel', 'Kerosene', 'Fuel Oil', 'Naphtha',
      'LPG', 'Lubricants', 'Asphalt / Bitumen', 'Petrochemical feedstocks',
    ],
    applications: [
      'Road transport', 'Aviation', 'Marine transport', 'Rail',
      'Power generation', 'Heating', 'Industrial fuel', 'Petrochemicals',
      'Chemicals', 'Plastics', 'Synthetic materials', 'Lubricants',
      'Construction materials',
    ],
    transformation: [
      'Crude Oil', 'Primary Refining', 'Gasoline', 'Diesel', 'Jet Fuel',
      'Kerosene', 'Fuel Oil', 'Naphtha', 'LPG', 'Secondary Processing',
      'Lubricants', 'Asphalt', 'Petrochemical Feedstocks', 'Specialty Products',
      'Petrochemical Chain', 'Plastics', 'Synthetic Materials', 'Chemicals',
      'Industrial Products',
    ],
    identitySignals: [
      { label: 'Primary Industry', value: 'Energy' },
      { label: 'Primary Value Chain', value: 'Upstream → Midstream → Refining → Downstream' },
      { label: 'Primary Differentiators', value: 'API Gravity + Sulfur' },
      { label: 'Primary Benchmarks', value: 'Brent / WTI / Dubai-Oman' },
      { label: 'Primary Commercial Unit', value: 'Barrel' },
      { label: 'Primary Transformation', value: 'Refining' },
      { label: 'Primary Strategic Function', value: 'Energy + Transport + Petrochemical Feedstock' },
      { label: 'Economic Role in Africa', value: 'Export revenue + fiscal revenue + foreign exchange + energy security' },
    ],
  },

  origin: {
    reserves: {
      total: '>120B barrels',
      globalShare: '~8%',
      largest: 'Libya',
      concentration: 'North Africa',
    },
    topReserves: [
      { rank: 1, country: 'Libya', flag: '🇱🇾', production: '~48B barrels', productionNum: 48, share: '~41%' },
      { rank: 2, country: 'Nigeria', flag: '🇳🇬', production: '~37.5B barrels', productionNum: 37.5, share: '' },
      { rank: 3, country: 'Algeria', flag: '🇩🇿', production: '~12.2B barrels', productionNum: 12.2, share: '' },
      { rank: 4, country: 'Egypt', flag: '🇪🇬', production: '~2.8B barrels', productionNum: 2.8, share: '' },
      { rank: 5, country: 'Angola', flag: '🇦🇴', production: '~2.6B barrels', productionNum: 2.6, share: '' },
    ],
    snapshot: {
      production: '~6.10M b/d',
      annual: '~2.23B bbl/year',
      global: '~72.58M b/d',
      share: '~8.4%',
    },
    basins: [
      { id: 'GEO-PRO-OIL-NGD-001', name: 'Niger Delta Petroleum Province', country: 'Nigeria', environment: 'Onshore • Shallow-water • Deepwater', grades: ['Bonny Light', 'Qua Iboe', 'Forcados', 'Escravos', 'Bonga'] },
      { id: 'GEO-PRO-OIL-SRT-001', name: 'Sirte Basin', country: 'Libya', environment: 'Predominantly Onshore', grades: ['Es Sider', 'Sarir', 'Messla'] },
      { id: 'GEO-PRO-OIL-MRZ-001', name: 'Murzuq Basin', country: 'Libya', environment: 'Onshore', grades: ['Sharara', 'El Feel'] },
      { id: 'GEO-PRO-OIL-KWN-001', name: 'Kwanza Basin', country: 'Angola', environment: 'Offshore • Deepwater', grades: ['Deepwater / Pre-salt'] },
      { id: 'GEO-PRO-OIL-LCB-001', name: 'Lower Congo Basin', country: 'Congo • Angola', environment: 'Offshore • Deepwater', grades: ['Djeno', "N'Kossa", 'Angolan offshore grades'] },
      { id: 'GEO-PRO-OIL-HMS-001', name: 'Hassi Messaoud Petroleum Province', country: 'Algeria', environment: 'Onshore', grades: ['Saharan Blend'] },
      { id: 'GEO-PRO-OIL-BRK-001', name: 'Berkine Basin', country: 'Algeria', environment: 'Onshore', grades: [] },
      { id: 'GEO-PRO-OIL-ILZ-001', name: 'Illizi Basin', country: 'Algeria', environment: 'Onshore', grades: [] },
      { id: 'GEO-PRO-OIL-GOS-001', name: 'Gulf of Suez Petroleum Province', country: 'Egypt', environment: 'Onshore • Offshore', grades: ['Suez', 'Belayim'] },
      { id: 'GEO-PRO-OIL-WDS-001', name: 'Western Desert Petroleum Province', country: 'Egypt', environment: 'Onshore', grades: ['Western Desert crude'] },
    ],
    environment: {
      onshore: ['Niger Delta', 'Sirte Basin', 'Murzuq Basin', 'Hassi Messaoud', 'Berkine', 'Illizi', 'Western Desert'],
      offshore: ['Gulf of Guinea', 'Angola Offshore', 'Congo Offshore', 'Gulf of Suez', 'Ghana Offshore', 'Equatorial Guinea Offshore'],
      deepwater: ['Nigeria', 'Angola', 'Congo', 'Ghana'],
    },
    infrastructure: {
      extraction: ['Exploration wells', 'Development wells', 'Production wells', 'Drilling rigs', 'Offshore platforms', 'FPSOs', 'Subsea systems', 'Gathering systems'],
      midstream: ['Gathering pipelines', 'Export pipelines', 'Storage terminals', 'Tank farms', 'Pumping stations', 'Marine loading systems'],
      export: ['Export terminals', 'Crude-loading facilities', 'Ports', 'Offshore loading systems', 'Tankers'],
      processing: ['Field processing facilities', 'Stabilization facilities', 'Separation facilities', 'Refineries'],
    },
    flow: [
      'Petroleum Basin', 'Exploration', 'Drilling', 'Extraction', 'Field Processing',
      'Gathering', 'Storage', 'Pipeline / Marine Transport', 'Export Terminal',
      'Crude Tanker', 'Refinery', 'Petroleum Products',
    ],
    drivers: [
      'Deepwater development', 'Brownfield redevelopment', 'Enhanced oil recovery',
      'New exploration', 'New licensing', 'Field redevelopment',
      'Infrastructure rehabilitation', 'Improved field management',
      'Digital production systems', 'Domestic refining integration',
      'New upstream investment', 'Associated gas utilization',
    ],
    constraints: [
      'Natural field decline', 'Reservoir maturity', 'Declining recovery rates',
      'Complex reservoirs', 'Aging pipelines', 'Storage constraints',
      'Terminal constraints', 'Transportation bottlenecks',
      'Offshore technical complexity', 'High development costs', 'Long project cycles',
      'Conflict', 'Political instability', 'Pipeline theft', 'Sabotage',
      'Underinvestment', 'Capital intensity', 'Fiscal terms', 'Regulatory uncertainty',
      'OPEC/OPEC+ production policy',
    ],
    opportunities: [
      'Enhanced recovery', 'Workovers', 'Field redevelopment', 'Digital field management',
      'Infrastructure rehabilitation', 'Deepwater development', 'Offshore exploration',
      'New basin exploration', 'New licensing', 'Marginal-field development',
      'Pipeline rehabilitation', 'Storage expansion', 'Export terminal modernization',
      'Leak detection', 'Infrastructure monitoring', 'Seismic', 'Subsea engineering',
      'Production monitoring', 'Predictive maintenance', 'Satellite surveillance',
      'Digital field intelligence',
    ],
  },

  connectedEntities: [
    { name: 'Nigeria', flag: '🇳🇬', count: 5, kind: 'Origin' },
    { name: 'Libya', flag: '🇱🇾', count: 4, kind: 'Origin' },
    { name: 'Angola', flag: '🇦🇴', count: 4, kind: 'Origin' },
    { name: 'Algeria', flag: '🇩🇿', count: 4, kind: 'Origin' },
    { name: 'Egypt', flag: '🇪🇬', count: 4, kind: 'Origin / Transit' },
    { name: 'China', flag: '🇨🇳', count: 3, kind: 'Market' },
    { name: 'India', flag: '🇮🇳', count: 3, kind: 'Market' },
    { name: 'OPEC', count: 2, kind: 'Institution' },
    { name: 'Brent', count: 2, kind: 'Benchmark' },
    { name: 'Suez Canal', count: 2, kind: 'Infrastructure' },
  ],

  news: [
    {
      title: 'OPEC Statistical Bulletin confirms 2024 African production',
      summary: 'OPEC reports African crude production of approximately 6.10M b/d in 2024, with Nigeria, Libya and Angola accounting for ~59% of continental output.',
      date: '2025',
      impact: 'high',
    },
    {
      title: 'Nigerian deepwater offsets mature-field decline',
      summary: 'Newer offshore developments such as Akpo West and other projects have helped partially offset legacy declines across mature Niger Delta assets.',
      date: '2024',
      impact: 'medium',
    },
    {
      title: 'Libya retains Africa largest reserve base',
      summary: 'Libya holds ~48B barrels, roughly 41% of proven African reserves, with ~95% of recoverable reserves located in the Sirte and Murzuq basins.',
      date: '2024',
      impact: 'medium',
    },
  ],
};