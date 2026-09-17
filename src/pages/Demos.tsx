// src/pages/Demos.tsx — Demo Portal: Building innovateRED.com · RPS · Quote model
import { Link } from 'react-router-dom';

type DemoStatus = 'live' | 'illustrative';

type DemoCta = {
  label: string;
  to?: string;
  href?: string;
  hash?: string;
  external?: boolean;
  primary?: boolean;
};

type DemoEntry = {
  id: string;
  title: string;
  status: DemoStatus;
  meta: string;
  summary: string;
  steps?: string[];
  ctas?: DemoCta[];
};

const PROCESS_STEPS = [
  'Plan — scope the slice and what “done” means on the live site',
  'Build on staging — working preview, not polish theater',
  'Review — sign-off on copy, chrome, and a green build',
  'Promote — merge and publish; the live site is the proof',
] as const;

const DEMOS: DemoEntry[] = [
  {
    id: 'redweb',
    title: 'Building innovateRED.com',
    status: 'live',
    meta: 'Lead · process → live',
    summary:
      'How RED ships this site: plan → staging build → review → promote to live. The proof is the live site and this Demo Portal — not a polished case study. Capability sample of our demo-creating process.',
    steps: [...PROCESS_STEPS],
    ctas: [
      {
        label: 'Watch process',
        hash: '#redweb-process',
        primary: true,
      },
      {
        label: 'Open live site',
        to: '/',
      },
    ],
  },
  {
    id: 'rps',
    title: 'RPS planning demo',
    status: 'live',
    meta: 'Live · planning tool',
    summary:
      'Internal RTLS planning demo — density, coverage thinking, BOM/SOW-style outputs. Labeled demo. Not a licensed product. Not for purchase.',
    ctas: [
      {
        label: 'Open RPS demo',
        href: 'https://rps.innovatered.com',
        external: true,
        primary: true,
      },
    ],
  },
  {
    id: 'quote-model',
    title: 'Quote model explainer',
    status: 'illustrative',
    meta: 'Illustrative · device-driven',
    summary:
      'How RED packages scale with device count (Packages 1 & 2 + Design-to-Delivery). Illustrative only — no published dollar rates. Request a quote by device count.',
    ctas: [
      {
        label: 'See services & quote path',
        to: '/services',
        primary: true,
      },
    ],
  },
];

const VIDEO_SRC = '/demos/redweb-build-process.mp4';
const VIDEO_POSTER = '/demos/redweb-build-process.jpg';

function DemoCtaButton({ cta }: { cta: DemoCta }) {
  const className = cta.primary ? 'btn btn-primary' : 'btn btn-ghost';
  if (cta.hash) {
    return (
      <a className={className} href={cta.hash}>
        {cta.label}
      </a>
    );
  }
  if (cta.href) {
    return (
      <a
        className={className}
        href={cta.href}
        target={cta.external ? '_blank' : undefined}
        rel={cta.external ? 'noopener noreferrer' : undefined}
        title={cta.external ? 'Planning tool — not for purchase' : undefined}
      >
        {cta.label}
      </a>
    );
  }
  if (cta.to) {
    return (
      <Link className={className} to={cta.to}>
        {cta.label}
      </Link>
    );
  }
  return null;
}

export default function Demos() {
  return (
    <div className="page-shell demos-page">
      <div className="band-inner">
        <p className="identity-kicker demos-kicker">DEMO PORTAL</p>
        <h1>See RED build in public</h1>
        <p className="lede">
          Thin vertical demos we ship to a live URL. Lead entry shows process → live site (not
          polish theater). RPS is portal entry #2 — a planning demo, not a SKU. Quote model is
          illustrative and device-driven.
        </p>

        <ol className="demo-process-list" aria-label="Demo shipping process">
          {PROCESS_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <ul className="demo-grid">
          {DEMOS.map((demo) => {
            const illustrative = demo.status === 'illustrative';
            return (
              <li
                key={demo.id}
                className={`demo-card glass glass-card${illustrative ? ' demo-card--ghost' : ''}${
                  demo.id === 'redweb' ? ' demo-card--lead' : ''
                }`}
              >
                <div className="demo-card-head">
                  <h3>{demo.title}</h3>
                  <span className="demo-meta">{demo.meta}</span>
                </div>
                <p>{demo.summary}</p>
                {demo.steps && demo.steps.length > 0 && (
                  <ol className="demo-card-steps">
                    {demo.steps.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ol>
                )}
                {demo.ctas && demo.ctas.length > 0 && (
                  <div className="demo-card-actions">
                    {demo.ctas.map((cta) => (
                      <DemoCtaButton key={cta.label} cta={cta} />
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <section
          className="demo-process-section"
          id="redweb-process"
          aria-labelledby="redweb-process-heading"
        >
          <h2 id="redweb-process-heading">Watch the build process</h2>
          <p className="lede" style={{ marginBottom: '1rem' }}>
            Walkthrough ends on this Demo Portal card — process → staging → review → live site.
            Capability sample of how RED ships demos, not a customer case study.
          </p>
          <div className="demo-video-wrap glass glass-card">
            <video
              className="demo-process-video"
              controls
              playsInline
              preload="metadata"
              poster={VIDEO_POSTER}
              aria-label="Building innovateRED.com — process to live site; ends on Demo Portal"
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
            <p className="demo-video-fallback">
              Video file not loaded yet?{' '}
              <a href={VIDEO_SRC}>Open /demos/redweb-build-process.mp4</a>
              {' '}directly (place the file under <code>frontend/public/demos/</code> for Pages).
            </p>
          </div>
        </section>

        <p className="proof-footer-note" style={{ marginTop: '1.75rem' }}>
          Capability samples — not client endorsements. RPS = planning demo, not for purchase.
        </p>
      </div>
    </div>
  );
}
