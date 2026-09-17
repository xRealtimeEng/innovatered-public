// src/components/NavBar.tsx — brand + Demo Portal CTA + drawer toggles (primary nav in LeftDrawer)
import { Link } from 'react-router-dom';
import { Menu, CircleUser } from 'lucide-react';

interface NavbarProps {
  onLeftMenuClick: () => void;
  onRightMenuClick: () => void;
  logo: string;
}

const iconStroke = 1.75;

export default function NavBar({ onLeftMenuClick, onRightMenuClick, logo }: NavbarProps) {
  return (
    <header className="site-header">
      <div className="nav-inner">
        <div className="nav-left">
          <button
            type="button"
            className="nav-menu-btn nav-menu-btn--left"
            onClick={onLeftMenuClick}
            aria-label="Open site menu"
          >
            <Menu size={24} strokeWidth={iconStroke} aria-hidden="true" />
          </button>

          <Link className="nav-brand" to="/" aria-label="RED Home">
            <img src={logo} alt="RED canonical logo" width={44} height={44} />
            <span className="nav-brand-name">
              <span className="word-red">RED</span>
            </span>
          </Link>
        </div>

        <div className="nav-right">
          <Link
            className="nav-rps-link"
            to="/demos"
            aria-label="Demo Portal"
            title="Capability demos — how RED ships in public"
          >
            <span className="nav-rps-label-full">Demo Portal</span>
            <span className="nav-rps-label-short">Demos</span>
          </Link>
          <a
            className="nav-cta"
            href="mailto:ben.marum@innovatered.com?subject=RED%20inquiry%20%E2%80%94%20device%20count%20%26%20timeline"
          >
            Talk to RED
          </a>
          <button
            type="button"
            className="nav-menu-btn nav-menu-btn--right"
            onClick={onRightMenuClick}
            aria-label="Open account menu"
          >
            <CircleUser
              className="nav-user-glyph"
              size={24}
              strokeWidth={iconStroke}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
