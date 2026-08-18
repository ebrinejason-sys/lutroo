'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDownRight, Sparkles, Compass, ShieldCheck, Leaf, Eye } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-brand-sand via-brand-cream to-brand-stone/30">
      {/* Decorative Organic Ambient Glow */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-brand-sage/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-[600px] h-[600px] bg-brand-earth/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 my-auto">
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-stone/50 border border-brand-sage/30 text-brand-olive text-xs uppercase tracking-[0.2em] font-medium mb-8 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-brand-terracotta animate-pulse" />
          <span>Multidisciplinary Design Studio</span>
        </div>

        {/* Main Hero Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-brand-obsidian leading-[1.08]">
              Redefining <br />
              <span className="italic font-light text-brand-earth">How People</span> <br />
              Experience Space.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-charcoal font-light max-w-2xl leading-relaxed">
              We specialize in wellness‑focused environments, blending functionality, aesthetics, and emotional balance to create interiors and landscapes that inspire calm, creativity, and connection.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6 lg:pb-2 border-l border-brand-stone/60 pl-6">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-[0.25em] text-brand-sage font-semibold">Our Philosophy</span>
              <p className="font-serif text-2xl text-brand-obsidian italic font-normal">
                Design • Innovate • Elevate
              </p>
            </div>
            <p className="text-xs text-brand-charcoal/80 leading-relaxed font-light">
              Every space has the ability to affect the mind. Guided by an artist&apos;s touch, we craft environments that calm, inspire, and energize.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#planner"
                className="px-6 py-3.5 rounded-full bg-brand-obsidian text-brand-cream text-xs uppercase font-semibold tracking-wider hover:bg-brand-terracotta transition-colors shadow-lg shadow-brand-obsidian/10"
              >
                Plan Your Space
              </a>
              <a
                href="#portfolio"
                className="p-3.5 rounded-full border border-brand-charcoal/30 text-brand-obsidian hover:bg-brand-stone/50 transition-colors"
                aria-label="View Portfolio"
              >
                <ArrowDownRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Visual Banner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Hero Card 1 */}
          <div className="group relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl border border-brand-stone/40">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Lutroo Spaces Wellness Interior Design"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian/85 via-brand-obsidian/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-brand-sand">
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-sage font-semibold">Interior Design</span>
              <h3 className="font-serif text-2xl font-medium mt-1">Sanctuary Living Rooms</h3>
              <p className="text-xs text-brand-sand/80 mt-1 font-light line-clamp-2">
                Harmonizing natural light, texture, and emotional balance for soothing home interiors.
              </p>
            </div>
          </div>

          {/* Hero Card 2 */}
          <div className="group relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl border border-brand-stone/40">
            <Image
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80"
              alt="Lutroo Spaces Landscape Planning"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian/85 via-brand-obsidian/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-brand-sand">
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-sage font-semibold">Landscape Planning</span>
              <h3 className="font-serif text-2xl font-medium mt-1">Biophilic Gardens & Courtyards</h3>
              <p className="text-xs text-brand-sand/80 mt-1 font-light line-clamp-2">
                Sustainable outdoor spaces integrating native plants, natural stone, and water dynamics.
              </p>
            </div>
          </div>

          {/* Hero Card 3 */}
          <div className="group relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl border border-brand-stone/40">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
              alt="Lutroo Spaces Spatial Optimization"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian/85 via-brand-obsidian/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-brand-sand">
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-sage font-semibold">Brand & Commercial</span>
              <h3 className="font-serif text-2xl font-medium mt-1">Signature Environments</h3>
              <p className="text-xs text-brand-sand/80 mt-1 font-light line-clamp-2">
                Tailored layouts for wellness retreats, hospitality spaces, and inspiring brand headquarters.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="mt-12 pt-8 border-t border-brand-stone/50 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3 text-brand-charcoal">
            <Leaf className="w-5 h-5 text-brand-sage shrink-0" />
            <span className="text-xs uppercase tracking-wider font-medium">Biophilic Principles</span>
          </div>
          <div className="flex items-center gap-3 text-brand-charcoal">
            <Compass className="w-5 h-5 text-brand-earth shrink-0" />
            <span className="text-xs uppercase tracking-wider font-medium">Research-Led Process</span>
          </div>
          <div className="flex items-center gap-3 text-brand-charcoal">
            <Eye className="w-5 h-5 text-brand-terracotta shrink-0" />
            <span className="text-xs uppercase tracking-wider font-medium">Precision Execution</span>
          </div>
          <div className="flex items-center gap-3 text-brand-charcoal">
            <ShieldCheck className="w-5 h-5 text-brand-olive shrink-0" />
            <span className="text-xs uppercase tracking-wider font-medium">On-Site Consultations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
