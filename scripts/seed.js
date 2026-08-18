// JUJU IFA — Neo4j Seed Script (Node.js)
// Run: node scripts/seed.js
const neo4j = require('neo4j-driver');

const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'jujuifa2026'), { disableLosslessIntegers: true });

async function run(cypher, params = {}) {
  const session = driver.session();
  try { await session.run(cypher, params); } finally { await session.close(); }
}

async function seed() {
  console.log('Seeding GeoNodes...');

  const geos = [
    { id:'GEO-SAF-ZAF-001', name:'South Africa', iso3:'ZAF', region:'Southern Africa', tier:'Elite', ev:116.7, gs:17.8, tags:['#SouthernAfrica','#OceanAccess','#RiverAccess'], w:10, c:80, desc:"Africa's largest diversified economy; critical global supplier of industrial metals." },
    { id:'GEO-WAF-NGA-002', name:'Nigeria', iso3:'NGA', region:'West Africa', tier:'Elite', ev:52.7, gs:8.1, tags:['#WestAfrica','#OceanAccess','#RiverAccess','#LakeAccess'], w:10, c:80, desc:"West Africa's leading energy exporter; heavily dominated by liquid hydrocarbon flows." },
    { id:'GEO-NAF-EGY-003', name:'Egypt', iso3:'EGY', region:'North Africa', tier:'Elite', ev:51.4, gs:7.9, tags:['#NorthAfrica','#SeaAccess','#RiverAccess'], w:10, c:80, desc:'Highly industrialised North African hub; major regional supplier of processed and manufacturing inputs.' },
    { id:'GEO-NAF-MAR-004', name:'Morocco', iso3:'MAR', region:'North Africa', tier:'Elite', ev:50.3, gs:7.7, tags:['#NorthAfrica','#OceanAccess','#SeaAccess'], w:10, c:80, desc:'Manufacturing powerhouse; leading global exporter of automotive tech and raw/processed phosphates.' },
    { id:'GEO-NAF-DZA-005', name:'Algeria', iso3:'DZA', region:'North Africa', tier:'Elite', ev:44.4, gs:6.8, tags:['#NorthAfrica','#SeaAccess'], w:10, c:80, desc:'Major Mediterranean energy supplier; structurally reliant on natural gas pipe networks.' },
    { id:'GEO-CAF-COD-006', name:'DR Congo', iso3:'COD', region:'Central Africa', tier:'Elite', ev:40.4, gs:6.2, tags:['#CentralAfrica','#OceanAccess','#RiverAccess','#LakeAccess'], w:10, c:80, desc:'Critical green energy mineral supplier; global epicenter for battery production metals.' },
    { id:'GEO-SAF-AGO-007', name:'Angola', iso3:'AGO', region:'Southern Africa', tier:'Elite', ev:30.8, gs:4.7, tags:['#SouthernAfrica','#OceanAccess','#RiverAccess'], w:10, c:80, desc:'Major sub-Saharan oil producer; Atlantic trade heavily centered on mineral extractions.' },
    { id:'GEO-NAF-LBY-008', name:'Libya', iso3:'LBY', region:'North Africa', tier:'Standard', ev:30.1, gs:4.6, tags:['#NorthAfrica','#SeaAccess'], w:9, c:60, desc:'Oil-rich North African nation; economy deeply tethered to crude output quotas.' },
    { id:'GEO-WAF-CIV-009', name:"Cote d'Ivoire", iso3:'CIV', region:'West Africa', tier:'Standard', ev:28.6, gs:4.4, tags:['#WestAfrica','#OceanAccess','#RiverAccess'], w:9, c:60, desc:"Agricultural powerhouse; the world's absolute top supplier of premium cocoa beans." },
    { id:'GEO-WAF-GHA-010', name:'Ghana', iso3:'GHA', region:'West Africa', tier:'Standard', ev:22.3, gs:3.4, tags:['#WestAfrica','#OceanAccess','#RiverAccess'], w:9, c:60, desc:'West African resource hub; primary exporter of high-grade mineral bullion and cash crops.' },
    { id:'GEO-NAF-TUN-011', name:'Tunisia', iso3:'TUN', region:'North Africa', tier:'Standard', ev:20.4, gs:3.1, tags:['#NorthAfrica','#SeaAccess'], w:9, c:60, desc:'Highly integrated European supplier; manufacturing baseline heavily focused on components.' },
    { id:'GEO-CAF-CMR-012', name:'Cameroon', iso3:'CMR', region:'Central Africa', tier:'Standard', ev:12.2, gs:1.9, tags:['#CentralAfrica','#OceanAccess'], w:8, c:60, desc:'Central African gateway; diversified exporter of oil, cocoa, and timber.' },
    { id:'GEO-CAF-GAB-013', name:'Gabon', iso3:'GAB', region:'Central Africa', tier:'Standard', ev:11.4, gs:1.7, tags:['#CentralAfrica','#OceanAccess'], w:8, c:60, desc:'Oil-dependent economy with significant manganese and timber exports.' },
    { id:'GEO-WAF-SEN-014', name:'Senegal', iso3:'SEN', region:'West Africa', tier:'Standard', ev:10.8, gs:1.7, tags:['#WestAfrica','#OceanAccess'], w:8, c:60, desc:'Emerging West African economy with growing offshore oil and gas potential.' },
    { id:'GEO-EAF-TZA-015', name:'Tanzania', iso3:'TZA', region:'East Africa', tier:'Standard', ev:10.6, gs:1.6, tags:['#EastAfrica','#OceanAccess','#LakeAccess'], w:8, c:60, desc:'East African economic hub with significant gold, tobacco, and cashew exports.' },
    { id:'GEO-EAF-ETH-016', name:'Ethiopia', iso3:'ETH', region:'East Africa', tier:'Standard', ev:10.2, gs:1.6, tags:['#EastAfrica'], w:8, c:60, desc:'Second most populous African nation; coffee and sesame are primary exports.' },
    { id:'GEO-CAF-GNQ-017', name:'Equatorial Guinea', iso3:'GNQ', region:'Central Africa', tier:'Standard', ev:9.8, gs:1.5, tags:['#CentralAfrica','#OceanAccess'], w:8, c:60, desc:'Small oil-rich nation with one of Africa highest per-capita incomes.' },
    { id:'GEO-EAF-KEN-018', name:'Kenya', iso3:'KEN', region:'East Africa', tier:'Standard', ev:9.4, gs:1.4, tags:['#EastAfrica','#OceanAccess'], w:8, c:60, desc:'East Africa largest economy; key hub for tea, horticulture, and services.' },
    { id:'GEO-WAF-MLI-019', name:'Mali', iso3:'MLI', region:'West Africa', tier:'Emerging', ev:8.9, gs:1.4, tags:['#WestAfrica'], w:7, c:50, desc:'Landlocked Sahelian nation; gold dominates exports alongside cotton.' },
    { id:'GEO-NAF-LBY-020', name:'Mauritania', iso3:'MRT', region:'West Africa', tier:'Emerging', ev:8.4, gs:1.3, tags:['#WestAfrica','#OceanAccess'], w:7, c:50, desc:'Iron ore and fish are the twin pillars of this desert nation exports.' },
    { id:'GEO-EAF-MOZ-021', name:'Mozambique', iso3:'MOZ', region:'East Africa', tier:'Emerging', ev:7.6, gs:1.2, tags:['#EastAfrica','#OceanAccess'], w:7, c:50, desc:'Major coal and aluminum exporter; emerging LNG powerhouse.' },
    { id:'GEO-WAF-BFA-022', name:'Burkina Faso', iso3:'BFA', region:'West Africa', tier:'Emerging', ev:7.2, gs:1.1, tags:['#WestAfrica'], w:7, c:50, desc:'Landlocked gold and cotton exporter with growing mining sector.' },
    { id:'GEO-WAF-NER-023', name:'Niger', iso3:'NER', region:'West Africa', tier:'Emerging', ev:6.8, gs:1.0, tags:['#WestAfrica'], w:7, c:50, desc:'Uranium and livestock dominate exports of this Sahelian nation.' },
    { id:'GEO-WAF-CMR-024', name:'Chad', iso3:'TCD', region:'Central Africa', tier:'Emerging', ev:6.2, gs:1.0, tags:['#CentralAfrica'], w:6, c:50, desc:'Oil-dependent economy; one of world poorest nations.' },
    { id:'GEO-CAF-COG-025', name:'Republic of Congo', iso3:'COG', region:'Central Africa', tier:'Standard', ev:8.1, gs:1.2, tags:['#CentralAfrica','#OceanAccess'], w:8, c:60, desc:'Oil-dominant economy with significant forestry potential.' },
    { id:'GEO-EAF-UGA-026', name:'Uganda', iso3:'UGA', region:'East Africa', tier:'Emerging', ev:7.5, gs:1.2, tags:['#EastAfrica','#LakeAccess'], w:7, c:50, desc:'Agricultural exporter with emerging oil production in Albertine Graben.' },
    { id:'GEO-EAF-RWA-027', name:'Rwanda', iso3:'RWA', region:'East Africa', tier:'Emerging', ev:3.2, gs:0.5, tags:['#EastAfrica'], w:6, c:50, desc:'Fast-growing economy; coffee, tea, and minerals are key exports.' },
    { id:'GEO-SAF-NAM-028', name:'Namibia', iso3:'NAM', region:'Southern Africa', tier:'Emerging', ev:6.8, gs:1.0, tags:['#SouthernAfrica','#OceanAccess'], w:7, c:50, desc:'Diamond and uranium exporter with significant offshore oil potential.' },
    { id:'GEO-SAF-BWA-029', name:'Botswana', iso3:'BWA', region:'Southern Africa', tier:'Standard', ev:7.8, gs:1.2, tags:['#SouthernAfrica'], w:7, c:60, desc:'Diamond-dependent economy with strong governance and fiscal management.' },
    { id:'GEO-SAF-ZMB-030', name:'Zambia', iso3:'ZMB', region:'Southern Africa', tier:'Standard', ev:9.2, gs:1.4, tags:['#SouthernAfrica'], w:8, c:60, desc:'Africa second-largest copper producer; economy heavily copper-dependent.' },
    { id:'GEO-SAF-ZWE-031', name:'Zimbabwe', iso3:'ZWE', region:'Southern Africa', tier:'Emerging', ev:5.6, gs:0.9, tags:['#SouthernAfrica'], w:6, c:50, desc:'Platinum, gold, and tobacco dominate exports despite economic challenges.' },
    { id:'GEO-SAF-MOZ-032', name:'Madagascar', iso3:'MDG', region:'Southern Africa', tier:'Emerging', ev:4.2, gs:0.6, tags:['#SouthernAfrica','#OceanAccess'], w:6, c:50, desc:'Vanilla and mineral exporter with unique biodiversity and mining potential.' },
    { id:'GEO-CAF-CAF-033', name:'Central African Republic', iso3:'CAF', region:'Central Africa', tier:'Emerging', ev:1.8, gs:0.3, tags:['#CentralAfrica'], w:4, c:40, desc:'Diamond and timber exporter facing significant security challenges.' },
    { id:'GEO-CAF-SSD-034', name:'South Sudan', iso3:'SSD', region:'East Africa', tier:'Emerging', ev:3.2, gs:0.5, tags:['#EastAfrica'], w:5, c:40, desc:'Oil-dependent newest African nation; infrastructure severely underdeveloped.' },
    { id:'GEO-CAF-SOM-035', name:'Somalia', iso3:'SOM', region:'East Africa', tier:'Emerging', ev:1.4, gs:0.2, tags:['#EastAfrica','#OceanAccess'], w:4, c:30, desc:'Livestock exporter emerging from decades of instability.' },
    { id:'GEO-WAF-GIN-036', name:'Guinea', iso3:'GIN', region:'West Africa', tier:'Emerging', ev:5.4, gs:0.8, tags:['#WestAfrica','#OceanAccess'], w:6, c:50, desc:'Bauxite superpower; holds world largest reserves.' },
    { id:'GEO-WAF-CPV-037', name:'Cape Verde', iso3:'CPV', region:'West Africa', tier:'Emerging', ev:0.8, gs:0.1, tags:['#WestAfrica','#OceanAccess'], w:3, c:40, desc:'Small island nation with tourism-driven economy.' },
    { id:'GEO-WAF-GMB-038', name:'Gambia', iso3:'GMB', region:'West Africa', tier:'Emerging', ev:0.6, gs:0.1, tags:['#WestAfrica','#OceanAccess'], w:3, c:40, desc:'Peanut-dependent riverine economy.' },
    { id:'GEO-WAF-GNB-039', name:'Guinea-Bissau', iso3:'GNB', region:'West Africa', tier:'Emerging', ev:0.8, gs:0.1, tags:['#WestAfrica','#OceanAccess'], w:3, c:40, desc:'Cashew nut exporter facing governance challenges.' },
    { id:'GEO-WAF-LBR-040', name:'Liberia', iso3:'LBR', region:'West Africa', tier:'Emerging', ev:3.4, gs:0.5, tags:['#WestAfrica','#OceanAccess'], w:5, c:40, desc:'Rubber and iron ore exporter rebuilding post-conflict economy.' },
    { id:'GEO-WAF-SLE-041', name:'Sierra Leone', iso3:'SLE', region:'West Africa', tier:'Emerging', ev:3.6, gs:0.6, tags:['#WestAfrica','#OceanAccess'], w:5, c:40, desc:'Diamonds and rutile drive exports of this recovering West African nation.' },
    { id:'GEO-WAF-TGO-042', name:'Togo', iso3:'TGO', region:'West Africa', tier:'Emerging', ev:2.8, gs:0.4, tags:['#WestAfrica','#OceanAccess'], w:5, c:40, desc:'Phosphate exporter and growing regional logistics hub.' },
    { id:'GEO-WAF-BEN-043', name:'Benin', iso3:'BEN', region:'West Africa', tier:'Emerging', ev:2.4, gs:0.4, tags:['#WestAfrica','#OceanAccess'], w:5, c:40, desc:'Cotton exporter with growing re-export trade through Cotonou port.' },
    { id:'GEO-WAF-BWA-044', name:'Burundi', iso3:'BDI', region:'East Africa', tier:'Emerging', ev:1.2, gs:0.2, tags:['#EastAfrica','#LakeAccess'], w:3, c:30, desc:'Coffee and tea exporter in Great Lakes region.' },
    { id:'GEO-NAF-ERI-045', name:'Eritrea', iso3:'ERI', region:'East Africa', tier:'Emerging', ev:0.8, gs:0.1, tags:['#EastAfrica','#OceanAccess'], w:3, c:30, desc:'Mining potential largely untapped; livestock and minerals are main exports.' },
    { id:'GEO-EAF-DJI-046', name:'Djibouti', iso3:'DJI', region:'East Africa', tier:'Emerging', ev:1.6, gs:0.2, tags:['#EastAfrica','#OceanAccess'], w:4, c:40, desc:'Strategic Red Sea port; economy built on logistics and foreign military bases.' },
    { id:'GEO-SAF-LSO-047', name:'Lesotho', iso3:'LSO', region:'Southern Africa', tier:'Emerging', ev:1.2, gs:0.2, tags:['#SouthernAfrica'], w:3, c:40, desc:'Mountain kingdom; diamonds and textiles are primary exports.' },
    { id:'GEO-SAF-SWZ-048', name:'Eswatini', iso3:'SWZ', region:'Southern Africa', tier:'Emerging', ev:2.2, gs:0.3, tags:['#SouthernAfrica'], w:4, c:40, desc:'Small southern African monarchy; sugar and soft drink concentrate exports.' },
    { id:'GEO-CAF-STP-049', name:'Sao Tome and Principe', iso3:'STP', region:'Central Africa', tier:'Emerging', ev:0.3, gs:0.05, tags:['#CentralAfrica','#OceanAccess'], w:2, c:30, desc:'Tiny island nation with offshore oil exploration potential.' },
    { id:'GEO-CAF-AGO-050', name:'Comoros', iso3:'COM', region:'Southern Africa', tier:'Emerging', ev:0.4, gs:0.06, tags:['#SouthernAfrica','#OceanAccess'], w:2, c:30, desc:'Island nation exporting vanilla, cloves, and ylang-ylang.' },
    { id:'GEO-EAF-MUS-051', name:'Mauritius', iso3:'MUS', region:'Southern Africa', tier:'Standard', ev:5.8, gs:0.9, tags:['#SouthernAfrica','#OceanAccess'], w:7, c:60, desc:'Diversified island economy; financial services and tourism growing fast.' },
    { id:'GEO-CAF-SYC-052', name:'Seychelles', iso3:'SYC', region:'Southern Africa', tier:'Emerging', ev:1.4, gs:0.2, tags:['#SouthernAfrica','#OceanAccess'], w:4, c:40, desc:'Small island economy; tourism and fisheries are primary exports.' },
    { id:'GEO-EAF-REU-053', name:'Reunion', iso3:'REU', region:'Southern Africa', tier:'Standard', ev:4.2, gs:0.6, tags:['#SouthernAfrica','#OceanAccess'], w:5, c:50, desc:'French overseas territory; sugar, rum, and vanilla are key exports.' },
    { id:'GEO-WAF-MLI-054', name:'Malawi', iso3:'MWI', region:'Southern Africa', tier:'Emerging', ev:2.8, gs:0.4, tags:['#SouthernAfrica','#LakeAccess'], w:5, c:40, desc:'Tobacco-dependent economy with growing tea and sugar exports.' },
  ];

  for (const g of geos) {
    await run(
      `MERGE (n:GeoNode {id: $id})
       SET n.name=$name, n.iso3=$iso3, n.region=$region, n.tier=$tier,
           n.exportValue=$ev, n.globalShare=$gs, n.tags=$tags,
           n.weight=$w, n.confidence=$c, n.description=$desc,
           n.fingerprint=$desc, n.createdAt=datetime(), n.updatedAt=datetime()`,
      g
    );
  }
  console.log(`  Created ${geos.length} GeoNodes`);

  // External countries
  const externals = [
    { id:'GEO-EXT-CHN-001', name:'China', iso3:'CHN', region:'East Asia', tier:'External', ev:0, gs:0, tags:['#External'], w:10, c:90, desc:'World largest commodity importer and manufacturer.' },
    { id:'GEO-EXT-IND-002', name:'India', iso3:'IND', region:'South Asia', tier:'External', ev:0, gs:0, tags:['#External'], w:9, c:85, desc:'Second largest commodity importer; energy-hungry developing economy.' },
    { id:'GEO-EXT-NLD-003', name:'Netherlands', iso3:'NLD', region:'Europe', tier:'External', ev:0, gs:0, tags:['#External'], w:7, c:85, desc:'European trade hub; Rotterdam is the continent largest port.' },
    { id:'GEO-EXT-FRA-004', name:'France', iso3:'FRA', region:'Europe', tier:'External', ev:0, gs:0, tags:['#External'], w:7, c:85, desc:'Major European economy with significant African trade ties.' },
    { id:'GEO-EXT-USA-005', name:'United States', iso3:'USA', region:'Americas', tier:'External', ev:0, gs:0, tags:['#External'], w:10, c:90, desc:'World largest economy; significant African LNG and mineral imports.' },
    { id:'GEO-EXT-GBR-006', name:'United Kingdom', iso3:'GBR', region:'Europe', tier:'External', ev:0, gs:0, tags:['#External'], w:8, c:85, desc:'Major financial center with significant commodity trading.' },
    { id:'GEO-EXT-JPN-007', name:'Japan', iso3:'JPN', region:'East Asia', tier:'External', ev:0, gs:0, tags:['#External'], w:8, c:85, desc:'Resource-poor industrial giant; major African mineral importer.' },
    { id:'GEO-EXT-DEU-008', name:'Germany', iso3:'DEU', region:'Europe', tier:'External', ev:0, gs:0, tags:['#External'], w:9, c:85, desc:'Europe largest economy; significant industrial metal importer.' },
  ];

  for (const e of externals) {
    await run(
      `MERGE (n:GeoNode {id: $id})
       SET n.name=$name, n.iso3=$iso3, n.region=$region, n.tier=$tier,
           n.exportValue=$ev, n.globalShare=$gs, n.tags=$tags,
           n.weight=$w, n.confidence=$c, n.description=$desc,
           n.fingerprint=$desc, n.createdAt=datetime(), n.updatedAt=datetime()`,
      e
    );
  }
  console.log(`  Created ${externals.length} external GeoNodes`);

  console.log('Seeding ComNodes...');
  const coms = [
    { id:'COM-ENE-OIL-001', name:'Crude Oil', rank:1, cls:'Energy', w:10, c:60, tags:['#EnergyCommodity','#top5com','#TrillionDollarReserve'], ev:'~$220B', gs:'~17.5%', af:'~17.5%', price:'~$80/barrel (2024 Brent average)', hs:'HS 2709', yoy:'+3.2%', desc:'The primary global energy commodity, extracted via onshore and offshore drilling to fuel transport, power, and petrochemicals.' },
    { id:'COM-MET-COP-002', name:'Copper', rank:2, cls:'Metals', w:10, c:55, tags:['#MetalCommodity','#BatteryMetal','#top5com'], ev:'~$35B', gs:'~15.2%', af:'~75% (DRC)', price:'~$9,200/tonne', hs:'HS 7403', yoy:'+4.8%', desc:'Essential industrial metal for electrical wiring, construction, and green energy transition.' },
    { id:'COM-ENE-GAS-003', name:'Natural Gas', rank:3, cls:'Energy', w:9, c:50, tags:['#EnergyCommodity','#top10com'], ev:'~$45B', gs:'~6.5%', af:'~7.2%', price:'~$8/MMBtu', hs:'HS 2711', yoy:'+2.1%', desc:'Cleaner-burning fossil fuel used for power generation, heating, and industrial processes.' },
    { id:'COM-AGRI-COF-004', name:'Coffee', rank:4, cls:'Agriculture', w:9, c:65, tags:['#AgriCommodity','#top10com','#AfricanSpecialty'], ev:'~$12B', gs:'~11%', af:'~12%', price:'~$3.50/lb (Arabica)', hs:'HS 0901', yoy:'+1.8%', desc:'The most traded tropical agricultural commodity; Ethiopia and East Africa are origins of Arabica.' },
    { id:'COM-AGRI-COC-005', name:'Cocoa', rank:5, cls:'Agriculture', w:9, c:70, tags:['#AgriCommodity','#top5com','#WestAfrica'], ev:'~$15B', gs:'~65% (Cote dIvoire + Ghana)', af:'~65%', price:'~$4,200/tonne', hs:'HS 1801', yoy:'+3.5%', desc:'Primary ingredient in chocolate; West Africa controls nearly two-thirds of global supply.' },
    { id:'COM-MET-AUR-006', name:'Gold', rank:6, cls:'Metals', w:9, c:70, tags:['#MetalCommodity','#top10com','#PreciousMetal'], ev:'~$60B', gs:'~19%', af:'~19%', price:'~$2,350/oz', hs:'HS 7108', yoy:'+12.5%', desc:'The primary safe-haven asset and store of value; Africa is the third largest producing region.' },
    { id:'COM-MET-PLT-007', name:'Platinum Group Metals', rank:7, cls:'Metals', w:8, c:65, tags:['#MetalCommodity','#PGM','#CriticalMineral'], ev:'~$12B', gs:'~70% (SA)', af:'~70%', price:'~$1,000/oz (Pt)', hs:'HS 7110', yoy:'-2.3%', desc:'Catalytic converters, jewelry, and industrial applications; South Africa dominates supply.' },
    { id:'COM-MET-ALU-008', name:'Aluminium', rank:8, cls:'Metals', w:8, c:55, tags:['#MetalCommodity','#IndustrialMetal'], ev:'~$18B', gs:'~7%', af:'~3.5%', price:'~$2,400/tonne', hs:'HS 7601', yoy:'+1.2%', desc:'Most abundant metal; critical for aerospace, automotive, and construction.' },
    { id:'COM-MET-IRR-009', name:'Iron Ore', rank:9, cls:'Metals', w:8, c:55, tags:['#MetalCommodity','#IndustrialMetal'], ev:'~$30B', gs:'~6%', af:'~6.5%', price:'~$120/tonne', hs:'HS 2601', yoy:'+0.8%', desc:'Essential steel-making raw material; South Africa and Guinea have major deposits.' },
    { id:'COM-AGRI-TEA-010', name:'Tea', rank:10, cls:'Agriculture', w:8, c:60, tags:['#AgriCommodity','#EastAfrica'], ev:'~$5B', gs:'~14%', af:'~14%', price:'~$3.20/kg', hs:'HS 0902', yoy:'+2.4%', desc:'The most consumed beverage after water; Kenya is the largest African exporter.' },
    { id:'COM-MET-CON-011', name:'Cobalt', rank:11, cls:'Metals', w:8, c:60, tags:['#MetalCommodity','#BatteryMetal','#CriticalMineral'], ev:'~$8B', gs:'~70% (DRC)', af:'~72%', price:'~$32,000/tonne', hs:'HS 8105', yoy:'+8.2%', desc:'Critical battery material for EVs; DRC produces over 70% of global supply.' },
    { id:'COM-ENE-URM-012', name:'Uranium', rank:12, cls:'Energy', w:8, c:55, tags:['#EnergyCommodity','#NuclearFuel','#CriticalMineral'], ev:'~$3B', gs:'~18%', af:'~18%', price:'~$85/lb U3O8', hs:'HS 2844', yoy:'+15.3%', desc:'Nuclear fuel; Niger and Namibia are significant global producers.' },
    { id:'COM-MET-MAN-013', name:'Manganese', rank:13, cls:'Metals', w:7, c:55, tags:['#MetalCommodity','#BatteryMetal'], ev:'~$6B', gs:'~35% (SA+Gabon)', af:'~35%', price:'~$4.80/tonne', hs:'HS 2602', yoy:'+3.1%', desc:'Steel alloying element and emerging battery cathode material.' },
    { id:'COM-MET-CHR-014', name:'Chromium', rank:14, cls:'Metals', w:7, c:60, tags:['#MetalCommodity','#StrategicMineral'], ev:'~$4B', gs:'~70% (SA)', af:'~72%', price:'~$350/tonne', hs:'HS 2610', yoy:'+1.5%', desc:'Essential for stainless steel production; South Africa has world largest reserves.' },
    { id:'COM-MET-VDI-015', name:'Vanadium', rank:15, cls:'Metals', w:7, c:55, tags:['#MetalCommodity','#StrategicMineral'], ev:'~$2.5B', gs:'~55% (SA)', af:'~55%', price:'~$8.50/lb', hs:'HS 8112', yoy:'+6.8%', desc:'Steel strengthener and emerging battery storage material.' },
    { id:'COM-AGRI-RUB-016', name:'Rubber', rank:16, cls:'Agriculture', w:7, c:50, tags:['#AgriCommodity'], ev:'~$3B', gs:'~6%', af:'~6%', price:'~$1.80/kg', hs:'HS 4001', yoy:'+1.2%', desc:'Natural rubber for tires and industrial applications; Cote dIvoire and Liberia are key producers.' },
    { id:'COM-AGRI-COT-017', name:'Cotton', rank:17, cls:'Agriculture', w:7, c:55, tags:['#AgriCommodity','#WestAfrica'], ev:'~$8B', gs:'~12%', af:'~12%', price:'~$0.90/lb', hs:'HS 5201', yoy:'-1.5%', desc:'Most important natural fiber; West Africa is a significant producing region.' },
    { id:'COM-AGRI-PHO-018', name:'Phosphates', rank:18, cls:'Agriculture', w:7, c:55, tags:['#AgriCommodity','#StrategicMineral'], ev:'~$6B', gs:'~30% (Morocco)', af:'~30%', price:'~$120/tonne', hs:'HS 2510', yoy:'+2.8%', desc:'Essential fertilizer ingredient; Morocco holds the world largest reserves.' },
    { id:'COM-MET-LIT-019', name:'Lithium', rank:19, cls:'Metals', w:7, c:45, tags:['#MetalCommodity','#BatteryMetal','#CriticalMineral'], ev:'~$15B', gs:'~8%', af:'~5%', price:'~$15,000/tonne', hs:'HS 2836', yoy:'-12.5%', desc:'Key battery material; Zimbabwe and DRC have significant deposits.' },
    { id:'COM-MET-TIN-020', name:'Tin', rank:20, cls:'Metals', w:6, c:50, tags:['#MetalCommodity','#CriticalMineral'], ev:'~$3B', gs:'~10%', af:'~10%', price:'~$32,000/tonne', hs:'HS 8001', yoy:'+5.2%', desc:'Used in soldering and electronics; Nigeria and DRC are key African producers.' },
    { id:'COM-AGRI-SUG-021', name:'Sugar', rank:21, cls:'Agriculture', w:7, c:50, tags:['#AgriCommodity'], ev:'~$5B', gs:'~3%', af:'~3%', price:'~$0.40/lb', hs:'HS 1701', yoy:'+1.1%', desc:'The most consumed commodity globally; South Africa and Swaziland are key African producers.' },
    { id:'COM-ENE-COA-022', name:'Coal', rank:22, cls:'Energy', w:7, c:50, tags:['#EnergyCommodity'], ev:'~$20B', gs:'~5%', af:'~5%', price:'~$140/tonne', hs:'HS 2701', yoy:'-5.2%', desc:'The most carbon-intensive fossil fuel; South Africa is the continent largest producer.' },
    { id:'COM-AGRI-TOB-023', name:'Tobacco', rank:23, cls:'Agriculture', w:6, c:50, tags:['#AgriCommodity'], ev:'~$3B', gs:'~7%', af:'~7%', price:'~$2.20/kg', hs:'HS 2401', yoy:'-3.1%', desc:'Declining global demand but still significant for Zimbabwe, Malawi, and Tanzania.' },
    { id:'COM-MET-SIL-024', name:'Silver', rank:24, cls:'Metals', w:6, c:50, tags:['#MetalCommodity','#PreciousMetal'], ev:'~$2B', gs:'~3%', af:'~3%', price:'~$28/oz', hs:'HS 7106', yoy:'+8.2%', desc:'Industrial and investment metal; growing demand from solar panels and electronics.' },
    { id:'COM-ENE-ETH-025', name:'Ethanol', rank:25, cls:'Energy', w:6, c:45, tags:['#EnergyCommodity','#Biofuel'], ev:'~$4B', gs:'~5%', af:'~5%', price:'~$0.65/liter', hs:'HS 2207', yoy:'+4.5%', desc:'Biofuel blended into gasoline; Brazil and US dominate but Africa is growing.' },
    { id:'COM-AGRI-SEL-026', name:'Sesame', rank:26, cls:'Agriculture', w:5, c:50, tags:['#AgriCommodity','#EastAfrica'], ev:'~$2B', gs:'~15%', af:'~15%', price:'~$1,400/tonne', hs:'HS 1207', yoy:'+3.2%', desc:'Premium oilseed; Sudan, Ethiopia, and Nigeria are major producers.' },
    { id:'COM-AGRI-SEN-027', name:'Soybeans', rank:27, cls:'Agriculture', w:6, c:45, tags:['#AgriCommodity'], ev:'~$8B', gs:'~2%', af:'~2%', price:'~$450/tonne', hs:'HS 1201', yoy:'+5.5%', desc:'Africa produces minimal soybeans but imports are growing rapidly.' },
    { id:'COM-MET-NIO-028', name:'Nickel', rank:28, cls:'Metals', w:6, c:50, tags:['#MetalCommodity','#BatteryMetal'], ev:'~$5B', gs:'~5%', af:'~5%', price:'~$17,000/tonne', hs:'HS 7502', yoy:'-8.2%', desc:'Stainless steel and battery material; Madagascar and South Africa are key producers.' },
    { id:'COM-ENE-PET-029', name:'Petroleum Products', rank:29, cls:'Energy', w:7, c:50, tags:['#EnergyCommodity'], ev:'~$40B', gs:'~4%', af:'~3%', price:'~$90/barrel (refined)', hs:'HS 2710', yoy:'+1.8%', desc:'Refined fuels including gasoline, diesel, and jet fuel; Africa is net importer.' },
    { id:'COM-MET-IND-030', name:'Indium', rank:30, cls:'Metals', w:5, c:40, tags:['#MetalCommodity','#CriticalMineral'], ev:'~$1B', gs:'~5%', af:'~5%', price:'~$350/kg', hs:'HS 8112', yoy:'+4.2%', desc:'Used in LCD screens and touch panels; rare and concentrated production.' },
    { id:'COM-ENE-SPV-031', name:'Solar Panels', rank:31, cls:'Energy', w:6, c:35, tags:['#EnergyCommodity','#Renewable'], ev:'~$15B', gs:'~2%', af:'~1%', price:'~$0.25/watt', hs:'HS 8541', yoy:'+22.5%', desc:'Renewable energy technology; Africa is a growing market but minimal production.' },
    { id:'COM-AGRI-FLX-032', name:'Flax/Linen', rank:32, cls:'Agriculture', w:4, c:40, tags:['#AgriCommodity'], ev:'~$0.5B', gs:'~3%', af:'~3%', price:'~$900/tonne', hs:'HS 5301', yoy:'+1.2%', desc:'Premium natural fiber; Egypt is the leading African producer.' },
    { id:'COM-MET-TAL-033', name:'Tantalum', rank:33, cls:'Metals', w:6, c:50, tags:['#MetalCommodity','#ConflictMineral','#CriticalMineral'], ev:'~$2B', gs:'~60% (DRC)', af:'~60%', price:'~$160/lb', hs:'HS 8103', yoy:'+3.8%', desc:'Used in capacitors for electronics; DRC and Rwanda are key producers.' },
    { id:'COM-AGRI-PIG-034', name:'Pigment/Ochre', rank:34, cls:'Agriculture', w:3, c:35, tags:['#AgriCommodity'], ev:'~$0.3B', gs:'~5%', af:'~5%', price:'~$500/tonne', hs:'HS 2810', yoy:'+0.5%', desc:'Natural earth pigments; South Africa and Namibia are key producers.' },
    { id:'COM-MET-ZRC-035', name:'Zinc', rank:35, cls:'Metals', w:6, c:50, tags:['#MetalCommodity','#IndustrialMetal'], ev:'~$4B', gs:'~5%', af:'~5%', price:'~$2,800/tonne', hs:'HS 7901', yoy:'+2.1%', desc:'Galvanizing metal; Namibia and Ireland are key African producers.' },
    { id:'COM-ENE-LNG-036', name:'LNG', rank:36, cls:'Energy', w:7, c:50, tags:['#EnergyCommodity','#NaturalGas'], ev:'~$12B', gs:'~5%', af:'~5%', price:'~$12/MMBtu', hs:'HS 2711', yoy:'+8.5%', desc:'Liquefied natural gas; Egypt, Nigeria, and Mozambique are key African exporters.' },
    { id:'COM-AGRI-ORT-037', name:'Oranges', rank:37, cls:'Agriculture', w:5, c:45, tags:['#AgriCommodity'], ev:'~$2B', gs:'~5%', af:'~5%', price:'~$400/tonne', hs:'HS 0805', yoy:'+1.8%', desc:'Most produced citrus fruit; South Africa and Egypt are major exporters.' },
    { id:'COM-AGRI-ANL-038', name:'Animal Feed', rank:38, cls:'Agriculture', w:5, c:40, tags:['#AgriCommodity'], ev:'~$3B', gs:'~2%', af:'~2%', price:'~$350/tonne', hs:'HS 2309', yoy:'+3.5%', desc:'Growing demand with expanding livestock sector across Africa.' },
    { id:'COM-MET-BIS-039', name:'Bismuth', rank:39, cls:'Metals', w:4, c:40, tags:['#MetalCommodity'], ev:'~$0.5B', gs:'~5%', af:'~5%', price:'~$6/kg', hs:'HS 8106', yoy:'+1.2%', desc:'Used in pharmaceuticals and cosmetics; Rwanda is a key producer.' },
    { id:'COM-ENE-BIO-040', name:'Biodiesel', rank:40, cls:'Energy', w:5, c:40, tags:['#EnergyCommodity','#Biofuel'], ev:'~$2B', gs:'~3%', af:'~3%', price:'~$1.10/liter', hs:'HS 3826', yoy:'+5.8%', desc:'Palm oil-based fuel; Malaysia dominates but African production is growing.' },
    { id:'COM-AGRI-CAW-041', name:'Cashews', rank:41, cls:'Agriculture', w:6, c:50, tags:['#AgriCommodity','#WestAfrica'], ev:'~$3B', gs:'~15%', af:'~15%', price:'~$2,800/tonne', hs:'HS 0801', yoy:'+4.2%', desc:'Premium nut; Tanzania, Nigeria, Guinea-Bissau, and Cote dIvoire are key producers.' },
    { id:'COM-MET-ANT-042', name:'Antimony', rank:42, cls:'Metals', w:5, c:45, tags:['#MetalCommodity','#CriticalMineral'], ev:'~$1B', gs:'~5%', af:'~5%', price:'~$12,000/tonne', hs:'HS 8110', yoy:'+2.8%', desc:'Flame retardant and battery material; Bolivia dominates but Africa has deposits.' },
    { id:'COM-AGRI-CAS-043', name:'Cassava', rank:43, cls:'Agriculture', w:5, c:45, tags:['#AgriCommodity'], ev:'~$2B', gs:'~5%', af:'~5%', price:'~$200/tonne', hs:'HS 0714', yoy:'+2.1%', desc:'The most important food crop in Africa; Nigeria is the world largest producer.' },
    { id:'COM-ENE-HYD-044', name:'Hydrogen', rank:44, cls:'Energy', w:5, c:35, tags:['#EnergyCommodity','#GreenEnergy','#FutureCommodity'], ev:'~$1B', gs:'~2%', af:'~2%', price:'~$5/kg (green)', hs:'HS 2804', yoy:'+25.0%', desc:'The energy carrier of the future; South Africa and Namibia have major green hydrogen projects.' },
    { id:'COM-MET-RUT-045', name:'Rutile', rank:45, cls:'Metals', w:5, c:45, tags:['#MetalCommodity'], ev:'~$1B', gs:'~20%', af:'~20%', price:'~$2,000/tonne', hs:'HS 2614', yoy:'+3.2%', desc:'Titanium ore; Sierra Leone and Senegal are significant producers.' },
    { id:'COM-AGRI-PIA-046', name:'Palm Oil', rank:46, cls:'Agriculture', w:6, c:45, tags:['#AgriCommodity'], ev:'~$5B', gs:'~5%', af:'~5%', price:'~$900/tonne', hs:'HS 1511', yoy:'+2.8%', desc:'The most consumed vegetable oil; Nigeria and Ghana are key African producers.' },
    { id:'COM-ENE-GEOTHERM-047', name:'Geothermal Energy', rank:47, cls:'Energy', w:5, c:40, tags:['#EnergyCommodity','#Renewable'], ev:'~$0.5B', gs:'~10%', af:'~10%', price:'~$0.07/kWh', hs:'N/A', yoy:'+8.5%', desc:'Kenya is a global leader; East African Rift has massive untapped potential.' },
    { id:'COM-MET-GEM-048', name:'Gemstones', rank:48, cls:'Metals', w:6, c:50, tags:['#MetalCommodity','#PreciousMetal'], ev:'~$3B', gs:'~15%', af:'~15%', price:'Varies', hs:'HS 7103', yoy:'+4.2%', desc:'Diamonds, emeralds, rubies, and sapphires; Botswana, DRC, and Tanzania are key producers.' },
    { id:'COM-AGRI-SPC-049', name:'Spices', rank:49, cls:'Agriculture', w:5, c:45, tags:['#AgriCommodity'], ev:'~$2B', gs:'~10%', af:'~10%', price:'Varies', hs:'HS 0910', yoy:'+3.5%', desc:'Madagascar vanilla, Zanzibar cloves, and Ethiopian pepper are premium African exports.' },
    { id:'COM-MET-GRA-050', name:'Graphite', rank:50, cls:'Metals', w:6, c:50, tags:['#MetalCommodity','#BatteryMetal','#CriticalMineral'], ev:'~$3B', gs:'~15%', af:'~15%', price:'~$800/tonne', hs:'HS 2504', yoy:'+12.8%', desc:'Battery anode material; Mozambique and Tanzania are emerging major producers.' },
    { id:'COM-ENE-WND-051', name:'Wind Energy', rank:51, cls:'Energy', w:5, c:35, tags:['#EnergyCommodity','#Renewable'], ev:'~$0.8B', gs:'~2%', af:'~2%', price:'~$0.04/kWh', hs:'N/A', yoy:'+15.2%', desc:'Growing rapidly in Morocco, South Africa, and Kenya; massive untapped potential.' },
    { id:'COM-AGRI-FLW-052', name:'Cut Flowers', rank:52, cls:'Agriculture', w:5, c:50, tags:['#AgriCommodity','#EastAfrica'], ev:'~$2B', gs:'~10%', af:'~10%', price:'Varies', hs:'HS 0603', yoy:'+5.8%', desc:'Kenya is the third largest global exporter; roses dominate.' },
    { id:'COM-MET-GAL-053', name:'Gallium', rank:53, cls:'Metals', w:5, c:40, tags:['#MetalCommodity','#CriticalMineral'], ev:'~$0.5B', gs:'~5%', af:'~5%', price:'~$500/kg', hs:'HS 8112', yoy:'+8.5%', desc:'Semiconductor material; China dominates but Africa has bauxite-linked deposits.' },
    { id:'COM-ENE-WAVE-054', name:'Wave Energy', rank:54, cls:'Energy', w:3, c:25, tags:['#EnergyCommodity','#Renewable','#FutureCommodity'], ev:'~$0.05B', gs:'~5%', af:'~5%', price:'N/A', hs:'N/A', yoy:'+20.0%', desc:'Emerging ocean energy; South Africa and Morocco have pilot projects.' },
    { id:'COM-AGRI-SIS-055', name:'Sisal', rank:55, cls:'Agriculture', w:4, c:45, tags:['#AgriCommodity','#EastAfrica'], ev:'~$0.5B', gs:'~25%', af:'~25%', price:'~$1,200/tonne', hs:'HS 5304', yoy:'+1.5%', desc:'Natural fiber for rope and textiles; Tanzania is the largest producer.' },
    { id:'COM-MET-HAF-056', name:'Hafnium', rank:56, cls:'Metals', w:4, c:35, tags:['#MetalCommodity','#CriticalMineral'], ev:'~$0.3B', gs:'~5%', af:'~5%', price:'~$900/kg', hs:'HS 8115', yoy:'+3.2%', desc:'Nuclear reactor material; produced as byproduct of zirconium processing.' },
    { id:'COM-ENE-FUEL-057', name:'Fuel Cells', rank:57, cls:'Energy', w:4, c:30, tags:['#EnergyCommodity','#Renewable','#FutureCommodity'], ev:'~$0.8B', gs:'~2%', af:'~2%', price:'~$1,000/kW', hs:'HS 8507', yoy:'+18.5%', desc:'Clean energy technology; South Africa has significant platinum-based fuel cell development.' },
    { id:'COM-AGRI-NUT-058', name:'Shea Nuts', rank:58, cls:'Agriculture', w:5, c:50, tags:['#AgriCommodity','#WestAfrica'], ev:'~$1B', gs:'~50%', af:'~50%', price:'~$1,200/tonne', hs:'HS 1207', yoy:'+3.8%', desc:'The shea belt spans West Africa; used in cosmetics and food.' },
    { id:'COM-MET-ZRC2-059', name:'Zirconium', rank:59, cls:'Metals', w:5, c:45, tags:['#MetalCommodity'], ev:'~$2B', gs:'~20%', af:'~20%', price:'~$1,500/tonne', hs:'HS 2615', yoy:'+2.2%', desc:'Ceramics and nuclear applications; South Africa is a major producer.' },
    { id:'COM-ENE-TIDAL-060', name:'Tidal Energy', rank:60, cls:'Energy', w:3, c:25, tags:['#EnergyCommodity','#Renewable','#FutureCommodity'], ev:'~$0.02B', gs:'~3%', af:'~3%', price:'N/A', hs:'N/A', yoy:'+15.0%', desc:'Untapped along African coastlines; very early stage.' },
    { id:'COM-AGRI-OLV-061', name:'Olives', rank:61, cls:'Agriculture', w:5, c:50, tags:['#AgriCommodity','#NorthAfrica'], ev:'~$2B', gs:'~8%', af:'~8%', price:'~$800/tonne', hs:'HS 0709', yoy:'+1.8%', desc:'Tunisia and Morocco are major producers; olive oil is a premium African export.' },
    { id:'COM-MET-STR-062', name:'Strontium', rank:62, cls:'Metals', w:4, c:35, tags:['#MetalCommodity'], ev:'~$0.3B', gs:'~10%', af:'~10%', price:'~$600/tonne', hs:'HS 2603', yoy:'+1.2%', desc:'Used in ceramics and magnets; Mexico dominates but Africa has deposits.' },
    { id:'COM-ENE-SOLAR-063', name:'Solar Thermal', rank:63, cls:'Energy', w:4, c:30, tags:['#EnergyCommodity','#Renewable'], ev:'~$0.3B', gs:'~3%', af:'~3%', price:'~$0.06/kWh', hs:'N/A', yoy:'+12.2%', desc:'Concentrated solar power; Morocco Noor-Ouarzazate is the largest in Africa.' },
    { id:'COM-AGRI-BAN-064', name:'Bananas', rank:64, cls:'Agriculture', w:5, c:45, tags:['#AgriCommodity'], ev:'~$3B', gs:'~5%', af:'~5%', price:'~$0.50/kg', hs:'HS 0803', yoy:'+1.5%', desc:'Cameroon and Cote dIvoire are key African exporters.' },
    { id:'COM-MET-SCD-065', name:'Scandium', rank:65, cls:'Metals', w:4, c:30, tags:['#MetalCommodity','#CriticalMineral'], ev:'~$0.1B', gs:'~5%', af:'~5%', price:'~$3,000/kg', hs:'HS 2805', yoy:'+5.2%', desc:'Ultra-light alloy material; rare and expensive.' },
    { id:'COM-ENE-BATT-066', name:'Batteries (Li-ion)', rank:66, cls:'Energy', w:6, c:35, tags:['#EnergyCommodity','#BatteryMetal','#FutureCommodity'], ev:'~$25B', gs:'~3%', af:'~1%', price:'~$140/kWh', hs:'HS 8507', yoy:'+15.8%', desc:'Electric vehicle and grid storage; Africa supplies the raw materials but minimal cell manufacturing.' },
    { id:'COM-AGRI-MAZ-067', name:'Maize', rank:67, cls:'Agriculture', w:5, c:45, tags:['#AgriCommodity'], ev:'~$4B', gs:'~3%', af:'~3%', price:'~$220/tonne', hs:'HS 1005', yoy:'+1.2%', desc:'Staple food across Africa; South Africa is the continent largest producer.' },
    { id:'COM-MET-OSM-068', name:'Osmium', rank:68, cls:'Metals', w:3, c:30, tags:['#MetalCommodity','#PreciousMetal'], ev:'~$0.05B', gs:'~80%', af:'~80%', price:'~$400/oz', hs:'HS 8115', yoy:'+1.0%', desc:'Densest naturally occurring element; South Africa produces most of world supply.' },
    { id:'COM-ENE-MINI-GRIDS-069', name:'Mini-Grid Systems', rank:69, cls:'Energy', w:4, c:30, tags:['#EnergyCommodity','#Renewable','#Infrastructure'], ev:'~$0.5B', gs:'~10%', af:'~10%', price:'Varies', hs:'N/A', yoy:'+22.0%', desc:'Off-grid power solutions for rural electrification; rapidly growing across Africa.' },
    { id:'COM-AGRI-RIC-070', name:'Rice', rank:70, cls:'Agriculture', w:5, c:45, tags:['#AgriCommodity'], ev:'~$3B', gs:'~2%', af:'~2%', price:'~$450/tonne', hs:'HS 1006', yoy:'+2.8%', desc:'Africa is the largest rice-importing region; production growing in Nigeria and Tanzania.' },
    { id:'COM-MET-BOR-071', name:'Boron', rank:71, cls:'Metals', w:4, c:35, tags:['#MetalCommodity'], ev:'~$1B', gs:'~5%', af:'~5%', price:'~$300/tonne', hs:'HS 2528', yoy:'+1.8%', desc:'Used in glass and detergents; Turkey dominates globally.' },
    { id:'COM-ENE-HYDRO-072', name:'Hydropower', rank:72, cls:'Energy', w:6, c:45, tags:['#EnergyCommodity','#Renewable'], ev:'~$2B', gs:'~8%', af:'~8%', price:'~$0.05/kWh', hs:'N/A', yoy:'+3.2%', desc:'Ethiopia Grand Renaissance Dam and Inga Dam in DRC are massive potential projects.' },
    { id:'COM-AGRI-AVO-073', name:'Avocados', rank:73, cls:'Agriculture', w:5, c:45, tags:['#AgriCommodity','#EastAfrica'], ev:'~$1.5B', gs:'~8%', af:'~8%', price:'~$2/kg', hs:'HS 0804', yoy:'+8.5%', desc:'Kenya and South Africa are growing exporters of this premium fruit.' },
    { id:'COM-MET-RHE-074', name:'Rhenium', rank:74, cls:'Metals', w:3, c:30, tags:['#MetalCommodity'], ev:'~$0.2B', gs:'~3%', af:'~3%', price:'~$3,000/kg', hs:'HS 8112', yoy:'+2.5%', desc:'Superalloy additive for jet engines; very rare and concentrated production.' },
    { id:'COM-ENE-CARBON-075', name:'Carbon Credits', rank:75, cls:'Energy', w:4, c:30, tags:['#EnergyCommodity','#CarbonMarket','#FutureCommodity'], ev:'~$0.5B', gs:'~15%', af:'~15%', price:'~$15/tonne CO2', hs:'N/A', yoy:'+30.0%', desc:'Africa has massive potential in forest carbon credits; Congo Basin is critical.' },
    { id:'COM-AGRI-CHI-076', name:'Chickpeas', rank:76, cls:'Agriculture', w:4, c:40, tags:['#AgriCommodity'], ev:'~$0.5B', gs:'~5%', af:'~5%', price:'~$600/tonne', hs:'HS 0713', yoy:'+2.2%', desc:'Ethiopia and Tanzania are significant producers.' },
    { id:'COM-MET-WOL-077', name:'Wolframite (Tungsten)', rank:77, cls:'Metals', w:5, c:40, tags:['#MetalCommodity','#CriticalMineral'], ev:'~$0.8B', gs:'~10%', af:'~10%', price:'~$300/mtu', hs:'HS 2611', yoy:'+3.5%', desc:'Hard metal for cutting tools; Rwanda and DRC are key African producers.' },
    { id:'COM-ENE-DGAS-078', name:'Biogas', rank:78, cls:'Energy', w:3, c:25, tags:['#EnergyCommodity','#Renewable'], ev:'~$0.2B', gs:'~5%', af:'~5%', price:'~$0.08/kWh', hs:'N/A', yoy:'+10.0%', desc:'Agricultural waste to energy; growing in East Africa.' },
    { id:'COM-AGRI-CLV-079', name:'Cloves', rank:79, cls:'Agriculture', w:4, c:45, tags:['#AgriCommodity','#EastAfrica'], ev:'~$0.5B', gs:'~15%', af:'~15%', price:'~$10,000/tonne', hs:'HS 0907', yoy:'+2.5%', desc:'Zanzibar was once the world clove capital; Madagascar and Tanzania still produce significantly.' },
    { id:'COM-MET-IRN-080', name:'Iridium', rank:80, cls:'Metals', w:3, c:30, tags:['#MetalCommodity','#PreciousMetal'], ev:'~$0.1B', gs:'~80%', af:'~80%', price:'~$4,500/oz', hs:'HS 8115', yoy:'+5.0%', desc:'Hardest and most corrosion-resistant metal; South Africa dominates production.' },
    { id:'COM-ENE-CRYPTO-081', name:'Crypto Mining Energy', rank:81, cls:'Energy', w:3, c:25, tags:['#EnergyCommodity','#DigitalAsset'], ev:'~$0.3B', gs:'~2%', af:'~2%', price:'N/A', hs:'N/A', yoy:'+15.0%', desc:'Renewable-powered crypto mining emerging in East and Southern Africa.' },
    { id:'COM-AGRI-SES-082', name:'Sesame Seeds', rank:82, cls:'Agriculture', w:5, c:50, tags:['#AgriCommodity','#EastAfrica'], ev:'~$1.5B', gs:'~15%', af:'~15%', price:'~$1,400/tonne', hs:'HS 1207', yoy:'+3.2%', desc:'Sudan and Ethiopia are major producers of this premium oilseed.' },
    { id:'COM-MET-THO-083', name:'Thorium', rank:83, cls:'Metals', w:4, c:30, tags:['#MetalCommodity','#NuclearFuel','#FutureCommodity'], ev:'~$0.05B', gs:'~15%', af:'~15%', price:'~$30/kg', hs:'HS 2844', yoy:'+5.0%', desc:'Potential nuclear fuel; India and Africa have significant monazite deposits.' },
    { id:'COM-ENE-NET-084', name:'Carbon Net Negative', rank:84, cls:'Energy', w:3, c:25, tags:['#EnergyCommodity','#CarbonMarket','#FutureCommodity'], ev:'~$0.1B', gs:'~10%', af:'~10%', price:'~$100/tonne CO2', hs:'N/A', yoy:'+40.0%', desc:'Biochar and direct air capture; very early stage but high potential in Africa.' },
    { id:'COM-AGRI-PRO-085', name:'Protein (Insect)', rank:85, cls:'Agriculture', w:3, c:25, tags:['#AgriCommodity','#FutureCommodity'], ev:'~$0.1B', gs:'~10%', af:'~10%', price:'~$5/kg', hs:'N/A', yoy:'+25.0%', desc:'Cricket and black soldier fly farming; emerging in Kenya and Uganda.' },
    { id:'COM-MET-NIOB-086', name:'Niobium', rank:86, cls:'Metals', w:4, c:35, tags:['#MetalCommodity'], ev:'~$0.3B', gs:'~5%', af:'~5%', price:'~$75/kg', hs:'HS 8112', yoy:'+2.8%', desc:'Superconductor and steel alloy; Brazil dominates but Africa has deposits.' },
    { id:'COM-ENE-WAVE-087', name:'Offshore Wind', rank:87, cls:'Energy', w:3, c:25, tags:['#EnergyCommodity','#Renewable','#FutureCommodity'], ev:'~$0.05B', gs:'~1%', af:'~1%', price:'~$0.08/kWh', hs:'N/A', yoy:'+20.0%', desc:'South Africa and Morocco have significant potential.' },
    { id:'COM-AGRI-MIR-088', name:'Mirinda/Fruits', rank:88, cls:'Agriculture', w:4, c:35, tags:['#AgriCommodity'], ev:'~$1B', gs:'~5%', af:'~5%', price:'Varies', hs:'HS 2009', yoy:'+2.5%', desc:'Fruit juice and processed fruit exports growing across Africa.' },
    { id:'COM-MET-TELL-089', name:'Tellurium', rank:89, cls:'Metals', w:4, c:35, tags:['#MetalCommodity','#CriticalMineral'], ev:'~$0.2B', gs:'~5%', af:'~5%', price:'~$50/kg', hs:'HS 2617', yoy:'+4.2%', desc:'Thin-film solar panel material; rare and concentrated production.' },
    { id:'COM-ENE-AES-090', name:'Energy Storage', rank:90, cls:'Energy', w:5, c:30, tags:['#EnergyCommodity','#Renewable','#FutureCommodity'], ev:'~$2B', gs:'~3%', af:'~2%', price:'~$200/kWh', hs:'N/A', yoy:'+18.0%', desc:'Grid-scale battery storage; critical enabler for renewable energy across Africa.' },
    { id:'COM-AGRI-ANM-091', name:'Live Animals', rank:91, cls:'Agriculture', w:4, c:40, tags:['#AgriCommodity'], ev:'~$2B', gs:'~8%', af:'~8%', price:'Varies', hs:'HS 0102', yoy:'+1.5%', desc:'Cattle and livestock exports from Ethiopia, Sudan, and Somalia.' },
    { id:'COM-MET-CHROM-092', name:'Chrome Ore', rank:92, cls:'Metals', w:5, c:50, tags:['#MetalCommodity'], ev:'~$3B', gs:'~70%', af:'~72%', price:'~$180/tonne', hs:'HS 2610', yoy:'+2.0%', desc:'South Africa holds the world largest chrome reserves; essential for stainless steel.' },
    { id:'COM-ENE-HYDRO-093', name:'Green Hydrogen', rank:93, cls:'Energy', w:5, c:30, tags:['#EnergyCommodity','#GreenEnergy','#FutureCommodity'], ev:'~$0.2B', gs:'~5%', af:'~5%', price:'~$6/kg', hs:'N/A', yoy:'+35.0%', desc:'Namibia and South Africa leading African green hydrogen development.' },
    { id:'COM-AGRI-WHT-094', name:'Wheat', rank:94, cls:'Agriculture', w:5, c:45, tags:['#AgriCommodity'], ev:'~$4B', gs:'~2%', af:'~2%', price:'~$300/tonne', hs:'HS 1001', yoy:'+1.8%', desc:'Africa imports 40% of wheat needs; Egypt is largest global importer.' },
    { id:'COM-MET-HEM-095', name:'Hematite', rank:95, cls:'Metals', w:4, c:40, tags:['#MetalCommodity'], ev:'~$2B', gs:'~5%', af:'~5%', price:'~$100/tonne', hs:'HS 2601', yoy:'+1.2%', desc:'Iron oxide ore; significant deposits in West and Southern Africa.' },
    { id:'COM-ENE-THM-096', name:'Thermal Energy', rank:96, cls:'Energy', w:3, c:25, tags:['#EnergyCommodity'], ev:'~$0.5B', gs:'~2%', af:'~2%', price:'N/A', hs:'N/A', yoy:'+2.0%', desc:'Waste-to-energy and industrial heat recovery; emerging in South Africa.' },
    { id:'COM-AGRI-NRM-097', name:'Natural Rubber', rank:97, cls:'Agriculture', w:4, c:40, tags:['#AgriCommodity'], ev:'~$1.5B', gs:'~5%', af:'~5%', price:'~$1.80/kg', hs:'HS 4001', yoy:'+1.2%', desc:'Liberia and Cote dIvoire are significant producers.' },
    { id:'COM-MET-IOD-098', name:'Indium Oxide', rank:98, cls:'Metals', w:3, c:30, tags:['#MetalCommodity'], ev:'~$0.3B', gs:'~3%', af:'~3%', price:'~$300/kg', hs:'HS 2818', yoy:'+3.5%', desc:'Transparent conductor for touch screens; very concentrated production.' },
    { id:'COM-ENE-WAVE-099', name:'Micro-Grid', rank:99, cls:'Energy', w:4, c:30, tags:['#EnergyCommodity','#Renewable'], ev:'~$0.3B', gs:'~8%', af:'~8%', price:'Varies', hs:'N/A', yoy:'+18.0%', desc:'Solar+battery micro-grids for rural electrification; rapidly deploying across Africa.' },
    { id:'COM-AGRI-SUN-100', name:'Sunflower Seeds', rank:100, cls:'Agriculture', w:4, c:40, tags:['#AgriCommodity'], ev:'~$0.8B', gs:'~5%', af:'~5%', price:'~$500/tonne', hs:'HS 1206', yoy:'+2.5%', desc:'South Africa and Tanzania are key African producers; oil and snacks.' },
  ];

  for (const c of coms) {
    await run(
      `MERGE (n:ComNode {id: $id})
       SET n.name=$name, n.rank=$rank, n.class=$cls, n.weight=$w, n.confidence=$c,
           n.tags=$tags, n.description=$desc, n.exportValue=$ev, n.globalShare=$gs,
           n.africaShare=$af, n.price=$price, n.comtradeCode=$hs, n.yoyGrowth=$yoy,
           n.fingerprint=$desc, n.createdAt=datetime(), n.updatedAt=datetime()`,
      c
    );
  }
  console.log(`  Created ${coms.length} ComNodes`);

  // ── EDGES ──────────────────────────────────────────────
  console.log('Creating edges...');

  // PRODUCES edges — Oil
  const oilProducers = [
    { geo:'GEO-WAF-NGA-002', vol:1.51, share:21.0 },
    { geo:'GEO-SAF-AGO-007', vol:1.28, share:17.8 },
    { geo:'GEO-NAF-LBY-008', vol:1.18, share:16.4 },
    { geo:'GEO-NAF-DZA-005', vol:1.05, share:14.6 },
    { geo:'GEO-NAF-EGY-003', vol:0.63, share:8.8 },
    { geo:'GEO-CAF-COG-025', vol:0.27, share:3.7 },
    { geo:'GEO-WAF-GHA-010', vol:0.17, share:2.4 },
    { geo:'GEO-CAF-GNQ-017', vol:0.11, share:1.5 },
    { geo:'GEO-CAF-GAB-013', vol:0.20, share:2.8 },
  ];
  for (const p of oilProducers) {
    await run(
      `MATCH (g:GeoNode {id:$geo}), (c:ComNode {id:'COM-ENE-OIL-001'})
       MERGE (g)-[r:PRODUCES]->(c)
       SET r.volume=$vol, r.unit='mb/d', r.shareOfTotal=$share, r.year=2024, r.confidence=75, r.source='seed-manual'`,
      p
    );
  }

  // PRODUCES edges — Copper
  const copperProducers = [
    { geo:'GEO-CAF-COD-006', vol:2.1, share:75.0 },
    { geo:'GEO-SAF-ZMB-030', vol:0.68, share:24.3 },
    { geo:'GEO-SAF-ZAF-001', vol:0.014, share:0.5 },
  ];
  for (const p of copperProducers) {
    await run(
      `MATCH (g:GeoNode {id:$geo}), (c:ComNode {id:'COM-MET-COP-002'})
       MERGE (g)-[r:PRODUCES]->(c)
       SET r.volume=$vol, r.unit='kt', r.shareOfTotal=$share, r.year=2024, r.confidence=70, r.source='seed-manual'`,
      p
    );
  }

  // EXPORTS edges — Oil
  const oilExporters = [
    { geo:'GEO-WAF-NGA-002', vol:1.38 },
    { geo:'GEO-NAF-LBY-008', vol:1.12 },
    { geo:'GEO-SAF-AGO-007', vol:1.01 },
    { geo:'GEO-NAF-DZA-005', vol:0.52 },
    { geo:'GEO-NAF-EGY-003', vol:0.10 },
  ];
  for (const e of oilExporters) {
    await run(
      `MATCH (g:GeoNode {id:$geo}), (c:ComNode {id:'COM-ENE-OIL-001'})
       MERGE (g)-[r:EXPORTS]->(c)
       SET r.volume=$vol, r.unit='mb/d', r.year=2024, r.confidence=70, r.source='seed-manual'`,
      e
    );
  }

  // IMPORTS edges — Oil
  const oilImporters = [
    { geo:'GEO-EXT-CHN-001', vol:1.25 },
    { geo:'GEO-EXT-IND-002', vol:0.75 },
    { geo:'GEO-EXT-NLD-003', vol:0.52 },
    { geo:'GEO-EXT-FRA-004', vol:0.36 },
    { geo:'GEO-EXT-USA-005', vol:0.31 },
  ];
  for (const i of oilImporters) {
    await run(
      `MATCH (g:GeoNode {id:$geo}), (c:ComNode {id:'COM-ENE-OIL-001'})
       MERGE (g)-[r:IMPORTS]->(c)
       SET r.volume=$vol, r.unit='mb/d', r.year=2024, r.confidence=65, r.source='seed-manual'`,
      i
    );
  }

  // EXPORTS edges — Copper
  const copperExporters = [
    { geo:'GEO-CAF-COD-006', vol:2.0 },
    { geo:'GEO-SAF-ZMB-030', vol:0.65 },
  ];
  for (const e of copperExporters) {
    await run(
      `MATCH (g:GeoNode {id:$geo}), (c:ComNode {id:'COM-MET-COP-002'})
       MERGE (g)-[r:EXPORTS]->(c)
       SET r.volume=$vol, r.unit='kt', r.year=2024, r.confidence=65, r.source='seed-manual'`,
      e
    );
  }

  // Copper importers
  await run(
    `MATCH (g:GeoNode {id:'GEO-EXT-CHN-001'}), (c:ComNode {id:'COM-MET-COP-002'})
     MERGE (g)-[r:IMPORTS]->(c)
     SET r.volume=1.5, r.unit='kt', r.year=2024, r.confidence=60, r.source='seed-manual'`
  );

  // ADJACENT_TO edges
  const adjacencies = [
    ['GEO-WAF-NGA-002', 'GEO-CAF-CMR-012'],
    ['GEO-WAF-NGA-002', 'GEO-WAF-BEN-043'],
    ['GEO-WAF-NGA-002', 'GEO-WAF-NER-023'],
    ['GEO-WAF-NGA-002', 'GEO-WAF-MLI-019'],
    ['GEO-SAF-ZAF-001', 'GEO-SAF-MOZ-032'],
    ['GEO-SAF-ZAF-001', 'GEO-SAF-BWA-029'],
    ['GEO-SAF-ZAF-001', 'GEO-SAF-ZMB-030'],
    ['GEO-SAF-ZAF-001', 'GEO-SAF-ZWE-031'],
    ['GEO-SAF-ZAF-001', 'GEO-SAF-LSO-047'],
    ['GEO-SAF-ZAF-001', 'GEO-SAF-SWZ-048'],
    ['GEO-SAF-ZAF-001', 'GEO-SAF-NAM-028'],
    ['GEO-CAF-COD-006', 'GEO-SAF-ZMB-030'],
    ['GEO-CAF-COD-006', 'GEO-CAF-CMR-012'],
    ['GEO-CAF-COD-006', 'GEO-CAF-CAR-033'],
    ['GEO-CAF-COD-006', 'GEO-CAF-SSD-034'],
    ['GEO-CAF-COD-006', 'GEO-CAF-COG-025'],
    ['GEO-CAF-COD-006', 'GEO-CAF-AGO-007'],
    ['GEO-EAF-TZA-015', 'GEO-EAF-KEN-018'],
    ['GEO-EAF-TZA-015', 'GEO-EAF-MOZ-021'],
    ['GEO-EAF-TZA-015', 'GEO-EAF-UGA-026'],
    ['GEO-EAF-TZA-015', 'GEO-EAF-RWA-027'],
    ['GEO-EAF-ETH-016', 'GEO-EAF-SSD-034'],
    ['GEO-EAF-ETH-016', 'GEO-EAF-KEN-018'],
    ['GEO-EAF-ETH-016', 'GEO-EAF-SOM-035'],
    ['GEO-EAF-ETH-016', 'GEO-EAF-DJI-046'],
    ['GEO-NAF-EGY-003', 'GEO-NAF-LBY-008'],
    ['GEO-NAF-MAR-004', 'GEO-NAF-TUN-011'],
    ['GEO-NAF-DZA-005', 'GEO-NAF-TUN-011'],
    ['GEO-NAF-DZA-005', 'GEO-NAF-LBY-008'],
    ['GEO-WAF-CIV-009', 'GEO-WAF-GHA-010'],
    ['GEO-WAF-CIV-009', 'GEO-WAF-SEN-014'],
    ['GEO-WAF-CIV-009', 'GEO-WAF-GIN-036'],
    ['GEO-WAF-GHA-010', 'GEO-WAF-TGO-042'],
    ['GEO-WAF-GHA-010', 'GEO-WAF-BEN-043'],
    ['GEO-EAF-UGA-026', 'GEO-EAF-KEN-018'],
    ['GEO-EAF-UGA-026', 'GEO-EAF-SSD-034'],
    ['GEO-CAF-CMR-012', 'GEO-CAF-CAR-033'],
    ['GEO-CAF-CMR-012', 'GEO-CAF-CAF-033'],
    ['GEO-SAF-NAM-028', 'GEO-SAF-BWA-029'],
    ['GEO-SAF-BWA-029', 'GEO-SAF-ZWE-031'],
    ['GEO-WAF-MLI-019', 'GEO-WAF-NER-023'],
    ['GEO-WAF-MLI-019', 'GEO-WAF-BFA-022'],
  ];
  for (const [a, b] of adjacencies) {
    await run(
      `MATCH (x:GeoNode {id:$a}), (y:GeoNode {id:$b})
       MERGE (x)-[r:ADJACENT_TO]->(y)
       SET r.year=2024, r.confidence=95, r.source='seed-manual'`,
      { a, b }
    );
  }
  console.log(`  Created ${adjacencies.length} ADJACENT_TO edges`);

  // ── COUNTS ─────────────────────────────────────────────
  const nodeCount = await run('MATCH (n) RETURN count(n) AS count');
  const relCount = await run('MATCH ()-[r]->() RETURN count(r) AS count');
  console.log(`\nDone! Nodes: ${nodeCount[0].count}, Relationships: ${relCount[0].count}`);

  await driver.close();
}

seed().catch(e => { console.error(e); process.exit(1); });
