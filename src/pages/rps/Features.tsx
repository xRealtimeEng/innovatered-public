// src/pages/rps/Features.tsx — RPS planning capabilities (restored from former Features)
import { Link } from 'react-router-dom';
import planning from '../../assets/red-presales-planning.png';

export default function RpsFeatures() {
  return (
    <div className="page-shell">
      <div className="band-inner">
        <p className="identity-kicker">RPS · FEATURES</p>
        <h1>Planning capabilities inside RED delivery</h1>
        <p className="lede">
          What RPS brings to Design-to-Delivery work. RPS powers planning internally — it is
          not a licensed product SKU on this site.
        </p>
        <div className="proof-grid" style={{ margin: '1.5rem 0 2rem' }}>
          <img
            src={planning}
            alt="Pre-sales RTLS planning — survey and layout work powered by RPS"
            style={{ width: '100%', borderRadius: 4, border: '1px solid rgba(200,16,46,0.35)' }}
          />
        </div>
        <div className="grid md:grid-cols-3 gap-6" style={{ marginBottom: '2.5rem' }}>
          <div className="value-card">
            <h3>High-accuracy planning</h3>
            <p>LiDAR surveys, digital twins, and RPS-powered BOMs / SOWs / ROI models.</p>
          </div>
          <div className="value-card">
            <h3>Shared site truth</h3>
            <p>
              Layouts and costing from the same model so proposals and installs start aligned —
              a RED differentiator, not a public SKU.
            </p>
          </div>
          <div className="value-card">
            <h3>Demo-able proof</h3>
            <p>
              See the planning teaser in the Demo Portal. Exciting to show; not offered as a
              licensed product.
            </p>
          </div>
        </div>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/rps/how-it-works">
            How it works
          </Link>
          <Link className="btn btn-ghost" to="/rps">
            RPS overview
          </Link>
        </div>
      </div>
    </div>
  );
}
