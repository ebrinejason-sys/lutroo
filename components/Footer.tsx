'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-obsidian text-brand-sand pt-20 pb-12 border-t border-brand-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-brand-charcoal/80">
          {/* Brand Intro Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-olive text-brand-sand flex items-center justify-center">
                <Compass className="w-5 h-5 text-brand-sage" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-brand-cream uppercase">
                  LUTROO <span className="text-brand-sage font-light">SPACES</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] text-brand-sage uppercase font-medium">
                  Design • Innovate • Elevate
                </span>
              </div>
            </Link>

            <p className="text-xs text-brand-stone/80 font-light leading-relaxed max-w-sm">
              Lutroo Spaces is a multidisciplinary design studio redefining how people experience space. We specialize in wellness‑focused environments that blend functionality, aesthetics, and emotional balance.
            </p>

            <div className="space-y-2 pt-2">
              <a
                href="tel:+25670745645"
                className="flex items-center gap-3 text-xs text-brand-stone/90 hover:text-brand-sage transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-sage shrink-0" />
                <span>+256 707 456 45</span>
              </a>
              <a
                href="mailto:lutroospaces@gmail.com"
                className="flex items-center gap-3 text-xs text-brand-stone/90 hover:text-brand-sage transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-sage shrink-0" />
                <span>lutroospaces@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-sage block">
              Studio Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-brand-stone/80">
              {['About', 'Philosophy', 'Services', 'Approach', 'Portfolio', 'Planner', 'Contact'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-brand-cream transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-sage/60" />
                      {item === 'Planner' ? 'Space Planner Tool' : item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services Quick Reference */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-sage block">
              Specialized Services
            </span>
            <ul className="space-y-2.5 text-xs text-brand-stone/80">
              <li>
                <a href="#services" className="hover:text-brand-cream transition-colors">
                  • Interior Design (Wellness Concepts)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-cream transition-colors">
                  • Landscape Planning (Native Biophilic)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-cream transition-colors">
                  • Spatial Optimization & Flow Re-engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-cream transition-colors">
                  • Brand Space Design (Restaurants & Offices)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-cream transition-colors">
                  • On-Site Visits & Consultation Reports
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <a
                href="#planner"
                className="inline-block px-6 py-3 rounded-full bg-brand-sage text-brand-obsidian text-xs uppercase font-semibold tracking-wider hover:bg-brand-sand transition-colors shadow-md"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-brand-stone/60">
          <p>© {new Date().getFullYear()} Lutroo Spaces. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-brand-cream transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-brand-charcoal flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5 text-brand-sage" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
