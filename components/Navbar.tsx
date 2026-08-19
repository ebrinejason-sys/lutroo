'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { contact, navigation, studio } from '@/lib/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const [barHeight, setBarHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* The drawer sits below the bar, whose height changes with the breakpoint
     and with the scrolled padding, so measure it rather than guess. */
  useEffect(() => {
    const bar = barRef.current;
    if (!bar || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(([entry]) =>
      setBarHeight(entry.target.getBoundingClientRect().height)
    );
    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          solid ? 'border-b border-linen bg-bone/90 backdrop-blur-md' : 'border-b border-transparent'
        }`}
      >
        <div
          ref={barRef}
          className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-all duration-500 md:px-10 ${
            solid ? 'py-4' : 'py-6'
          }`}
        >
          <a
            href="#top"
            className={`transition-colors ${solid ? 'text-ink' : 'text-bone'}`}
            aria-label={`${studio.name} — home`}
          >
            <Logo variant="nav" />
          </a>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`group relative text-[11px] uppercase tracking-label transition-colors ${
                  solid ? 'text-graphite hover:text-ink' : 'text-bone/80 hover:text-bone'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                    solid ? 'bg-ink' : 'bg-bone'
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className={`hidden rounded-full border px-6 py-2.5 text-[11px] uppercase tracking-label transition-colors lg:inline-block ${
                solid
                  ? 'border-ink text-ink hover:bg-ink hover:text-bone'
                  : 'border-bone/60 text-bone hover:bg-bone hover:text-ink'
              }`}
            >
              Book a visit
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className={`-mr-2 p-2 transition-colors lg:hidden ${solid ? 'text-ink' : 'text-bone'}`}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Rendered outside <header> on purpose: the header's backdrop-blur makes
          it a containing block, which would collapse this fixed drawer. It
          covers the whole viewport and sits under the header, so a stale bar
          measurement shifts the content without ever opening a gap. */}
      {menuOpen && (
        <div
          id="mobile-menu"
          style={{ paddingTop: barHeight }}
          className="animate-fade fixed inset-0 z-40 overflow-y-auto bg-bone px-6 pb-10 lg:hidden"
        >
          <nav className="flex flex-col pt-6" aria-label="Mobile">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-linen py-4 font-display text-2xl text-ink transition-colors hover:text-clay"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 space-y-2 text-sm text-graphite">
            <a href={`tel:${contact.phone}`} className="block hover:text-ink">
              {contact.phoneDisplay}
            </a>
            <a href={`mailto:${contact.email}`} className="block hover:text-ink">
              {contact.email}
            </a>
          </div>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 block rounded-full bg-forest px-6 py-4 text-center text-[11px] uppercase tracking-label text-bone"
          >
            Book a visit
          </a>
        </div>
      )}
    </>
  );
}
