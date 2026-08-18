// JUJU IFA — Neo4j Schema Setup
// Run: docker exec juju-ifa-neo4j cypher-shell -u neo4j -p jujuifa2026 < scripts/setup-schema.cypher

// ── CONSTRAINTS ──────────────────────────────────────────
CREATE CONSTRAINT comnode_id IF NOT EXISTS FOR (n:ComNode) REQUIRE n.id IS UNIQUE;
CREATE CONSTRAINT geonode_id IF NOT EXISTS FOR (n:GeoNode) REQUIRE n.id IS UNIQUE;
CREATE CONSTRAINT biznode_id IF NOT EXISTS FOR (n:BizNode) REQUIRE n.id IS UNIQUE;
CREATE CONSTRAINT eventnode_id IF NOT EXISTS FOR (n:EventNode) REQUIRE n.id IS UNIQUE;

// ── INDEXES ──────────────────────────────────────────────
CREATE INDEX comnode_name IF NOT EXISTS FOR (n:ComNode) ON (n.name);
CREATE INDEX geonode_name IF NOT EXISTS FOR (n:GeoNode) ON (n.name);
CREATE INDEX geonode_region IF NOT EXISTS FOR (n:GeoNode) ON (n.region);
CREATE INDEX geonode_iso3 IF NOT EXISTS FOR (n:GeoNode) ON (n.iso3);
CREATE INDEX comnode_class IF NOT EXISTS FOR (n:ComNode) ON (n.class);
CREATE INDEX comnode_rank IF NOT EXISTS FOR (n:ComNode) ON (n.rank);
CREATE INDEX biznode_name IF NOT EXISTS FOR (n:BizNode) ON (n.name);
CREATE INDEX biznode_type IF NOT EXISTS FOR (n:BizNode) ON (n.type);
CREATE INDEX eventnode_date IF NOT EXISTS FOR (n:EventNode) ON (n.date);

// ── FULLTEXT INDEX ───────────────────────────────────────
CREATE FULLTEXT INDEX entity_search IF NOT EXISTS
  FOR (n:ComNode|GeoNode|BizNode|EventNode) ON EACH [n.name, n.id, n.description];
