// src/pages/rps/Roadmap.tsx — light RPS demo direction (not fake product pricing)
import { Link } from 'react-router-dom';

export default function RpsRoadmap() {
  return (
    <div className="page-shell">
      <div className="band-inner" style={{ maxWidth: '40rem' }}>
        <p className="identity-kicker">RPS · ROADMAP</p>
        <h1>Demo direction</h1>
        <p className="lede">
          Light direction of travel for the RPS planning teaser inside RED delivery — not a
          product pricing page, and not a licensed SKU roadmap.
        </p>
        <div className="space-y-4" style={{ marginBottom: '2.5rem' }}>
          <div className="value-card">
            <div className="meta">Near term</div>
            <h3 className="mt-2">Deeper Design-to-Delivery playbooks</h3>
            <p style={{ marginTop: '0.5rem' }}>
              Tighter coupling between survey inputs and install-ready packages.
            </p>
          </div>
          <div className="value-card">
            <div className="meta">Next</div>
            <h3 className="mt-2">RPS planning refinements (internal demo)</h3>
            <p style={{ marginTop: '0.5rem' }}>
              Demo Portal proof improvements — still an internal tool, not for sale.
            </p>
          </div>
          <div className="value-card">
            <div className="meta">Later</div>
            <h3 className="mt-2">Broader vendor-agnostic integration patterns</h3>
            <p style={{ marginTop: '0.5rem' }}>
              As site work demands them — framed for RED engagements, not as a public SKU.
            </p>
          </div>
        </div>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/demos">
            Demo Portal
          </Link>
          <Link className="btn btn-ghost" to="/about#direction">
            Company direction
          </Link>
        </div>
      </div>
    </div>
  );
}
