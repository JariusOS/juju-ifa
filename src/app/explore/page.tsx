'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

interface GraphNode {
  id: string;
  name: string;
  labels: string[];
  weight: number;
}

interface GraphEdge {
  source: string;
  target: string;
  type: string;
}

interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export default function ExplorePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [data, setData] = useState<GraphData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<GraphNode | null>(null as GraphNode | null);
  const [search, setSearch] = useState('');
  const animRef = useRef<number>(0);
  const nodesRef = useRef<(GraphNode & { x: number; y: number; vx: number; vy: number })[]>([]);

  useEffect(() => {
    fetch('/api/neo4j?action=graph&limit=80')
      .then(r => r.json())
      .then(d => {
        setData(d);
        setLoading(false);
      });
  }, []);

  const layout = useCallback(() => {
    if (!data || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    const H = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;

    // Init positions if needed
    if (nodesRef.current.length !== data.nodes.length) {
      nodesRef.current = data.nodes.map((n, i) => {
        const angle = (i / data.nodes.length) * Math.PI * 2;
        const r = 150 + Math.random() * 100;
        return { ...n, x: w / 2 + Math.cos(angle) * r, y: h / 2 + Math.sin(angle) * r, vx: 0, vy: 0 };
      });
    }

    const nodeMap = new Map(nodesRef.current.map(n => [n.id, n]));

    // Simple force simulation
    const alpha = 0.3;
    const repulsion = 800;
    const attraction = 0.005;
    const centerForce = 0.01;
    const damping = 0.85;

    // Repulsion
    for (let i = 0; i < nodesRef.current.length; i++) {
      for (let j = i + 1; j < nodesRef.current.length; j++) {
        const a = nodesRef.current[i];
        const b = nodesRef.current[j];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = repulsion / (dist * dist);
        const fx = (dx / dist) * force * alpha;
        const fy = (dy / dist) * force * alpha;
        a.vx -= fx;
        a.vy -= fy;
        b.vx += fx;
        b.vy += fy;
      }
    }

    // Attraction (edges)
    for (const edge of data.edges) {
      const a = nodeMap.get(edge.source);
      const b = nodeMap.get(edge.target);
      if (!a || !b) continue;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const force = dist * attraction * alpha;
      a.vx += (dx / dist) * force;
      a.vy += (dy / dist) * force;
      b.vx -= (dx / dist) * force;
      b.vy -= (dy / dist) * force;
    }

    // Center gravity
    for (const node of nodesRef.current) {
      node.vx += (w / 2 - node.x) * centerForce * alpha;
      node.vy += (h / 2 - node.y) * centerForce * alpha;
    }

    // Update positions
    for (const node of nodesRef.current) {
      node.vx *= damping;
      node.vy *= damping;
      node.x += node.vx;
      node.y += node.vy;
      node.x = Math.max(30, Math.min(w - 30, node.x));
      node.y = Math.max(30, Math.min(h - 30, node.y));
    }

    // Draw
    ctx.clearRect(0, 0, w, h);

    // Edges
    ctx.lineWidth = 0.5;
    for (const edge of data.edges) {
      const a = nodeMap.get(edge.source);
      const b = nodeMap.get(edge.target);
      if (!a || !b) continue;
      ctx.strokeStyle = edge.type === 'PRODUCES' ? 'rgba(16,185,129,0.3)'
        : edge.type === 'EXPORTS' ? 'rgba(245,158,11,0.3)'
        : edge.type === 'IMPORTS' ? 'rgba(59,130,246,0.3)'
        : 'rgba(255,255,255,0.08)';
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }

    // Nodes
    for (const node of nodesRef.current) {
      const isCom = node.id.startsWith('COM');
      const isSelected = selected?.id === node.id;
      const r = Math.max(4, (node.weight || 5) * 1.5);
      ctx.fillStyle = isSelected ? '#F59E0B'
        : isCom ? 'rgba(245,158,11,0.8)'
        : node.id.startsWith('GEO-EXT') ? 'rgba(129,145,164,0.8)'
        : 'rgba(59,130,246,0.8)';
      ctx.beginPath();
      ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
      ctx.fill();

      if (isSelected || (node.weight || 0) >= 8) {
        ctx.fillStyle = '#F1F5F9';
        ctx.font = '10px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(node.name, node.x, node.y - r - 4);
      }
    }

    animRef.current = requestAnimationFrame(layout);
  }, [data, selected]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(layout);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [layout]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current || !nodesRef.current.length) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let closest: GraphNode | null = null;
    let minDist = 30;
    for (const node of nodesRef.current) {
      const d = Math.sqrt((node.x - x) ** 2 + (node.y - y) ** 2);
      if (d < minDist) {
        minDist = d;
        closest = node;
      }
    }
    setSelected(closest);
  };

  const filteredNodes = data?.nodes.filter(n =>
    !search || n.name.toLowerCase().includes(search.toLowerCase())
  ) || [];

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
      {/* Sidebar */}
      <div style={{
        width: 280, background: '#0A1623', borderRight: '1px solid rgba(255,255,255,0.06)',
        padding: 16, overflowY: 'auto',
      }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: '#F1F5F9', marginBottom: 12 }}>Graph Explorer</h2>
        <input
          className="search-input"
          placeholder="Filter nodes..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ marginBottom: 12 }}
        />
        {selected && (
          <div className="card" style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#F1F5F9' }}>{selected.name}</div>
            <div style={{ fontSize: 11, fontFamily: 'monospace', color: '#8191A4' }}>{selected.id}</div>
            <div style={{ fontSize: 11, color: '#AAB7C6', marginTop: 4 }}>
              Weight: {selected.weight}/10 | {selected.labels?.[0]}
            </div>
            <a href={`/nodes/${selected.id}`} style={{
              display: 'block', marginTop: 8, padding: '6px 12px', borderRadius: 6,
              background: '#F59E0B', color: '#07111D', fontSize: 11, fontWeight: 600,
              textDecoration: 'none', textAlign: 'center',
            }}>
              View Profile →
            </a>
          </div>
        )}
        <div className="section-header" style={{ marginTop: 12 }}>
          Legend
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
          {[
            { color: 'rgba(245,158,11,0.8)', label: 'ComNode' },
            { color: 'rgba(59,130,246,0.8)', label: 'GeoNode (Africa)' },
            { color: 'rgba(129,145,164,0.8)', label: 'GeoNode (External)' },
          ].map(l => (
            <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: 4, background: l.color }} />
              <span style={{ fontSize: 11, color: '#AAB7C6' }}>{l.label}</span>
            </div>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 4 }}>
            {[
              { color: 'rgba(16,185,129,0.5)', label: 'PRODUCES' },
              { color: 'rgba(245,158,11,0.5)', label: 'EXPORTS' },
              { color: 'rgba(59,130,246,0.5)', label: 'IMPORTS' },
              { color: 'rgba(255,255,255,0.1)', label: 'ADJACENT_TO' },
            ].map(l => (
              <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 16, height: 2, background: l.color }} />
                <span style={{ fontSize: 11, color: '#AAB7C6' }}>{l.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="section-header" style={{ marginTop: 16 }}>Node List</div>
        <div style={{ marginTop: 8 }}>
          {filteredNodes.slice(0, 30).map(n => (
            <div key={n.id} style={{
              padding: '4px 0', cursor: 'pointer',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
            }} onClick={() => setSelected(n)}>
              <div style={{ fontSize: 11, color: selected?.id === n.id ? '#F59E0B' : '#D5DCE5' }}>
                {n.name}
              </div>
              <div style={{ fontSize: 9, fontFamily: 'monospace', color: '#8191A4' }}>{n.id}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Canvas */}
      <div style={{ flex: 1, position: 'relative' }}>
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          style={{ width: '100%', height: '100%', cursor: 'crosshair' }}
        />
        {loading && (
          <div style={{
            position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <div className="skeleton" style={{ width: 200, height: 20 }} />
          </div>
        )}
      </div>
    </div>
  );
}
