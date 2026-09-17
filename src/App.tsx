// Brochure shell — primary nav in LeftDrawer; Account stubs in RightDrawer
import { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import LeftDrawer from './components/LeftDrawer';
import RightDrawer from './components/RightDrawer';
import AppRouter from './AppRouter';
import { useViewportTier } from './hooks/useViewportTier';
import logo from './assets/RED_Logo_Canonical.png';

export default function App() {
  useViewportTier();
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  const openLeft = () => {
    setRightOpen(false);
    setLeftOpen(true);
  };
  const openRight = () => {
    setLeftOpen(false);
    setRightOpen(true);
  };

  return (
    <BrowserRouter>
      <a className="sr-only" href="#main">
        Skip to content
      </a>
      <NavBar
        logo={logo}
        onLeftMenuClick={openLeft}
        onRightMenuClick={openRight}
      />
      <LeftDrawer isOpen={leftOpen} onClose={() => setLeftOpen(false)} logo={logo} />
      <RightDrawer isOpen={rightOpen} onClose={() => setRightOpen(false)} />
      <AppRouter />
      <footer className="site-footer">
        <p>
          © Realtime Engineering and Development LLC · Windsor, Colorado ·{' '}
          <a href="https://innovateRED.com">innovateRED.com</a>
        </p>
        <p style={{ marginTop: '0.35rem', opacity: 0.7 }}>
          <Link to="/rps" style={{ color: 'inherit' }}>
            RPS
          </Link>{' '}
          is an internal planning engine teaser — not a licensed product SKU.
        </p>
      </footer>
    </BrowserRouter>
  );
}
