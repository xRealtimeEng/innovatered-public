import { Link } from 'react-router-dom';
// src/pages/About.tsx — organization-wide company story (people live on /team)

export default function About() {
  return (
    <main id="main" className="about-page">
      {/* Hero */}
      <section className="band about-hero" aria-labelledby="about-heading">
        <div className="band-inner">
          <p className="identity-kicker">ABOUT RED</p>
          <h1 id="about-heading">
            <span className="word-red">RED</span> is the turn-key RTLS partner for complex sites.
          </h1>
          <p className="lede about-lede">
            Realtime Engineering and Development plans, designs, installs, and supports
            location intelligence — from first survey to live operations — as one accountable team.
          </p>
          <p className="status-line about-tagline">
            Turning Complex Sites
            <span className="sep">·</span>
            Intelligent Operations
          </p>
        </div>
      </section>

      <div className="rule-wrap">
        <hr className="rule rule--gold" />
      </div>

      {/* Company */}
      <section className="band about-company" aria-labelledby="who-heading">
        <div className="band-inner">
          <h2 id="who-heading">Who we are</h2>
          <p>
            <span className="word-red">RED</span> — Realtime Engineering and Development LLC — is
            based in Windsor, Colorado (innovateRED.com). We deliver design-to-delivery location
            intelligence for industrial and government facilities: high-accuracy survey and digital
            twins, vendor-agnostic RTLS design, professional installation, integration, and ongoing
            support.
          </p>
          <p>We will run any portion of a project — or own the full turn-key path.</p>

          <div className="about-split">
            <div className="value-card">
              <h3>We are</h3>
              <ul>
                <li>A flexible turn-key RTLS execution partner</li>
                <li>A site-intelligence and digital-twin specialist</li>
                <li>A vendor-agnostic integrator (UWB, BLE, RFID, GPS, LiDAR and related)</li>
                <li>A single point of contact who manages the right partners</li>
              </ul>
            </div>
            <div className="value-card">
              <h3>We are not</h3>
              <ul>
                <li>A commodity hardware reseller</li>
                <li>A licensed software company (RPS is our internal planning engine)</li>
                <li>A staff-aug body shop with no ownership</li>
                <li>A generic IT consultancy</li>
              </ul>
            </div>
          </div>

          <p className="about-team-pointer" style={{ marginTop: '1.75rem' }}>
            <Link to="/team" className="btn btn-ghost">
              Meet the team →
            </Link>
          </p>
        </div>
      </section>

      <div className="rule-wrap">
        <hr className="rule" />
      </div>

      {/* Values */}
      <section className="band about-values" aria-labelledby="values-heading">
        <div className="band-inner">
          <p className="identity-kicker">Integrity · Innovation · Excellence</p>
          <h2 id="values-heading">How we work</h2>
          <div className="about-split about-split--3">
            <div className="value-card">
              <h3>Integrity</h3>
              <p>Honest scope, transparent assumptions, no inflated ranges or hidden optionals.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>
                Right-tech, not more-tech. Hybrid systems, digital twins, and RPS-powered planning
                when they reduce risk.
              </p>
            </div>
            <div className="value-card">
              <h3>Excellence</h3>
              <p>
                Survey-grade accuracy, clean handoff packages, and systems that still work after we
                leave the site.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="rule-wrap">
        <hr className="rule" />
      </div>

      {/* Direction */}
      <section className="band about-direction" id="direction" aria-labelledby="direction-heading">
        <div className="band-inner" style={{ maxWidth: '40rem' }}>
          <p className="identity-kicker">WHERE WE&apos;RE HEADED</p>
          <h2 id="direction-heading">Direction of travel</h2>
          <p>
            Deeper Design-to-Delivery playbooks, refinements to our internal RPS planning
            (Demo Portal proof — not a licensed SKU), and broader vendor-agnostic
            integration patterns as site work demands them.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <Link to="/rps/roadmap" style={{ color: 'var(--gold)' }}>
              See the RPS demo roadmap →
            </Link>
          </p>
        </div>
      </section>

      <div className="rule-wrap">
        <hr className="rule" />
      </div>

      {/* CTA */}
      <section className="band about-cta" aria-labelledby="cta-heading">
        <div className="band-inner">
          <h2 id="cta-heading">Talk to RED</h2>
          <p className="lede">One accountable team from start to finish.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:ben.marum@innovatered.com?subject=RED%20inquiry%20%E2%80%94%20device%20count%20%26%20timeline">
              Talk to RED
            </a>
            <Link className="btn btn-ghost" to="/team">
              Meet the team
            </Link>
            <Link className="btn btn-ghost" to="/demos">
              See the Demo Portal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
