'use client';

import { useEffect, useState } from 'react';

interface NodeItem {
  id: string;
  name: string;
  rank?: number;
  class?: string;
  region?: string;
  tier?: string;
  iso3?: string;
  weight?: number;
  confidence?: number;
  tags?: string[];
}

export default function NodesPage() {
  const [comNodes, setComNodes] = useState<NodeItem[]>([]);
  const [geoNodes, setGeoNodes] = useState<NodeItem[]>([]);
  const [filter, setFilter] = useState<'all' | 'com' | 'geo'>('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/neo4j?action=nodes&label=ComNode&limit=100').then(r => r.json()),
      fetch('/api/neo4j?action=nodes&label=GeoNode&limit=100').then(r => r.json()),
    ]).then(([coms, geos]) => {
      setComNodes(coms.map((r: Record<string, unknown>) => r.n as NodeItem));
      setGeoNodes(geos.map((r: Record<string, unknown>) => r.n as NodeItem));
      setLoading(false);
    });
  }, []);

  const allNodes = [
    ...comNodes.map(n => ({ ...n, _type: 'com' as const })),
    ...geoNodes.map(n => ({ ...n, _type: 'geo' as const })),
  ];

  const filtered = allNodes
    .filter(n => filter === 'all' || (filter === 'com' && n._type === 'com') || (filter === 'geo' && n._type === 'geo'))
    .filter(n => !search || n.name.toLowerCase().includes(search.toLowerCase()) || n.id.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (b.weight || 0) - (a.weight || 0));

  return (
    <div style={{ padding: '24px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, color: '#F1F5F9', marginBottom: 4 }}>Node Registry</h1>
      <p style={{ fontSize: 13, color: '#8191A4', marginBottom: 20 }}>{filtered.length} nodes</p>

      <div style={{ display: 'flex', gap: 12, marginBottom: 20, alignItems: 'center' }}>
        <input
          className="search-input"
          placeholder="Search by name or ID..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ maxWidth: 300 }}
        />
        <div style={{ display: 'flex', gap: 4 }}>
          {(['all', 'com', 'geo'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="tab-item"
              style={{
                flex: 'none', padding: '6px 16px', fontSize: 11,
                borderBottomColor: filter === f ? '#F59E0B' : 'transparent',
                color: filter === f ? '#F59E0B' : '#8191A4',
              }}
            >
              {f === 'all' ? `All (${allNodes.length})` : f === 'com' ? `ComNodes (${comNodes.length})` : `GeoNodes (${geoNodes.length})`}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {[...Array(6)].map((_, i) => <div key={i} className="skeleton" style={{ height: 120 }} />)}
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {filtered.map(node => (
            <a key={node.id} href={`/nodes/${node.id}`} style={{
              textDecoration: 'none', color: 'inherit',
            }}>
              <div className="card" style={{ cursor: 'pointer', transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(245,158,11,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#F1F5F9' }}>{node.name}</div>
                    <div style={{ fontSize: 11, fontFamily: 'monospace', color: '#8191A4' }}>{node.id}</div>
                  </div>
                  <div style={{
                    padding: '2px 8px', borderRadius: 999, fontSize: 10, fontWeight: 600,
                    background: node._type === 'com' ? 'rgba(245,158,11,0.15)' : 'rgba(59,130,246,0.15)',
                    color: node._type === 'com' ? '#F59E0B' : '#3B82F6',
                  }}>
                    {node._type === 'com' ? node.class : node.tier || node.region}
                  </div>
                </div>
                {node._type === 'com' && (
                  <div style={{ fontSize: 11, color: '#AAB7C6' }}>
                    Rank #{node.rank} — {node.class}
                  </div>
                )}
                {node._type === 'geo' && (
                  <div style={{ fontSize: 11, color: '#AAB7C6' }}>
                    {node.iso3} — {node.region}
                  </div>
                )}
                <div style={{ display: 'flex', gap: 4, marginTop: 8, flexWrap: 'wrap' }}>
                  {node.tags?.slice(0, 3).map(tag => (
                    <span key={tag} style={{
                      fontSize: 9, padding: '2px 6px', borderRadius: 4,
                      background: 'rgba(255,255,255,0.04)', color: '#8191A4',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
