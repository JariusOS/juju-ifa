'use client';

import { useEffect, useState } from 'react';

interface Stats {
  nodes: number;
  relationships: number;
  labels: { label: string; count: number }[];
  relationshipTypes: { type: string; count: number }[];
}

interface NodeItem {
  n: { id: string; name: string; weight?: number; rank?: number; class?: string; region?: string; tier?: string; iso3?: string };
  labels: string[];
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [topCommodities, setTopCommodities] = useState<NodeItem[]>([]);
  const [topCountries, setTopCountries] = useState<NodeItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/neo4j?action=stats').then(r => r.json()),
      fetch('/api/neo4j?action=nodes&label=ComNode&limit=10').then(r => r.json()),
      fetch('/api/neo4j?action=nodes&label=GeoNode&limit=10').then(r => r.json()),
    ]).then(([s, coms, geos]) => {
      setStats(s);
      setTopCommodities(coms.map((n: Record<string, unknown>) => ({ n: n as unknown as NodeItem['n'], labels: ['ComNode'] })));
      setTopCountries(geos.map((n: Record<string, unknown>) => ({ n: n as unknown as NodeItem['n'], labels: ['GeoNode'] })));
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={{ padding: 24 }}>
        <div className="skeleton" style={{ height: 200, marginBottom: 16 }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div className="skeleton" style={{ height: 300 }} />
          <div className="skeleton" style={{ height: 300 }} />
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '24px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, color: '#F1F5F9', marginBottom: 4 }}>
        JUJU IFA Dashboard
      </h1>
      <p style={{ fontSize: 13, color: '#8191A4', marginBottom: 24 }}>
        Intelligence Fusion Architecture — Africa&apos;s commodity supply chain knowledge graph
      </p>

      {/* Stats cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 24 }}>
        {[
          { label: 'Total Nodes', value: stats?.nodes || 0, color: '#F59E0B' },
          { label: 'Relationships', value: stats?.relationships || 0, color: '#3B82F6' },
          { label: 'ComNodes', value: stats?.labels?.find(l => l.label === 'ComNode')?.count || 0, color: '#10B981' },
          { label: 'GeoNodes', value: stats?.labels?.find(l => l.label === 'GeoNode')?.count || 0, color: '#EF4444' },
        ].map((s) => (
          <div key={s.label} className="card" style={{ textAlign: 'center' }}>
            <div className="section-header">{s.label}</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: s.color, fontFamily: 'monospace' }}>
              {s.value}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {/* Top Commodities */}
        <div className="card">
          <div className="section-header" style={{ marginBottom: 12 }}>Top Commodities</div>
          {topCommodities.map((item, i) => (
            <a key={item.n.id} href={`/nodes/${item.n.id}`} style={{
              display: 'flex', alignItems: 'center', padding: '8px 0',
              borderBottom: i < topCommodities.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              textDecoration: 'none', color: 'inherit', gap: 12,
            }}>
              <span style={{ fontSize: 11, color: '#8191A4', fontFamily: 'monospace', width: 20 }}>{i + 1}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#F1F5F9' }}>{item.n.name}</div>
                <div style={{ fontSize: 11, color: '#8191A4', fontFamily: 'monospace' }}>{item.n.id}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 11, color: '#AAB7C6' }}>{item.n.class}</div>
                <div style={{ fontSize: 10, color: '#8191A4' }}>Rank #{item.n.rank}</div>
              </div>
              <div style={{ width: 40 }}>
                <div style={{
                  width: 4, borderRadius: 2, background: '#1E293B',
                  height: 40, position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', bottom: 0, width: '100%',
                    height: `${((item.n.weight || 5) / 10) * 100}%`,
                    background: '#F59E0B', borderRadius: 2,
                  }} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Top Countries */}
        <div className="card">
          <div className="section-header" style={{ marginBottom: 12 }}>Top Countries</div>
          {topCountries.map((item, i) => (
            <a key={item.n.id} href={`/nodes/${item.n.id}`} style={{
              display: 'flex', alignItems: 'center', padding: '8px 0',
              borderBottom: i < topCountries.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              textDecoration: 'none', color: 'inherit', gap: 12,
            }}>
              <span style={{ fontSize: 11, color: '#8191A4', fontFamily: 'monospace', width: 20 }}>{i + 1}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#F1F5F9' }}>{item.n.name}</div>
                <div style={{ fontSize: 11, color: '#8191A4', fontFamily: 'monospace' }}>{item.n.id}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 11, color: '#AAB7C6' }}>{item.n.tier}</div>
                <div style={{ fontSize: 10, color: '#8191A4' }}>{item.n.region}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Relationship types */}
      {stats?.relationshipTypes && stats.relationshipTypes.length > 0 && (
        <div className="card" style={{ marginTop: 16 }}>
          <div className="section-header" style={{ marginBottom: 12 }}>Relationship Types</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {stats.relationshipTypes.map((rt) => (
              <div key={rt.type} className="card-compact" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#F1F5F9' }}>{rt.type}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: '#3B82F6', fontFamily: 'monospace' }}>{rt.count}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
