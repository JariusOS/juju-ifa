import neo4j, { Driver, Session } from 'neo4j-driver';

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

export async function runQuery<T = Record<string, unknown>>(
  cypher: string,
  params?: Record<string, unknown>
): Promise<T[]> {
  const session = getSession();
  try {
    const result = await session.run(cypher, params || {});
    return result.records.map((record) => {
      const obj: Record<string, unknown> = {};
      record.keys.forEach((key) => {
        obj[String(key)] = record.get(key);
      });
      return obj as T;
    });
  } finally {
    await session.close();
  }
}

export async function runWrite(
  cypher: string,
  params?: Record<string, unknown>
): Promise<{ records: unknown[]; summary: { counters: Record<string, unknown> } }> {
  const session = getSession();
  try {
    const result = await session.run(cypher, params || {});
    const summaryAny = result.summary as unknown as Record<string, unknown>;
    const countersRaw = summaryAny.counters as Record<string, unknown> || {};
    return {
      records: result.records.map((r) => r.toObject()),
      summary: { counters: countersRaw },
    };
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
