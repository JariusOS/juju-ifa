import type { Commodity } from './types';
import { MASTER_100 } from './master-100';
import { buildFromIndex } from './build';
import { deriveComId, FLAGS } from './comids';
import { buildSections } from './sections';
import { MODULE_EXTRAS, extrasToSections } from './module-extras';
import { crudeOil } from './crude-oil';
import { copper } from './copper';
import { naturalGasLng } from './natural-gas-lng';
import { gold } from './gold';
import { cocoa } from './cocoa';
import { pgms } from './pgms';
import { diamonds } from './diamonds';
import { ironOre } from './iron-ore';
import { phosphate } from './phosphate';
import { cobalt } from './cobalt';
import { bauxite } from './bauxite';
import { coal } from './coal';
import { refinedProducts } from './refined-products';
import { coffee } from './coffee';
import { manganese } from './manganese';
import { citrus } from './citrus';
import { aluminium } from './aluminium';
import { cashew } from './cashew';

// MASTER MODULES — the authority. Never mutated by the commodity index.
// Only identity fields (derived comId, nodeTags, rankLabel, flags) are
// overlaid here at the registry layer; the master module data is untouched.
const MASTER_MODULES: Record<string, Commodity> = {
  'Crude Oil': crudeOil,
  'Copper': copper,
  'Natural Gas & LNG': naturalGasLng,
  'Gold': gold,
  'Cocoa Beans': cocoa,
  'Platinum Group Metals': pgms,
  'Diamonds': diamonds,
  'Iron Ore': ironOre,
  'Phosphates': phosphate,
  'Cobalt': cobalt,
  'Bauxite': bauxite,
  'Coal': coal,
  'Refined Petroleum': refinedProducts,
  'Coffee': coffee,
  'Manganese': manganese,
  'Citrus': citrus,
  'Aluminium': aluminium,
  'Cashew': cashew,
};

function attach(c: Commodity, rec: (typeof MASTER_100)[number]): Commodity {
  const extras = MODULE_EXTRAS[rec.name];
  return {
    ...c,
    sections: [...buildSections(c), ...(extras ? extrasToSections(extras) : [])],
    briefing: extras?.briefing,
  };
}

export const commodities: Commodity[] = MASTER_100.map((rec) => {
  const master = MASTER_MODULES[rec.name];
  if (master) {
    return attach({
      ...master,
      id: deriveComId(rec.rank, rec.name),
      nodeTags: rec.tags,
      rankLabel: `#${rec.rank} Africa Export`,
      flags: FLAGS[rec.name],
    }, rec);
  }
  return attach(buildFromIndex(rec), rec);
});

export function getCommodityById(id: string): Commodity | undefined {
  const normalized = id.trim().toLowerCase();
  return commodities.find(
    (c) =>
      c.id.toLowerCase() === normalized ||
      c.slug.toLowerCase() === normalized
  );
}

export function getCommodityByRank(rank: number): Commodity | undefined {
  return commodities.find((c) => c.id.endsWith(`-${String(rank).padStart(3, '0')}`));
}

export function getCommodityByName(name: string): Commodity | undefined {
  const n = name.trim().toLowerCase();
  return commodities.find((c) => c.name.toLowerCase() === n);
}