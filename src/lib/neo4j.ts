import neo4j, { Driver, Session, Integer } from 'neo4j-driver';

const NEO4J_URI = process.env.NEO4J_URI || 'bolt://localhost:7687';
const NEO4J_USER = process.env.NEO4J_USER || 'neo4j';
const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD || 'jujuifa2026';

let driver: Driver | null = null;

export function getDriver(): Driver {
  if (!driver) {
    driver = neo4j.driver(
      NEO4J_URI,
      neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD),
      { disableLosslessIntegers: true }
    );
  }
  return driver;
}

export function getSession(): Session {
  return getDriver().session();
}

function sanitize(val: unknown): unknown {
  if (val === null || val === undefined) return val;
  if (val instanceof Integer) return val.toNumber();
  if (Array.isArray(val)) return val.map(sanitize);
  if (typeof val === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(val as Record<string, unknown>)) {
      out[k] = sanitize(v);
    }
    return out;
  }
  return val;
}

export async function runQuery<T = Record<string, unknown>>(
  cypher: string,
  params?: Record<string, unknown>
): Promise<T[]> {
  const session = getSession();
  try {
    const intParams: Record<string, unknown> = {};
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        if (typeof v === 'number' && Number.isInteger(v)) {
          intParams[k] = neo4j.int(v);
        } else {
          intParams[k] = v;
        }
      }
    }
    const result = await session.run(cypher, intParams);
    return result.records.map((record) => {
      const obj: Record<string, unknown> = {};
      record.keys.forEach((key) => {
        obj[String(key)] = sanitize(record.toObject()[String(key)]);
      });
      return obj as T;
    });
  } finally {
    await session.close();
  }
}

export async function verifyConnectivity(): Promise<boolean> {
  try {
    await getDriver().verifyConnectivity();
    return true;
  } catch {
    return false;
  }
}
