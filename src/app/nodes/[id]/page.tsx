'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getCommodityById } from '@/data/commodities';
import CommodityProfile from './_components/CommodityProfile';

export default function NodeProfile() {
  const params = useParams();
  const id = (params.id as string) || '';
  const commodity = getCommodityById(id);

  if (commodity) {
    return (
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 16px', background: 'var(--bg)', minHeight: '100vh' }}>
        <CommodityProfile c={commodity} />
      </div>
    );
  }

  return <GenericNodeProfile id={id} />;
}

/* ── Existing Neo4j-driven generic profile (GeoNodes, unseeded COM ids) ── */

interface NodeData {
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
  description?: string;
  fingerprint?: string;
  exportValue?: string;
  globalShare?: string;
  africaShare?: string;
  price?: string;
  comtradeCode?: string;
  yoyGrowth?: string;
}

interface Connection {
  rel: string;
  props: Record<string, unknown>;
  target: NodeData;
}

function GenericNodeProfile({ id }: { id: string }) {
  const [node, setNode] = useState<NodeData | null>(null);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    if (!id) return;
    fetch(`/api/neo4j?action=node&id=${encodeURIComponent(id)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.n) {
          setNode(data.n);
          setConnections(data.connections || []);
        }
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div style={{ padding: 24 }}>
        <div className="skeleton" style={{ height: 280, marginBottom: 16 }} />
        <div className="skeleton" style={{ height: 100, marginBottom: 16 }} />
        <div className="skeleton" style={{ height: 200 }} />
      </div>
    );
  }

  if (!node) {
    return (
      <div style={{ padding: 24, textAlign: 'center' }}>
        <h2 style={{ color: '#EF4444', fontSize: 18 }}>Node not found</h2>
        <p style={{ color: '#8191A4', marginTop: 8 }}>ID: {id}</p>
      </div>
    );
  }

  const isCom = node.id.startsWith('COM');
  const confidenceColor = (node.confidence || 0) >= 70 ? '#10B981' : (node.confidence || 0) >= 40 ? '#F59E0B' : '#EF4444';

  const groupedConnections: Record<string, Connection[]> = {};
  connections.forEach((c) => {
    if (!groupedConnections[c.rel]) groupedConnections[c.rel] = [];
    groupedConnections[c.rel].push(c);
  });

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 16px 80px' }}>
      <div className="card" style={{
        background: 'linear-gradient(135deg, #101F30 0%, #132437 100%)',
        marginTop: 16, padding: 24, borderRadius: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 12,
            background: isCom ? 'rgba(245,158,11,0.15)' : 'rgba(59,130,246,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 24, fontWeight: 800,
            color: isCom ? '#F59E0B' : '#3B82F6',
          }}>
            {node.name.charAt(0)}
          </div>
          <div>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: '#F1F5F9', margin: 0 }}>
              {node.name}
            </h1>
            <div style={{ fontSize: 13, color: '#AAB7C6' }}>
              #{node.rank} {isCom ? node.class : node.tier || node.region}
            </div>
            <div style={{ fontSize: 11, fontFamily: 'monospace', color: '#8191A4' }}>
              [[{node.id}]]
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
          {node.tags?.map((tag) => (
            <span key={tag} style={{
              fontSize: 10, padding: '3px 8px', borderRadius: 6,
              background: 'rgba(255,255,255,0.06)', color: '#AAB7C6',
            }}>{tag}</span>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {isCom ? (
            <>
              <div className="card-compact" style={{ textAlign: 'center' }}>
                <div className="section-header">Price</div>
                <div className="data-value" style={{ fontSize: 14 }}>{node.price || '—'}</div>
              </div>
              <div className="card-compact" style={{ textAlign: 'center' }}>
                <div className="section-header">Export Value</div>
                <div className="data-value" style={{ fontSize: 14 }}>{node.exportValue || '—'}</div>
              </div>
              <div className="card-compact" style={{ textAlign: 'center' }}>
                <div className="section-header">YoY</div>
                <div className="data-value" style={{ fontSize: 14, color: node.yoyGrowth?.startsWith('+') ? '#10B981' : '#EF4444' }}>
                  {node.yoyGrowth || '—'}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="card-compact" style={{ textAlign: 'center' }}>
                <div className="section-header">Export Value</div>
                <div className="data-value" style={{ fontSize: 14 }}>{node.exportValue || '—'}</div>
              </div>
              <div className="card-compact" style={{ textAlign: 'center' }}>
                <div className="section-header">Global Share</div>
                <div className="data-value" style={{ fontSize: 14 }}>{node.globalShare || '—'}</div>
              </div>
              <div className="card-compact" style={{ textAlign: 'center' }}>
                <div className="section-header">ISO3</div>
                <div className="data-value" style={{ fontSize: 14 }}>{node.iso3 || '—'}</div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="tab-nav">
        {['home', 'connections', 'info'].map((tab) => (
          <button key={tab} className={`tab-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}>
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {activeTab === 'home' && (
        <div className="card" style={{ marginTop: 12 }}>
          <div className="section-header">Node Fingerprint</div>
          <p style={{ fontSize: 13, color: '#D5DCE5', lineHeight: 1.6, marginBottom: 12 }}>
            {node.fingerprint || node.description || 'No fingerprint available.'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            <div>
              <div className="section-header">Status</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <div className="pulse-dot" style={{ width: 6, height: 6 }} />
                <span style={{ fontSize: 12, color: '#D5DCE5' }}>
                  {(node.confidence || 0) >= 70 ? 'High' : (node.confidence || 0) >= 40 ? 'Medium' : 'Low'}
                </span>
              </div>
            </div>
            <div>
              <div className="section-header">Confidence</div>
              <span style={{ fontSize: 12, color: confidenceColor, fontFamily: 'monospace' }}>
                {node.confidence || 0}%
              </span>
            </div>
            <div>
              <div className="section-header">Weight</div>
              <span style={{ fontSize: 12, color: '#D5DCE5', fontFamily: 'monospace' }}>
                {node.weight || 0}/10
              </span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'connections' && (
        <div style={{ marginTop: 12 }}>
          {Object.keys(groupedConnections).length === 0 ? (
            <div className="card" style={{ textAlign: 'center', padding: 40 }}>
              <div style={{ color: '#8191A4', fontSize: 13 }}>No connections found</div>
            </div>
          ) : (
            Object.entries(groupedConnections).map(([rel, conns]) => (
              <div key={rel} className="card" style={{ marginTop: 8 }}>
                <div className="section-header" style={{ marginBottom: 8 }}>
                  {rel} ({conns.length})
                </div>
                {conns.map((c, i) => (
                  <a key={i} href={`/nodes/${c.target.id}`} style={{
                    display: 'flex', alignItems: 'center', padding: '8px 0',
                    borderBottom: i < conns.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                    textDecoration: 'none', color: 'inherit', gap: 10,
                  }}>
                    <div className="pulse-dot" style={{ width: 6, height: 6, background: '#3B82F6' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#F1F5F9' }}>{c.target.name}</div>
                      <div style={{ fontSize: 10, fontFamily: 'monospace', color: '#8191A4' }}>{c.target.id}</div>
                    </div>
                    {c.props.volume !== undefined && c.props.volume !== null && (
                      <div style={{ fontSize: 11, fontFamily: 'monospace', color: '#AAB7C6' }}>
                        {String(c.props.volume)} {String(c.props.unit || '')}
                      </div>
                    )}
                  </a>
                ))}
              </div>
            ))
          )}
        </div>
      )}

      {activeTab === 'info' && (
        <div className="card" style={{ marginTop: 12 }}>
          <div className="section-header">Metadata</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 8 }}>
            {[
              { label: 'Node ID', value: node.id },
              { label: 'Type', value: isCom ? 'ComNode' : 'GeoNode' },
              isCom ? { label: 'Class', value: node.class } : { label: 'Region', value: node.region },
              isCom ? { label: 'Rank', value: `#${node.rank}` } : { label: 'Tier', value: node.tier },
              { label: 'Weight', value: `${node.weight}/10` },
              { label: 'Confidence', value: `${node.confidence}%` },
              isCom && node.comtradeCode ? { label: 'HS Code', value: node.comtradeCode } : null,
              isCom && node.africaShare ? { label: 'Africa Share', value: node.africaShare } : null,
            ].filter(Boolean).map((item) => item && (
              <div key={item.label} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="section-header">{item.label}</div>
                <div style={{ fontSize: 13, color: '#D5DCE5', fontFamily: 'monospace' }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}