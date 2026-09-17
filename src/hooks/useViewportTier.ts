import { useEffect, useState } from 'react';

export type ViewportTier = 'phone' | 'tablet' | 'desktop';

const MQ_PHONE = '(max-width: 639px)';
const MQ_TABLET = '(min-width: 640px) and (max-width: 1023px)';
const MQ_DESKTOP = '(min-width: 1024px)';

function resolveTier(): ViewportTier {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'desktop';
  }
  if (window.matchMedia(MQ_PHONE).matches) return 'phone';
  if (window.matchMedia(MQ_TABLET).matches) return 'tablet';
  return 'desktop';
}

function applyTier(tier: ViewportTier) {
  document.documentElement.dataset.vp = tier;
}

/**
 * Viewport-width tiers shared by JS + CSS (html[data-vp="phone"|"tablet"|"desktop"]).
 * Uses matchMedia only — no User-Agent sniffing.
 * Breakpoints: phone ≤639px, tablet 640–1023px, desktop ≥1024px.
 */
export function useViewportTier(): ViewportTier {
  const [tier, setTier] = useState<ViewportTier>(() => {
    const initial = resolveTier();
    if (typeof document !== 'undefined') applyTier(initial);
    return initial;
  });

  useEffect(() => {
    const phone = window.matchMedia(MQ_PHONE);
    const tablet = window.matchMedia(MQ_TABLET);
    const desktop = window.matchMedia(MQ_DESKTOP);

    const sync = () => {
      const next = resolveTier();
      applyTier(next);
      setTier(next);
    };

    sync();

    phone.addEventListener('change', sync);
    tablet.addEventListener('change', sync);
    desktop.addEventListener('change', sync);

    return () => {
      phone.removeEventListener('change', sync);
      tablet.removeEventListener('change', sync);
      desktop.removeEventListener('change', sync);
    };
  }, []);

  return tier;
}
