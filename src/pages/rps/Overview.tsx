// src/pages/rps/Overview.tsx — RPS hub: internal planning engine / demo teaser (not a SKU)
import { Link } from 'react-router-dom';
import planning from '../../assets/red-presales-planning.png';

export default function RpsOverview() {
  return (
    <div className="page-shell">
      <div className="band-inner">
        <p className="identity-kicker">RPS</p>
        <h1>
          RED Planning System — our internal engine
        </h1>
        <p className="lede">
          RPS is how <span className="word-red">RED</span> plans complex RTLS work: layouts,
          BOMs, SOWs, and ROI from the same site truth. It differentiates our Design-to-Delivery
          execution — and shows up in the Demo Portal as a proof, not a licensed product SKU.
        </p>

        <p
          className="rps-disclaimer"
          style={{
            margin: '0 0 1.75rem',
            padding: '0.85rem 1rem',
            borderLeft: '3px solid var(--gold)',
            background: 'rgba(26, 31, 36, 0.65)',
            color: 'var(--kicker)',
            maxWidth: '42rem',
          }}
        >
          Internal tool / demo teaser. Not for sale. Not a public software license.
        </p>

        <div className="proof-grid" style={{ margin: '0 0 2.5rem' }}>
          <img
            src={planning}
            alt="RPS-powered pre-sales RTLS planning — survey and layout work"
            style={{ width: '100%', borderRadius: 4, border: '1px solid rgba(200,16,46,0.35)' }}
          />
        </div>

        <h2 style={{ color: 'var(--heading)', margin: '0 0 1rem', fontSize: '1.25rem' }}>
          Explore RPS
        </h2>
        <div className="grid md:grid-cols-2 gap-6" style={{ marginBottom: '2.5rem' }}>
          <Link to="/rps/features" className="value-card rps-hub-card">
            <h3>Features</h3>
            <p>Planning capabilities inside RED delivery — survey, layout, BOM, SOW, ROI.</p>
          </Link>
          <Link to="/rps/how-it-works" className="value-card rps-hub-card">
            <h3>How it works</h3>
            <p>The RPS-centric planning workflow from discover through install-ready package.</p>
          </Link>
          <Link to="/rps/use-cases" className="value-card rps-hub-card">
            <h3>Use cases</h3>
            <p>Where RPS helps in RED engagements — no named customers on public pages.</p>
          </Link>
          <Link to="/rps/roadmap" className="value-card rps-hub-card">
            <h3>Roadmap</h3>
            <p>Light demo direction for the planning teaser — not product pricing.</p>
          </Link>
        </div>

        <div className="hero-actions">
          <Link className="btn btn-primary" to="/demos">
            Open Demo Portal
          </Link>
          <Link className="btn btn-ghost" to="/services">
            RED services
          </Link>
          <a
            className="btn btn-ghost"
            href="mailto:ben.marum@innovatered.com?subject=RED%20inquiry%20%E2%80%94%20device%20count%20%26%20timeline"
          >
            Talk to RED
          </a>
        </div>
      </div>
    </div>
  );
}
