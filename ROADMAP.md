# JUJU IFA — Roadmap

## Architecture Overview

```
juju-ifa/
├── src/data/                    ← BACKEND: All intelligence data
│   ├── types.ts                 ← Commodity + GeoNode interfaces
│   ├── commodities.ts           ← Registry: 18 master modules
│   ├── geonodes.ts              ← 54 GeoNode country profiles
│   ├── comids.ts                ← COM ID scheme
│   ├── sections.ts              ← buildSections() assembler
│   ├── module-extras.ts         ← 18 module extras + briefings
│   ├── build.ts                 ← Clean factory
│   ├── master-100.ts            ← 100-record index
│   ├── master-types.ts          ← Taxonomy helpers
│   ├── countries.ts             ← Country names + flags
│   └── *.ts                     ← 18 master module files (immutable)
│
├── src/app/                     ← FRONTEND: Next.js App Router
│   ├── page.tsx                 ← Landing page (conversion)
│   ├── explorer/page.tsx        ← Commodity Index (the app)
│   ├── geos/page.tsx            ← Geography Index
│   ├── geos/[slug]/page.tsx     ← Country profile
│   ├── nodes/[id]/page.tsx      ← Commodity profile router
│   └── nodes/[id]/_components/  ← UI components
│       ├── CommodityProfile.tsx ← Profile layout
│       ├── SectionCard.tsx      ← Generic section renderer
│       ├── MiniDonut.tsx        ← SVG donut chart
│       ├── BarGroup.tsx         ← Histogram bars
│       └── theme.ts             ← Theme constants
│
├── src/lib/
│   └── theme-context.tsx        ← ThemeProvider (dark/light/cream)
│
└── src/api/
    └── neo4j/route.ts           ← Neo4j query endpoint
```

---

## Completed — Phase 1-4 (19-20 Aug 2026)

### Data Layer
- [x] 18 master module data files (Crude Oil, Copper, Gold, Cocoa, PGMs, Diamonds, Iron Ore, Cobalt, Coal, Bauxite, Phosphate, Natural Gas/LNG, Refined Products, Coffee, Manganese, Citrus, Aluminium, Cashew)
- [x] 100-record commodity index parsed from jujuCOM-final.md
- [x] COM ID scheme: COM-{TYPE}-{NAME3}-{RANK}, validated 100/100
- [x] Sections engine: buildSections() + extrasToSections()
- [x] Module extras: full intelligence for all 18 modules
- [x] Intelligence Briefings: Top-10 format for all 18 modules
- [x] 54 GeoNode country profiles (7 Elite, 20 Standard, 27 Emerging)
- [x] GeoNode data: export value, GDP, demographics, top 5 exports, economic assets, narratives
- [x] Country names + flags for ~103 countries

### UI Layer
- [x] Landing page at `/` with hero, stats, value props, CTA
- [x] Commodity Index at `/explorer` — 4 view modes (table/cards/grid/list)
- [x] Geography Index at `/geos` — 4 view modes, tier/region filters
- [x] Commodity Profile — hero, sections, briefing, connected nodes
- [x] Geo Profile — hero, exports, metrics, assets, news, briefing
- [x] Similar/Related/Mentioned bottom sections on all profile pages
- [x] Auto-generated intelligence news on geo profiles
- [x] Theme system: Dark (#0B1120), Light (#F8FAFC), Cream (#FAF7F0)
- [x] Font: Inter (UI) + JetBrains Mono (data)
- [x] Logo: SVG bilateral symmetry + portal symbol
- [x] Mobile responsive: horizontal table scroll, compact cells
- [x] Sort/filter on separate lines for both indexes

### Quality
- [x] tsc --noEmit: zero errors
- [x] next build: all routes compile
- [x] Git: 9 commits, tagged v0.1-ifa-one
- [x] GitHub: all code pushed and backed up

---

## Phase 5 — Next Steps (Week of 21-27 Aug 2026)

### Priority 1: Data Enrichment
- [ ] Expand remaining index-only commodities to master-module level
- [ ] Fill production/consumer/reserve data gaps
- [ ] Add missing Intelligence Briefings (17 of 18 complete)
- [ ] Historical trend data (5-year export/price/production)

### Priority 2: UI Polish
- [ ] Chart components (line charts for price trends, bar charts for production)
- [ ] Map visualization for trade routes and country connections
- [ ] Persona switcher for briefings (Investor/Trader/Policy/Logistics)
- [ ] Alert system for value spikes and YoY anomalies
- [ ] Search typeahead with autocomplete

### Priority 3: Node Types
- [ ] Port Nodes (Apapa, Durban, Mombasa, Tema, Dar es Salaam)
- [ ] Belt & Basin Nodes (Congo Copperbelt, Witwatersrand)
- [ ] Special Economic Zones
- [ ] Industrial Hubs

### Priority 4: Backend
- [ ] Clean data API (/api/commodities, /api/geos)
- [ ] Data validation schemas (Zod)
- [ ] Data compiler for build-time assembly

---

## Known Issues / Errors to Tackle

1. **Reserve Value sorting** — Most `africanReserveValue` entries are text descriptions, not numeric. Need to standardize to numeric values for proper sorting.
2. **Legacy View components** — DNA/Info/Origin/Master views in `nodes/[id]/_components/` are unused. Can be cleaned up.
3. **Neo4j integration** — `/api/neo4j` endpoint exists but is not connected to any frontend features yet.
4. **Commodity count discrepancy** — Registry has 18 modules but index has 100 records. 82 index-only commodities need expansion.
5. **Geo profile Connected Commodities links** — Links to `/nodes/{name}` use commodity name as ID, which may not match actual COM IDs. Needs resolver.

---

## Naming Notes

- **JUJU** = Juice (the platform)
- **IFA** = Intelligence Fusion Architecture
- **Captain** = the boss
- **Node** = any entity (commodity, country, port, zone)
- **Module** = structured data bundle for a commodity
- **Section** = one block within a module
- **Briefing** = Intelligence Briefing (Top 10 format)
- **COM ID** = `COM-{TYPE}-{NAME3}-{RANK}`
- **GeoNode** = `GEO-{ISO3}-{RANK}`
