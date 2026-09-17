// src/pages/Team.tsx — Ben + Fernando profiles (moved from About)
import { Link } from 'react-router-dom';
import benPhoto from '../assets/people/ben-marum.jpg';
import fernandoPhoto from '../assets/people/fernando-garcia.png';

export default function Team() {
  return (
    <main id="main" className="about-page">
      <section className="band about-hero" aria-labelledby="team-heading">
        <div className="band-inner">
          <p className="identity-kicker">TEAM</p>
          <h1 id="team-heading">Who leads it</h1>
          <p className="lede about-lede">
            The people behind <span className="word-red">RED</span> Design-to-Delivery —
            accountable from first survey to live operations.
          </p>
        </div>
      </section>

      <div className="rule-wrap">
        <hr className="rule rule--gold" />
      </div>

      <section className="band about-people" id="people" aria-labelledby="people-heading">
        <div className="band-inner">
          <h2 id="people-heading" className="sr-only">
            Leadership
          </h2>
          <div className="people-grid">
            <article className="person-card person-card--primary">
              <img
                className="person-avatar"
                src={benPhoto}
                alt="Ben Marum, Director of Operations and Founder of RED"
                width={80}
                height={80}
              />
              <div className="person-body">
                <h3>Ben Marum</h3>
                <p className="person-title">Director of Operations · Founder / Managing Member</p>
                <p>
                  Hard working, team oriented, self-motivated applications engineer and systems
                  integrator delivering on-site tech-enabled services to industrial standards.
                  Seven years designing, costing, deploying, configuring, and integrating RFID and
                  RTLS on Fortune 100 and federal sites — from presales and design through delivery,
                  software configuration, and live-system support. Strengths across RTLS, software
                  development, automation integration, field survey and site work, and project
                  delivery.
                </p>
                <p className="person-contact">
                  <a href="tel:+19702143208">+1 (970) 214-3208</a>
                  <br />
                  <a href="mailto:ben.marum@innovatered.com?subject=RED%20inquiry%20%E2%80%94%20device%20count%20%26%20timeline">ben.marum@innovatered.com</a>
                </p>
              </div>
            </article>

            <article className="person-card">
              <img
                className="person-avatar"
                src={fernandoPhoto}
                alt="Fernando Garcia, consultant and commercial partner under MSA"
                width={80}
                height={80}
              />
              <div className="person-body">
                <h3>Fernando Garcia</h3>
                <p className="person-title">
                  Consultant · commercial partner under MSA
                  <span className="person-sub">
                    {' '}
                    (Garcia Consulting Group)
                  </span>
                </p>
                <p>
                  Commercial partner supporting RED’s go-to-market under MSA — not a RED
                  manager. Ben is sole manager. Full bio coming after Fernando’s review.
                </p>
                <p className="person-contact">
                  <a href="tel:+19152529777">+1 (915) 252-9777</a>
                  <br />
                  <a href="mailto:fernando.garcia@innovatered.com">
                    fernando.garcia@innovatered.com
                  </a>
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="rule-wrap">
        <hr className="rule" />
      </div>

      <section className="band about-resumes" aria-labelledby="resumes-heading">
        <div className="band-inner">
          <p className="identity-kicker">BEN MARUM — RESUMES</p>
          <h2 id="resumes-heading">Background for partners</h2>
          <p className="lede" style={{ maxWidth: '40rem' }}>
            Two focused profiles — applications / RTLS engineering and field survey AE. PDF for
            viewing and download; Word available if needed.
          </p>
          <div className="resume-grid">
            <article className="resume-card value-card">
              <h3>Applications Engineer · RTLS</h3>
              <p>
                RF/RTLS design, demo, delivery, integration, and live-system support across UWB,
                BLE, RFID, GPS, and related technologies.
              </p>
              <div className="resume-actions">
                <a
                  className="btn btn-primary"
                  href="/resumes/Ben_Marum_Applications_Engineer_RTLS.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  View PDF
                </a>
                <a
                  className="btn btn-ghost"
                  href="/resumes/Ben_Marum_Applications_Engineer_RTLS.pdf"
                  download
                >
                  Download PDF
                </a>
                <a
                  className="btn btn-ghost"
                  href="/resumes/Ben_Marum_Applications_Engineer_RTLS.docx"
                  download
                >
                  DOCX
                </a>
              </div>
            </article>
            <article className="resume-card value-card">
              <h3>Field Survey · Applications Engineer</h3>
              <p>
                Field survey and site digitization — total station, GNSS/RTK, LiDAR, AutoCAD
                as-builts, and coordinate systems for complex multi-building sites.
              </p>
              <div className="resume-actions">
                <a
                  className="btn btn-primary"
                  href="/resumes/Ben_Marum_Field_Survey_AE.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  View PDF
                </a>
                <a
                  className="btn btn-ghost"
                  href="/resumes/Ben_Marum_Field_Survey_AE.pdf"
                  download
                >
                  Download PDF
                </a>
                <a
                  className="btn btn-ghost"
                  href="/resumes/Ben_Marum_Field_Survey_AE.docx"
                  download
                >
                  DOCX
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="rule-wrap">
        <hr className="rule" />
      </div>

      <section className="band about-cta" aria-labelledby="team-cta-heading">
        <div className="band-inner">
          <h2 id="team-cta-heading">Company story</h2>
          <p className="lede">Who RED is, what we do, and where we’re headed.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/about">
              About RED
            </Link>
            <a className="btn btn-ghost" href="mailto:ben.marum@innovatered.com?subject=RED%20inquiry%20%E2%80%94%20device%20count%20%26%20timeline">
              Talk to RED
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
