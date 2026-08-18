import { NextRequest, NextResponse } from 'next/server';
import { runQuery, runWrite, verifyConnectivity } from '@/lib/neo4j';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');

  switch (action) {
    case 'health': {
      const ok = await verifyConnectivity();
      return NextResponse.json({ connected: ok });
    }

    case 'stats': {
      const nodeCount = await runQuery<{ count: number }>(
        'MATCH (n) RETURN count(n) AS count'
      );
      const relCount = await runQuery<{ count: number }>(
        'MATCH ()-[r]->() RETURN count(r) AS count'
      );
      const labelCounts = await runQuery<{ label: string; count: number }>(
        `CALL db.labels() YIELD label
         RETURN label, 0 AS count ORDER BY label`
      );
      // Get actual counts per label
      for (const lc of labelCounts) {
        const countResult = await runQuery<{ count: number }>(
          `MATCH (n:\`${lc.label}\`) RETURN count(n) AS count`
        );
        lc.count = countResult[0]?.count || 0;
      }
      const relTypes = await runQuery<{ type: string; count: number }>(
        `CALL db.relationshipTypes() YIELD relationshipType AS type
         RETURN type, 0 AS count ORDER BY type`
      );
      for (const rt of relTypes) {
        const countResult = await runQuery<{ count: number }>(
          `MATCH ()-[r:\`${rt.type}\`]->() RETURN count(r) AS count`
        );
        rt.count = countResult[0]?.count || 0;
      }
      return NextResponse.json({
        nodes: nodeCount[0]?.count || 0,
        relationships: relCount[0]?.count || 0,
        labels: labelCounts,
        relationshipTypes: relTypes,
      });
    }

    case 'nodes': {
      const label = searchParams.get('label') || 'ComNode';
      const limit = parseInt(searchParams.get('limit') || '50');
      const skip = parseInt(searchParams.get('skip') || '0');
      const nodes = await runQuery(
        `MATCH (n:\`${label}\`) RETURN n ORDER BY n.name SKIP $skip LIMIT $limit`,
        { skip, limit }
      );
      return NextResponse.json(nodes.map((r) => r.n));
    }

    case 'node': {
      const id = searchParams.get('id');
      if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });
      const results = await runQuery(
        `MATCH (n {id: $id})
         OPTIONAL MATCH (n)-[r]-(m)
         RETURN n, collect(DISTINCT {rel: type(r), props: properties(r), target: m}) AS connections`,
        { id }
      );
      if (results.length === 0) return NextResponse.json({ error: 'Not found' }, { status: 404 });
      return NextResponse.json(results[0]);
    }

    case 'search': {
      const q = searchParams.get('q') || '';
      if (!q) return NextResponse.json([]);
      const results = await runQuery(
        `MATCH (n)
         WHERE toLower(n.name) CONTAINS toLower($q) OR toLower(n.id) CONTAINS toLower($q)
         RETURN n, labels(n) AS labels
         ORDER BY n.weight DESC
         LIMIT 20`,
        { q }
      );
      return NextResponse.json(results.map((r) => {
        const node = r.n as Record<string, unknown>;
        const labels = r.labels as string[];
        return { ...node, _labels: labels };
      }));
    }

    case 'graph': {
      const centerId = searchParams.get('centerId');
      const depth = parseInt(searchParams.get('depth') || '2');
      const limit = parseInt(searchParams.get('limit') || '100');

      let cypher: string;
      let params: Record<string, unknown>;

      if (centerId) {
        cypher = `
          MATCH path = (center {id: $centerId})-[*1..${depth}]-(neighbor)
          WITH nodes(path) AS ns, relationships(path) AS rs
          UNWIND ns AS n
          UNWIND rs AS r
          RETURN DISTINCT
            collect(DISTINCT {id: n.id, name: n.name, labels: labels(n), weight: n.weight}) AS nodes,
            collect(DISTINCT {source: startNode(r).id, target: endNode(r).id, type: type(r)}) AS edges
          LIMIT 1`;
        params = { centerId };
      } else {
        cypher = `
          MATCH (n)
          WITH n ORDER BY n.weight DESC LIMIT $limit
          OPTIONAL MATCH (n)-[r]-(m)
          RETURN
            collect(DISTINCT {id: n.id, name: n.name, labels: labels(n), weight: n.weight}) AS nodes,
            collect(DISTINCT {source: startNode(r).id, target: endNode(r).id, type: type(r)}) AS edges`;
        params = { limit };
      }

      const results = await runQuery(cypher, params);
      return NextResponse.json(results[0] || { nodes: [], edges: [] });
    }

    default:
      return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { cypher, params } = body;

  if (!cypher) {
    return NextResponse.json({ error: 'cypher required' }, { status: 400 });
  }

  try {
    const result = await runQuery(cypher, params);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
