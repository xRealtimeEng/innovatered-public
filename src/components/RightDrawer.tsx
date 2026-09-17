// src/components/RightDrawer.tsx — Account auth + stubs (Batch 3)
import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

interface RightDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const iconStroke = 1.75;

export default function RightDrawer({ isOpen, onClose }: RightDrawerProps) {
  const { user, loading, error, setError, login, register, logout } = useAuth();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [busy, setBusy] = useState(false);
  const [localMsg, setLocalMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setLocalMsg(null);
    setError(null);
    try {
      if (mode === 'login') await login(email.trim(), password);
      else await register(email.trim(), password, name.trim() || undefined);
      setPassword('');
      setLocalMsg(mode === 'login' ? 'Signed in.' : 'Account created.');
    } catch (err) {
      setLocalMsg(err instanceof Error ? err.message : 'Request failed');
    } finally {
      setBusy(false);
    }
  }

  async function onLogout() {
    setBusy(true);
    setLocalMsg(null);
    try {
      await logout();
      setLocalMsg('Signed out.');
    } catch (err) {
      setLocalMsg(err instanceof Error ? err.message : 'Logout failed');
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {isOpen && (
        <div
          className="drawer-overlay drawer-overlay--right"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <div
        className={`drawer-panel drawer-panel--right${isOpen ? ' is-open' : ''}`}
        role={isOpen ? 'dialog' : undefined}
        aria-modal={isOpen ? true : undefined}
        aria-label="Account menu"
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
        tabIndex={isOpen ? undefined : -1}
      >
        <div className="drawer-panel-inner">
          <div className="drawer-header">
            <h2 className="drawer-title">Your RED</h2>
            <button
              type="button"
              onClick={onClose}
              className="drawer-close"
              aria-label="Close account menu"
            >
              <X size={22} strokeWidth={iconStroke} aria-hidden="true" />
            </button>
          </div>

          <nav className="drawer-nav" aria-label="Account">
            <div className="drawer-stub-block">
              <div className="drawer-stub-row drawer-stub-row--live">
                <div className="drawer-stub-row-head">
                  <h3 className="drawer-stub-heading">Account</h3>
                </div>
                {loading ? (
                  <p className="drawer-stub-note">Checking session…</p>
                ) : user ? (
                  <>
                    <p className="drawer-stub-note">
                      Signed in as <strong>{user.email}</strong>
                      {user.name ? ` (${user.name})` : ''}
                    </p>
                    <button
                      type="button"
                      className="drawer-stub-btn drawer-stub-btn--live"
                      disabled={busy}
                      onClick={() => void onLogout()}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <p className="drawer-stub-note">
                      Sign in or register. Token stored as{' '}
                      <code className="drawer-code">red_auth_token</code>.
                    </p>
                    <div className="drawer-auth-tabs" role="tablist">
                      <button
                        type="button"
                        role="tab"
                        aria-selected={mode === 'login'}
                        className={`drawer-auth-tab${mode === 'login' ? ' is-active' : ''}`}
                        onClick={() => {
                          setMode('login');
                          setLocalMsg(null);
                        }}
                      >
                        Sign in
                      </button>
                      <button
                        type="button"
                        role="tab"
                        aria-selected={mode === 'register'}
                        className={`drawer-auth-tab${mode === 'register' ? ' is-active' : ''}`}
                        onClick={() => {
                          setMode('register');
                          setLocalMsg(null);
                        }}
                      >
                        Register
                      </button>
                    </div>
                    <form className="drawer-auth-form" onSubmit={(e) => void onSubmit(e)}>
                      {mode === 'register' && (
                        <label className="drawer-auth-label">
                          Name
                          <input
                            className="drawer-auth-input"
                            type="text"
                            autoComplete="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Optional"
                          />
                        </label>
                      )}
                      <label className="drawer-auth-label">
                        Email
                        <input
                          className="drawer-auth-input"
                          type="email"
                          required
                          autoComplete="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </label>
                      <label className="drawer-auth-label">
                        Password
                        <input
                          className="drawer-auth-input"
                          type="password"
                          required
                          minLength={8}
                          autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </label>
                      <button
                        type="submit"
                        className="drawer-stub-btn drawer-stub-btn--live"
                        disabled={busy}
                      >
                        {busy ? 'Working…' : mode === 'login' ? 'Sign in' : 'Create account'}
                      </button>
                    </form>
                  </>
                )}
                {(localMsg || error) && (
                  <p className="drawer-auth-msg" role="status">
                    {localMsg || error}
                  </p>
                )}
              </div>
            </div>

            <div className="drawer-stub-block drawer-stub-block--soon">
              <div className="drawer-stub-row">
                <div className="drawer-stub-row-head">
                  <h3 className="drawer-stub-heading">Settings</h3>
                  <span className="drawer-soon-label">Coming soon</span>
                </div>
                <p className="drawer-stub-note">Preferences and notifications.</p>
                <button type="button" className="drawer-stub-btn" disabled>
                  Open settings
                </button>
              </div>
            </div>

            <div className="drawer-stub-block drawer-stub-block--soon">
              <div className="drawer-stub-row">
                <div className="drawer-stub-row-head">
                  <h3 className="drawer-stub-heading">Projects</h3>
                  <span className="drawer-soon-label">Coming soon</span>
                </div>
                <p className="drawer-stub-note">Your RED projects and workspaces.</p>
                <button type="button" className="drawer-stub-btn" disabled>
                  Manage projects
                </button>
              </div>
            </div>

            <div className="drawer-stub-block drawer-stub-block--soon">
              <div className="drawer-stub-row">
                <div className="drawer-stub-row-head">
                  <h3 className="drawer-stub-heading">Proposals</h3>
                  <span className="drawer-soon-label">Coming soon</span>
                </div>
                <p className="drawer-stub-note">Drafts and proposal workspace.</p>
                <button type="button" className="drawer-stub-btn" disabled>
                  View proposals
                </button>
              </div>
            </div>

            <div className="drawer-stub-block">
              <div className="drawer-stub-row drawer-stub-row--live">
                <h3 className="drawer-stub-heading">Contact</h3>
                <p className="drawer-stub-note">Reach the RED team.</p>
                <a
                  href="mailto:ben.marum@innovatered.com?subject=RED%20inquiry%20%E2%80%94%20device%20count%20%26%20timeline"
                  onClick={onClose}
                  className="drawer-stub-link"
                >
                  Talk to RED
                </a>
                <a href="/#contact" onClick={onClose} className="drawer-stub-link">
                  Contact details
                </a>
              </div>
            </div>

            <div className="drawer-stub-block">
              <div className="drawer-stub-row drawer-stub-row--live">
                <h3 className="drawer-stub-heading">Demos</h3>
                <p className="drawer-stub-note">Interactive proofs and portals.</p>
                <Link to="/demos" onClick={onClose} className="drawer-stub-link">
                  Open Demo Portal
                </Link>
                <Link to="/apis" onClick={onClose} className="drawer-stub-link">
                  APIs catalog
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
