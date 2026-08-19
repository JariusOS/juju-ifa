# JUJU IFA — Roadmap

## Architecture Overview

```
juju-ifa/
├── src/data/                    ← BACKEND: All intelligence data
│   ├── types.ts                 ← Commodity, Section, Briefing interfaces
│   ├── commodities.ts           ← Registry: master modules + index overlay
│   ├── comids.ts                ← COM ID scheme (TYPE-NAME3-RANK)
│   ├── sections.ts              ← buildSections() assembler
│   ├── module-extras.ts         ← Advanced sections + briefings
│   ├── build.ts                 ← Clean factory for index entries
│   ├── master-100.ts            ← 100-record commodity index
│   ├── master-types.ts          ← Taxonomy helpers
│   ├── countries.ts             ← Country names + flags
│   └── *.ts                     ← 13 master module files (immutable)
│
├── src/app/                     ← FRONTEND: Next.js App Router
│   ├── layout.tsx               ← Standalone IFA shell
│   ├── page.tsx                 ← Commodity index (search + feed)
│   ├── nodes/[id]/page.tsx      ← Commodity profile router
│   └── nodes/[id]/_components/  ← UI components
│       ├── CommodityProfile.tsx ← Profile layout (hero + sections)
│       ├── SectionCard.tsx      ← Generic section renderer
│       ├── MiniDonut.tsx        ← SVG donut chart
│       ├── BarGroup.tsx         ← Histogram bars
│       ├── theme.ts             ← Vulcan theme
│       └── *View.tsx            ← Legacy tab views (DNA, Info, etc.)
│
├── src/api/                     ← API routes
│   └── neo4j/route.ts           ← Neo4j query endpoint (for non-commodity nodes)
```

### Data Authority Model
- **Master modules** (13 files) = immutable authority. Never modify without permission.
- **100-record index** = reference-grade (~50% confidence). Never overrides master data.
- **Registry** (`commodities.ts`) combines both: master modules take priority, index fills gaps.
- **Sections engine** (`sections.ts`) assembles 17+ structured blocks from raw Commodity fields.

---

## Completed — Session 19 Aug 2026

- [x] 13 master module data files with full structured intelligence
- [x] 100-record commodity index parsed from jujuCOM-final.md
- [x] COM ID scheme: COM-{TYPE}-{NAME3}-{RANK}, validated 100/100
- [x] Sections engine: buildSections() + extrasToSections()
- [x] Module extras: strategic/ecosystem/countries/risk/opportunities/drivers/history/nuggets/network/summary for all 13 masters
- [x] Crude Oil full Intelligence Briefing (Top 10 items)
- [x] Generic SectionCard renderer (prose/kv/chips/table/ranking/risk/network)
- [x] CommodityProfile: hero + sticky rail + sections + briefing
- [x] Commodity index: search + type rails + sort + ranked feed
- [x] Country names + flags for ~103 countries
- [x] Standalone IFA shell (no dashboard/graph chrome)
- [x] tsc + lint + next build all green
- [x] Dev server verified on :3000, prod on :3210

---

## Phase 2 — Flesh Out Remaining 87 Commodities (Priority)

### Goal
Expand the 87 index-only commodities to have full master-module-level intelligence data, starting with the highest-value exports.

### Approach
1. **Auto-populate from existing index data** — Each of the 100 records already has: export value, YoY, country, HS code, confidence, node tags. Fill in what we can without external research.
2. **Group by type** and batch-expand:
   - **ENE** (7): Crude Oil ✓, LNG ✓, Coal ✓, Refined Products ✓, Natural Gas, Uranium, Electricity
   - **PMN** (2): Gold ✓, Silver
   - **MET** (12): Iron Ore ✓, Copper ✓, PGMs ✓, Diamonds ✓, Cobalt ✓, Aluminium*, Aluminium Ingots*, Steel & Iron*, Tin, Zinc, Lead, Nickel, Manganese
   - **CRM** (4): Copper ✓, Rare Earths, Lithium, Titanium
   - **MIN** (8): Bauxite ✓, Phosphate ✓, Fluorspar, Gypsum, Magnesium, Mica, Talc, Zircon
   - **AGR** (25+): Cocoa ✓, Coffee, Cotton, Tobacco, Sesame, Cashew, Rubber, Vanilla, Cloves, etc.
   - **MAR** (3): Salt, Seaweed, Fish/Shrimp
   - **FOR** (5): Gum Arabic, Timber, African Blackwood, Bamboo, Cork
   - **CHM** (2): Fertilizers, Petrochemicals
3. **For each commodity**, generate a module file with:
   - Snapshot (type, HS, lead country, lead value, summary)
   - Production (top 3–5 producers)
   - Trade (top 6 export destinations, top 3 import sources)
   - DNA (infrastructure requirements, compliance, storage)
   - Price benchmarks (where available)
   - Strategic intelligence (3–5 bullet points)
   - Risk / Opportunities (3–5 each)
   - Historical trend (5-year direction if known)

### Blockers
- Many commodities lack production/consumer/reserve data in the index. Need either:
  - External data source (UN Comtrade, USGS, IEA, etc.)
  - Captain's domain knowledge to fill gaps
  - Conservative approach: only populate fields where we have high confidence

---

## Phase 3 — Node Types Beyond Commodities

### Geo Nodes (Countries/Regions)
- Country profiles with flag, population, GDP, trade balance
- Regional groupings (ECOWAS, EAC, SADC, AfCFTA zones)
- Production hotspots per commodity

### Port Nodes
- Seaports (Apapa/Lagos, Durban, Mombasa, Tema, Dar es Salaam, etc.)
- Dry ports / inland container depots
- Cargo throughput, draft, berth count, modal connectivity
- Connected commodities (what flows through each port)

### Belt & Basin Nodes
- Mining basins (Congo Copperbelt, Witwatersrand, Pilbara equivalent)
- Oil basins (Niger Delta, Johan Sverdrift, presalt)
- Pipeline networks and corridors
- Linked to origin sections in commodity modules

### Special Economic Zones
- Free trade zones, industrial parks, export processing zones
- Tax incentives, infrastructure, connected ports
- Active commodities processed in each zone

### Industrial Hubs
- Smelting/refining complexes
- Agro-processing zones
- Petrochemical clusters

---

## Phase 4 — Historical Data (5-Year)

### For Each Commodity
- Export value trend (2021–2026)
- Production volume trend
- Price trend (annual average)
- Trade flow shifts (new destinations, lost markets)
- Significant events timeline

### For Ports
- Throughput trend (TEUs, tonnage)
- Capacity utilization
- Expansion projects

---

## Phase 5 — UI/UX Advancements

### Module-Aware 3-Tab Profile
- **MASTER** tab: All 17 sections with expand/collapse
- **DNA** tab: Infrastructure, compliance, logistics details
- **ORIGIN** tab: Geographic/basin/port/zone intelligence
- Chart/list toggle switches per section
- Persona switcher for Intelligence Briefings (Investor / Trader / Policy / Logistics)

### Commodity Images
- Hero images per commodity (photographs, satellite, diagrams)
- Flag overlays for lead country
- Map visualization for trade routes

### Social Media Intelligence Interface
- Card-based feed with swipe/scroll
- Real-time data injection engine
- Commodity-to-commodity linking ("also traded by...")
- Alert system for value spikes, YoY anomalies

### Landing Page
- Hero with animated commodity grid
- Featured Intelligence Briefings
- Regional heatmap
- Search bar with typeahead

---

## Phase 6 — Backend Reorganization

### Refactor Goals
- Separate data layer from UI completely
- Create a clean data API (`/api/commodities`, `/api/commodities/[id]`, etc.)
- Make all data consumable by any frontend (not just Next.js)
- Standardize section types across all commodities
- Add data validation schemas (Zod or similar)
- Create a data compiler that assembles the final commodity objects at build time

### Labeling Standards
- Consistent field naming across all modules
- Section key constants (no magic strings)
- Type-safe section accessors
- Documentation of every field's meaning and source

---

## Naming Notes

- **JUJU** = Juice (the platform)
- **IFA** = Intelligence Fusion Architecture
- **Captain** = the boss
- **Node** = any entity in the knowledge graph (commodity, country, port, zone, etc.)
- **Module** = a structured data bundle for a commodity (13 master modules exist)
- **Section** = one block within a module (e.g., "Strategic Intelligence", "Risk")
- **Briefing** = the Intelligence Briefing (Top 10 format)
- **COM ID** = `COM-{TYPE}-{NAME3}-{RANK}` unique identifier
