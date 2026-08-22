'use client';

import { useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import { studio } from '@/lib/site';

type Phase = 'show' | 'exit' | 'gone';

/**
 * Full-viewport brand opening, modelled on the Hermie Homes splash:
 * centred lockup on a solid ground, held until the page is ready, then a fade
 * that reveals the site underneath. No enter button — it dismisses itself.
 */
export default function Intro() {
  const [phase, setPhase] = useState<Phase>('show');

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setPhase('gone');
      return;
    }

    let cancelled = false;
    document.documentElement.classList.add('intro-lock');

    const loaded =
      document.readyState === 'complete'
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            window.addEventListener('load', () => resolve(), { once: true });
          });

    const hold = new Promise<void>((resolve) => {
      window.setTimeout(resolve, 2200);
    });

    Promise.all([loaded, hold]).then(() => {
      if (cancelled) return;
      setPhase('exit');
      window.setTimeout(() => {
        if (cancelled) return;
        setPhase('gone');
        document.documentElement.classList.remove('intro-lock');
      }, 900);
    });

    return () => {
      cancelled = true;
      document.documentElement.classList.remove('intro-lock');
    };
  }, []);

  if (phase === 'gone') return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={`${studio.name} — ${studio.tagline}`}
      className={`intro-overlay fixed inset-0 z-[80] flex items-center justify-center bg-black ${
        phase === 'exit' ? 'pointer-events-none animate-intro-exit' : ''
      }`}
    >
      <div className="animate-intro-mark px-6">
        <Logo variant="full" />
      </div>
    </div>
  );
}
