import type { Commodity } from './types';

export const coffee: Commodity = {
  id: 'COM-AGR-COF-014',
  nodeTags: [],
  slug: 'coffee',
  name: 'Coffee (Arabica & Robusta)',
  status: 'Verified',
  nodeType: 'comNODE: agricultural',
  nodeClass: 'Tree Crop / Soft Commodity / Agro-Export',
  weight: 7,
  weightLabel: 'Significant',
  confidence: 89,
  confidenceLabel: 'High',
  hsCode: 'HS 0901',
  fingerprint:
    "The world's second-most-traded commodity by some measures, coffee is a structurally non-substitutable consumer product with genuinely inelastic demand — consumers have historically absorbed significant price increases without materially curtailing consumption.",
  tags: ['#coffee', '#agricultural', '#soft-commodity', '#tree-crop', '#arabica', '#robusta', '#Ethiopia', '#Uganda'],
  rankLabel: '#14 Africa Export',
  globalValue: '~$100B+ (retail/consumer level)',
  africaExportValue: '~$4.5B+ (Ethiopia + Uganda alone)',
  africaShare: '~10-15% of global production; record 1.18M tonnes exported in 2024/25',
  referencePrice: '~$3.21/lb (Arabica ICE "C", Aug 2026)',
  referencePriceDetail: 'ICE "C" contract, 52-week range $2.44–$4.32/lb',
  yoyPrice: '+79% YoY (Jan 2025); projected -13% for 2026',
  followers: '',
  bookmarks: '',

  snapshot: {
    globalMarketValue: 'Worldwide coffee revenue projected above $100B (2026, Statista); green-bean export market is a subset',
    globalExportValue: 'Record 1.18M tonnes (19.69M bags) exported from Africa in 2024/25',
    referencePrice: 'Arabica (ICE "C") ~$3.21/lb (Aug 2026), 52-week range $2.44–$4.32/lb; Robusta near record-adjacent levels, touched $4,575/t in Apr 2024',
    globalProduction: '~178.7–178.8M bags (2025/26, record), up 2.5% YoY',
    africanProduction: '~22.78M bags (2024/25, ICCO/ICO), up 7.6% YoY',
    africaProductionShare: '~10–15% of global output',
    strategicRole:
      "The world's second-most-traded commodity by some measures; structurally non-substitutable consumer product with genuinely inelastic demand.",
    africanExportValue: 'Ethiopia $2.65B (record); Uganda $2.0–2.25B; combined >$4.5B annually',
    africanShareGlobalExports: "Rising; Africa's share of global production fell from ~25% (1960s) to ~11% today, now actively targeted for recovery to 20% by 2030",
    africanReserves: 'N/A (perennial tree crop)',
    africanReserveValue: '$0 (agricultural)',
    exportRegions: ['East Africa (Ethiopia, Uganda — ~80% of continental exports)', "West Africa (Côte d'Ivoire, secondary robusta)"],
    primaryMarkets: ['European Union', 'USA', 'Growing Middle Eastern and Asian specialty markets'],
  },

  summaryGrid: {
    reserves: {
      value: 'N/A',
      unit: 'perennial crop',
      yoy: 'Active recovery underway',
      holders: [
        { flag: '🇪🇹', name: 'Ethiopia', value: '~8.5–11.6M bags' },
        { flag: '🇺🇬', name: 'Uganda', value: '~6.7–8.4M bags' },
        { flag: '🇹🇿', name: 'Tanzania', value: 'expanding' },
      ],
    },
    exports: {
      label: 'African Export Value',
      value: '>$4.5B',
      detail: 'Ethiopia + Uganda = ~80% of continental exports',
    },
    health: {
      status: 'Rising',
      weight: '7/10',
      confidence: '89%',
    },
  },

  production: {
    top3: {
      share: '~80%',
      combined: 'Ethiopia + Uganda',
      countries: ['Ethiopia', 'Uganda', 'Tanzania'],
    },
    top6: {
      share: '~10–15%',
      combined: '~22.78M bags (Africa)',
      countries: ['Ethiopia', 'Uganda', 'Tanzania', 'Kenya', "Côte d'Ivoire"],
    },
    ranking: [
      { rank: 1, country: 'Brazil', flag: '🇧🇷', production: '~65–71M bags', productionNum: 65, share: '~37%' },
      { rank: 2, country: 'Vietnam', flag: '🇻🇳', production: '~27–31M bags', productionNum: 27, share: '~17%' },
      { rank: 3, country: 'Colombia', flag: '🇨🇴', production: '~13–15M bags', productionNum: 13, share: '~8%' },
      { rank: 4, country: 'Indonesia', flag: '🇮🇩', production: '~10.7M bags', productionNum: 10.7, share: '~6.1%' },
      { rank: 5, country: 'Ethiopia', flag: '🇪🇹', production: '~8.5–11.6M bags', productionNum: 9, share: '~5–7%' },
      { rank: 6, country: 'Uganda', flag: '🇺🇬', production: '~6.7–7.05M bags', productionNum: 6.7, share: '~3.8–4%' },
      { rank: 7, country: 'India', flag: '🇮🇳', production: '~6M bags', productionNum: 6, share: '~3.5%' },
    ],
  },

  consumers: [
    { country: 'European Union', flag: '🇪🇺', value: 'Dominant historical destination', valueNum: 10, share: '1' },
    { country: 'USA', flag: '🇺🇸', value: 'Major consumer, roaster hedging hub', valueNum: 6, share: '2' },
    { country: 'Middle East / Asia (growing)', flag: '🌍', value: 'Emerging specialty markets', valueNum: 3, share: '3' },
  ],

  exporters: [
    { country: 'Uganda', flag: '🇺🇬', value: '495,600t ($2.0–2.25B)', valueNum: 495600, share: '+29.6% vol' },
    { country: 'Ethiopia', flag: '🇪🇹', value: '442,200t ($2.65B record)', valueNum: 442200, share: '+87% rev' },
    { country: 'Tanzania', flag: '🇹🇿', value: 'Expanding, plan to quadruple by 2030', valueNum: 0, share: 'Growing' },
    { country: 'Kenya', flag: '🇰🇪', value: 'Digitizing auctions, plan to triple', valueNum: 0, share: 'Growing' },
    { country: "Côte d'Ivoire", flag: '🇨🇮', value: 'Secondary robusta producer', valueNum: 0, share: '' },
  ],

  importers: [
    { country: 'European Union', flag: '🇪🇺', value: 'Dominant destination', valueNum: 10, share: '1' },
    { country: 'USA', flag: '🇺🇸', value: 'Major secondary destination', valueNum: 6, share: '2' },
    { country: 'Japan', flag: '🇯🇵', value: 'Significant importer', valueNum: 3, share: '3' },
    { country: 'Germany', flag: '🇩🇪', value: '$2.64B imports', valueNum: 2.64, share: '' },
    { country: 'Italy', flag: '🇮🇹', value: '$1.98B imports', valueNum: 1.98, share: '' },
  ],

  price: {
    benchmarks: ['ICE Arabica Coffee "C" Contract (New York)', 'ICE Robusta Coffee (London/Europe)', 'ICO daily indicator prices'],
    drivers: [
      'Brazilian weather conditions (frost, drought in Minas Gerais)',
      'Vietnamese robusta recovery',
      'Currency movements (BRL, VND)',
      'ICE certified inventory levels',
      'Roaster demand and hedging activity',
      'Red Sea shipping disruption',
      'Global "big but tight" supply-demand balance',
    ],
  },

  dna: {
    description:
      "Coffee is a perennial tree crop whose seeds (beans) are the world's most widely consumed non-alcoholic beverage input. Arabica (~60% of global output) and Robusta (~40%) are the two primary species, with structurally distinct growing requirements, flavour profiles, and end-market applications. Africa's coffee sector is defined by an active market-share recovery story — the continent's global production share fell from ~25% in the 1960s to ~11% today, with a coordinated multi-country effort (G25 African Coffee Summit) targeting restoration to 20% by 2030.",
    qualityExamples: [],
    africanGrades: [
      'Ethiopian Arabica (specialty, terroir-driven)',
      'Ugandan Robusta (~80% of production)',
      'Ugandan high-altitude arabica (premium)',
      'Kenyan specialty arabica',
      'Rwandan specialty arabica',
    ],
    benchmarks: ['ICE "C" (arabica)', 'ICE Robusta (London)', 'ICO composite indicator'],
    outputs: ['Green coffee beans (exported)', 'Roasted coffee', 'Instant/soluble coffee', 'Coffee extracts/concentrates'],
    applications: [
      'Specialty coffee roasting',
      'Commercial coffee blending',
      'Instant coffee manufacturing',
      'Espresso blends',
      'Food service',
    ],
    transformation: [
      'Smallholder Highland Farm',
      'Local Cooperative/Buying Station',
      'National Marketing/Regulatory Body',
      'Port (Djibouti for Ethiopia; regional for Uganda)',
      'International Shipping',
      'Roasting/Specialty Markets (EU, US, global)',
    ],
    identitySignals: [
      { label: 'Primary Industry', value: 'Agricultural / Soft Commodity' },
      { label: 'Primary Value Chain', value: 'Smallholder Farm → Cooperative → Marketing Board → Port → Roasting/Specialty Markets' },
      { label: 'Primary Differentiators', value: 'Inelastic demand + African market-share recovery story' },
      { label: 'Primary Benchmarks', value: 'ICE "C" (arabica) / ICE Robusta / ICO composite' },
      { label: 'Primary Commercial Unit', value: '60kg bag' },
      { label: 'Economic Role in Africa', value: 'Export revenue + smallholder livelihoods + foreign exchange + explicit national diversification strategy' },
    ],
  },

  origin: {
    reserves: {
      total: 'N/A (perennial crop)',
      globalShare: '~10–15% of global production',
      largest: 'Ethiopia + Uganda (~80% of African exports)',
      concentration: 'East Africa',
    },
    topReserves: [
      { rank: 1, country: 'Ethiopia', flag: '🇪🇹', production: '~8.5–11.6M bags', productionNum: 9, share: '~5–7% global' },
      { rank: 2, country: 'Uganda', flag: '🇺🇬', production: '~6.7–8.4M bags', productionNum: 7, share: '~3.8–4% global' },
    ],
    snapshot: {
      production: '~22.78M bags (2024/25)',
      annual: 'African output, up 7.6% YoY',
      global: '~178.7M bags',
      share: '~10–15%',
    },
    basins: [
      { id: 'GEO-AGR-COF-EAF-001', name: 'East African Coffee Highlands', country: 'Ethiopia • Uganda • Kenya • Rwanda • Tanzania', environment: 'Onshore highland', grades: [] },
      { id: 'GEO-AGR-COF-WAF-002', name: "West African Robusta Belt", country: "Côte d'Ivoire", environment: 'Onshore lowland', grades: [] },
    ],
    environment: {
      onshore: ['Ethiopian highlands', 'Ugandan highlands', 'Kenyan highlands', 'Rwandan highlands', 'Tanzanian highlands', "Côte d'Ivoire lowlands"],
      offshore: [],
      deepwater: [],
    },
    infrastructure: {
      extraction: ['Smallholder highland farms'],
      midstream: ['Local cooperatives', 'Buying stations', 'National coffee marketing bodies (Ethiopian Coffee and Tea Authority, UCDA)'],
      export: ['Port of Djibouti (Ethiopia)', 'Regional East African ports (Uganda, Tanzania, Kenya)'],
      processing: ['EU/US roasting facilities', 'Specialty roasters'],
    },
    flow: ['Smallholder Highland Farm', 'Local Cooperative/Buying Station', 'National Marketing/Regulatory Body', 'Port', 'International Shipping', 'Roasting/Specialty Markets'],
    drivers: [
      'Tree rejuvenation programs (Ethiopia)',
      'Government Coffee Roadmap (Uganda)',
      'Specialty demand growth',
      'G25 African Coffee Summit 20%-by-2030 target',
    ],
    constraints: [
      'Ethiopia production data uncertainty (ICO vs USDA)',
      'Red Sea shipping disruption',
      'Brazilian weather-driven price volatility',
      'Looming price correction risk (2026/27)',
      'Data/forecasting divergence',
    ],
    opportunities: [
      'Continued replanting-driven yield gains',
      'Specialty/premium positioning',
      'Growing Middle East/Asian demand',
      'Auction digitization (Kenya model)',
      'Coordinated continental market-share recovery',
    ],
  },

  connectedEntities: [
    { name: 'Ethiopia', flag: '🇪🇹', count: 5, kind: 'Origin' },
    { name: 'Uganda', flag: '🇺🇬', count: 5, kind: 'Origin' },
    { name: 'Tanzania', flag: '🇹🇿', count: 3, kind: 'Origin' },
    { name: 'Kenya', flag: '🇰🇪', count: 3, kind: 'Origin' },
    { name: 'European Union', flag: '🇪🇺', count: 3, kind: 'Market' },
    { name: 'USA', flag: '🇺🇸', count: 3, kind: 'Market' },
    { name: 'International Coffee Organization', count: 3, kind: 'Institution' },
    { name: 'Uganda Coffee Development Authority', count: 2, kind: 'Institution' },
    { name: 'G25 African Coffee Summit', count: 2, kind: 'Institution' },
  ],

  news: [
    {
      title: 'Africa exports record 1.18M tonnes of coffee',
      summary: 'First time continental shipments exceeded one million tonnes, driven by Ethiopia and Uganda.',
      date: '2024/25',
      impact: 'high',
    },
    {
      title: "Uganda surpasses Ethiopia as Africa's #1 coffee exporter",
      summary: 'Uganda shipped 7.93–8.4M bags in twelve months to mid-2025.',
      date: '2025',
      impact: 'high',
    },
    {
      title: 'G25 Summit targets 20% global market share by 2030',
      summary: "Coordinated continental effort to restore Africa's coffee production share.",
      date: '2025',
      impact: 'medium',
    },
  ],

  flags: [
    "Significant production-data uncertainty — ICO estimates ~8.5M bags for Ethiopia 2025/26 vs USDA's 11.6M bags.",
    "Looming global price correction risk as Brazil's record 2026/27 harvest accumulates.",
    'Red Sea shipping disruption adding 10–15 days to Ethiopian Djibouti-routed exports.',
  ],
};
