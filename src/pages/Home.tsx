// src/pages/Home.tsx — offer-clarity hero + proof band + contact (apprentice content v0)
import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/RED_Logo_Canonical.png';
import proofVisual from '../assets/red-postsales-install.png';
import { apiContact } from '../lib/api';

const TALK_TO_RED =
  'mailto:ben.marum@innovatered.com?subject=RED%20inquiry%20%E2%80%94%20device%20count%20%26%20timeline';

const PROOF_CARDS = [
  {
    letter: 'A',
    title: 'Survey density from real floorplates',
    body: 'Coverage thinking grounded in actual site geometry — not generic grids.',
  },
  {
    letter: 'B',
    title: 'Config + training packages per device',
    body: 'Software config and operator training sized to device count so large sites stay usable.',
  },
  {
    letter: 'C',
    title: 'CAD / SVG deployment packs',
    body: 'Install packs and floor graphics crews can actually use on the day.',
  },
  {
    letter: 'D',
    title: 'Live RPS planning demo',
    body: 'Open the planning tool — layouts, coverage, and BOM-style outputs labeled as demo.',
  },
] as const;

export default function Home() {
  return (
    <main id="main">
      {/* Band 1: Hero — logo LEFT + headline RIGHT */}
      <section className="band hero" aria-labelledby="hero-heading">
        <div className="band-inner">
          <div className="hero-logo-wrap">
            <img
              className="hero-logo"
              src={logo}
              alt="RED — Realtime Engineering and Development canonical logo"
              width={220}
              height={216}
            />
          </div>
          <div className="hero-copy">
            <h1 id="hero-heading">
              <span className="word-red">RED</span> designs, deploys, and tunes vendor-agnostic
              RTLS — priced by device, delivered as turnkey service.
            </h1>
            <p className="hero-lead">
              Tech-enabled Design-to-Delivery. Not a hardware SKU. Not a licensed product.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={TALK_TO_RED}>
                Talk to RED
              </a>
              <Link
                className="btn btn-ghost"
                to="/demos"
                title="Capability demos — how RED ships in public"
              >
                Demo Portal
              </Link>
            </div>
            <p className="hero-rps-hint">
              See how RED ships demos in public — plan, stage, review, promote. Tell us site size,
              device count range, and timeline — we&apos;ll reply with next steps.
            </p>
          </div>
        </div>
      </section>

      <div className="rule-wrap">
        <hr className="rule rule--gold" />
      </div>

      {/* Band 2: Identity strip */}
      <section className="band identity" aria-label="Brand identity">
        <div className="band-inner">
          <p className="identity-kicker">
            DESIGN-TO-DELIVERY<span className="colon">:</span> LOCATION INTELLIGENCE SOLUTIONS
          </p>
          <p className="identity-line">
            <span className="word-red">RED</span>
            <span className="sep">|</span>
            Realtime Engineering and Development
            <span className="sep">|</span>
            innovate<span className="word-red">RED</span>.com
          </p>
          <p className="status-line">
            RTLS Execution Partner
            <span className="dot">·</span>
            Priced by device count
            <span className="dot">·</span>
            End-to-End Design-to-Delivery
            <span className="dot">·</span>
            Powered by RPS (planning demo)
          </p>
        </div>
      </section>

      <div className="rule-wrap">
        <hr className="rule" />
      </div>

      {/* Band 3: Proof — How we prove readiness */}
      <section className="band proof" id="capabilities" aria-labelledby="proof-heading">
        <div className="band-inner">
          <h2 className="proof-title" id="proof-heading">
            How we prove readiness
          </h2>
          <p className="proof-narrative" style={{ maxWidth: '42rem', marginBottom: '1.5rem' }}>
            Capability samples from how we work — survey, config, deploy packs, and live planning
            demo. No named customers.
          </p>

          <div className="proof-cards">
            {PROOF_CARDS.map((card) => (
              <article key={card.letter} className="value-card glass glass-card proof-card">
                <p className="meta">
                  {card.letter}
                </p>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>

          <p className="proof-footer-note">
            Capability samples — not client endorsements.
          </p>

          <figure className="proof-visual glass glass-card" style={{ marginTop: '1.75rem' }}>
            <img
              src={proofVisual}
              alt="Field installation and post-sales RTLS execution — RED Design-to-Delivery"
              width={697}
              height={792}
            />
          </figure>
        </div>
      </section>

      <div className="rule-wrap">
        <hr className="rule" />
      </div>

      {/* Band 4: Single point of contact */}
      <section className="band contact" id="contact" aria-labelledby="contact-heading">
        <div className="band-inner">
          <div className="contact-panel glass glass-card">
            <h2 className="contact-title" id="contact-heading">
              Talk to RED<span className="colon">:</span>
            </h2>
            <p className="contact-blurb">
              Tell us site size, device count range, and timeline — we&apos;ll reply with next
              steps. RED brings in and manages the right partners — you interface with one
              accountable team from start to finish.
            </p>
            <ContactApiForm />
            <div className="hero-actions" style={{ marginBottom: '1.25rem' }}>
              <a className="btn btn-primary" href={TALK_TO_RED}>
                Talk to RED (email)
              </a>
              <a className="btn btn-ghost" href="/services">
                See services
              </a>
            </div>
            <div className="contact-lockup">
              <p className="contact-row contact-row--elevated">
                <span className="name">Ben Marum</span>
                <span className="pipe">|</span>
                Director of Operations · Founder / Managing Member
                <span className="pipe">|</span>
                <a href="tel:+19702143208">+1 (970) 214-3208</a>
                <span className="pipe">|</span>
                <a href="mailto:ben.marum@innovatered.com">ben.marum@innovatered.com</a>
              </p>
              <p className="contact-row contact-row--elevated">
                <span className="name">Fernando Garcia</span>
                <span className="pipe">|</span>
                Consultant · commercial partner under MSA
                <span className="pipe">|</span>
                <a href="tel:+19152529777">+1 (915) 252-9777</a>
                <span className="pipe">|</span>
                <a href="mailto:fernando.garcia@innovatered.com">
                  fernando.garcia@innovatered.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="rule-wrap">
        <hr className="rule" />
      </div>

      {/* Band 5: Close */}
      <section className="band close" aria-label="Brand close">
        <div className="band-inner">
          <p className="close-tagline">
            <span className="word-red">RED</span>
            <span className="dot">·</span>
            <span className="tag">Turning Complex Sites into Intelligent Operations</span>
          </p>
          <div className="rule-wrap" style={{ padding: 0, maxWidth: '28rem', margin: '0 auto' }}>
            <hr className="rule" />
          </div>
          <p className="values">
            Integrity<span className="sep">·</span>Innovation<span className="sep">·</span>Excellence
          </p>
        </div>
      </section>
    </main>
  );
}


function ContactApiForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    try {
      await apiContact({
        name: name.trim(),
        email: email.trim(),
        company: company.trim() || undefined,
        note: note.trim(),
      });
      setMsg('Message sent — we will follow up soon.');
      setNote('');
    } catch (err) {
      setMsg(
        err instanceof Error
          ? `${err.message} (API may be offline — use Talk to RED email instead.)`
          : 'Send failed',
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={(e) => void onSubmit(e)}>
      <label className="contact-form-label">
        Name
        <input
          className="contact-form-input"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
      </label>
      <label className="contact-form-label">
        Email
        <input
          className="contact-form-input"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
      </label>
      <label className="contact-form-label">
        Company
        <input
          className="contact-form-input"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          autoComplete="organization"
          placeholder="Optional"
        />
      </label>
      <label className="contact-form-label">
        Note
        <textarea
          className="contact-form-textarea"
          required
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Site size, device count range, timeline…"
        />
      </label>
      <button type="submit" className="btn btn-primary" disabled={busy}>
        {busy ? 'Sending…' : 'Send message'}
      </button>
      {msg && (
        <p className="contact-form-msg" role="status">
          {msg}
        </p>
      )}
    </form>
  );
}
