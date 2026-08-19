// COM ID scheme: COM-{TYPE}-{NAME3}-{RANK}
// TYPE: ENE Energy | PMN Precious Minerals | MET Metals | CRM Critical Minerals
//       FOR=Forestry | MIN Minerals | AGR Agricultural | MAR Marine | CHM Chemical
// NAME3 = 3-letter code, unique per type. Rank = export rank zero-padded (001..100).
// COM_DEFS are ordered by export rank 1..100 and aligned against MASTER_100.

export type ComType =
  | 'ENE' | 'PMN' | 'MET' | 'CRM' | 'FOR' | 'MIN' | 'AGR' | 'MAR' | 'CHM';

export const TYPE_LABEL: Record<ComType, string> = {
  ENE: 'Energy',
  PMN: 'Precious Minerals',
  MET: 'Metals',
  CRM: 'Critical Minerals',
  FOR: 'Forestry',
  MIN: 'Minerals',
  AGR: 'Agricultural',
  MAR: 'Marine',
  CHM: 'Chemical',
};

// [rank, type, name3] ordered by export rank 1..100
export const COM_DEFS: [number, ComType, string][] = [
  [1, 'ENE', 'OIL'],   // Crude Oil
  [2, 'CRM', 'COP'],   // Copper
  [3, 'PMN', 'GLD'],   // Gold
  [4, 'ENE', 'LNG'],   // Natural Gas & LNG
  [5, 'AGR', 'COC'],   // Cocoa Beans
  [6, 'PMN', 'PGM'],   // Platinum Group Metals
  [7, 'PMN', 'DIA'],   // Diamonds
  [8, 'MET', 'IRO'],   // Iron Ore
  [9, 'MIN', 'PHO'],   // Phosphates
  [10, 'CRM', 'COB'],  // Cobalt
  [11, 'MIN', 'BAX'],  // Bauxite
  [12, 'ENE', 'COL'],  // Coal
  [13, 'ENE', 'RPT'],  // Refined Petroleum
  [14, 'AGR', 'COF'],  // Coffee
  [15, 'CRM', 'MNG'],  // Manganese Ore
  [16, 'AGR', 'CIT'],  // Citrus Fruits
  [17, 'MET', 'ALU'],  // Aluminium
  [18, 'AGR', 'CTN'],  // Cotton
  [19, 'AGR', 'TOB'],  // Tobacco
  [20, 'AGR', 'TEA'],  // Tea
  [21, 'AGR', 'CSH'],  // Cashew Nuts
  [22, 'CHM', 'FRT'],  // Fertilizers
  [23, 'CRM', 'NIC'],  // Nickel
  [24, 'MET', 'ZNC'],  // Zinc
  [25, 'ENE', 'URN'],  // Uranium
  [26, 'AGR', 'SES'],  // Sesame Seeds
  [27, 'AGR', 'AVO'],  // Avocados
  [28, 'AGR', 'SUG'],  // Sugar
  [29, 'CRM', 'LIT'],  // Lithium
  [30, 'CRM', 'REE'],  // Rare Earth Elements
  [31, 'CRM', 'CTL'],  // Coltan (Tantalum/Niobium)
  [32, 'AGR', 'RUB'],  // Rubber
  [33, 'AGR', 'BAN'],  // Bananas
  [34, 'FOR', 'TIM'],  // Timber Logs
  [35, 'FOR', 'SAW'],  // Sawn Wood
  [36, 'MAR', 'FSH'],  // Fish & Seafood
  [37, 'CHM', 'PHA'],  // Phosphoric Acid
  [38, 'CHM', 'URE'],  // Urea
  [39, 'AGR', 'FLW'],  // Cut Flowers
  [40, 'AGR', 'PLM'],  // Palm Oil
  [41, 'MIN', 'MIC'],  // Mica & Industrial Minerals
  [42, 'CRM', 'CHR'],  // Chromium Ore
  [43, 'CRM', 'GRA'],  // Graphite
  [44, 'AGR', 'CPX'],  // Cocoa Products
  [45, 'MIN', 'GYP'],  // Gypsum
  [46, 'MIN', 'KLA'],  // Kaolin & Clays
  [47, 'MAR', 'SLT'],  // Salt
  [48, 'AGR', 'SHE'],  // Shea Products
  [49, 'CHM', 'AMM'],  // Ammonia
  [50, 'MIN', 'CMT'],  // Cement
  [51, 'AGR', 'VAN'],  // Vanilla
  [52, 'AGR', 'HNY'],  // Honey
  [53, 'AGR', 'LTH'],  // Leather & Hides
  [54, 'AGR', 'SPC'],  // Spices (Pepper, Ginger, etc.)
  [55, 'MET', 'STL'],  // Steel & Iron Products
  [56, 'AGR', 'OLV'],  // Olive Oil
  [57, 'MIN', 'LIM'],  // Limestone
  [58, 'AGR', 'MAI'],  // Maize / Corn
  [59, 'MET', 'LED'],  // Lead
  [60, 'CRM', 'TIO'],  // Titanium Ore (Ilmenite/Rutile)
  [61, 'CRM', 'ZIR'],  // Zirconium & Mineral Sands
  [62, 'AGR', 'WIN'],  // Wine
  [63, 'AGR', 'TOM'],  // Tomatoes & Tomato Products
  [64, 'FOR', 'GUM'],  // Gum Arabic
  [65, 'MAR', 'OCT'],  // Octopus
  [66, 'AGR', 'POT'],  // Potatoes
  [67, 'CRM', 'TIN'],  // Tin
  [68, 'AGR', 'FED'],  // Animal Feed & Oilseed Products
  [69, 'AGR', 'CBT'],  // Cocoa Butter
  [70, 'CHM', 'PHF'],  // Phosphate Fertilizers
  [71, 'AGR', 'SCR'],  // Raw Sugar Cane Products
  [72, 'AGR', 'GRN'],  // Groundnuts (Peanuts)
  [73, 'MET', 'ALW'],  // Aluminium Ingots & Unwrought Aluminium
  [74, 'MAR', 'TUN'],  // Tuna
  [75, 'AGR', 'CLO'],  // Cloves
  [76, 'AGR', 'CNC'],  // Coconut Products
  [77, 'AGR', 'MAC'],  // Macadamia Nuts
  [78, 'AGR', 'DAT'],  // Dates
  [79, 'MAR', 'SHR'],  // Shrimp & Prawns
  [80, 'AGR', 'ONI'],  // Onions
  [81, 'AGR', 'ORG'],  // Oranges
  [82, 'AGR', 'GIN'],  // Ginger
  [83, 'AGR', 'PUL'],  // Chickpeas & Pulses
  [84, 'AGR', 'SUN'],  // Sunflower Products
  [85, 'AGR', 'SEO'],  // Sesame Oil
  [86, 'MAR', 'FPR'],  // Frozen & Processed Fish
  [87, 'AGR', 'CAS'],  // Cassava (dried/starch)
  [88, 'PMN', 'SLV'],  // Silver
  [89, 'CRM', 'ANT'],  // Antimony
  [90, 'CRM', 'VAD'],  // Vanadium
  [91, 'AGR', 'ARG'],  // Argan Oil
  [92, 'MIN', 'FLU'],  // Fluorspar
  [93, 'AGR', 'SIS'],  // Sisal
  [94, 'MIN', 'VER'],  // Vermiculite
  [95, 'MIN', 'TLC'],  // Talc
  [96, 'MIN', 'FEL'],  // Feldspar
  [97, 'AGR', 'PYR'],  // Pyrethrum
  [98, 'CRM', 'WOL'],  // Tungsten
  [99, 'FOR', 'FRK'],  // Frankincense & Myrrh
  [100, 'MAR', 'SEA'], // Seaweed
];

// Candidate-for-replacement flags (duplicated value chains kept until replaced).
export const FLAGS: Record<string, string[]> = {
  'Aluminium': [
    'Candidate for replacement — value chain overlaps Aluminium Ingots (rank 73).',
  ],
  'Aluminium Ingots & Unwrought Aluminium': [
    'Candidate for replacement — value chain overlaps Aluminium (rank 17).',
  ],
  'Steel & Iron Products': [
    'Candidate for replacement — downstream of Iron Ore (rank 8).',
  ],
};

export function padRank(rank: number): string {
  return String(rank).padStart(3, '0');
}

export function comIdFor(rank: number, type: ComType, name3: string): string {
  return `COM-${type}-${name3}-${padRank(rank)}`;
}

export function deriveComId(rank: number, name: string): string {
  const def = COM_DEFS.find((d) => d[0] === rank);
  if (!def) throw new Error(`No COM definition for rank ${rank} (${name})`);
  return comIdFor(def[0], def[1], def[2]);
}

// Human-readable map for review, keyed by rank.
export const COM_MAP: Record<number, { name: string; type: ComType; name3: string; comId: string }> = {};

export function registerName(rank: number, resolvedName: string): void {
  const def = COM_DEFS.find((d) => d[0] === rank);
  if (!def) return;
  COM_MAP[rank] = {
    name: resolvedName,
    type: def[1],
    name3: def[2],
    comId: comIdFor(def[0], def[1], def[2]),
  };
}