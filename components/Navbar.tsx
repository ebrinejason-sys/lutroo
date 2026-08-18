'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Compass, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Services', href: '#services' },
    { name: 'Approach', href: '#approach' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Space Planner', href: '#planner' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-cream/90 backdrop-blur-md shadow-sm py-4 border-b border-brand-stone/40'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-olive text-brand-sand flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
            <Compass className="w-5 h-5 text-brand-sage" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-brand-obsidian uppercase">
              LUTROO <span className="text-brand-sage font-light">SPACES</span>
            </span>
            <span className="text-[10px] tracking-[0.25em] text-brand-earth uppercase font-medium">
              Design • Innovate • Elevate
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.15em] font-medium text-brand-charcoal hover:text-brand-terracotta transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-terracotta transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#planner"
            className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-brand-sand bg-brand-olive rounded-full overflow-hidden transition-all duration-300 hover:bg-brand-charcoal hover:shadow-md"
          >
            <span className="relative z-10 flex items-center gap-2">
              Schedule Consultation
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-brand-sage" />
            </span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-brand-obsidian focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bg-brand-cream/98 backdrop-blur-xl border-b border-brand-stone p-8 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] font-semibold text-brand-obsidian hover:text-brand-terracotta transition-colors flex items-center justify-between border-b border-brand-stone/30 pb-3"
              >
                {link.name}
                <ArrowUpRight className="w-4 h-4 text-brand-sage" />
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+25670745645"
                className="flex items-center gap-3 text-xs text-brand-charcoal"
              >
                <Phone className="w-4 h-4 text-brand-sage" />
                +256 707 456 45
              </a>
              <a
                href="mailto:lutroospaces@gmail.com"
                className="flex items-center gap-3 text-xs text-brand-charcoal"
              >
                <Mail className="w-4 h-4 text-brand-sage" />
                lutroospaces@gmail.com
              </a>
              <a
                href="#planner"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full py-3 bg-brand-olive text-brand-sand text-xs uppercase tracking-wider text-center font-semibold rounded-full"
              >
                Schedule Consultation
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
