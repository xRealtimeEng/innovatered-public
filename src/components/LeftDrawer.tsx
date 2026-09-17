// src/components/LeftDrawer.tsx — primary nav (all breakpoints); About + RPS expand inside
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface LeftDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  logo: string;
}

const iconStroke = 1.75;

export default function LeftDrawer({ isOpen, onClose, logo }: LeftDrawerProps) {
  const { pathname } = useLocation();
  const [aboutOpen, setAboutOpen] = useState(
    () => pathname === '/about' || pathname.startsWith('/team'),
  );
  const [rpsOpen, setRpsOpen] = useState(() => pathname.startsWith('/rps'));

  useEffect(() => {
    if (!isOpen) return;
    setAboutOpen(pathname === '/about' || pathname.startsWith('/team'));
    setRpsOpen(pathname.startsWith('/rps'));
  }, [isOpen, pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const linkClass = 'hover:text-white transition-colors';

  return (
    <>
      {isOpen && (
        <div
          className="drawer-overlay drawer-overlay--left"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <div
        className={`drawer-panel drawer-panel--left${isOpen ? ' is-open' : ''}`}
        role={isOpen ? 'dialog' : undefined}
        aria-modal={isOpen ? true : undefined}
        aria-label="Site menu"
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
        tabIndex={isOpen ? undefined : -1}
      >
        <div className="drawer-panel-inner">
          <div className="drawer-header">
            <img src={logo} alt="RED" className="drawer-logo" width={44} height={44} />
            <button
              type="button"
              onClick={onClose}
              className="drawer-close"
              aria-label="Close menu"
            >
              <X size={22} strokeWidth={iconStroke} aria-hidden="true" />
            </button>
          </div>

          <nav className="drawer-nav" aria-label="Primary">
            <Link to="/" onClick={onClose} className={linkClass}>
              Home
            </Link>

            <div className="drawer-section">
              <button
                type="button"
                className="drawer-section-toggle"
                aria-expanded={aboutOpen}
                onClick={() => setAboutOpen((v) => !v)}
              >
                About
                {aboutOpen ? (
                  <ChevronUp size={16} strokeWidth={iconStroke} aria-hidden="true" />
                ) : (
                  <ChevronDown size={16} strokeWidth={iconStroke} aria-hidden="true" />
                )}
              </button>
              {aboutOpen && (
                <div className="drawer-sublinks">
                  <Link to="/about" onClick={onClose} className={linkClass}>
                    About RED
                  </Link>
                  <Link to="/team" onClick={onClose} className={linkClass}>
                    Team
                  </Link>
                </div>
              )}
            </div>

            <Link to="/services" onClick={onClose} className={linkClass}>
              Services
            </Link>
            <Link to="/how-we-deliver" onClick={onClose} className={linkClass}>
              How we deliver
            </Link>

            <div className="drawer-section">
              <div className="drawer-section-head">
                <Link
                  to="/rps"
                  onClick={onClose}
                  className={`drawer-section-link ${linkClass}`}
                >
                  RPS
                </Link>
                <button
                  type="button"
                  className="drawer-section-caret"
                  aria-expanded={rpsOpen}
                  aria-label={rpsOpen ? 'Collapse RPS pages' : 'Expand RPS pages'}
                  onClick={() => setRpsOpen((v) => !v)}
                >
                  {rpsOpen ? (
                    <ChevronUp size={16} strokeWidth={iconStroke} aria-hidden="true" />
                  ) : (
                    <ChevronDown size={16} strokeWidth={iconStroke} aria-hidden="true" />
                  )}
                </button>
              </div>
              {rpsOpen && (
                <div className="drawer-sublinks">
                  <a
                    href="https://rps.innovatered.com"
                    onClick={onClose}
                    className={`drawer-rps-demo ${linkClass}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open RPS demo
                    <ExternalLink
                      size={14}
                      strokeWidth={iconStroke}
                      aria-hidden="true"
                      className="drawer-ext-icon"
                    />
                  </a>
                  <p className="drawer-rps-hint">
                    Planning demo — not a product purchase
                  </p>
                  <Link to="/rps" onClick={onClose} className={linkClass}>
                    Overview
                  </Link>
                  <Link to="/rps/features" onClick={onClose} className={linkClass}>
                    Features
                  </Link>
                  <Link to="/rps/how-it-works" onClick={onClose} className={linkClass}>
                    How it works
                  </Link>
                  <Link to="/rps/use-cases" onClick={onClose} className={linkClass}>
                    Use cases
                  </Link>
                  <Link to="/rps/roadmap" onClick={onClose} className={linkClass}>
                    Roadmap
                  </Link>
                </div>
              )}
            </div>

            <Link to="/demos" onClick={onClose} className={linkClass}>
              Demo Portal
            </Link>
            <Link to="/apis" onClick={onClose} className={linkClass}>
              APIs
            </Link>
          </nav>

          <div className="drawer-footer">
            <a
              href="mailto:ben.marum@innovatered.com?subject=RED%20inquiry%20%E2%80%94%20device%20count%20%26%20timeline"
              onClick={onClose}
              className="drawer-cta"
            >
              Talk to RED
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
