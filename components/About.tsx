'use client';

import React from 'react';
import Image from 'next/image';
import { HeartHandshake, BrainCircuit, Palette, CheckCircle2 } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: BrainCircuit,
      title: 'Research',
      description:
        'We study spatial psychology, lighting dynamics, acoustic balance, and environmental sustainability to lay a grounded foundation for every project.',
    },
    {
      icon: HeartHandshake,
      title: 'Empathy',
      description:
        'Understanding your personal lifestyle, culture, and daily habits allows us to create human-centered spaces that feel intimately tailored to you.',
    },
    {
      icon: Palette,
      title: 'Artistry',
      description:
        'With an artist’s touch, we select raw natural materials, bespoke furniture, and harmonious color palettes that elevate everyday living.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-brand-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-brand-stone pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-brand-sage font-semibold">
              🏛️ About Lutroo Spaces
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-brand-obsidian mt-2">
              Spaces Designed to <span className="italic font-light text-brand-earth">Affect the Mind</span>
            </h2>
          </div>
          <p className="text-sm text-brand-charcoal/80 max-w-md font-light leading-relaxed">
            Lutroo Spaces is a multidisciplinary design studio redefining how people experience space. We specialize in wellness‑focused environments that blend functionality, aesthetics, and emotional balance.
          </p>
        </div>

        {/* Story & Image Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative h-[480px] sm:h-[560px] w-full rounded-2xl overflow-hidden shadow-2xl border border-brand-stone/60">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
                alt="Lutroo Spaces Wellness Interior Philosophy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl glass-panel text-brand-obsidian">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-terracotta">
                  Our Philosophy
                </span>
                <p className="font-serif text-xl font-medium mt-1">
                  &ldquo;Design, Innovate, Elevate&rdquo;
                </p>
                <p className="text-xs text-brand-charcoal mt-1 font-light">
                  Guiding every residential sanctuary and commercial space toward purpose and beauty.
                </p>
              </div>
            </div>
            {/* Floating accent card */}
            <div className="hidden sm:block absolute -top-6 -right-6 bg-brand-cream p-6 rounded-2xl shadow-xl border border-brand-stone/50 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-brand-sage/20 text-brand-moss flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="font-serif text-sm font-semibold text-brand-obsidian">Clarity & Precision</span>
              </div>
              <p className="text-xs text-brand-charcoal/80 font-light leading-relaxed">
                From concept sketches to final execution, we deliver elegance, precision, and tranquility.
              </p>
            </div>
          </div>

          <div id="philosophy" className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-brand-terracotta font-semibold">
                🌿 Our Mind-Space Philosophy
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-medium text-brand-obsidian leading-snug">
                A well‑designed environment can calm, inspire, and energize — shaping how people feel, think, and connect.
              </h3>
              <p className="text-sm text-brand-charcoal font-light leading-relaxed">
                We believe every space has the ability to affect the human psyche. Whether it is a peaceful home retreat, an invigorating garden landscape, or an authentic brand sanctuary, our designs cultivate emotional harmony and physical well-being.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-stone/60 space-y-3">
              <h4 className="font-serif text-lg font-semibold text-brand-obsidian flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-terracotta" />
                From Residential Sanctuaries to Commercial Spaces
              </h4>
              <p className="text-xs text-brand-charcoal/80 leading-relaxed font-light">
                Our multidisciplinary studio bridges interior architecture, native landscape planning, spatial flow optimization, and brand spatial identity into a singular cohesive vision.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Wellness-Focused Living',
                'Native Material Palette',
                'Acoustic & Light Harmony',
                'Custom Spatial Workflows',
                'Sustainable Outdoor Design',
                'Actionable Site Consultations',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-brand-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-brand-sage shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-brand-cream border border-brand-stone/60 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-stone/50 text-brand-olive flex items-center justify-center mb-6 group-hover:bg-brand-olive group-hover:text-brand-sand transition-colors">
                  <Icon className="w-6 h-6 text-brand-sage group-hover:text-brand-sand" />
                </div>
                <h4 className="font-serif text-xl font-medium text-brand-obsidian mb-3">
                  {pillar.title}
                </h4>
                <p className="text-xs text-brand-charcoal/80 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
