import type { Commodity } from '@/data/types';
import { THEME, cardStyle } from './theme';

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 11, fontWeight: 800, color: THEME.accent, letterSpacing: '0.1em', marginBottom: 8 }}>
      {children}
    </div>
  );
}

function Chips({ items, color = THEME.white }: { items: string[]; color?: string }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
      {items.map((t) => (
        <span key={t} style={{ fontSize: 9, color, padding: '3px 7px', borderRadius: 5, border: `1px solid ${THEME.borderSoft}`, background: THEME.surface }}>{t}</span>
      ))}
    </div>
  );
}

export default function OriginView({ data }: { data: Commodity }) {
  const o = data.origin;
  return (
    <>
      <div style={cardStyle}>
        <SectionTitle>ORIGIN IDENTITY</SectionTitle>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          <span style={{ fontSize: 9, color: THEME.muted }}>Origin Type: <b style={{ color: THEME.white }}>Geological Resource</b></span>
          <span style={{ fontSize: 9, color: THEME.muted }}>Production Model: <b style={{ color: THEME.white }}>Onshore • Offshore • Deepwater</b></span>
          <span style={{ fontSize: 9, color: THEME.muted }}>African Production Base: <b style={{ color: THEME.white }}>{o.reserves.total}</b></span>
        </div>
      </div>

      <div style={cardStyle}>
        <SectionTitle>RESERVE BASE</SectionTitle>
        <div style={{ fontSize: 12, color: THEME.white }}>
          Proven: <span style={{ color: THEME.accent, fontFamily: 'ui-monospace, monospace' }}>{o.reserves.total}</span>
          <span style={{ color: THEME.dim }}> · Global share {o.reserves.globalShare} · Largest holder {o.reserves.largest} ({o.reserves.concentration})</span>
        </div>
        {o.topReserves.map((r) => (
          <div key={r.country} style={{ display: 'flex', alignItems: 'center', padding: '8px 0', borderBottom: `1px solid ${THEME.borderSoft}` }}>
            <span style={{ width: 16, color: THEME.muted, fontFamily: 'ui-monospace, monospace' }}>{r.rank}</span>
            <span style={{ fontSize: 12, marginRight: 6 }}>{r.flag}</span>
            <span style={{ flex: 1, fontSize: 12, color: THEME.white }}>{r.country}</span>
            <span style={{ fontSize: 11, color: THEME.muted, fontFamily: 'ui-monospace, monospace' }}>{r.production}</span>
          </div>
        ))}
      </div>

      <div style={cardStyle}>
        <SectionTitle>PRODUCTION SNAPSHOT</SectionTitle>
        <div style={{ fontSize: 12, color: THEME.white }}>
          Africa 2024: <b style={{ color: THEME.accent, fontFamily: 'ui-monospace, monospace' }}>{o.snapshot.production}</b>
          <span style={{ color: THEME.dim }}> ({o.snapshot.annual})</span>
        </div>
        <div style={{ fontSize: 10, color: THEME.muted, marginTop: 4 }}>
          Global: {o.snapshot.global} · Africa share: {o.snapshot.share}
        </div>
        <div style={{ fontSize: 10, color: THEME.muted, marginTop: 8 }}>PRODUCTION RANKING</div>
        {data.production.ranking.map((r) => (
          <div key={r.country} style={{ display: 'flex', alignItems: 'center', padding: '6px 0', borderBottom: `1px solid ${THEME.borderSoft}` }}>
            <span style={{ width: 16, color: THEME.muted, fontFamily: 'ui-monospace, monospace' }}>{r.rank}</span>
            <span style={{ fontSize: 12, marginRight: 6 }}>{r.flag}</span>
            <span style={{ flex: 1, fontSize: 11, color: THEME.white }}>{r.country}</span>
            <span style={{ fontSize: 10, color: THEME.muted, fontFamily: 'ui-monospace, monospace', marginRight: 8 }}>{r.production}</span>
            <span style={{ fontSize: 10, color: THEME.dim, fontFamily: 'ui-monospace, monospace' }}>{r.share}</span>
          </div>
        ))}
        <div style={{ fontSize: 10, color: THEME.muted, marginTop: 6 }}>
          Top 3 concentration <b style={{ color: THEME.white }}>~59%</b> · Top 6 <b style={{ color: THEME.white }}>~86%</b>
        </div>
      </div>

      <div style={cardStyle}>
        <SectionTitle>PRODUCTION GEOGRAPHY</SectionTitle>
        {o.basins.map((b) => (
          <div key={b.id} style={{ padding: '8px 0', borderBottom: `1px solid ${THEME.borderSoft}` }}>
            <div style={{ fontSize: 12, color: THEME.white, fontWeight: 600 }}>{b.name}</div>
            <div style={{ fontSize: 10, color: THEME.muted }}>{b.country} · {b.environment}</div>
            <div style={{ fontSize: 9, color: THEME.accent, fontFamily: 'ui-monospace, monospace' }}>[[{b.id}]]</div>
          </div>
        ))}
      </div>

      <div style={cardStyle}>
        <SectionTitle>PRODUCTION ENVIRONMENT</SectionTitle>
        <div style={{ fontSize: 10, color: THEME.muted, marginBottom: 4 }}>ONSHORE</div>
        <Chips items={o.environment.onshore} />
        <div style={{ fontSize: 10, color: THEME.muted, marginBottom: 4, marginTop: 6 }}>OFFSHORE</div>
        <Chips items={o.environment.offshore} />
        <div style={{ fontSize: 10, color: THEME.muted, marginBottom: 4, marginTop: 6 }}>DEEPWATER</div>
        <Chips items={o.environment.deepwater} />
      </div>

      <div style={cardStyle}>
        <SectionTitle>PRODUCTION-TO-MARKET FLOW</SectionTitle>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 4 }}>
          {o.flow.map((f, i) => (
            <span key={f}>
              <span style={{ fontSize: 9, color: THEME.white, padding: '4px 8px', borderRadius: 4, border: `1px solid ${THEME.border}` }}>{f}</span>
              {i < o.flow.length - 1 && <span style={{ color: THEME.dim, margin: '0 2px' }}>→</span>}
            </span>
          ))}
        </div>
      </div>

      <div style={cardStyle}>
        <SectionTitle>DRIVERS</SectionTitle>
        <Chips items={o.drivers} />
        <SectionTitle>CONSTRAINTS</SectionTitle>
        <Chips items={o.constraints} color={THEME.danger} />
        <SectionTitle>OPPORTUNITIES</SectionTitle>
        <Chips items={o.opportunities} />
      </div>
    </>
  );
}