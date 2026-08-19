import type { Commodity } from '@/data/types';
import MiniDonut from './MiniDonut';
import BarGroup from './BarGroup';
import { THEME, cardStyle, statStyle } from './theme';

function Label({ children, color = THEME.muted }: { children: React.ReactNode; color?: string }) {
  return <div style={{ fontSize: 10, color, fontWeight: 600 }}>{children}</div>;
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 700,
        color: THEME.accent,
        padding: '3px 8px',
        borderRadius: 6,
        border: `1px solid ${THEME.border}`,
        marginRight: 6,
      }}
    >
      {children}
    </span>
  );
}

function parsePct(v: string | undefined): number {
  if (!v) return 0;
  const m = v.match(/([\d.]+)/);
  return m ? Math.min(100, Math.max(0, parseFloat(m[1]))) : 0;
}

function SectionHeader({ children, right }: { children: React.ReactNode; right?: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
      <span style={{ fontSize: 10, fontWeight: 800, color: THEME.white, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
        {children}
      </span>
      {right}
    </div>
  );
}

export default function HomeView({ data }: { data: Commodity }) {
  return (
    <>
{/* 1. BREADCRUMB */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={{ fontSize: 11, color: THEME.muted }}>jujuISR → Ifa → comNODE - {data.name}</span>
        <span style={{ fontSize: 14, color: THEME.muted }}>⋮</span>
      </div>

      {data.flags && data.flags.length > 0 && (
        <div style={{
          display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10,
        }}>
          {data.flags.slice(0, 1).map((f) => (
            <span key={f} style={{
              fontSize: 9, fontWeight: 700, color: '#EF4444', padding: '3px 8px', borderRadius: 6,
              border: '1px solid rgba(239,68,68,0.35)', background: 'rgba(239,68,68,0.1)', letterSpacing: '0.04em',
            }}>
              ⚑ FLAGGED — REPLACEMENT CANDIDATE
            </span>
          ))}
        </div>
      )}

      {/* 2. MASTER HEADER CARD */}
      <div style={cardStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              border: `2px solid ${THEME.accent}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: THEME.surface,
            }}
          >
            <div style={{ width: 22, height: 22, borderRadius: 11, background: THEME.accent, opacity: 0.85 }} />
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: THEME.white, letterSpacing: '-0.02em' }}>
              {data.name.toUpperCase()} - <span style={{ color: THEME.accent }}>{data.africaExportValue}</span>
            </div>
            <div style={{ fontSize: 11, color: THEME.muted, fontFamily: 'ui-monospace, monospace', marginTop: 2 }}>
              [{data.id}] • [{data.hsCode}]
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 10 }}>
          {data.nodeTags.slice(0, 4).map((tag) => <Chip key={tag}>{tag}</Chip>)}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: `1px solid ${THEME.borderSoft}`,
            paddingTop: 12,
            marginBottom: 10,
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={statStyle}>{data.globalValue}</div>
            <Label>Global Value</Label>
          </div>
          <div style={{ flex: 1 }}>
            <div style={statStyle}>{data.africaShare}</div>
            <Label>Africa Share</Label>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ ...statStyle, color: THEME.accent }}>{data.referencePrice}</div>
            <Label>Ref Price</Label>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, color: THEME.muted }}>👥 {data.followers} Followers</span>
          <span style={{ fontSize: 11, color: THEME.muted }}>🔖 {data.bookmarks} Bookmarks</span>
        </div>
      </div>

      {/* 3. THREE-COLUMN MICRO-GRID */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <div style={{ ...cardStyle, padding: 12, flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: THEME.white }}>Continent Reserves</div>
          <div style={statStyle}>{data.summaryGrid.reserves.value}</div>
          <div style={{ fontSize: 9, color: THEME.success, fontWeight: 600 }}>{data.summaryGrid.reserves.yoy}</div>
          {data.summaryGrid.reserves.holders.map((h) => (
            <div key={h.name} style={{ fontSize: 9, color: THEME.muted, marginTop: 2, lineHeight: 1.4 }}>
              {h.flag} {h.name}: <span style={{ color: THEME.dim }}>{h.value}</span>
            </div>
          ))}
        </div>

        <div style={{ ...cardStyle, padding: 12, flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: THEME.white }}>Global Exports</div>
          <div style={{ fontSize: 9, color: THEME.muted }}>2020 2021 2022 2023</div>
          <div style={statText}>{data.summaryGrid.exports.value}</div>
          <div style={{ fontSize: 11, color: THEME.accent, fontWeight: 700, marginTop: 4 }}>
            {data.summaryGrid.exports.detail}
          </div>
        </div>

        <div style={{ ...cardStyle, padding: 12, flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: THEME.white }}>Node Health</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <Label>Status:</Label>
            <span style={{ fontSize: 10, fontWeight: 800, color: THEME.white }}>{data.summaryGrid.health.status}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <Label>Weight:</Label>
            <span style={{ fontSize: 10, color: THEME.white, fontWeight: 600 }}>{data.summaryGrid.health.weight}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <Label>Conf:</Label>
            <span style={{ fontSize: 10, color: THEME.white, fontWeight: 600 }}>{data.summaryGrid.health.confidence}</span>
          </div>
        </div>
      </div>

      {/* 5. REFERENCE PRICE TAG */}
      <div style={{ ...cardStyle, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        <div style={{ fontSize: 11, color: THEME.white, letterSpacing: '0.18em', fontWeight: 700 }}>
          REF PRICE: <span style={{ fontSize: 16, fontWeight: 900, color: THEME.accent }}>{data.referencePrice}</span>
        </div>
      </div>

      {/* FINGERPRINT + STATUS PANEL */}
      <div style={cardStyle}>
        <SectionHeader>Node Fingerprint</SectionHeader>
        <p style={{ fontSize: 12, color: THEME.muted, lineHeight: 1.6, marginBottom: 10 }}>{data.fingerprint}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
          <div style={{ textAlign: 'center' }}>
            <Label>Status</Label>
            <div style={{ fontSize: 12, fontWeight: 800, color: THEME.white, marginTop: 2 }}>{data.status}</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Label>Confidence</Label>
            <div style={{ fontSize: 12, fontWeight: 800, color: THEME.accent, marginTop: 2 }}>{data.confidence}%</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Label>Weight</Label>
            <div style={{ fontSize: 12, fontWeight: 800, color: THEME.white, marginTop: 2 }}>
              {data.weight}/10 <span style={{ color: THEME.dim }}>{data.weightLabel}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 6. PRODUCTION HIGHLIGHT - TWIN RINGS */}
      <div style={cardStyle}>
        <SectionHeader>Production Highlight</SectionHeader>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
            <div style={{ fontSize: 9, color: THEME.muted, marginBottom: 4 }}>Top 3 Countries</div>
            <MiniDonut value={parsePct(data.production.top3.share)} color={THEME.accent} label={data.production.top3.share || '—'} />
            <div style={{ fontSize: 9, color: THEME.muted, marginTop: 4, textAlign: 'center', lineHeight: 1.4 }}>
              {data.production.top3.countries.join('\n')}
            </div>
            <div style={{ fontSize: 8, color: THEME.dim }}>{data.production.top3.combined}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
            <div style={{ fontSize: 9, color: THEME.muted, marginBottom: 4 }}>Top 6 Countries</div>
            <MiniDonut value={parsePct(data.production.top6.share)} color={THEME.white} label={data.production.top6.share || '—'} labelColor="#111111" />
            <div style={{ fontSize: 9, color: THEME.muted, marginTop: 4, textAlign: 'center', lineHeight: 1.4 }}>
              {data.production.top6.countries.join('\n')}
            </div>
            <div style={{ fontSize: 8, color: THEME.dim }}>{data.production.top6.combined}</div>
          </div>
        </div>
      </div>

      {/* 7. TRADE HIGHLIGHTS - TWIN HISTOGRAMS */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <BarGroup
          title="TOP 5 EXPORTERS"
          color={THEME.accent}
          data={data.exporters.map((e) => ({ label: e.flag || e.country.slice(0, 2).toUpperCase(), value: e.value, valueNum: e.valueNum }))}
        />
        <BarGroup
          title="TOP 5 IMPORTERS"
          color={THEME.white}
          data={data.importers.map((e) => ({ label: e.flag || e.country.slice(0, 2).toUpperCase(), value: e.value, valueNum: e.valueNum }))}
        />
      </div>

      {/* 8. CONNECTED ENTITIES */}
      <div style={cardStyle}>
        <SectionHeader
          right={<span style={{ fontSize: 10, color: THEME.dim }}>{data.connectedEntities.length} tracked</span>}
        >
          Connected Entities
        </SectionHeader>
        {data.connectedEntities.map((e) => (
          <div
            key={e.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 0',
              borderBottom: `1px solid ${THEME.borderSoft}`,
            }}
          >
            <span style={{ fontSize: 12, marginRight: 8 }}>{e.flag || '•'}</span>
            <div style={{ flex: 1, fontSize: 12, color: THEME.white, fontWeight: 600 }}>{e.name}</div>
            <span style={{ fontSize: 9, color: THEME.dim, marginRight: 8 }}>{e.kind}</span>
            <span style={{ fontSize: 10, color: THEME.muted, fontFamily: 'ui-monospace, monospace' }}>{e.count}</span>
          </div>
        ))}
        <div style={{ fontSize: 11, color: THEME.accent, fontWeight: 700, marginTop: 10 }}>View Full Graph →</div>
      </div>

      {/* 9. NEWS & EVENTS */}
      <div style={cardStyle}>
        <SectionHeader>News & Events</SectionHeader>
        {data.news.map((n, i) => (
          <div key={i} style={{ padding: '10px 0', borderBottom: i < data.news.length - 1 ? `1px solid ${THEME.borderSoft}` : 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 3,
                  background: n.impact === 'high' ? THEME.danger : n.impact === 'medium' ? THEME.accent : THEME.info,
                }}
              />
              <span style={{ fontSize: 12, color: THEME.white, fontWeight: 700, flex: 1 }}>{n.title}</span>
            </div>
            <div style={{ fontSize: 10, color: THEME.muted, lineHeight: 1.5, marginTop: 2 }}>{n.summary}</div>
            <div style={{ fontSize: 9, color: THEME.dim, marginTop: 2 }}>{n.date}</div>
          </div>
        ))}
      </div>
    </>
  );
}

const statText = statStyle;