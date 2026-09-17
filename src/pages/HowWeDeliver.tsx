// src/pages/HowWeDeliver.tsx — delivery steps (RPS = internal planning, not a SKU)
import { Link } from 'react-router-dom';
import planning from '../assets/red-presales-planning.png';

export default function HowWeDeliver() {
  return (
    <div className="page-shell">
      <div className="band-inner" style={{ maxWidth: '48rem' }}>
        <p className="identity-kicker">HOW WE DELIVER</p>
        <h1>From survey to live operations</h1>
        <p className="lede">
          A clear Design-to-Delivery path. RPS powers planning internally — layouts, BOMs,
          SOWs, and ROI — and shows up in the Demo Portal as proof, not as a licensed product.
        </p>

        <div style={{ margin: '1.5rem 0 2rem' }}>
          <img
            src={planning}
            alt="Pre-sales planning workflow — RED Design-to-Delivery"
            style={{ width: '100%', borderRadius: 4, border: '1px solid rgba(200,16,46,0.35)' }}
          />
        </div>

        <div className="space-y-6">
          <div className="value-card">
            <h3>1 · Discover &amp; survey</h3>
            <p>
              Scope the site and goals. High-accuracy LiDAR and digital twin modeling when
              the job needs them.
            </p>
          </div>
          <div className="value-card">
            <h3>2 · Plan</h3>
            <p>
              Internal planning powered by RPS — layouts, BOMs, SOWs, and ROI models so
              proposals and installs start from the same truth. Demo Portal teaser, not a
              public SKU.
            </p>
          </div>
          <div className="value-card">
            <h3>3 · Install &amp; commission</h3>
            <p>
              Professional install, commission, integrate, and hand off — or any slice you
              need from one accountable RED team.
            </p>
          </div>
          <div className="value-card">
            <h3>4 · Optimize &amp; support</h3>
            <p>
              Training, tuning, and ongoing support so coverage stays accurate after
              go-live.
            </p>
          </div>
        </div>

        <div className="hero-actions" style={{ marginTop: '2.5rem' }}>
          <Link className="btn btn-primary" to="/services">
            See services
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
