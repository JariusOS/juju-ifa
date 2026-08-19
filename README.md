# JUJU IFA — Intelligence Fusion Architecture

Africa's commodity export intelligence platform. Structured data for 100 commodities across 13 master modules, with search, profiles, and intelligence briefings.

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000 (hot reload)
npm run build      # production build
npx next start -p 3210  # production server
```

## What's Inside

### Commodity Index (`/`)
Ranked feed of 100 African commodities. Search by name, COM ID, HS code, or tags. Filter by type (ENE/PMN/MET/CRM/MIN/AGR/MAR/FOR/CHM). Sort by rank, export value, YoY growth, or confidence.

### Commodity Profile (`/nodes/{id}`)
Social-media-style intelligence page per commodity:
- **Hero**: rank badge, COM ID, type, HS code, node tags
- **Live Overview**: producer donuts, exporter/importer bars
- **17+ Sections**: Snapshot, Production, Trade, DNA, Strategic Intelligence, Risk, Opportunities, Market Drivers, Historical, Network, and more
- **Intelligence Briefing**: Top-10 format with Classification/Core Brief/Impact/Opportunity (Crude Oil complete; others pending)

### COM ID Format
`COM-{TYPE}-{NAME3}-{RANK}` — e.g., `COM-ENE-OIL-001` (Crude Oil, rank 1), `COM-CRM-COP-002` (Copper, rank 2).

## Data Architecture

```
src/data/
├── commodities.ts      ← Registry (master modules + index overlay)
├── comids.ts           ← ID scheme + derivation
├── sections.ts         ← buildSections() assembler
├── module-extras.ts    ← Advanced intelligence sections
├── master-100.ts       ← 100-record index (reference-grade)
├── countries.ts        ← 103 country names + flags
├── crude-oil.ts        ← 13 master module files
├── copper.ts              (immutable authority — full structured data)
├── gold.ts
├── cocoa.ts
├── pgms.ts
├── diamonds.ts
├── iron-ore.ts
├── cobalt.ts
├── coal.ts
├── bauxite.ts
├── phosphate.ts
├── natural-gas-lng.ts
└── refined-products.ts
```

**Authority model**: Master modules are immutable. The 100-record index is reference-grade (~50% confidence). Master data always wins.

## Tech Stack
- Next.js 16 (App Router)
- TypeScript
- React 19
- Tailwind CSS
- Neo4j (optional, for non-commodity nodes)

## Project Docs
- `SESSION-2026-08-19.md` — Session summary (what was built)
- `ROADMAP.md` — Architecture overview, completed work, and next phases
- `jujuCOM-final.md` — Source data: 100-commodity master file

## License
Private — JUJU Platform
