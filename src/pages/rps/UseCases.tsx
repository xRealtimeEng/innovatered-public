// src/pages/rps/UseCases.tsx — where RPS helps in RED engagements (no named customers)
import { Link } from 'react-router-dom';

export default function RpsUseCases() {
  return (
    <div className="page-shell">
      <div className="band-inner">
        <p className="identity-kicker">RPS · USE CASES</p>
        <h1>Where RPS helps in RED engagements</h1>
        <p className="lede">
          Planning scenarios inside Design-to-Delivery RTLS work. Named customers are held off
          public pages.
        </p>
        <div className="grid md:grid-cols-3 gap-6" style={{ marginBottom: '2.5rem' }}>
          <div className="value-card">
            <h3>Complex industrial sites</h3>
            <p>
              Multi-building coverage planning with vendor-agnostic device choices — layouts and
              BOMs from one RPS model.
            </p>
          </div>
          <div className="value-card">
            <h3>Pre-sales acceleration</h3>
            <p>Fast, credible proposals with accurate planning and costing powered by RPS.</p>
          </div>
          <div className="value-card">
            <h3>Post-sales alignment</h3>
            <p>
              Same planning truth carries into install and optimization with one accountable RED
              team.
            </p>
          </div>
        </div>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/services">
            RED services
          </Link>
          <Link className="btn btn-ghost" to="/rps">
            RPS overview
          </Link>
        </div>
      </div>
    </div>
  );
}
