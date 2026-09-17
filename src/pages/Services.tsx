// src/pages/Services.tsx — Packages 1–2 + services A–G (device-count driven; no public $)
import { Link } from 'react-router-dom';
import planning from '../assets/red-presales-planning.png';

const TALK_TO_RED =
  'mailto:ben.marum@innovatered.com?subject=RED%20inquiry%20%E2%80%94%20device%20count%20%26%20timeline';

const SERVICES_A_D = [
  {
    id: 'A',
    title: 'RTLS Site Survey & Device Validation',
    body: 'Per-device survey labor; density driven by area, complexity, and Wi‑Fi quality.',
    value: 'Know where coverage fails before you buy wrong hardware.',
  },
  {
    id: 'B',
    title: 'Software Configuration & Integration',
    body: 'Per-device software config engineering.',
    value: 'Devices online, named, and usable by ops — not just powered.',
  },
  {
    id: 'C',
    title: 'Project Documentation & Coordination',
    body: 'PM, calls, emails, reports — packaged per device so large sites don’t orphan docs.',
    value: 'One accountable trail from survey to handoff.',
  },
  {
    id: 'D',
    title: 'On-site Training',
    body: 'Per-device training allotment rolled into trips.',
    value: 'Operators can run the system after we leave.',
  },
] as const;

const SERVICES_E_F = [
  {
    id: 'E',
    title: 'CAD Updates for Deployment',
    body: 'Per-device CAD update labor.',
    value: 'Install packs match the as-built plan.',
  },
  {
    id: 'F',
    title: 'SVG / Deployable Graphic Generation',
    body: 'Per-device SVG generation.',
    value: 'Floor graphics crews can actually use.',
  },
] as const;

export default function Services() {
  return (
    <div className="page-shell">
      <div className="band-inner">
        <p className="identity-kicker">SERVICES</p>
        <h1>
          <span className="word-red">RED</span> Design-to-Delivery
        </h1>
        <p className="lede">
          Survey → plan → install → optimize. Tech-enabled, vendor-agnostic RTLS and radar
          execution — <strong>priced by device count</strong> (and device / work type). One
          accountable team from first conversation to live operations. Planning powered by RPS
          internally (demo — not a licensed SKU).
        </p>

        <div className="proof-grid" style={{ margin: '1.5rem 0 2.5rem' }}>
          <img
            src={planning}
            alt="Pre-sales RTLS planning — survey and layout work"
            style={{ width: '100%', borderRadius: 4, border: '1px solid rgba(200,16,46,0.35)' }}
          />
        </div>

        <div className="value-card glass glass-card" style={{ marginBottom: '2.5rem' }}>
          <h3>Priced by device count</h3>
          <p>
            Every package scales with site size and device count. Share your range and timeline
            — we quote from the same device-driven model we use internally. No published rate
            card on this page.
          </p>
          <div className="hero-actions" style={{ marginTop: '1rem' }}>
            <a className="btn btn-primary" href={TALK_TO_RED}>
              Quote by device count
            </a>
            <a className="btn btn-ghost" href={TALK_TO_RED}>
              Talk to RED
            </a>
          </div>
        </div>

        {/* Package 1 */}
        <h2 style={{ color: 'var(--heading)', margin: '0 0 0.5rem', fontSize: '1.25rem' }}>
          Package 1 — Survey + Config
        </h2>
        <p className="lede" style={{ marginBottom: '1rem', fontSize: '1rem' }}>
          Bundled services A–D. Priced by device count — request a quote for your site.
        </p>
        <div className="grid md:grid-cols-2 gap-6" style={{ marginBottom: '2.75rem' }}>
          {SERVICES_A_D.map((svc) => (
            <div key={svc.id} className="value-card glass glass-card">
              <p className="meta">Service {svc.id}</p>
              <h3>{svc.title}</h3>
              <p>{svc.body}</p>
              <p style={{ marginTop: '0.65rem' }}>
                <strong style={{ color: 'var(--heading)' }}>Value:</strong> {svc.value}
              </p>
            </div>
          ))}
        </div>

        {/* Package 2 */}
        <h2 style={{ color: 'var(--heading)', margin: '0 0 0.5rem', fontSize: '1.25rem' }}>
          Package 2 — CAD + SVG
        </h2>
        <p className="lede" style={{ marginBottom: '1rem', fontSize: '1rem' }}>
          Services E+F. Priced by device count — quote on request.
        </p>
        <div className="grid md:grid-cols-2 gap-6" style={{ marginBottom: '2.75rem' }}>
          {SERVICES_E_F.map((svc) => (
            <div key={svc.id} className="value-card glass glass-card">
              <p className="meta">Service {svc.id}</p>
              <h3>{svc.title}</h3>
              <p>{svc.body}</p>
              <p style={{ marginTop: '0.65rem' }}>
                <strong style={{ color: 'var(--heading)' }}>Value:</strong> {svc.value}
              </p>
            </div>
          ))}
        </div>

        {/* Service G */}
        <h2 style={{ color: 'var(--heading)', margin: '0 0 1rem', fontSize: '1.25rem' }}>
          Service G — Design-to-Delivery Program
        </h2>
        <div className="value-card glass glass-card" style={{ marginBottom: '2.5rem' }}>
          <p className="meta">Full program</p>
          <h3>Packages 1 + 2, sized to your trips</h3>
          <p>
            Wrap Survey + Config and CAD + SVG with travel and equipment budgets sized to trip
            planning (device-count heuristics). One team from first survey through live ops.
          </p>
          <p style={{ marginTop: '0.65rem' }}>
            <strong style={{ color: 'var(--heading)' }}>Value:</strong> One accountable path —
            priced by device count, quoted for your site.
          </p>
        </div>

        <div className="hero-actions">
          <a className="btn btn-primary" href={TALK_TO_RED}>
            Quote by device count
          </a>
          <Link className="btn btn-ghost" to="/how-we-deliver">
            How we deliver
          </Link>
          <a className="btn btn-ghost" href="/#contact">
            Contact details
          </a>
        </div>
      </div>
    </div>
  );
}
