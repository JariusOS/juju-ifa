import type { Section, Briefing } from './sections';

export interface ModuleExtras {
  strategic?: { title: string; points: string[] }[];
  ecosystem?: { title: string; actors: string[] }[];
  countries?: { name: string; role: string; body: string }[];
  criticalInfra?: string[];
  risk?: { tier: string; level: string; factors: string[] }[];
  opportunities?: { title: string; items: string[] }[];
  marketDrivers?: { title: string; items: string[] }[];
  historical?: { title: string; items: string[] }[];
  nuggets?: string[];
  network?: { group: string; links: string[] }[];
  summary?: { key: string; value: string }[];
  briefing?: Briefing;
}

export const MODULE_EXTRAS: Record<string, ModuleExtras> = {
  'Crude Oil': {
    strategic: [
      { title: 'Energy Security', points: [
        'Crude oil remains a foundational energy input for global transportation and industrial systems.',
        'African crude creates strategic relationships between African producing states → global refineries → consuming economies.',
      ] },
      { title: 'Producer Leverage', points: [
        'Major producers derive strategic influence from reserve size, production/export capacity, grade quality, geographic position and infrastructure access.',
      ] },
      { title: 'Consumer Dependency', points: [
        'Major importing economies depend on stable supply to maintain refinery utilization, transportation, industrial and petrochemical production.',
      ] },
      { title: 'Transit-State Importance', points: [
        'Egypt carries strategic weight beyond domestic production via the Suez Canal, SUMED Pipeline, Mediterranean infrastructure and Red Sea access.',
      ] },
    ],
    ecosystem: [
      { title: 'Corporate Actors', actors: [
        'National Oil Companies', 'International Oil Companies', 'Independent producers', 'Oilfield-service companies',
        'Drilling contractors', 'Commodity traders', 'Refiners', 'Shipping companies', 'Terminal operators',
        'Pipeline operators', 'Storage operators', 'Financial institutions', 'Technology providers',
      ] },
      { title: 'Institutional Actors', actors: [
        'OPEC', 'OPEC+', 'National petroleum ministries', 'Petroleum regulators', 'National oil companies',
        'Regional institutions', 'Trade organizations', 'Financial institutions',
      ] },
    ],
    countries: [
      { name: 'Nigeria', role: "Africa's largest crude producer", body: 'Production ~1.345M b/d, origin Niger Delta. Grades: Bonny Light, Qua Iboe, Forcados, Bonga, Escravos. Risks: theft, vandalism, aging infrastructure, underinvestment. Opportunities: deepwater, marginal fields, pipeline rehabilitation, domestic refining.' },
      { name: 'Libya', role: "Africa's largest proven reserve holder", body: 'Production ~1.136M b/d, reserves ~48B bbl. Origins Sirte & Murzuq. Grades: Es Sider, Sharara, Sarir. Risks: political fragmentation, field shutdowns, export disruption. Opportunities: stabilization, redevelopment, exploration.' },
      { name: 'Angola', role: 'Major African deepwater producer', body: 'Production ~1.125M b/d, origins Kwanza & Lower Congo. Grades: Cabinda, Dalia, Girassol, Nemba, Hungo. Risks: mature fields, reservoir decline, high offshore costs. Opportunities: deepwater exploration, enhanced recovery, new offshore blocks.' },
      { name: 'Algeria', role: 'Major North African producer', body: 'Production ~907K b/d, origins Hassi Messaoud, Berkine, Illizi. Grade: Saharan Blend. Risks: mature fields, declining production. Opportunities: enhanced recovery, brownfield redevelopment, Berkine/Illizi exploration.' },
      { name: 'Egypt', role: 'Major producer and petroleum transit state', body: 'Production ~450K b/d, origins Gulf of Suez, Western Desert, Nile Delta. Grades: Suez, Belayim, Western Desert. Strategic assets: Suez Canal, SUMED Pipeline.' },
    ],
    criticalInfra: [
      'Suez Canal', 'SUMED Pipeline', 'Niger Delta pipelines', 'Gulf of Guinea export terminals',
      'Angolan offshore production systems', 'Libyan export terminals', 'Algerian export infrastructure', 'Egyptian petroleum terminals',
    ],
    risk: [
      { tier: 'Supply', level: 'High', factors: ['Mature fields', 'Natural decline', 'Underinvestment', 'Production disruptions', 'Infrastructure constraints'] },
      { tier: 'Political', level: 'High in selected states', factors: ['Libya: political fragmentation', 'Nigeria: security & infrastructure disruption', 'South Sudan: conflict exposure', 'Sudan-region: geopolitical exposure'] },
      { tier: 'Infrastructure', level: 'High', factors: ['Aging pipelines', 'Theft', 'Vandalism', 'Terminal disruption', 'Storage limitations', 'Offshore technical complexity'] },
      { tier: 'Market', level: 'High', factors: ['Oil-price volatility', 'Global demand shocks', 'OPEC+ policy', 'Refinery demand', 'Energy-transition policies', 'Sanctions'] },
      { tier: 'Regulatory', level: '—', factors: ['Petroleum legislation', 'Taxation', 'Licensing', 'Contract terms', 'Local-content requirements', 'Environmental regulation'] },
    ],
    opportunities: [
      { title: 'Production', items: ['Brownfield redevelopment', 'Enhanced oil recovery', 'Deepwater development', 'Marginal-field development', 'New exploration', 'New licensing'] },
      { title: 'Infrastructure', items: ['Pipeline rehabilitation', 'Gathering systems', 'Storage', 'Export terminals', 'Leak detection', 'Infrastructure monitoring'] },
      { title: 'Refining', items: ['Refinery rehabilitation', 'New refining capacity', 'Crude-to-product integration', 'Domestic petroleum-product markets'] },
      { title: 'Technology', items: ['Digital production intelligence', 'Satellite monitoring', 'Predictive maintenance', 'Seismic intelligence', 'Production monitoring', 'Infrastructure risk detection', 'Subsea engineering'] },
    ],
    marketDrivers: [
      { title: 'Supply-Side', items: ['New discoveries', 'Field redevelopment', 'Deepwater projects', 'Enhanced recovery', 'Investment', 'OPEC+ policy', 'Infrastructure availability'] },
      { title: 'Demand-Side', items: ['Transportation growth', 'Industrialization', 'Aviation', 'Petrochemical demand', 'Emerging-market consumption', 'Refinery expansion'] },
      { title: 'Structural', items: ['Energy transition', 'Refinery closures', 'Changing crude quality requirements', 'Geopolitical realignment', 'New trade routes'] },
    ],
    historical: [
      { title: 'Production', items: ['Production growth/decline', 'Field depletion', 'New project commissioning', 'Production shutdowns'] },
      { title: 'Trade', items: ['Export-route changes', 'Sanctions', 'Market reorientation', 'European & Asian demand', 'African crude displacement / substitution'] },
      { title: 'Infrastructure', items: ['Pipeline failures', 'Terminal disruptions', 'Refinery commissioning/shutdowns', 'New export infrastructure'] },
      { title: 'Policy', items: ['OPEC production decisions', 'Petroleum legislation', 'Licensing rounds', 'Fiscal reforms', 'Energy-transition policies'] },
    ],
    nuggets: [
      'Nigeria, Libya and Angola account for ~59% of Africa crude production.',
      'The top six African producers account for ~86% of continental production.',
      'Libya possesses Africa largest proven crude-oil reserve base.',
      'African crude exports are increasingly oriented toward Europe, China, India and other Asian markets.',
      'Nigeria deepwater production is increasingly important as mature Niger Delta assets decline.',
      'Egypt petroleum network has strategic importance because of the Suez Canal and SUMED system.',
      'Crude quality creates differentiated commercial value between African grades.',
      'Pipeline, terminal and security failures can convert physical production capacity into stranded or disrupted supply.',
    ],
    network: [
      { group: 'Origin', links: ['NIGERIA', 'LIBYA', 'ANGOLA', 'ALGERIA', 'EGYPT', 'Niger Delta', 'Sirte Basin', 'Murzuq Basin', 'Kwanza Basin', 'Lower Congo Basin'] },
      { group: 'Market', links: ['CHINA', 'INDIA', 'NETHERLANDS', 'FRANCE', 'USA'] },
      { group: 'Institution', links: ['OPEC', 'OPEC+', 'Petroleum Regulators'] },
      { group: 'Infrastructure', links: ['Suez Canal', 'SUMED Pipeline', 'Export Terminals', 'Pipelines', 'Refineries', 'Storage', 'Tankers'] },
      { group: 'Market Instrument', links: ['Brent', 'WTI', 'Dubai/Oman'] },
    ],
    summary: [
      { key: 'Supply', value: 'Highly concentrated' },
      { key: 'Demand', value: 'Globally diversified but dominated by major industrial economies' },
      { key: 'African Export Dependence', value: 'High' },
      { key: 'Reserve Concentration', value: 'High' },
      { key: 'Infrastructure Dependence', value: 'High' },
      { key: 'Geopolitical Sensitivity', value: 'Very High' },
      { key: 'Price Sensitivity', value: 'Very High' },
      { key: 'Strategic Importance', value: 'Critical' },
      { key: 'Investment Intensity', value: 'Very High' },
      { key: 'Primary African Opportunity', value: 'Production optimization + infrastructure + refining + intelligence' },
      { key: 'Primary African Constraint', value: 'Mature assets + underinvestment + security + infrastructure' },
      { key: 'Primary Global Function', value: 'Transportation fuel + industrial energy + petrochemical feedstock' },
      { key: 'Primary African Function', value: 'Export revenue + fiscal revenue + foreign exchange + strategic energy resource' },
    ],
    briefing: {
      persona: 'Commodities Trader',
      location: 'Africa',
      updated: 'August 19, 2026',
      items: [
        {
          title: 'OPEC Statistical Bulletin confirms 2024 African production of ~6.10M b/d',
          classification: 'BREAKING',
          core: 'OPEC 2025 Statistical Bulletin reports African crude production of approximately 6.099M b/d in 2024, with Nigeria, Libya and Angola supplying ~59% of continental output.',
          impact: 'Confirms a tight, concentrated supply base supporting Atlantic-basin pricing floors for African grades.',
          opportunity: 'Anchor West African cargo bids against the confirmed 6.1M b/d baseline and watch OPEC+ quota headlines for delta exposure.',
        },
        {
          title: 'Dangote Refinery reaches full 650K bpd — Nigeria flips to net petrol exporter',
          classification: 'TREND',
          core: 'Dangote hit full capacity in early 2026, cutting Nigerian fuel imports and redirecting domestic crude toward local refining at scale.',
          impact: 'Signals a structural shift in Atlantic crude supply availability and regional product pricing.',
          opportunity: 'Monitor Nigerian crude export availability — a structural share of Atlantic supply is shifting into domestic feedstock.',
        },
        {
          title: 'Nigeria deepwater offsets mature Niger Delta decline',
          classification: 'TREND',
          core: 'Akpo West and other offshore projects partially offset legacy onshore declines, keeping Nigerian output near 1.345M b/d.',
          impact: 'Deepwater resilience reduces Nigerian supply-tail risk for Atlantic buyers.',
          opportunity: 'Prefer deepwater-linked grades for supply security in forward swaps.',
        },
        {
          title: 'Libya retains Africa largest reserve base (~48B bbl) but output stays volatile',
          classification: 'RISK',
          core: 'Political fragmentation and field shutdowns keep Libyan exports exposed to sudden disruptions despite massive reserves.',
          impact: 'Libya remains the largest single disruption tail in African crude supply.',
          opportunity: 'Buy dips on Libyan disruption headlines; size positions against the ~1.12M b/d risk profile.',
        },
        {
          title: 'Egypt transit premium re-priced via Suez Canal and SUMED exposure',
          classification: 'TREND',
          core: 'Red Sea and Suez chokepoint risk continues to reprice freight and route premiums on Middle East-linked flows.',
          impact: 'Chokepoint volatility directly affects freight and east-west spread levels.',
          opportunity: 'Fade east-west spreads when Suez tensions ease and rotate back to Red Sea freight downside.',
        },
        {
          title: 'Refining margins compression risk as African capacity comes online',
          classification: 'RISK',
          core: 'The continental 1.2M bpd refining buildout (Nigeria, Angola, Uganda) erodes the historical import premium Africa paid.',
          impact: 'Regional product cracks face structural compression as capacity scales.',
          opportunity: 'Short regional product cracks versus crude as new capacity displaces seaborne product imports.',
        },
        {
          title: 'Brent-WTI-Dubai benchmark divergence widens on grade quality',
          classification: 'TREND',
          core: 'API gravity and sulfur differentials continue to drive commercial value between African grades and global benchmarks.',
          impact: 'Grade-quality spreads are the primary source of relative-value opportunities.',
          opportunity: 'Capture grade-differential arbitrage on light-sweet West African barrels versus heavy sour equivalents.',
        },
        {
          title: 'US Strategic Petroleum Reserve and OECD inventory drawdowns tighten balance',
          classification: 'TREND',
          core: 'Inventory drawdowns and refinery demand sustain price floors while OPEC+ policy remains the key swing variable.',
          impact: 'Inventory data is the highest-frequency near-term price driver.',
          opportunity: 'Monitor weekly inventory prints as a high-frequency signal for intra-month positioning.',
        },
        {
          title: 'Energy-transition policies weigh on long-cycle project financing',
          classification: 'RISK',
          core: 'Sanctions, ESG financing constraints and transition policy raise the cost of new African upstream projects.',
          impact: 'Long-dated supply buildout faces rising capital-cost headwinds.',
          opportunity: 'Favor near-dated contracts over deep-backwardated long-dated crude structures.',
        },
        {
          title: 'African crude export corridors increasingly oriented to Europe, China and India',
          classification: 'OPPORTUNITY',
          core: 'Primary trade corridors (West Africa→Europe/India/China, North Africa→Europe) are cementing buyer relationships at scale.',
          impact: 'Corridor flows define the demand-side geography of African crude pricing.',
          opportunity: 'Build regional calendar spreads off confirmed corridor volumes for China and India buying windows.',
        },
      ],
    },
  },

  'Copper': {
    strategic: [
      { title: 'Energy-Transition Centrality', points: ['Copper is foundational to electrification — arguably rivaling crude oil in long-term strategic significance as the energy transition scales.', 'DRC/Zambia Copperbelt → global smelters/refiners → EV, grid and electronics manufacturers.'] },
      { title: 'Producer Leverage', points: ['Reserve size, production growth trajectory, beneficiation policy (DRC concentrate export restrictions), and Lobito Corridor infrastructure access.'] },
      { title: 'Transit / Corridor Importance', points: ['Lobito Corridor — increasingly strategic Atlantic export route reducing dependence on Southern/Eastern African ports.'] },
    ],
    ecosystem: [
      { title: 'Corporate Actors', actors: ['Ivanhoe Mines (Kamoa-Kakula)', 'CMOC (Tenke Fungurume, Kisanfu)', 'First Quantum Minerals (Kansanshi, Sentinel)', 'Barrick Gold (Lumwana)', 'Vedanta Resources (Konkola)', 'International Resources Holding (Mopani)', 'ZCCM Investments Holdings', 'Smelting & trading operators'] },
      { title: 'Institutional Actors', actors: ['National mining ministries (DRC, Zambia)', 'ZCCM-IH', 'ICSG', 'Trade & investment promotion bodies', 'Financial institutions'] },
    ],
    countries: [
      { name: 'DR Congo', role: "Africa's largest copper producer; world #2 after Chile", body: 'Production ~3.5M t (2025). Origin: Katanga / Central African Copperbelt (Kamoa-Kakula, Tenke Fungurume, Kipushi). Risks: infrastructure/power constraints, concentrate export policy, security. Opportunities: domestic smelting expansion, Lobito Corridor logistics.' },
      { name: 'Zambia', role: "Africa's second-largest producer", body: 'Production ~890,346 t (2025 record). Origin: Copperbelt (Mopani, Konkola, Kansanshi, Sentinel, Lumwana). Risks: power/drought-driven grid instability, missed targets. Opportunities: ~$10B committed investment, Mopani turnaround, Konkola expansion.' },
      { name: 'South Africa', role: 'Minor producer, major logistics/trading hub', body: 'Port infrastructure (Durban) serving regional copper exports.' },
    ],
    criticalInfra: ['Lobito Corridor (rail)', 'Copperbelt rail network', 'Durban port complex', 'Dar es Salaam port', 'DRC domestic smelting (expanding)', 'Zambian power grid (Kariba/hydropower — key vulnerability)'],
    risk: [
      { tier: 'Supply', level: 'High', factors: ['Power/grid instability (Zambia)', 'Ore grade decline', 'Underinvestment', 'Long mine timelines (~17 yrs avg)'] },
      { tier: 'Political', level: 'Moderate–High', factors: ['DRC concentrate export policy shifts', 'Governance/security exposure', 'Zambia fiscal/tax history'] },
      { tier: 'Infrastructure', level: 'High', factors: ['Power supply constraints', 'Rail/logistics bottlenecks', 'Limited domestic smelting'] },
      { tier: 'Market', level: 'Very High', factors: ['Extreme price volatility', 'US tariff policy (COMEX/LME spread)', 'China demand sensitivity', 'Surplus risk 2026–28'] },
      { tier: 'Regulatory', level: '—', factors: ['Mining codes & royalties', 'Concentrate export restrictions (DRC)', 'Local content', 'Environmental permitting'] },
    ],
    opportunities: [
      { title: 'Production', items: ['Brownfield expansion (Mopani, Konkola, Kansanshi)', 'Greenfield development (Kitumba)', 'Kamoa-Kakula phase expansions'] },
      { title: 'Infrastructure', items: ['Lobito Corridor development', 'Power generation investment', 'Rail and port capacity expansion'] },
      { title: 'Refining / Beneficiation', items: ['Domestic smelter expansion (DRC, Zambia)', 'Reduced raw concentrate export dependence'] },
      { title: 'Technology', items: ['Digital production monitoring', 'Predictive maintenance', 'Ore-grade & exploration intelligence', 'Power-grid resilience'] },
    ],
    marketDrivers: [
      { title: 'Supply-Side', items: ['DRC/Zambia expansion (~$10B+ committed)', 'New mine commissioning', 'Power infrastructure investment', 'Ore grade trends'] },
      { title: 'Demand-Side', items: ['Electrification & grid buildout', 'EV adoption', 'Data centre/AI infrastructure', 'Renewables deployment', 'China industrial policy'] },
      { title: 'Structural', items: ['US tariff policy on refined copper', 'Energy-transition demand supercycle', 'IEA ~30% deficit risk by 2035', 'China refining dominance'] },
    ],
    historical: [
      { title: 'Production', items: ['DRC output nearly quadrupled 2010–2025', 'Zambia record 2025 despite missing 1Mt', 'DRC overtook Peru as world #2'] },
      { title: 'Trade', items: ['Rising China dependence on DRC/Zambian concentrate', 'Growing DRC export value', 'Emerging Lobito Corridor route'] },
      { title: 'Infrastructure', items: ['Kamoa-Kakula Phase 3', 'Mopani turnaround', 'New hydropower (Heshima)'] },
      { title: 'Policy', items: ['US critical mineral designation (Nov 2025)', 'Proposed US tariff 15%→30%', 'DRC concentrate export policy'] },
    ],
    nuggets: [
      'DRC + Zambia = ~98% of African copper production — the most geographically concentrated of Africa top-tier commodities.',
      'DRC overtook Peru in 2025 to become the world second-largest copper producer after Chile.',
      'Zambia record 890,346 t in 2025 but still missed its 1-million-tonne target.',
      'COMEX briefly touched $6.716/lb through 2026; the COMEX–LME spread is now a live tariff-probability signal.',
      'China sources the overwhelming majority of its copper concentrate imports from the DRC and Zambia.',
      'Limited domestic smelting means much of Africa copper value is captured downstream, off-continent.',
    ],
    network: [
      { group: 'Origin', links: ['DRC', 'ZAMBIA', 'SOUTH AFRICA', 'NAMIBIA', 'BOTSWANA', 'Central African Copperbelt', 'Katanga'] },
      { group: 'Market', links: ['CHINA', 'USA', 'EUROPE', 'INDIA'] },
      { group: 'Institution', links: ['ICSG', 'National mining ministries', 'ZCCM Investments Holdings'] },
      { group: 'Infrastructure', links: ['Lobito Corridor', 'Copperbelt rail network', 'Durban Port', 'Smelters/Refineries', 'Power grid (hydropower)'] },
      { group: 'Market Instrument', links: ['LME', 'COMEX', 'SHFE'] },
    ],
    summary: [
      { key: 'Supply', value: 'Extremely concentrated (2-country system: DRC + Zambia)' },
      { key: 'Demand', value: 'Globally diversified but China-dominant' },
      { key: 'Reserve Concentration', value: 'Very high (Central African Copperbelt)' },
      { key: 'Infrastructure Dependence', value: 'Very high (power + logistics uniquely acute)' },
      { key: 'Geopolitical Sensitivity', value: 'Very High (US tariff policy, China dependency)' },
      { key: 'Price Sensitivity', value: 'Extreme (record volatility through 2026)' },
      { key: 'Strategic Importance', value: 'Critical — rising toward parity with crude oil' },
      { key: 'Primary African Opportunity', value: 'Production scaling + domestic smelting + power infrastructure + Lobito corridor' },
      { key: 'Primary African Constraint', value: 'Power/grid fragility + underdeveloped downstream + transport bottlenecks' },
    ],
  },

  'Natural Gas & LNG': {
    strategic: [
      { title: 'Energy Security', points: ['Natural gas/LNG has become central to global energy security post-2022, with Africa framed as a lower-geopolitical-risk alternative to Middle East and Russian supply.', 'African producing states → European/Asian buyers → energy security diversification.'] },
      { title: 'Geographic / Chokepoint Advantage', points: ['North and West African LNG reaches Europe without transiting the Suez Canal or Strait of Hormuz — a structural advantage amplified during 2026 disruptions.'] },
      { title: 'Producer Leverage', points: ['Reserve size (Nigeria >200 Tcf), proximity to Europe bypassing chokepoints, spare liquefaction capacity, long-term contracts.'] },
    ],
    ecosystem: [
      { title: 'Corporate Actors', actors: ['TotalEnergies (Mozambique LNG)', 'ExxonMobil (Rovuma LNG)', 'Eni (Coral South/North FLNG)', 'Sonatrach (Arzew, Skikda)', 'BP / Kosmos (Greater Tortue Ahmeyim)', 'NLNG (Bonny Island)', 'NNPC', 'LNG shipping/trading operators'] },
      { title: 'Institutional Actors', actors: ['International Gas Union (IGU)', 'Gas Exporting Countries Forum (GECF)', 'National petroleum/gas ministries', 'PETROSEN (Senegal)', 'SMH (Mauritania)'] },
    ],
    countries: [
      { name: 'Nigeria', role: "Africa's largest LNG exporter; world 7th", body: '14.78 Mt (2025, +1.0 Mt YoY). Asset: NLNG Bonny Island. Reserves >200 Tcf. Risks: domestic gas supply constraints, pipeline security. Opportunities: "Decade of Gas" expansion, targeting ~30 Mtpa.' },
      { name: 'Algeria', role: "Africa's second-largest LNG exporter; largest capacity (~29 Mtpa)", body: '~8.0 Mt (2025, modeled). Assets: Arzew, Skikda. Risks: maintenance disruption (Arzew capacity-doubling not expected before 2027). Opportunities: Sonatrach–Sinopec modernization, capacity doubling by 2027.' },
      { name: 'Mozambique', role: 'Major emerging LNG producer, highest long-term growth', body: '~3.5–3.7 Mt (2025). Assets: Coral South FLNG, Coral North FLNG (FID 2025), TotalEnergies Mozambique LNG (restarted), Rovuma LNG. Risks: security (Cabo Delgado history). Opportunities: ~$50B+ confirmed regional financing.' },
      { name: 'Mauritania / Senegal', role: 'Newest African LNG exporters (GTA)', body: 'First cargo April 2025; ~2.3–2.8 Mt Phase 1; Q1 2026 showed 1,574% YoY growth. Operator BP with Kosmos, PETROSEN, SMH. Opportunity: 20–25% domestic market allocation by 2027.' },
      { name: 'Egypt', role: 'Established but volatile exporter/transit state', body: 'Small/disrupted 2025–26 (Israel gas supply interruptions). Strategic assets: ~12.7 Mtpa liquefaction capacity, Suez Canal transit relevance.' },
    ],
    criticalInfra: ['NLNG Bonny Island', 'Arzew / Skikda liquefaction complexes', 'Greater Tortue Ahmeyim (offshore/subsea)', 'Coral South / Coral North FLNG', 'Cap Lopez LNG terminal (Gabon, planned)', 'Medgaz, Maghreb-Europe, Trans-Med, Green Stream pipelines', 'Regasification / FSRU infrastructure'],
    risk: [
      { tier: 'Supply', level: 'Moderate–High', factors: ['Long project timelines (4–7 yrs FID→first gas)', 'Domestic gas/pipeline security (Nigeria)', 'Facility maintenance (Algeria/Arzew)'] },
      { tier: 'Political', level: 'Moderate–High', factors: ['Security disruption (Cabo Delgado)', 'Egypt–Israel gas supply politics', 'Contract/revenue-sharing disputes'] },
      { tier: 'Infrastructure', level: 'High', factors: ['Capital-intensive long-lead liquefaction', 'Offshore/subsea complexity (FLNG)', 'Financing risk for mega-projects'] },
      { tier: 'Market', level: 'Very High', factors: ['Extreme regional price volatility (JKM vs Henry Hub ~$21 vs ~$3)', 'EU long-term demand uncertainty', 'Global oversupply risk late decade'] },
      { tier: 'Regulatory / ESG', level: '—', factors: ['Local content requirements', 'Flaring reduction mandates', 'EU carbon border policy', 'IISD-flagged financing risk'] },
    ],
    opportunities: [
      { title: 'Production', items: ['Mozambique Coral North, Rovuma, TotalEnergies Mozambique LNG', 'Mauritania/Senegal Phase 2', 'Algeria capacity doubling (Arzew 2027)', 'Congo, Gabon, Cameroon growth'] },
      { title: 'Infrastructure', items: ['New liquefaction terminals', 'FLNG for stranded/offshore gas', 'Domestic gas allocation infrastructure'] },
      { title: 'Market Positioning', items: ['European diversification demand', 'Chokepoint-avoidance advantage (Suez, Hormuz)', 'Destination-flexible contracting'] },
      { title: 'Technology', items: ['FLNG deployment', 'Digital production/pipeline monitoring', 'Methane/flaring reduction tech'] },
    ],
    marketDrivers: [
      { title: 'Supply-Side', items: ['Africa capacity ~80 Mtpa (2025) → ~110 (2030) → 175+ (2040)', '~$50B+ committed financing through 2030', 'Maintenance/outage cycles'] },
      { title: 'Demand-Side', items: ['European energy security diversification', 'Asian power/industrial growth', 'Data-centre electricity demand', 'Coal-to-gas switching'] },
      { title: 'Structural', items: ['Middle East risk reshaping sourcing toward Africa', 'Global capacity >700 Mt by 2030', 'Hub-linked destination-flexible contracts (~70% of new)', 'Sub-Saharan exports +174.5% by 2034'] },
    ],
    historical: [
      { title: 'Production', items: ['Africa LNG capacity roughly doubling 2025→2030', 'Mauritania/Senegal + Canada joined exporters in 2025', 'Nigeria multi-year growth under "Decade of Gas"'] },
      { title: 'Trade', items: ['Global LNG record 436.98 Mt (2025, +6.3%)', 'African exports 39.77 Mt (2025) vs 37.97 Mt (2024)', 'Post-2022 European diversification'] },
      { title: 'Infrastructure', items: ['Record 68.4 Mtpa FID in 2025', 'Mozambique LNG restarted 2025', 'Coral North FID 2025 (2028 target)'] },
      { title: 'Policy', items: ['Nigeria "Decade of Gas"', 'EU-LNG agreements with Algeria, Nigeria, Mozambique, Senegal, Egypt', 'Egypt gas interruption (2025) / resumption (2026)'] },
    ],
    nuggets: [
      'Nigeria alone ~37% of Africa total LNG exports — the single largest concentration point on the continent.',
      'Global LNG trade record 436.98 Mt in 2025; Africa ~9.1% share.',
      'Mauritania and Senegal became LNG exporters in 2025 via Greater Tortue Ahmeyim — a template for shared cross-border offshore gas.',
      'North/West African LNG reaches Europe without Suez or Hormuz transit — acutely valuable during 2026 disruptions.',
      'Africa LNG capacity projected 80 → 175+ Mtpa by 2040.',
      '62–98% of government revenue for several African gas producers comes from hydrocarbons.',
      '~70% of new LNG contracts are destination-flexible, hub-linked.',
    ],
    network: [
      { group: 'Origin', links: ['NIGERIA', 'ALGERIA', 'ANGOLA', 'MOZAMBIQUE', 'EQUATORIAL GUINEA', 'MAURITANIA', 'SENEGAL', 'EGYPT', 'Niger Delta', 'Rovuma Basin', 'Greater Tortue Ahmeyim'] },
      { group: 'Market', links: ['EUROPE', 'CHINA', 'JAPAN', 'SOUTH KOREA', 'INDIA'] },
      { group: 'Institution', links: ['International Gas Union', 'GECF', 'National petroleum ministries'] },
      { group: 'Infrastructure', links: ['NLNG Bonny Island', 'Arzew', 'Coral South FLNG', 'Medgaz Pipeline', 'Maghreb-Europe Pipeline', 'Liquefaction terminals', 'LNG carriers', 'Regasification terminals'] },
      { group: 'Market Instrument', links: ['JKM', 'TTF', 'Henry Hub', 'JCC'] },
    ],
    summary: [
      { key: 'Supply', value: 'Concentrated but diversifying (Nigeria-dominant, new entrants scaling fast)' },
      { key: 'Demand', value: 'Globally diversified, structurally elevated by European diversification and Asian growth' },
      { key: 'Infrastructure Dependence', value: 'Very High — most capital-intensive African commodity chain' },
      { key: 'Geopolitical Sensitivity', value: 'Very High — direct beneficiary of Middle East/Russia supply disruption' },
      { key: 'Price Sensitivity', value: 'Extreme (record regional spread divergence in 2026)' },
      { key: 'Strategic Importance', value: 'Critical, rising toward parity with crude oil' },
      { key: 'Primary African Opportunity', value: 'New capacity + chokepoint-bypass positioning + European/Asian demand + domestic gas monetization' },
      { key: 'Primary African Constraint', value: 'Long timelines + security risk + capital intensity + long-term EU demand uncertainty' },
    ],
  },

  'Gold': {
    strategic: [
      { title: 'Monetary / Reserve Role', points: ['Gold functions simultaneously as industrial/consumer commodity and monetary reserve asset — central bank demand (863t in 2025) is a structurally different buyer class.', 'African producing states → global refining/trading hubs (Switzerland, UAE) → central banks and investment markets.'] },
      { title: 'Value-Capture Challenge', points: ['Despite leading global production by region, substantial value is captured downstream through Swiss refining and Dubai trading rather than domestic beneficiation.'] },
      { title: 'Producer Leverage', points: ['Production scale and mine-life, formalization policy (Ghana GoldBod model), reserve life, political stability.'] },
    ],
    ecosystem: [
      { title: 'Corporate Actors', actors: ['Newmont (Ahafo, Akyem — Ghana)', 'AngloGold Ashanti (Obuasi)', 'Gold Fields (Tarkwa)', 'Barrick Gold (Loulo-Gounkoto — Mali)', 'Cardinal Resources (Namdini)', 'Swiss refiners', 'Dubai trading houses', 'ASGM networks'] },
      { title: 'Institutional Actors', actors: ['World Gold Council', 'GoldBod (Ghana, est. 2025)', 'National mining ministries', 'LBMA', 'Central banks', 'OECD due-diligence bodies'] },
    ],
    countries: [
      { name: 'Ghana', role: "Africa's largest gold producer", body: '~150–159 t (2025 est.). Mines: Obuasi, Tarkwa, Ahafo/Akyem, Namdini. Economic weight >60% of exports, 6–10% GDP, 1M+ employed. Policy: GoldBod reform (April 2025). Risks: galamsey, smuggling leakage. Opportunities: formalization dividend, Obuasi revival.' },
      { name: 'Mali', role: 'Major West African producer', body: '~65–100 t (range across sources). Asset: Loulo-Gounkoto (Barrick), H1 2026 attributable output up 38%. Risks: political instability, regulatory disputes. Opportunities: brownfield expansion.' },
      { name: 'South Africa', role: 'Historic gold powerhouse (Witwatersrand)', body: '~99–110 t, declining. Risks: deep-mine economics, declining grades, regulatory cost pressure. Opportunities: selective deep-mine extension, tailings reprocessing.' },
      { name: 'Burkina Faso', role: 'Significant West African producer', body: 'Security instability affecting operations and investment.' },
      { name: 'Tanzania / Sudan', role: 'Growing East/Northeast producers', body: 'Sudan — conflict exposure capping output. Tanzania — comparatively more stable growth trajectory.' },
    ],
    criticalInfra: ['Ashanti Gold Belt (Ghana)', 'Witwatersrand Basin (South Africa)', 'Loulo-Gounkoto complex (Mali)', 'Swiss refining (off-continent)', 'Dubai-linked aggregation hubs', 'GoldBod formal trading infrastructure'],
    risk: [
      { tier: 'Supply', level: 'Moderate', factors: ['Structurally slow global mine growth (1–2% YoY)', '30-year low in new discoveries', 'Ore grade decline (South Africa)'] },
      { tier: 'Political', level: 'High in selected states', factors: ['Mali governance instability', 'Sudan active conflict', 'Burkina Faso security instability', 'Eastern DRC conflict-linked artisanal'] },
      { tier: 'Infrastructure', level: 'Moderate', factors: ['Off-continent refining dependency (Switzerland)', 'Informal/artisanal channel governance risk'] },
      { tier: 'Market', level: 'Very High', factors: ['Extreme price volatility', 'Demand-mix shifts (investment up, jewelry down)', 'Central bank buying sustainability'] },
      { tier: 'Regulatory / Governance', level: '—', factors: ['ASGM formalization policy (GoldBod)', 'Responsible-sourcing due diligence', 'Smuggling and informal leakage', 'Environmental enforcement'] },
    ],
    opportunities: [
      { title: 'Production', items: ['Mine expansion/revival (Obuasi model)', 'Brownfield extension (South Africa)', 'New discoveries in East/Central Africa'] },
      { title: 'Formalization', items: ['GoldBod-style national trading authorities', 'ASGM formalization (20–30% of output, 10M+ employed)'] },
      { title: 'Downstream / Refining', items: ['Domestic refining capacity', 'Local certification & LBMA accreditation'] },
      { title: 'Technology', items: ['Digital export tracking (anti-smuggling)', 'Responsible-sourcing traceability', 'AI-linked demand as emerging buyer'] },
    ],
    marketDrivers: [
      { title: 'Supply-Side', items: ['New mine commissioning/expansions', 'Artisanal/ASGM output growth', 'Ore grade trends', 'Long mine timelines'] },
      { title: 'Demand-Side', items: ['Central bank diversification (structural)', 'Investment/ETF cycles', 'Jewelry price elasticity', 'AI/technology demand'] },
      { title: 'Structural', items: ['USD trajectory & monetary policy', 'Geopolitical risk premium', 'De-dollarization trend', '30-year discovery-pipeline low'] },
    ],
    historical: [
      { title: 'Production', items: ['Africa became world leading gold region (~1,010t)', 'Ghana overtook South Africa as top producer', 'Record global mine output through 2025'] },
      { title: 'Trade', items: ['African gold export value to exceed $45B by end-2025', 'Growing Dubai/UAE role as trading hub'] },
      { title: 'Infrastructure / Policy', items: ['Ghana GoldBod reform (April 2025)', 'Obuasi revival'] },
      { title: 'Price', items: ['2025: 56% surge, avg ~$3,431–3,436/oz', 'Jan 2026 ATH ~$5,608/oz', '2026 correction after January peak'] },
    ],
    nuggets: [
      'Africa is the world leading gold-producing region by continent (~1,010t vs global ~3,672t).',
      'Ghana has overtaken South Africa as Africa top gold producer.',
      'Gold >60% of Ghana total export revenue — the most gold-dependent major African economy.',
      'Central banks bought 863t in 2025 — fourth consecutive year of elevated buying.',
      'ASGM accounts for 20–30% of African gold output and employs ~10 million people.',
      'Gold ATH ~$5,608/oz (Jan 2026) before a notable correction.',
      'Switzerland and Dubai remain dominant downstream destinations — echoing copper value-capture leakage.',
      'Global new gold discoveries are at a 30-year low.',
    ],
    network: [
      { group: 'Origin', links: ['GHANA', 'MALI', 'SOUTH AFRICA', 'BURKINA FASO', 'TANZANIA', 'SUDAN', 'DRC', 'Ashanti Gold Belt', 'Witwatersrand Basin'] },
      { group: 'Market', links: ['SWITZERLAND', 'UAE', 'INDIA', 'CHINA', 'UK'] },
      { group: 'Institution', links: ['World Gold Council', 'GoldBod', 'LBMA', 'Central banks (cross-cutting)'] },
      { group: 'Infrastructure', links: ['Refineries (off-continent, Swiss-dominant)', 'Trading hubs (Dubai)', 'Formal export/certification systems'] },
      { group: 'Market Instrument', links: ['LBMA Gold Price', 'COMEX Gold', 'Shanghai Gold Exchange'] },
    ],
    summary: [
      { key: 'Supply', value: 'Structurally constrained globally; Africa dominant by continental share' },
      { key: 'Demand', value: 'Uniquely dual-natured — monetary/reserve asset AND consumer/industrial commodity' },
      { key: 'African Export Dependence', value: 'High, extreme in Ghana specifically' },
      { key: 'Infrastructure Dependence', value: 'Lower than other top commodities — substantial informal channel' },
      { key: 'Geopolitical Sensitivity', value: 'Very High — tied to central-bank de-dollarization' },
      { key: 'Price Sensitivity', value: 'Extreme (most volatile of Africa top-five in 2025–26)' },
      { key: 'Primary African Opportunity', value: 'Formalization + domestic value capture + downstream refining + governance modernization' },
      { key: 'Primary African Constraint', value: 'Value-capture leakage + informal-sector governance + conflict exposure in select states' },
      { key: 'Primary Global Function', value: 'Monetary reserve asset + safe-haven + jewelry + technology/AI input' },
    ],
  },

  'Cocoa Beans': {
    strategic: [
      { title: 'Structural Irreplaceability', points: ['Unlike crude, copper, gold or LNG, West Africa ~65% global share makes cocoa structurally irreplaceable — no alternative sourcing region at comparable scale.', 'Smallholder farmers (Côte dIvoire, Ghana, Nigeria, Cameroon) → global grinders (Netherlands, Germany, US) → chocolate manufacturers.'] },
      { title: 'Value-Capture Challenge', points: ['Most grinding/processing occurs off-continent; farmers historically capture only 60–70% of international reference prices.'] },
      { title: 'Producer Leverage', points: ['Production concentration, marketing-board coordination (Ghana + Côte dIvoire ~50% global), farmgate price-setting as a policy lever.'] },
    ],
    ecosystem: [
      { title: 'Corporate Actors', actors: ['Barry Callebaut', 'Cargill', 'Olam Group', 'Ecom Agroindustrial', 'Mondelez, Nestlé, Hershey, Mars', 'Local exporters & cooperatives', 'Licensed buying companies (Ghana)', 'Smallholder networks'] },
      { title: 'Institutional Actors', actors: ['ICCO (Abidjan)', 'COCOBOD (Ghana)', 'Conseil du Café-Cacao (Côte dIvoire)', 'National agriculture ministries', 'Rainforest Alliance, Fairtrade', 'EU regulators (EUDR)'] },
    ],
    countries: [
      { name: "Côte d'Ivoire", role: "World's largest cocoa producer; hosts ICCO", body: '~1.85M t (2024/25). Risks: aging plantations, disease, yields, deforestation pressure, smuggling. Opportunities: plantation rehabilitation, joint pricing coordination with Ghana, domestic processing.' },
      { name: 'Ghana', role: "World's second-largest producer; COCOBOD model", body: '~600K t (2024/25). Policy: guaranteed producer price (51,660 cedis/t 2025/26). Risks: farmer discontent, disease, galamsey encroachment. Opportunities: yield rehabilitation, domestic grinding.' },
      { name: 'Nigeria', role: "Third-largest African producer", body: '~350K t. Opportunities: production expansion, export diversification.' },
      { name: 'Cameroon', role: 'Significant Central/West African producer', body: '~342K t. Opportunities: production growth, regional processing.' },
    ],
    criticalInfra: ['Port of Abidjan & San Pédro (Côte dIvoire)', 'Port of Tema & Takoradi (Ghana)', 'Regional farm-to-buying-station road networks', 'Licensed buying company networks', 'European grinding terminals'],
    risk: [
      { tier: 'Supply', level: 'High', factors: ['Aging tree stock', 'Black pod / swollen shoot disease', 'Weather variability (Harmattan, El Niño)', 'Structural yield decline'] },
      { tier: 'Political', level: 'Moderate', factors: ['Marketing board / farmgate pricing disputes', 'Farmer discontent (Ghana 2025/26)', 'Cross-border smuggling'] },
      { tier: 'Infrastructure', level: 'Moderate', factors: ['Rural road/logistics constraints', 'Seasonal port congestion'] },
      { tier: 'Market', level: 'Very High', factors: ['Extreme price volatility (65%+ swings)', 'Speculative fund positioning', 'Demand destruction at high retail prices', 'EUDR compliance costs'] },
      { tier: 'Regulatory / Sustainability', level: '—', factors: ['EU Deforestation Regulation (EUDR)', 'Certification costs (RA, Fairtrade)', 'Child labor due-diligence'] },
    ],
    opportunities: [
      { title: 'Production', items: ['Plantation rehabilitation & replanting', 'Disease-resistant varieties', 'Yield-improvement extension services'] },
      { title: 'Value Capture', items: ['Domestic grinding/processing expansion', 'Ghana–Côte dIvoire pricing coordination', 'Farmgate pricing reform'] },
      { title: 'Market Positioning', items: ['Sustainability certification premium', 'EUDR traceability as differentiator', 'Diversification of destinations (Asian grinding)'] },
      { title: 'Technology', items: ['Satellite deforestation/yield monitoring', 'Digital farmer registration & traceability', 'Climate-resilient varieties'] },
    ],
    marketDrivers: [
      { title: 'Supply-Side', items: ['West African weather (dominant)', 'Replanting & yield investment', 'Disease management', 'Farmgate pricing policy'] },
      { title: 'Demand-Side', items: ['Global chocolate consumption', 'Grinding capacity utilization', 'Consumer price sensitivity post-2024 spike', 'Emerging-market confectionery'] },
      { title: 'Structural', items: ['Climate change impact on growing conditions', 'EU sustainability/deforestation regulation', 'Speculative/fund flows in price discovery', 'Farmgate liberalization debate'] },
    ],
    historical: [
      { title: 'Production', items: ['2023/24: 489,000t global deficit', '2024/25: modest surplus (48–75K t)', 'Côte dIvoire recovery ~1.67→~1.85M t'] },
      { title: 'Trade', items: ['Persistent farmgate/international price disconnect', 'Growing cross-border smuggling incentives'] },
      { title: 'Infrastructure / Policy', items: ['COCOBOD price raised 4% to 51,660 cedis/t', 'BCOM index inclusion from Jan 8, 2026'] },
      { title: 'Price', items: ['Dec 2024 ATH >$12,000/t', 'Early 2026 low ~$2,846/t', 'Late May 2026 ~$4,200–4,700/t'] },
    ],
    nuggets: [
      'West Africa ~65% of global cocoa production — the most structurally irreplaceable African commodity.',
      'Côte dIvoire and Ghana together ~half of world supply.',
      'Cocoa prices fell >65% from Dec 2024 ATH to early-2026 lows near $2,846/t.',
      'West African farmers historically capture only 60–70% of international price vs ~90% for Ecuador.',
      'Cocoa is uniquely smallholder-dependent — highest direct rural-employment intensity in the catalog.',
      'Netherlands remains the world largest cocoa grinding hub.',
      'BCOM index inclusion (Jan 2026) likely increases fund flows.',
    ],
    network: [
      { group: 'Origin', links: ["CÔTE D'IVOIRE", 'GHANA', 'NIGERIA', 'CAMEROON'] },
      { group: 'Market', links: ['NETHERLANDS', 'GERMANY', 'USA', 'BELGIUM', 'MALAYSIA'] },
      { group: 'Institution', links: ['ICCO', 'COCOBOD', 'Conseil du Café-Cacao'] },
      { group: 'Infrastructure', links: ['Port of Abidjan', 'Port of San Pédro', 'Port of Tema', 'Licensed buying companies', 'European grinding terminals'] },
      { group: 'Market Instrument', links: ['ICE NY', 'ICE London', 'ICCO daily price'] },
    ],
    summary: [
      { key: 'Supply', value: 'Extremely concentrated (Côte dIvoire + Ghana ≈ half of world supply)' },
      { key: 'Demand', value: 'Globally diversified but grinding concentrated in Europe/US' },
      { key: 'Geopolitical Sensitivity', value: 'Moderate — high social/political sensitivity around farmer welfare' },
      { key: 'Price Sensitivity', value: 'Extreme — among the most volatile commodities in the catalog' },
      { key: 'Strategic Importance', value: 'Critical — the most structurally irreplaceable African commodity' },
      { key: 'Primary African Opportunity', value: 'Domestic value capture + farmgate reform + plantation rehabilitation + sustainability market access' },
      { key: 'Primary African Constraint', value: 'Aging tree stock + smallholder fragmentation + price disconnect + climate/disease exposure' },
      { key: 'Primary Global Function', value: 'Sole raw input for global chocolate manufacturing' },
    ],
  },

  'Platinum Group Metals': {
    strategic: [
      { title: 'Concentration Risk / Strategic Chokepoint', points: ['South Africa supplies >80% of global rhodium/ruthenium/iridium — among the most extreme single-country concentration risks in the catalog.', 'Bushveld Complex production → global automotive manufacturers → emissions-control and hydrogen/AI supply chains.'] },
      { title: 'Geopolitical Sensitivity — Russia Factor', points: ['Russia is the world leading palladium producer; sanctions-driven inventory liquidation creates near-term oversupply alongside longer-term supply-security concern — a dynamic South Africa is positioned to benefit from.'] },
      { title: 'Producer Leverage', points: ['Reserve dominance (83% of global), irreplaceable Rh/Ru/Ir supply, deep technical mining expertise, structural deficits reinforcing pricing power.'] },
    ],
    ecosystem: [
      { title: 'Corporate Actors', actors: ['Valterra Platinum (ex-Anglo American Platinum)', 'Impala Platinum (Implats)', 'Sibanye-Stillwater', 'Anglo American (retained focus)', 'Nornickel (Russia)', 'Northam Platinum', 'Regional refiners & traders'] },
      { title: 'Institutional Actors', actors: ['World Platinum Investment Council (WPIC)', 'Minerals Council South Africa', 'USGS (NMIC)', 'South African DMRE', 'LPPM'] },
    ],
    countries: [
      { name: 'South Africa', role: "World's dominant PGM producer; hosts the Bushveld Complex", body: '>70% global Pt, >80% Rh/Ru/Ir. Reserves ~63M kg (83% global). Mining areas: Merensky, Platreef, UG2. Companies: Valterra, Implats, Sibanye, Northam. Risks: load-shedding, rail constraints, deep-level costs, labor disputes. Opportunities: hydrogen/AI demand, Platreef.' },
      { name: 'Zimbabwe', role: 'Secondary African PGM producer (Great Dyke)', body: 'Smaller-scale complement to South African supply; exploration/development potential.' },
    ],
    criticalInfra: ['Bushveld Complex', 'Merensky Reef, Platreef, UG2 Reef zones', 'Great Dyke (Zimbabwe)', 'South African rail & export logistics', 'Eskom electricity grid (critical vulnerability)'],
    risk: [
      { tier: 'Supply', level: 'High', factors: ['Structural multi-year platinum deficits', 'SA electricity supply disruptions', 'Deep-level cost pressure', 'Rail bottlenecks'] },
      { tier: 'Political', level: 'Moderate', factors: ['SA regulatory environment comparatively stable', 'Russian sanctions dynamics (external)'] },
      { tier: 'Infrastructure', level: 'High', factors: ['Eskom load-shedding', 'Rail transport disruptions', 'Deep-level safety/complexity'] },
      { tier: 'Market', level: 'Very High', factors: ['Extreme volatility (rhodium: no futures, thin trading)', 'EV transition demand risk', 'Chinese investment demand sustainability', 'Russian inventory liquidation'] },
      { tier: 'Regulatory', level: '—', factors: ['SA mining licensing & labor regulation', 'Environmental/community requirements'] },
    ],
    opportunities: [
      { title: 'Production', items: ['Platreef & newer shallower resources', 'Bushveld brownfield expansion', 'Great Dyke development'] },
      { title: 'Demand Diversification', items: ['Hydrogen fuel cells', 'AI/data-centre demand (5x by 2030 est.)', 'Jewelry substitution (platinum for silver/gold)'] },
      { title: 'Infrastructure', items: ['Electricity grid resilience investment', 'Rail & logistics modernization'] },
      { title: 'Technology', items: ['Deep-level automation & safety', 'Recycling/secondary capture', 'Digital production monitoring'] },
    ],
    marketDrivers: [
      { title: 'Supply-Side', items: ['SA mine rationalization', 'Electricity reliability', 'Russian inventory liquidation', 'Subdued recycling'] },
      { title: 'Demand-Side', items: ['Automotive (hybrid resilience)', 'Chinese physical investment', 'Hydrogen economy pace', 'AI/data-centre buildout', 'Jewelry substitution'] },
      { title: 'Structural', items: ['EV transition risk', 'Structural platinum deficits', 'Geopolitical premium (Russia, Hormuz)', 'Emerging hydrogen/AI categories'] },
    ],
    historical: [
      { title: 'Production', items: ['SA PGM output trending down (electricity, rail, costs)', 'Valterra demerger & LSE listing (May 2025)'] },
      { title: 'Trade', items: ['SA ~45% of US platinum imports (2020–23)', 'Chinese PGM imports surged through 2025'] },
      { title: 'Infrastructure / Policy', items: ['Eskom load-shedding as persistent headwind', 'Valterra demerger as structural shift'] },
      { title: 'Price', items: ['Mar 2008: Pt $2,276/oz', '2021: Rh ATH $29,800/oz', 'Jan 2026: Pt ATH $2,734.72/oz', '2025: Pt +47% to ~$1,335/oz'] },
    ],
    nuggets: [
      'South Africa supplies >80% of world rhodium, ruthenium and iridium — one of the most extreme single-country concentrations in the catalog.',
      'The Bushveld Complex is the world single largest PGM resource.',
      'Platinum structural supply deficits for three consecutive years.',
      'Rhodium has no formal futures market — priced via limited dealer quotations.',
      'Chinese investors substituting out of gold into platinum/palladium drove real physical drawdowns in 2025–26.',
      'Russia has been liquidating palladium inventory to fund war expenditure.',
      'AI/data-centre PGM demand could grow fivefold by 2030 (Valterra estimate).',
    ],
    network: [
      { group: 'Origin', links: ['SOUTH AFRICA', 'ZIMBABWE', 'Bushveld Complex', 'Great Dyke'] },
      { group: 'Market', links: ['CHINA', 'SWITZERLAND', 'GERMANY', 'BELGIUM', 'USA'] },
      { group: 'Institution', links: ['World Platinum Investment Council', 'Minerals Council South Africa', 'SA DMRE'] },
      { group: 'Infrastructure', links: ['SA rail network', 'Eskom grid', 'Refineries & smelters', 'Export terminals'] },
      { group: 'Market Instrument', links: ['NYMEX', 'LPPM'] },
    ],
    summary: [
      { key: 'Supply', value: 'Extremely concentrated — SA dominant in Pt/Rh/Ru/Ir, Russia dominant in Pd' },
      { key: 'Demand', value: 'Automotive-dominant but diversifying (hydrogen, AI, jewelry substitution)' },
      { key: 'Reserve Concentration', value: 'Extreme (South Africa ~83% of global)' },
      { key: 'Infrastructure Dependence', value: 'Very High — uniquely exposed to SA electricity grid reliability' },
      { key: 'Geopolitical Sensitivity', value: 'High — intertwined with Russia sanctions and Chinese investment flows' },
      { key: 'Price Sensitivity', value: 'Extreme, particularly rhodium' },
      { key: 'Strategic Importance', value: 'Critical — among the most concentrated single-country supply positions' },
      { key: 'Primary African Opportunity', value: 'Structural deficit pricing + hydrogen/AI diversification + grid resilience investment' },
      { key: 'Primary African Constraint', value: 'Electricity reliability + deep-level cost structure + EV transition risk' },
    ],
  },

  'Diamonds': {
    strategic: [
      { title: 'Structural Disruption — Lab-Grown Substitution', points: ['Natural diamonds face a scalable, lower-cost, chemically-identical substitute gaining consumer acceptance — a genuinely different risk category from price-cycle volatility.', 'Producing states → sightholders/trading hubs (India, UAE, Belgium) → bifurcated natural/lab-grown consumer markets.'] },
      { title: 'Sovereign Ownership Ascendance', points: ['Botswana pursuit of full/majority ownership of De Beers via right-of-first-refusal is among the most assertive African sovereign moves in the catalog.'] },
      { title: 'Ownership Transition as Active Strategic Event', points: ['The Anglo American–De Beers divestment (targeted Q4 2026) is the single most significant live corporate event affecting this commodity — involving Botswana sovereignty ambitions, an Angola/Namibia-backed consortium, and South African rationalization.'] },
    ],
    ecosystem: [
      { title: 'Corporate Actors', actors: ['De Beers Group (ownership transition in progress)', 'ALROSA (Russia)', 'Debswana (Botswana / De Beers 50:50)', 'Endiama (Angola)', 'Okavango Diamond Company', 'Global Diamond Consortium (preferred bidder)'] },
      { title: 'Institutional Actors', actors: ['Kimberley Process Certification Scheme (83 participants)', 'World Diamond Council', 'Government of Botswana', 'National state diamond companies (Endiama, Namdeb)'] },
    ],
    countries: [
      { name: 'Botswana', role: "Historically Africa's #1 diamond producer by value (until 2024)", body: '~21M carats (2025 est.). Economic weight: ~80% of exports, ~30% of GDP. Assets: Jwaneng, Orapa, Letlhakane (Debswana). Strategy: pursuing majority/full De Beers ownership; 2026 sovereign credit downgrade. Risks: lab-grown, single-commodity dependency.' },
      { name: 'Angola', role: "Overtook Botswana as Africa's top producer by value in 2024", body: '~14–15M carats (2025 record). Assets: Catoca, Luele (Endiama stakes, ~91% of national output). Risks: falling per-carat prices. Opportunities: Endiama >$2B 2025 revenue target, potential GDC participation.' },
      { name: 'South Africa', role: 'Historic diamond origin (Kimberley)', body: '~5.3M carats (2024). Development: two-year Venetia production halt amid restructuring. Risks: production decline, De Beers sale uncertainty.' },
      { name: 'Namibia', role: 'Highest value-per-carat producer (marine deposits)', body: '~2.3M carats (2024). Assets: Skeleton Coast marine crawlers. Opportunity: participation in GDC bid.' },
      { name: 'DRC', role: 'Highest-volume, lowest-value African producer', body: '~9–10M carats, heavily artisanal (450K+ miners). Risks: informal dependency, conflict exposure.' },
    ],
    criticalInfra: ['Gaborone diamond sorting facility (~40M carats/yr)', 'Jwaneng & Orapa mines', 'Catoca & Luele mines', 'Venetia mine (SA)', 'Antwerp/Dubai/Mumbai trading & cutting infrastructure'],
    risk: [
      { tier: 'Supply', level: 'Moderate', factors: ['Deliberate supply discipline (Botswana)', 'DRC conflict/informal volatility', 'SA mine maturity'] },
      { tier: 'Political', level: 'High and rising', factors: ['Active De Beers ownership transition', 'Botswana sovereign credit downgrade', 'Right-of-first-refusal negotiations'] },
      { tier: 'Infrastructure', level: 'Low–Moderate', factors: ['Gaborone sorting centrality', 'Ownership-transition investment uncertainty'] },
      { tier: 'Market', level: 'Very High — structural', factors: ['Lab-grown substitution (structural, likely permanent)', 'Chinese luxury softness', 'Younger-generation preference shifts', 'Realised prices -19% YoY (Q1 2026)'] },
      { tier: 'Regulatory', level: '—', factors: ['Kimberley Process compliance', 'Ownership-transition approvals (Botswana)', 'Natural vs lab-grown disclosure'] },
    ],
    opportunities: [
      { title: 'Ownership & Value Capture', items: ['Botswana majority/full ownership of De Beers', 'Angola Endiama growth strategy', 'Namibia/Angola GDC participation'] },
      { title: 'Production', items: ['Angolan expansion (Catoca, Luele)', 'Namibian marine deposits', 'Selective SA rationalization'] },
      { title: 'Market Positioning', items: ['Natural provenance/certification premium', 'Sovereign wealth reinvestment (Pula Fund model)'] },
      { title: 'Technology', items: ['Enhanced sorting/grading', 'Blockchain provenance verification', 'Marine/deepwater extraction'] },
    ],
    marketDrivers: [
      { title: 'Supply-Side', items: ['De Beers output discipline', 'Angola counter-cyclical expansion', 'SA rationalization (Venetia)', 'Ownership transition impact'] },
      { title: 'Demand-Side', items: ['Lab-grown price/market-share growth', 'Chinese luxury trends', 'Younger-generation preferences', 'Bridal demand resilience'] },
      { title: 'Structural', items: ['De Beers ownership transition', 'African sovereign consolidation potential', 'Natural vs lab-grown segmentation'] },
    ],
    historical: [
      { title: 'Production', items: ['Angola overtook Botswana by value in 2024 (first shift in 20 years)', 'Botswana output -27.8% volume / -58.6% value (2023→2024)', 'Global production 120M carats (2022) → 98.8M (2025)'] },
      { title: 'Trade', items: ['Sanctions on Russian diamonds reshaped routes', 'UAE and EU remain top trading hubs'] },
      { title: 'Infrastructure / Policy', items: ['New 10-yr Sales Agreement + 25-yr Debswana licence to 2054 (Feb 2025)', 'Venetia 2-yr halt (2026)', 'Anglo American sale (May 2024); GDC preferred bidder (Jul 2026)'] },
      { title: 'Price', items: ['De Beers valuation marked down (~$4.9B Feb 2025; carrying value ~$2.3B)', 'Realised prices -19% YoY Q1 2026 to $101/carat'] },
    ],
    nuggets: [
      'Diamonds are the only commodity in the catalog facing a genuine substitute-product threat (lab-grown).',
      'Botswana ~80% of export earnings, ~30% of GDP — the most extreme national commodity concentration in the catalog; triggered a 2026 sovereign downgrade.',
      'Angola displaced Botswana as Africa top producer by value in 2024, ending 20 years of Botswanan dominance.',
      'Botswana holds a legal right of first refusal over Anglo American 85% stake in De Beers.',
      'India rough imports ($11.07B in 2025) exceed the combined production value of Russia, Botswana and Angola.',
      'Value-per-carat spreads ~70-fold across producers: DRC ~$5–11/carat vs Namibia ~$340–395/carat.',
      'DRC diamond sector relies on 450K+ artisanal miners.',
    ],
    network: [
      { group: 'Origin', links: ['BOTSWANA', 'ANGOLA', 'SOUTH AFRICA', 'NAMIBIA', 'DRC', 'LESOTHO', 'ZIMBABWE', 'SIERRA LEONE', 'Jwaneng Mine', 'Orapa Mine', 'Catoca Mine'] },
      { group: 'Market', links: ['INDIA', 'UAE', 'BELGIUM', 'HONG KONG', 'USA'] },
      { group: 'Institution', links: ['Kimberley Process', 'World Diamond Council', 'Debswana', 'Endiama'] },
      { group: 'Infrastructure', links: ['Gaborone sorting facility', 'Mining licences & JV structures', 'Cutting/polishing centres (India)'] },
      { group: 'Market Instrument', links: ['No formal futures — De Beers sights, ALROSA contracts, KP statistics'] },
    ],
    summary: [
      { key: 'Supply', value: 'Concentrated (Russia + Botswana + Angola ≈ 63% of global value) but Africa dominant in aggregate' },
      { key: 'Demand', value: 'Bifurcating structurally between natural and lab-grown' },
      { key: 'African Export Dependence', value: 'Extreme in Botswana specifically' },
      { key: 'Geopolitical Sensitivity', value: 'Very High — active, unresolved ownership transition (De Beers sale)' },
      { key: 'Price Sensitivity', value: 'Very High, compounded by structural lab-grown disruption' },
      { key: 'Strategic Importance', value: 'Critical for specific economies (Botswana existentially) but declining aggregate global weight' },
      { key: 'Primary African Opportunity', value: 'Sovereign ownership consolidation + value-per-carat optimization + provenance differentiation' },
      { key: 'Primary African Constraint', value: 'Lab-grown substitution + value-capture leakage to India/Belgium + Botswana overexposure' },
    ],
  },

  'Iron Ore': {
    strategic: [
      { title: 'Infrastructure-First Development Model', points: ['Simandou advanced only because capex and infrastructure were structured as a shared system (Compagnie du TransGuinéen) across multiple blocks — cited at Mining Indaba 2026 as the template for other African bulk commodities.', 'Guinea/South Africa production → shared rail-port → Chinese steel demand → global seaborne price-setting.'] },
      { title: 'The Resource-to-Refining Gap', points: ['Africa holds ~13.8% of global resources yet produced only ~1.2% of global crude steel in 2023 — one of the most extreme upstream/downstream imbalances in the catalog.'] },
      { title: 'Producer Leverage', points: ['Exceptional ore grade (~65% Fe Simandou vs 62% benchmark) positioning for premium green-steel segments; reserve scale (>5Bt); strategic timing as a new low-cost high-grade source.'] },
    ],
    ecosystem: [
      { title: 'Corporate Actors', actors: ['Rio Tinto (SimFer, Simandou Blocks 3&4)', 'Winning Consortium Simandou (Blocks 1&2)', 'Chinese state enterprises', 'Kumba Iron Ore / Anglo American (Sishen, Kolomela)', 'Compagnie du TransGuinéen (CTG)', 'Emerging Sierra Leone/Liberia/Mauritania operators'] },
      { title: 'Institutional Actors', actors: ['Guinean Ministry of Mines', 'South African DMRE', 'African Development Bank', 'World Economic Forum', 'National mining ministries'] },
    ],
    countries: [
      { name: 'South Africa', role: "Africa's only mature large-scale producer/exporter", body: '~40.4M t Fe-content (2023). Export price ~$96/t FOB (Nov 2025). Risks: aging infrastructure, rail/port constraints. Opportunities: beneficiation, domestic steel-value-chain.' },
      { name: 'Guinea', role: 'The transformational new entrant (Simandou)', body: 'First shipment Nov 2025 (200,000t, arrived China Jan 2026). Targets: 15–20Mt (2026), 40–50Mt (2027), 120Mt/yr by 2028. Reserves >5Bt @ ~65% Fe. Investment $23B — Africa largest mining project. Infrastructure: CTG rail + Port of Mabarya.' },
      { name: 'Sierra Leone', role: 'Emerging producer', body: 'Deposits: Marampa (532Mt @ 31% Fe), Tonkolili (12.7Bt resource @ 31% Fe).' },
      { name: 'Republic of Congo', role: 'Pre-production prospect', body: 'Zanaga project — 2.07Bt @ 34% Fe, feasibility-stage, targeting 30Mt/yr if developed.' },
    ],
    criticalInfra: ['Compagnie du TransGuinéen (rail + Port of Mabarya)', 'Saldanha Bay export terminal (SA)', 'Sishen–Saldanha rail corridor', 'Sierra Leone/Liberia/Mauritania port infrastructure'],
    risk: [
      { tier: 'Supply', level: 'Low–Moderate (SA); execution-dependent (Guinea)', factors: ['SA: mature operations, incremental risk', 'Guinea: unprecedented ramp-up execution risk'] },
      { tier: 'Political', level: 'Moderate', factors: ['Guinean governance continuity over multi-decade project life', 'SA regulatory/rail governance'] },
      { tier: 'Infrastructure', level: 'High during ramp-up', factors: ['CTG shared-infrastructure model functioning across consortia', 'SA rail/port capacity constraints'] },
      { tier: 'Market', level: 'High', factors: ['Persistent global oversupply', 'Extreme China-centric demand dependency', 'Soft consensus prices through 2026–27'] },
      { tier: 'Regulatory', level: '—', factors: ['Guinea state equity structure', 'Environmental permitting', 'Cross-border rail/port governance'] },
    ],
    opportunities: [
      { title: 'Production', items: ['Simandou full ramp-up (120Mt/yr by 2028)', 'Sierra Leone/Liberia/Mauritania growth', 'Zanaga FID', 'Additional Guinean projects'] },
      { title: 'Value Capture / Downstream', items: ['Domestic steel-value-chain (closing resource-to-refining gap)', 'Beneficiation capacity'] },
      { title: 'Infrastructure', items: ['Shared-infrastructure replication', 'SA rail/port expansion', 'New West African port/rail'] },
      { title: 'Technology', items: ['Digital mine-to-port monitoring', 'Beneficiation technology', 'Emissions-reduction for green-steel premium'] },
    ],
    marketDrivers: [
      { title: 'Supply-Side', items: ['Simandou ramp trajectory (largest new supply addition)', 'Australia/Brazil growth', 'SA rail constraints', 'New West African capacity'] },
      { title: 'Demand-Side', items: ['Chinese steel & property-sector health (dominant)', 'Green-steel premium for high-grade ore', 'Indian steel growth', 'Global infrastructure/urbanization'] },
      { title: 'Structural', items: ['Oversupply keeping prices <$100/t through 2026–27', 'Africa share ~4% → 13%+ by early 2030s', 'Decarbonization favoring high-grade suppliers', 'Resource-to-refining imbalance'] },
    ],
    historical: [
      { title: 'Production', items: ['Africa ~59.3M t Fe-content (2023, ~4% of global)', 'Simandou commissioning Nov 2024; first shipment Nov 2025', 'Africa steel ~15Mt (2014) → ~26Mt (2024)'] },
      { title: 'Trade', items: ['Guinea exports from zero in Nov 2025', 'SA established China/Europe relationships'] },
      { title: 'Infrastructure / Policy', items: ['CTG incorporated as shared rail/port vehicle', '$23B Simandou — Africa largest mining project'] },
      { title: 'Price', items: ['62% Fe ~$110/t (late 2024)', 'Mid-2026 dip below $100 to ~$98.90', 'WB forecast ~$97 (2026), ~$95 (2027)'] },
    ],
    nuggets: [
      'Simandou — $23B, Africa largest mining project — the largest concretely-quantified transformation of any African commodity market position, targeting 6.4% of global seaborne trade by 2030.',
      'Africa holds ~13.8% of global iron ore resources but only ~1.2% of global crude steel production.',
      'Simandou ~65% Fe positions it for premium green-steel segments.',
      'CTG shared rail/port model is being cited as a replicable template for African bulk commodities.',
      'Africa iron ore output could rise from ~90Mt toward 200–260Mt by 2030 (SMM).',
      'China record new yuan loan contraction (Jul 2026) is suppressing price even as African supply accelerates.',
    ],
    network: [
      { group: 'Origin', links: ['SOUTH AFRICA', 'GUINEA', 'SIERRA LEONE', 'LIBERIA', 'MAURITANIA', 'REPUBLIC OF CONGO', 'Simandou', 'Sishen', 'Marampa', 'Tonkolili', 'Zanaga'] },
      { group: 'Market', links: ['CHINA', 'JAPAN', 'SOUTH KOREA', 'EUROPE', 'INDIA'] },
      { group: 'Institution', links: ['African Development Bank', 'Guinean Ministry of Mines', 'South African DMRE'] },
      { group: 'Infrastructure', links: ['Compagnie du TransGuinéen', 'Port of Mabarya', 'Saldanha Bay terminal', 'Sishen–Saldanha rail'] },
      { group: 'Market Instrument', links: ['62% Fe CFR China', 'CME Iron Ore', 'Singapore Exchange'] },
    ],
    summary: [
      { key: 'Supply', value: 'Currently SA-concentrated; entering structural step-change via Guinea/Simandou' },
      { key: 'Demand', value: 'Overwhelmingly China-dependent (>70% of global demand)' },
      { key: 'Reserve Concentration', value: 'High — Africa is the world third-largest resource region (~13.8%)' },
      { key: 'Infrastructure Dependence', value: 'Extreme — the most literally infrastructure-bound commodity in the catalog' },
      { key: 'Geopolitical Sensitivity', value: 'Moderate-High — significant Chinese state involvement in Simandou' },
      { key: 'Strategic Importance', value: 'Rapidly rising — few commodities have a comparably quantified near-term step-change' },
      { key: 'Primary African Opportunity', value: 'Simandou ramp-up + shared-infrastructure replication + domestic steel-value-chain' },
      { key: 'Primary African Constraint', value: 'Persistent oversupply + extreme resource-to-refining imbalance + execution risk' },
    ],
  },

  'Phosphates': {
    strategic: [
      { title: 'Reserve Concentration as Structural Global Leverage', points: ['Morocco 68–70% of global reserves with phosphorus completely non-substitutable in agriculture — leverage measured in generations, not cycles.', 'OCP integrated mine-to-fertilizer → India/Europe/global agriculture → world food security.'] },
      { title: "China's Contrasting Model — Volume Without Reserve Leverage", points: ['China produces 44% but holds only ~5.4% of reserves; export restrictions redirect global demand toward Morocco, strengthening its long-term position.'] },
      { title: 'Consumer Dependency', points: ['Importing economies (India specifically) depend on stable supply to sustain domestic food production — buyer-side dependency arguably exceeds producer-side export dependency.'] },
    ],
    ecosystem: [
      { title: 'Corporate Actors', actors: ['OCP Group (state-owned, dominant)', 'Ma\'aden (Saudi Arabia)', 'Egyptian & Tunisian operators', 'Global fertilizer trading houses'] },
      { title: 'Institutional Actors', actors: ['Moroccan Ministry of Energy Transition & Sustainable Development', 'USGS (NMIC)', "India's fertilizer subsidy administration", 'EU CBAM bodies'] },
    ],
    countries: [
      { name: 'Morocco', role: "The world's dominant phosphate power", body: '36 Mt rock (2025). Reserves ~50Bt (~68–70% global), incl. Western Sahara. Centres: Khouribga (~30.6Mt), Gantour, Youssoufia, Ben Guerir, Meskala, Boucraâ. Infra: Jorf Lasfar complex. Operator: OCP. Risks: water constraints, sulfur/ammonia input costs, Western Sahara diplomacy. Opportunities: 70Mt rock / 20Mt fertilizer capacity by 2027.' },
      { name: 'Egypt', role: 'Established secondary African producer', body: '~5.5 Mt (2025). Opportunities: continued production growth, regional positioning.' },
      { name: 'Tunisia', role: 'Established smaller-scale producer', body: '~3.3 Mt (2025). Opportunities: Mediterranean export access.' },
    ],
    criticalInfra: ['Khouribga mining complex', 'Gantour, Youssoufia, Ben Guerir, Meskala, Boucraâ basins', 'Jorf Lasfar Industrial Complex (integrated processing/export hub)', 'Egyptian & Tunisian processing and port infrastructure'],
    risk: [
      { tier: 'Supply', level: 'Low for Morocco; Moderate globally', factors: ['Moroccan reserve security', 'Sulfur shortage & Chinese export restrictions (global trade-flow risk, not production risk)'] },
      { tier: 'Political', level: 'Low–Moderate', factors: ['Moroccan institutional stability', 'Western Sahara disputed status as diplomatic sensitivity'] },
      { tier: 'Infrastructure', level: 'Low–Moderate', factors: ['Jorf Lasfar mature infrastructure', 'Input-supply chains (sulfur, ammonia)'] },
      { tier: 'Market', level: 'High currently', factors: ['Sulfur shortage & Hormuz disruption elevating DAP costs', 'Chinese export policy reversal risk (8–15% downside)', 'Middle East conflict spillover'] },
      { tier: 'Regulatory / ESG', level: '—', factors: ['Water usage intensity (3–4 m³/t)', 'EU CBAM on ammonia-embedded exports', 'Producer export-policy precedents'] },
    ],
    opportunities: [
      { title: 'Production', items: ['Morocco expansion to 70Mt rock / 20Mt fertilizer by 2027', 'Egypt/Tunisia capacity development', 'New African discoveries'] },
      { title: 'Downstream Value Capture', items: ['Integrated DAP/MAP manufacturing', 'Sub-Saharan fertilizer-access initiatives'] },
      { title: 'Market Positioning', items: ['Benefit from Chinese export restrictions', 'Atlantic/Mediterranean advantage over Gulf competitors', 'Reserve-based pricing power'] },
      { title: 'Technology', items: ['Water-efficient processing', 'Digital production/logistics monitoring', 'Carbon-emissions reduction (CBAM compliance)'] },
    ],
    marketDrivers: [
      { title: 'Supply-Side', items: ['Chinese export policy (restriction & reversal)', 'Sulfur availability', 'Ammonia input costs', 'Moroccan capacity expansion'] },
      { title: 'Demand-Side', items: ['Global food production growth (structural)', 'India subsidy & procurement cycles', 'Agricultural commodity price cycles', 'EU CBAM influence'] },
      { title: 'Structural', items: ['Reserve depletion elsewhere increasing Morocco reliance', 'No substitute for phosphorus in agriculture', 'Geopolitical risk reshaping input economics', 'Importers diversifying concentration risk'] },
    ],
    historical: [
      { title: 'Production', items: ['Global rock output ~3Mt (early 1900s) → >200Mt today', 'Production centres shifted US→Soviet→Morocco', '250Mt (2025) vs 239Mt (2024)'] },
      { title: 'Trade', items: ['China halted new export applications (Dec 2024), restrictions through Aug 2026', 'US buyers redirected to Morocco/Saudi at a premium'] },
      { title: 'Infrastructure / Policy', items: ['EU CBAM effective Jan 1, 2025', 'US added phosphate rock to critical minerals (Nov 7, 2025)', 'New US ammonia capacity (Gulf Coast, Woodside Beaumont)'] },
      { title: 'Price', items: ['Morocco FOB ~$152 (Q1 2025) → ~$158 (Q1 2026)', 'DAP +20–30% YoY by spring 2026', 'Fitch DAP ~$650 (2026), -10% projected 2027'] },
    ],
    nuggets: [
      'Morocco ~50Bt reserves (68–70% of global) — among the most extreme single-country resource concentrations, for a commodity with no substitute in food production.',
      'Phosphorus has no synthetic alternative — arguably the most food-security-critical commodity in the catalog.',
      'China produces 44% but holds only ~5.4% of reserves — volume without reserve leverage.',
      'Chinese export restrictions removed ~30% of global export supply, triggering a genuine fertilizer supply shock.',
      'Morocco is one of the only major African exporters capturing significant downstream value domestically (OCP mine-to-DAP/MAP at Jorf Lasfar).',
      "Morocco's Atlantic/Mediterranean geography reduces Hormuz shipping exposure versus Gulf competitors.",
      'India is the most consequential single demand node — subsidy policy functions almost as a price-setting mechanism.',
    ],
    network: [
      { group: 'Origin', links: ['MOROCCO', 'EGYPT', 'TUNISIA', 'Khouribga', 'Gantour', 'Ben Guerir', 'Boucraâ (Western Sahara)'] },
      { group: 'Market', links: ['INDIA', 'EUROPE', 'USA', 'BRAZIL', 'SUB-SAHARAN AFRICA'] },
      { group: 'Institution', links: ['OCP Group', 'USGS', "India's fertilizer subsidy administration", 'EU CBAM bodies'] },
      { group: 'Infrastructure', links: ['Jorf Lasfar Industrial Complex', 'Khouribga mining complex', 'Phosphoric acid facilities', 'DAP/MAP plants'] },
      { group: 'Market Instrument', links: ['Morocco FOB benchmark', 'India CFR benchmark', 'DAP/MAP spot indices'] },
    ],
    summary: [
      { key: 'Supply', value: 'Production concentrated in China (volume); reserves overwhelmingly in Morocco (leverage)' },
      { key: 'Demand', value: 'Globally universal and structurally non-negotiable — tied to food production' },
      { key: 'Reserve Concentration', value: 'Among the most extreme in the catalog (68–70% in a single country)' },
      { key: 'Geopolitical Sensitivity', value: 'High and rising — sulfur/ammonia shocks, Chinese policy, Middle East shipping' },
      { key: 'Strategic Importance', value: 'Critical — arguably the most structurally permanent demand driver in the catalog' },
      { key: 'Primary African Opportunity', value: 'Capacity expansion + downstream value capture + structural beneficiary as reserves deplete' },
      { key: 'Primary African Constraint', value: 'Water availability + input-cost exposure + geopolitical shipping risk' },
      { key: 'Primary Global Function', value: 'Essential input for phosphorus-based fertilizer underpinning global food production' },
    ],
  },

  'Cobalt': {
    strategic: [
      { title: 'Extreme Concentration Meeting Great-Power Competition', points: ['DRC ~72–73% of mine supply at the center of active US-China strategic competition over EV batteries and defense superalloys.', 'DRC mine production → Chinese refining (historical) OR emerging US-backed chains (Etoile/Mutoshi, Lobito Corridor) → battery & defense supply chains.'] },
      { title: 'Producer Leverage — A Policy Success Story', points: ['The DRC 2025 export ban and quota system reversed a multi-year price collapse and more than doubled prices within ~a year.'] },
      { title: 'Byproduct Structural Vulnerability', points: ['~70% of global supply is extracted as a byproduct of copper mining — cobalt cannot easily supply-respond to its own price signals.'] },
    ],
    ecosystem: [
      { title: 'Corporate Actors', actors: ['CMOC (Kisanfu, Tenke Fungurume)', 'Glencore (Mutanda)', 'Jinchuan Group / Gécamines (Musonoi)', 'Gécamines (DRC state)', 'Chemaf (Etoile, Mutoshi)', 'Chinese refining operators'] },
      { title: 'Institutional Actors', actors: ['DRC Ministry of Mines', 'USGS', 'LME', 'US strategic stockpile program', 'African Development Bank'] },
    ],
    countries: [
      { name: 'DR Congo', role: "The world's dominant cobalt producer", body: '~230K t (2025), forecast ~247.7K t (2026). Reserves ~6Mt (97% Africa, ~55% global). Assets: TFM & KFM (CMOC), Mutanda (Glencore), Musonoi, Etoile & Mutoshi. Policy: Feb 2025 export ban → quota system (18,125t remainder 2025; up to 96,600t/yr 2026–27, incl. 9,600t strategic reserves). Risks: copper byproduct dependency, quota friction, eastern DRC security, water pollution. Opportunities: Lobito diversification, US partnerships.' },
    ],
    criticalInfra: ['Tenke Fungurume (TFM)', 'Kisanfu (KFM)', 'Mutanda', 'Musonoi', 'Etoile & Mutoshi', 'Lobito Corridor', 'DRC quota administration & export licensing (soft infrastructure)'],
    risk: [
      { tier: 'Supply', level: 'High, policy-driven', factors: ['DRC export quota administration', 'Byproduct dependency on copper/nickel', 'New project ramp-up risk'] },
      { tier: 'Political', level: 'High', factors: ['DRC quota governance (live mechanism)', 'Eastern DRC security', 'US-China asset competition'] },
      { tier: 'Infrastructure', level: 'Moderate–High', factors: ['China-linked export dependency', 'Lobito in build-out phase', 'Quota administration friction'] },
      { tier: 'Market', level: 'Very High', factors: ['Extreme price volatility demonstrated', '2026 deficit forecast subject to policy reversal', 'LFP/cobalt-free chemistry adoption', 'US stockpile demand sustainability'] },
      { tier: 'Regulatory / ESG', level: '—', factors: ['Water resource depletion & river pollution', 'Artisanal human-rights concerns', 'Export licensing compliance'] },
    ],
    opportunities: [
      { title: 'Production', items: ['Musonoi & Mutanda ramp-up', 'Potential quota expansion', 'Integrated Copperbelt development'] },
      { title: 'Value Capture / Diversification', items: ['Lobito Corridor as alternative route', 'US-backed asset partnerships', 'Domestic beneficiation/refining'] },
      { title: 'Market Positioning', items: ['Demonstrated export-policy leverage', 'US stockpile & defense demand'] },
      { title: 'Technology', items: ['Recycling development (<10% of supply today)', 'Digital quota-compliance monitoring', 'Byproduct recovery efficiency'] },
    ],
    marketDrivers: [
      { title: 'Supply-Side', items: ['DRC export quota policy (dominant)', 'Indonesian HPAL byproduct growth', 'New DRC project ramp-ups', 'Copper/nickel investment decisions'] },
      { title: 'Demand-Side', items: ['EV cathode demand (offset by LFP)', 'US strategic stockpiling', 'Aerospace/superalloy demand', 'Energy storage growth'] },
      { title: 'Structural', items: ['US-China competition for supply-chain control', 'Battery chemistry evolution', 'Byproduct-linked supply inelasticity', 'Recycling growing but marginal'] },
    ],
    historical: [
      { title: 'Production', items: ['Global output 190K t (2022) → 230K (2023) → ~330K (2025)', 'Indonesia output ~1,500% growth since 2021', 'Musonoi began production Sept 2025'] },
      { title: 'Trade', items: ['Feb 2025 DRC export ban', 'June 2025 ban extended', 'Oct 2025 formal quota system', 'Q1 2026 quota friction'] },
      { title: 'Infrastructure / Policy', items: ['$700M Etoile/Mutoshi US acquisition', 'Lobito Corridor prominence', '$12B US strategic stockpile'] },
      { title: 'Price', items: ['2025 began near nine-year lows', 'Prices more than doubled by end-2025', 'Apr 2026 LME $56,290/t (+67.48% YoY, six consecutive months of gains)'] },
    ],
    nuggets: [
      'The DRC Feb 2025 export ban/quota system is one of the most consequential and successful African sovereign commodity interventions in the catalog — prices more than doubled within ~a year.',
      'Cobalt is uniquely bifurcated: DRC controls ~72–73% of mine supply, China controls most global refining.',
      '~70% of global cobalt is a copper-mining byproduct in the DRC Copperbelt.',
      'US acquired Etoile/Mutoshi (~5% of global output) for $700M after a two-year contest with Chinese bidders.',
      'A $12B US strategic stockpile was a genuine, quantifiable driver of the 2025–26 rally.',
      'DRC + Indonesia ~87–88% of global supply; Indonesia output grew ~1,500% since 2021.',
      'Cobalt recycling supplies <10% of demand, with potential to reach 15% by 2030 — value currently captured entirely off-continent.',
    ],
    network: [
      { group: 'Origin', links: ['DRC', 'Central African Copperbelt', 'Tenke Fungurume', 'Kisanfu', 'Mutanda', 'Musonoi', 'Etoile', 'Mutoshi'] },
      { group: 'Market', links: ['CHINA', 'USA'] },
      { group: 'Institution', links: ['DRC Ministry of Mines', 'USGS', 'LME', 'US strategic stockpile program'] },
      { group: 'Infrastructure', links: ['Lobito Corridor', 'DRC export quota/licensing system', 'Chinese refining facilities'] },
      { group: 'Market Instrument', links: ['LME Cobalt', 'Fastmarkets MB Cobalt', 'Hydroxide payable %'] },
    ],
    summary: [
      { key: 'Supply', value: 'Extremely concentrated (DRC ~72–73%) and structurally byproduct-dependent on copper' },
      { key: 'Demand', value: 'Battery/EV-dominant, increasingly diversified by government stockpiling and superalloys' },
      { key: 'Reserve Concentration', value: 'Extreme (DRC 97% of Africa, ~55% of global)' },
      { key: 'Infrastructure Dependence', value: 'High — physical (Lobito) and regulatory (quota systems)' },
      { key: 'Geopolitical Sensitivity', value: 'Extreme — a live front in US-China strategic mineral competition' },
      { key: 'Price Sensitivity', value: 'Extreme — one of the most dramatic single-year reversals in the catalog' },
      { key: 'Primary African Opportunity', value: 'Quota-driven price leverage + Lobito diversification + US partnership + eventual beneficiation' },
      { key: 'Primary African Constraint', value: 'Byproduct dependency + quota friction + LFP substitution + absence of domestic refining' },
    ],
  },

  'Bauxite': {
    strategic: [
      { title: 'The Cobalt Playbook Applied to Bauxite', points: ['Guinea export-management strategy is explicitly modeled on the DRC cobalt intervention — volume caps targeting prices above $100/dmt from a ~$32–34/dmt start.', 'Guinea mine production (state-influenced) → Chinese refining/smelting demand (>70% of exports) → global aluminum supply chains.'] },
      { title: 'Value-Capture Leakage — Widest Spread Pattern', points: ['FOB Guinea (~$32–39/dmt) vs CIF China (~$59–70/dmt) — a ~60–80% markup captured entirely outside Guinea, exceeding gold or diamonds leakage in proportional terms.'] },
      { title: 'Consumer Dependency', points: ['China domestic bauxite production is declining while smelting capacity expands — a durable supply gap only Guinea reserve scale can fill.'] },
    ],
    ecosystem: [
      { title: 'Corporate Actors', actors: ['SMB (Société Minière de Boké)', 'CBG (Compagnie des Bauxites de Guinée)', 'AMC (Alliance Minière Responsable)', 'Chalco', 'Hongqiao (AGB2A, SDM)', 'Emirates Global Aluminium (licence revoked Aug 2025)', 'Nimba Mining (state-owned)', 'Metro Mining (Australia)'] },
      { title: 'Institutional Actors', actors: ['Guinean government / Ministry of Mines', 'BMI (Fitch Solutions)', 'Fastmarkets', 'USGS'] },
    ],
    countries: [
      { name: 'Guinea', role: "The world's dominant bauxite producer and exporter", body: '~130–183 Mt (2025; H1 2026 exports record 114.8Mt, +15% YoY). Reserves ~7.4Bt (largest globally, ~30%). Operators: SMB, CBG, AMC, Chalco, Hongqiao entities. Policy: Aug 2025 EGA licence revocation & state transfer; Apr 2026 export caps modeled on cobalt, targeting >$100/dmt. Downstream: 5–6 alumina refineries by 2030 (7Mt capacity).' },
    ],
    criticalInfra: ['Boké region mining complex', 'Guinean export port facilities', 'Emerging alumina refineries (2030 targets)', 'Chinese port & refining infrastructure'],
    risk: [
      { tier: 'Supply', level: 'Low (resource); High (policy volatility)', factors: ['Unconstrained reserve potential', 'Evolving export-management policy', 'Rising operating costs for smaller operators'] },
      { tier: 'Political', level: 'High and rising', factors: ['Resource nationalism (EGA precedent)', 'Export volume cap uncertainty', 'Guinean regulatory environment'] },
      { tier: 'Infrastructure', level: 'Low–Moderate (exports); High (refining buildout)', factors: ['Mature mine-to-port logistics', 'Unrealized 5–6 refinery buildout'] },
      { tier: 'Market', level: 'Very High', factors: ['Structural oversupply at four-year lows', 'Extreme single-buyer concentration (>70% China)', 'Export-management strategy uncertainty', 'Alumina downstream surplus'] },
      { tier: 'Regulatory', level: '—', factors: ['Licence revocation precedent (expropriation-adjacent)', 'Export quota design/enforcement', 'Potential tax adjustments'] },
    ],
    opportunities: [
      { title: 'Production', items: ['Continued Guinean reserve development', 'Disciplined, price-supportive export management'] },
      { title: 'Value Capture', items: ['Domestic alumina refining (5–6 plants, 7Mt by 2030)', 'Closing the FOB→CIF spread'] },
      { title: 'Market Positioning', items: ['Structural beneficiary of China domestic decline', 'Cobalt-playbook replication if disciplined'] },
      { title: 'Technology', items: ['Digital export-volume monitoring', 'Alumina refining tech transfer', 'Logistics/port efficiency'] },
    ],
    marketDrivers: [
      { title: 'Supply-Side', items: ['Guinea export-volume decisions (dominant swing)', 'China domestic production decline (structural)', 'Australian growth', 'New project commissioning'] },
      { title: 'Demand-Side', items: ['Chinese refining/smelting utilization', 'Clean-energy aluminum demand', 'Indian sector expansion', 'Middle East demand (Hormuz-disrupted)'] },
      { title: 'Structural', items: ['Export-management policy experiment', 'China structural import dependency', 'Global alumina refining surplus', 'Guinean refining ambitions'] },
    ],
    historical: [
      { title: 'Production', items: ['Guinea overtook Australia as world #1 in 2023', 'Global 451.3Mt (2025), +2.3%/yr through 2034', 'H1 2026 Guinea exports +15% YoY'] },
      { title: 'Trade', items: ['China imports +26% in 2025 to record 201.2Mt (Guinea ~149Mt, +35%)', 'H1 2025 imports +34% YoY'] },
      { title: 'Infrastructure / Policy', items: ['May 2025 EGA revocation plan → Oct 2025 export suspension → Aug 2025 formal stripping', 'Apr 2026 export reduction measures'] },
      { title: 'Price', items: ['Alumina >$800/t (late 2024) → ~$330/t (mid-2026)', 'Bauxite FOB Guinea four-year lows $32–38/dmt', 'DRC cobalt precedent: ~$10/lb → $57,320/t in a year'] },
    ],
    nuggets: [
      'Guinea export strategy is explicitly modeled on — and cites — the DRC cobalt export ban as a policy template.',
      'The FOB Guinea→CIF China spread (~60–80% markup) is one of the widest value-capture leakage gaps in the catalog.',
      "China's bauxite dependency on Guinea is structural, not cyclical — domestic production is declining.",
      'A senior Guinean executive warned continued high-volume exports (240Mt/yr threshold) could collapse prices to $50/t to China.',
      'Guinea 7.4Bt reserve base is the largest of any single country — nearly 30% of world reserves.',
      'Alumina trades at roughly 8–10x bauxite per tonne — the scale of the value-capture opportunity targeted by 2030 refineries.',
      'The Aug 2025 revocation of EGA mining rights is one of the most concrete examples of rising African resource nationalism.',
    ],
    network: [
      { group: 'Origin', links: ['GUINEA', 'Boké region'] },
      { group: 'Market', links: ['CHINA', 'INDIA'] },
      { group: 'Institution', links: ['Guinean Ministry of Mines', 'BMI/Fitch Solutions', 'USGS'] },
      { group: 'Infrastructure', links: ['Guinean export ports', 'Planned alumina refineries (2030)', 'Chinese port & refining infrastructure'] },
      { group: 'Market Instrument', links: ['Fastmarkets Bauxite FOB Guinea', 'Fastmarkets Bauxite CIF China', 'SMM Imported Bauxite Index', 'Alumina Index FOB Australia'] },
    ],
    summary: [
      { key: 'Supply', value: 'Extremely concentrated (Guinea alone — mirrors cobalt DRC pattern)' },
      { key: 'Demand', value: 'Overwhelmingly China-dependent (>70% of Guinea exports), structurally deepening' },
      { key: 'Reserve Concentration', value: 'Extreme (Guinea largest single-country base, ~30% of global)' },
      { key: 'Geopolitical Sensitivity', value: 'High and rising — resource nationalism + cobalt-inspired policy experiment + Chinese capital' },
      { key: 'Price Sensitivity', value: 'Extreme — four-year lows despite record demand, with a live intervention attempting a reversal' },
      { key: 'Strategic Importance', value: 'Critical and actively being tested — one of the most closely-watched live commodity-policy situations' },
      { key: 'Primary African Opportunity', value: 'Cobalt-style export leverage + domestic alumina refining + structural Chinese demand growth' },
      { key: 'Primary African Constraint', value: 'Self-inflicted oversupply risk + single-buyer concentration + minimal domestic value-add + policy risk' },
    ],
  },

  'Coal': {
    strategic: [
      { title: 'The Decarbonization Paradox', points: ['Coal is simultaneously the most structurally challenged commodity (first projected global decline, decommissioning targets) and the most domestically indispensable to South Africa near-term economic function.', 'Mpumalanga coalfields → domestic power (Eskom, dominant) AND Richards Bay export terminal → Europe/India/China.'] },
      { title: 'Producer Leverage — Limited and Diminishing', points: ['South Africa has no structural basis for export-restriction leverage given coal globally abundant supply and declining demand.'] },
      { title: 'Infrastructure as the Binding Constraint', points: ['Transnet rail underperformance vs RBCT nameplate capacity has been the primary volume constraint — private-operator access is a meaningful incremental unlock.'] },
    ],
    ecosystem: [
      { title: 'Corporate Actors', actors: ['Thungela Resources', 'Seriti Resources', 'Exxaro Resources (Grootegeluk)', 'Sasol Mining (Secunda CTL)', 'Glencore (Nkomati)', 'Eskom (dominant domestic offtaker)', 'Transnet Freight Rail'] },
      { title: 'Institutional Actors', actors: ['South African DMRE', 'International Energy Agency', 'Richards Bay Coal Terminal', 'globalCOAL'] },
    ],
    countries: [
      { name: 'South Africa', role: "Africa's overwhelmingly dominant coal producer/exporter; world 7th producer, 5th seaborne exporter, 3rd thermal exporter", body: '~234–247Mt (2025). Exports 71.86Mt ($5.98B, -16% YoY). Reserves ~35Bt (~173 yrs). Assets: Grootegeluk (Exxaro, ~18.8Mt/yr feeding Matimba), Khwezela, New Vaal, Wolvekrans. Infra: RBCT (91Mt/yr nameplate, underutilized), Transnet. Policy: IRP 2025 targets 8GW coal decommissioning by 2030.' },
      { name: 'Mozambique', role: 'Secondary African coal exporter (coking)', body: '~15.9Mt (annualized), trending down (-9.5% YoY).' },
    ],
    criticalInfra: ['Richards Bay Coal Terminal (91Mt/yr nameplate)', 'Transnet Freight Rail (Mpumalanga–Richards Bay)', 'Grootegeluk + dedicated 7km conveyor to Matimba', 'Eskom coal-fired stations (Matimba, Medupi)', 'Sasol Secunda coal-to-liquids'],
    risk: [
      { tier: 'Supply', level: 'Low (resource); Moderate (infrastructure)', factors: ['~173-yr reserve life', 'Rail capacity structurally capping exports'] },
      { tier: 'Political', level: 'Low–Moderate', factors: ['Stable SA regulatory environment', 'IRP decommissioning targets as gradual headwind'] },
      { tier: 'Infrastructure', level: 'High, improving', factors: ['Transnet underperformance', 'Recovery measures + private operator access (+1Mt/yr over 3 yrs)'] },
      { tier: 'Market', level: 'High, structural', factors: ['Global demand in decline (2026 -1.4%)', 'Weaker pricing eroding revenue', 'Africa/Europe coking downside risk', 'EAF steel adoption'] },
      { tier: 'Regulatory / ESG', level: '—', factors: ['SA domestic decommissioning targets', 'Global carbon pricing & ESG divestment', 'EU carbon policy'] },
    ],
    opportunities: [
      { title: 'Production', items: ['Thungela output growth on rail availability', 'Sasol Secunda demand floor'] },
      { title: 'Infrastructure', items: ['Transnet recovery & private rail access', 'RBCT utilization improvement'] },
      { title: 'Market Positioning', items: ['Opportunistic European demand capture', 'India import-mix competitiveness'] },
      { title: 'Technology', items: ['Rail/logistics digital monitoring', 'Coal-to-liquids refinement (Sasol)', 'Mine productivity & safety tech'] },
    ],
    marketDrivers: [
      { title: 'Supply-Side', items: ['Transnet rail performance (dominant SA driver)', 'Global production trends (2026 decline)', 'Competing exporters (Indonesia, Australia, Russia, USA, Colombia)', 'Indonesian weather disruptions'] },
      { title: 'Demand-Side', items: ['Chinese weather-driven electricity demand', 'India domestic production scaling', 'European renewable variability', 'Global steel rates (coking)'] },
      { title: 'Structural', items: ['Global decarbonization policy', 'EAF steelmaking adoption', 'SA IRP decommissioning targets', 'First global production decline (2026)'] },
    ],
    historical: [
      { title: 'Production', items: ['SA output +1% in 2024 (~240Mt); ~247Mt projected 2025 (IEA)', 'SA projected 228Mt by 2030'] },
      { title: 'Trade', items: ['EU coal exports surged 655.3% YoY after Russian coal sanctions', '2025 European demand growth on wind/hydro shortfalls'] },
      { title: 'Infrastructure / Policy', items: ['Transnet financial guarantee recovery plan', 'Private rail operator rule changes', 'IRP 2025: 8GW decommissioning by 2030'] },
      { title: 'Price', items: ['Thermal prices back to pre-2022-crisis levels by mid-2025', 'Coking (PLV HCC) ~$225.50/t Aug 2026 (+17.14% YoY)', 'Newcastle ~$130/t through mid-2026'] },
    ],
    nuggets: [
      '2026 marks the first projected annual decline in global coal production since the recent peak.',
      'SA coal embodies a catalog-unique tension: structurally challenged globally, domestically indispensable (electricity).',
      'Sasol Secunda coal-to-liquids is a genuinely unusual industrial use case, providing a demand floor insulated from export cycles.',
      'Transnet underperformance vs RBCT nameplate has been the primary volume constraint for years.',
      'SA export revenue fell 16% YoY in 2025 despite a 1.3% volume increase — price, not volume, drove the outcome.',
      'SA coal exports to the EU surged 655.3% YoY after Russian-coal sanctions; 2025 saw further growth on wind/hydro shortfalls.',
      'Unlike cobalt/bauxite, SA has no structural grounds for export-restriction leverage given abundant global supply.',
    ],
    network: [
      { group: 'Origin', links: ['SOUTH AFRICA', 'MOZAMBIQUE', 'Mpumalanga coalfields', 'Grootegeluk Mine', 'Waterberg'] },
      { group: 'Market', links: ['EUROPE', 'INDIA', 'CHINA'] },
      { group: 'Institution', links: ['South African DMRE', 'International Energy Agency', 'globalCOAL'] },
      { group: 'Infrastructure', links: ['Richards Bay Coal Terminal', 'Transnet Freight Rail', 'Eskom (Matimba, Medupi)', 'Sasol Secunda'] },
      { group: 'Market Instrument', links: ['Newcastle 6000', 'API2 CIF ARA', 'Richards Bay FOB / globalCOAL RB', 'PLV HCC'] },
    ],
    summary: [
      { key: 'Supply', value: 'Extremely concentrated within Africa (South Africa alone)' },
      { key: 'Demand', value: 'Globally in structural decline for the first time among catalog energy commodities' },
      { key: 'Reserve Concentration', value: 'Moderate globally (~3%) with an exceptionally long domestic runway (~173 yrs)' },
      { key: 'Infrastructure Dependence', value: 'High — rail capacity has been the persistent binding constraint' },
      { key: 'Geopolitical Sensitivity', value: 'Moderate — more exposed to decarbonization policy than great-power competition' },
      { key: 'Strategic Importance', value: 'Declining globally but foundational to SA domestic economic function' },
      { key: 'Primary African Opportunity', value: 'Rail/logistics improvement + opportunistic EU demand + Sasol demand floor' },
      { key: 'Primary African Constraint', value: 'Structural demand decline + rail underperformance + domestic decommissioning + weak pricing' },
    ],
  },

  'Refined Petroleum': {
    strategic: [
      { title: 'The Single Most Rapid Structural Transformation in the Catalog', points: ['Within ~two years (Jan 2024 → early 2026) Nigeria moved from Africa largest refined-fuel importer to a net exporter of petrol, jet fuel, naphtha and fuel oil.', 'Nigerian/Angolan crude feedstock → African refining (Dangote dominant) → West/East/Southern African fuel importers, displacing Middle East/European routes.'] },
      { title: 'Private-Sector-Led Model', points: ['Unlike DRC cobalt, Guinea bauxite or Moroccan OCP, this transformation is driven by a single private $20B commitment (Dangote), now reinforced by Nigerian regulatory action.'] },
      { title: 'The Persistent Feedstock Paradox', points: ['Despite being a major producer, Dangote has faced NNPC domestic crude allocation shortfalls, forcing costly international purchases — Africa having to re-import its own type of resource.'] },
    ],
    ecosystem: [
      { title: 'Corporate Actors', actors: ['Dangote Petroleum Refinery & Petrochemicals ($20B, world largest single-train)', 'NNPC', 'Conoil, MRS Nigeria, TotalEnergies (Nigeria) — import licences suspended', 'International trading houses', 'Akwa Ibom Refinery, Lobito & Soyo Refineries (emerging)'] },
      { title: 'Institutional Actors', actors: ['NMDPRA', 'Central Bank of Nigeria', 'CORAN', 'OPEC', "South Africa's National Treasury"] },
    ],
    countries: [
      { name: 'Nigeria', role: 'The overwhelming epicenter of Africa refined-products transformation', body: 'Dangote 650K bpd full capacity (early 2026), expanding toward 1.4M bpd. Domestic fuel self-sufficiency 92% (Feb 2026). Net exporter of petrol (first time in decades), jet fuel, naphtha, fuel oil. Policy: NMDPRA import licence suspensions (~25% of W. African gasoline imports). Risks: NNPC feedstock shortfalls, residual import dependency, single-facility concentration.' },
      { name: 'Angola', role: 'Second major refining expansion story (state-driven)', body: 'Planned Lobito (200K bpd) and Soyo (100K bpd) refineries targeting 2030.' },
      { name: 'Uganda', role: 'Leading contributor to continental capacity pipeline', body: 'Part of Africa 1.2M bpd addition by 2030 (OPEC World Oil Outlook).' },
    ],
    criticalInfra: ['Dangote Refinery (Lekki FIZ)', 'Akwa Ibom Refinery (200K bpd)', 'Lobito & Soyo Refineries (Angola, 2030)', 'Nigerian port/tanker infrastructure', 'NNPC domestic crude allocation & JV supply'],
    risk: [
      { tier: 'Supply', level: 'Moderate, feedstock-focused', factors: ['NNPC crude allocation shortfalls', 'Imported crude margin exposure', 'Single-facility concentration'] },
      { tier: 'Political', level: 'Moderate', factors: ['NMDPRA import licensing policy', 'NNPC JV allocation reliability'] },
      { tier: 'Infrastructure', level: 'Moderate–High given concentration', factors: ['Extreme single-facility concentration', 'Angola/Uganda capacity early-stage'] },
      { tier: 'Market', level: 'High, currently favorable', factors: ['Middle East-linked volatility accelerating African demand', 'Crude feedstock cost volatility', 'Potential reversal if tensions ease'] },
      { tier: 'Regulatory', level: '—', factors: ['Nigerian import licensing evolution', 'Regional trade policy as networks mature', 'Consumer-price protection limits'] },
    ],
    opportunities: [
      { title: 'Production / Capacity', items: ['Dangote expansion to 1.4M bpd', 'Africa 1.2M bpd pipeline by 2030 (Nigeria, Angola, Uganda)', 'Akwa Ibom development', 'Angola Lobito/Soyo (300K bpd)'] },
      { title: 'Value Capture', items: ['Displacement of the historical $17B annual import bill', 'Deepening intra-African trade', 'Petrochemical diversification (polypropylene)'] },
      { title: 'Market Positioning', items: ['Nigeria as regional refining hub', 'Benefit from Middle East tensions', 'South Africa/Kenya diversification interest'] },
      { title: 'Technology', items: ['Euro V/VI product standards', 'Feedstock-security infrastructure'] },
    ],
    marketDrivers: [
      { title: 'Supply-Side', items: ['Dangote expansion (650K → 1.4M bpd)', 'New capacity through 2030', 'NNPC allocation reliability', 'Global crude feedstock pricing'] },
      { title: 'Demand-Side', items: ['Regional fuel security amid disruption', 'Middle East geopolitical tension', 'Transport/aviation/industrial growth', 'SA & Kenya diversification'] },
      { title: 'Structural', items: ['Reversal of raw-crude-export/refined-import pattern', 'Intra-African refined-product trade architecture', 'Global oil volatility (accelerant + risk)'] },
    ],
    historical: [
      { title: 'Production / Capacity', items: ['Dangote operations began Jan 2024', '~90% utilization late 2025', 'Full 650K bpd by Feb 2026', 'Expansion to 1.4M bpd announced Oct 2025'] },
      { title: 'Trade', items: ['Nigeria largest African importer 2023 (476K bpd)', '$17B Africa import bill (2023)', 'Nigeria fuel imports ~$14B (2024)', 'Mar 2026: 456,000t across 12 cargoes to five nations', '2025: $1.4B refined fuel from UK alone'] },
      { title: 'Infrastructure / Policy', items: ['Jan 2026 NMDPRA licence suspensions', 'Mar 2026 SA/Ghana/Kenya supply discussions', 'OPEC World Oil Outlook: 1.2M bpd pipeline'] },
      { title: 'Financial', items: ['Dangote-linked crude imports $3.74B (2025)', 'Nigeria current account $14.04B surplus (2025)', 'External reserves $45.75B (+13.83% YoY)'] },
    ],
    nuggets: [
      'Nigeria flipped from Africa largest refined-fuel importer to net petrol exporter within ~two years — the fastest, most complete structural reversal in the catalog.',
      'Despite being a major producer, Dangote faced persistent NNPC crude allocation shortfalls, forcing international crude purchases.',
      'The CBN now explicitly treats Dangote as a structural driver of the national balance of payments.',
      "Africa's ~$17B (2023) refined-product import bill is one of the starkest raw-export/finished-import inversions in the catalog.",
      'Even South Africa — Africa most industrially developed economy — sought a supply arrangement with Dangote (Mar 2026).',
      'Nigerian regulators suspended import licences for firms representing ~25% of West African gasoline imports.',
      '2026 Middle East tensions accelerated the transition, arriving in favorable alignment with Dangote full capacity.',
      'Despite Dangote scale, Nigeria still imported $1.4B in refined fuel from the UK alone in 2025.',
    ],
    network: [
      { group: 'Origin / Processing', links: ['NIGERIA', 'ANGOLA', 'UGANDA', 'Dangote Refinery', 'Akwa Ibom Refinery', 'Lobito Refinery', 'Soyo Refinery'] },
      { group: 'Market', links: ["CÔTE D'IVOIRE", 'CAMEROON', 'TANZANIA', 'GHANA', 'TOGO', 'SOUTH AFRICA', 'KENYA', 'UK (residual)'] },
      { group: 'Institution', links: ['NMDPRA', 'Central Bank of Nigeria', 'NNPC', 'CORAN', 'OPEC'] },
      { group: 'Infrastructure', links: ['Lekki Free Trade Zone', 'Nigerian port/tanker infrastructure', 'NNPC JV crude allocation system'] },
      { group: 'Market Instrument', links: ['FOB Lagos (emerging)', 'RBOB Gasoline / ICE Gasoil'] },
    ],
    summary: [
      { key: 'Supply', value: 'Extremely concentrated in a single facility (Dangote), with diversification only beginning' },
      { key: 'Demand', value: 'Rapidly regionalizing — genuine intra-African trade network forming in real time' },
      { key: 'Infrastructure Dependence', value: 'Extreme — the most single-facility-concentrated node in the catalog' },
      { key: 'Geopolitical Sensitivity', value: 'High — directly and favorably affected by 2026 Middle East-linked disruption' },
      { key: 'Strategic Importance', value: 'Arguably the single most transformative node given the speed and completeness of the reversal' },
      { key: 'Primary African Opportunity', value: 'Capacity expansion + intra-African trade + full displacement of the $17B import bill' },
      { key: 'Primary African Constraint', value: 'Single-facility concentration + feedstock allocation friction + incomplete substitution' },
      { key: 'Primary Global Function', value: 'Immediately consumable transport, aviation and industrial fuel' },
    ],
  },
};

export function extrasToSections(e: ModuleExtras): Section[] {
  const out: Section[] = [];
  if (e.strategic) {
    out.push({ key: 'strategy', title: 'Strategic Intelligence', type: 'grouped', groups: e.strategic.map((g) => ({ title: g.title, items: g.points })) });
  }
  if (e.ecosystem) {
    out.push({ key: 'ecosystem', title: 'Ecosystem', type: 'grouped', groups: e.ecosystem.map((g) => ({ title: g.title, items: g.actors })) });
  }
  if (e.countries) {
    out.push({
      key: 'countries', title: 'Country Intelligence', type: 'grouped',
      groups: e.countries.map((c) => ({ title: `${c.name} — ${c.role}`, items: [c.body] })),
    });
  }
  if (e.criticalInfra?.length) {
    out.push({ key: 'critical-infra', title: 'Critical Infrastructure', type: 'chips', chips: e.criticalInfra });
  }
  if (e.risk) {
    out.push({ key: 'risk', title: 'Risk Intelligence', type: 'risk', risk: e.risk });
  }
  if (e.opportunities) {
    out.push({ key: 'opportunities', title: 'Opportunity Intelligence', type: 'grouped', groups: e.opportunities.map((g) => ({ title: g.title, items: g.items })) });
  }
  if (e.marketDrivers) {
    out.push({ key: 'drivers', title: 'Market Drivers', type: 'grouped', groups: e.marketDrivers.map((g) => ({ title: g.title, items: g.items })) });
  }
  if (e.historical) {
    out.push({ key: 'history', title: 'Historical Intelligence', type: 'grouped', groups: e.historical.map((g) => ({ title: g.title, items: g.items })) });
  }
  if (e.nuggets?.length) {
    out.push({ key: 'nuggets', title: 'Intelligence Nuggets', type: 'list', items: e.nuggets });
  }
  if (e.network?.length) {
    out.push({ key: 'network', title: 'Network Relationships', type: 'network', network: e.network });
  }
  if (e.summary?.length) {
    out.push({ key: 'summary', title: 'Master Intelligence Summary', type: 'kv', kvs: e.summary.map((s) => ({ label: s.key, value: s.value })) });
  }
  return out;
}