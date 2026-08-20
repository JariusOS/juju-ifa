# JUJU IFA Explorer

Africa's commodity intelligence platform — real-time data across 18 commodity sectors and 54 economies. Built for analysts, investors, and policymakers.

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000 (landing page)
npx next start -p 3210  # production server
```

## Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Landing page (conversion-focused) |
| `/explorer` | Static | Commodity Index — 18 sectors, 4 view modes |
| `/geos` | Static | Geography Index — 54 countries, 5 regions |
| `/geos/[slug]` | Dynamic | Country profile — exports, metrics, briefing |
| `/nodes` | Static | Node index |
| `/nodes/[id]` | Dynamic | Commodity profile — sections, briefing, network |

## What's Inside

### Commodity Index (`/explorer`)
Ranked feed of 18 African commodity sectors. Search by name, COM ID, HS code, or tags. Filter by type (ENE/PMN/MET/CRM/MIN/AGR/MAR/FOR/CHM). Sort by Rank, Export $, Price, Africa %, YoY, Confidence, Name, Weight, Global $.

### Geography Index (`/geos`)
54 African economies ranked by export value. Filter by tier (Elite/Standard/Emerging) and region (North/West/Central/East/Southern). Sort by Export $, Share %, GDP, GDP/Cap, Population, Life Exp, Min Wage, Name.

### Commodity Profile (`/nodes/{id}`)
Full intelligence page per commodity:
- Hero with rank badge, COM ID, type, confidence ring
- Live Overview: producer donuts, exporter/importer bars
- 17+ sections: Snapshot, Production, Trade, DNA, Risk, Opportunities, etc.
- Intelligence Briefing: Top-10 format with Classification/Core/Impact/Opportunity
- Similar/Related/Mentioned nodes

### Geo Profile (`/geos/{slug}`)
Full country intelligence page:
- Hero with tier badge, ISO codes, export value, continental share
- Top 5 Exports with bar chart visualization
- Profile Metrics: Population, GDP, GDP/Capita, Life Exp, Min Wage, Poverty, Literacy
- Economic Assets: ports, mines, corridors
- Connected Commodities & Geographies
- Auto-generated intelligence news (5 headlines)
- Strategic Briefing (tier-adapted)

### COM ID Format
`COM-{TYPE}-{NAME3}-{RANK}` — e.g., `COM-ENE-OIL-001` (Crude Oil, rank 1).

## Data Architecture

```
src/data/
├── types.ts               ← Commodity + GeoNode interfaces
├── commodities.ts         ← Registry: 18 master modules
├── comids.ts              ← ID scheme
├── sections.ts            ← buildSections() assembler
├── module-extras.ts       ← All 18 module extras + briefings
├── build.ts               ← Clean factory for index entries
├── master-100.ts          ← 100-record commodity index
├── master-types.ts        ← Taxonomy helpers
├── countries.ts           ← Country names + flags
├── geonodes.ts            ← 54 GeoNode country profiles
└── *.ts                   ← 18 master module files (immutable)
```

## Visual Key

| Color | Meaning |
|-------|---------|
| Gold `#D4A82E` | GEO (countries/regions) |
| Green `#34D399` | COM (commodities) |
| Blue `#60A5FA` | BIZ (businesses/entities) |
| Purple `#A78BFA` | Relationships |

## Theme Modes
- **Dark** — `#0B1120` background
- **Light** — `#F8FAFC` background (high contrast)
- **Cream** — `#FAF7F0` background

## Tech Stack
- Next.js 16 (App Router, Turbopack)
- TypeScript 5.9
- React 19
- Inter + JetBrains Mono fonts
- CSS Custom Properties theming
- Neo4j (optional)

## Project Docs
- `ROADMAP.md` — Architecture overview, completed work, next phases
- `SESSION-2026-08-19.md` — Session 1 summary

## License
Private — JUJU Platform
