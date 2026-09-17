// src/pages/rps/HowItWorks.tsx — RPS-centric planning workflow
import { Link } from 'react-router-dom';
import planning from '../../assets/red-presales-planning.png';

export default function RpsHowItWorks() {
  return (
    <div className="page-shell">
      <div className="band-inner" style={{ maxWidth: '48rem' }}>
        <p className="identity-kicker">RPS · HOW IT WORKS</p>
        <h1>From site truth to install-ready package</h1>
        <p className="lede">
          RPS-centric planning steps inside RED engagements. For the full Design-to-Delivery
          path (survey → install → optimize), see{' '}
          <Link to="/how-we-deliver" style={{ color: 'var(--gold)' }}>
            How we deliver
          </Link>
          .
        </p>
        <div style={{ margin: '1.5rem 0 2rem' }}>
          <img
            src={planning}
            alt="RPS planning workflow — RED Design-to-Delivery"
            style={{ width: '100%', borderRadius: 4, border: '1px solid rgba(200,16,46,0.35)' }}
          />
        </div>
        <div className="space-y-6" style={{ marginBottom: '2.5rem' }}>
          <div className="value-card">
            <h3>1 · Discover &amp; survey</h3>
            <p>Scope the site. High-accuracy LiDAR and digital twin modeling when needed.</p>
          </div>
          <div className="value-card">
            <h3>2 · Plan with RPS</h3>
            <p>
              Internal planning engine for layouts, BOMs, SOWs, and ROI — a RED demo teaser,
              not a public licensed SKU.
            </p>
          </div>
          <div className="value-card">
            <h3>3 · Hand off to execution</h3>
            <p>
              Install-ready packages feed professional install, commission, and integration —
              or any portion you need from one RED team.
            </p>
          </div>
        </div>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/demos">
            Demo Portal
          </Link>
          <Link className="btn btn-ghost" to="/rps">
            RPS overview
          </Link>
        </div>
      </div>
    </div>
  );
}
