'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Paintbrush,
  Trees,
  Maximize2,
  Building2,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'interior-design',
      title: 'Interior Design',
      icon: Paintbrush,
      badge: 'Core Specialty',
      description:
        'Tailored concepts that harmonize color, light, and texture to enhance well‑being.',
      details:
        'Our interior design practice goes beyond surface decoration to craft emotional havens. We curate lighting temperatures, acoustic damping, natural linen fabrics, and bespoke stone surfaces that promote lower stress and heightened mental clarity.',
      deliverables: [
        '3D Photorealistic Spatial Renders',
        'Material & Palette Curation',
        'Custom Lighting & Acoustic Specs',
        'Bespoke Furniture & Art Sourcing',
      ],
      image:
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'landscape-planning',
      title: 'Landscape Planning',
      icon: Trees,
      badge: 'Outdoor Wellness',
      description:
        'Sustainable outdoor designs integrating native plants and natural materials.',
      details:
        'Inspired by ecological resilience and biophilic design, our landscape planning bridges structural architecture with wild nature. We integrate indigenous drought-resistant flora, natural water features, micro-climate shading, and contemplative garden pathways.',
      deliverables: [
        'Native Botanical Masterplans',
        'Ecological & Water Drainage Strategy',
        'Hardscape & Outdoor Living Elements',
        'Long-term Garden Care Workflows',
      ],
      image:
        'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'spatial-optimization',
      title: 'Spatial Optimization',
      icon: Maximize2,
      badge: 'Flow & Efficiency',
      description:
        'Smart layouts that maximize comfort, flow, and usability.',
      details:
        'Whether re-engineering a compact apartment or an expansive estate layout, we eliminate awkward circulation bottlenecks. We balance natural ventilation, task-focused zones, and intuitive transitions to make every square foot feel purposeful and expansive.',
      deliverables: [
        'Ergonomic Layout Re-engineering',
        'Circulation & Traffic Flow Audits',
        'Custom Built-in Storage Systems',
        'Multi-functional Room Architecture',
      ],
      image:
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'brand-space-design',
      title: 'Brand Space Design',
      icon: Building2,
      badge: 'Commercial Sanctuaries',
      description:
        'Signature environments for restaurants, offices, and wellness brands.',
      details:
        'We translate your brand’s core philosophy into a tactile physical experience. For boutique hospitality, executive offices, and wellness retreats, we build environments that deeply engage customers, inspire teams, and leave unforgettable impressions.',
      deliverables: [
        'Physical Brand Identity Translation',
        'Customer Journey & Atmosphere Design',
        'Acoustic & Mood Lighting Systems',
        'Turnkey Commercial Build Specs',
      ],
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'site-visits',
      title: 'Site Visits',
      icon: MapPin,
      badge: 'Actionable Advice',
      description:
        'Professional on‑site consultations, assessments, and actionable recommendations.',
      details:
        'An essential first step or independent advisory service. Our senior designers conduct thorough in-person evaluations of your property—assessing natural light orientation, structural potential, soil & topography, and immediate wellness upgrades.',
      deliverables: [
        'On-site Architectural Evaluation',
        'Sunlight & Airflow Diagnostics',
        'Immediate Action Plan & Budget Bounds',
        'Consultation Summary Report',
      ],
      image:
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-sage font-semibold">
            ✨ Our Services
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-brand-obsidian">
            Tailored Design Solutions for <br />
            <span className="italic font-light text-brand-earth">Well‑Being & Harmony</span>
          </h2>
          <p className="text-sm text-brand-charcoal/80 font-light leading-relaxed">
            From intimate residential sanctuaries to outdoor biophilic landscapes and commercial brand headquarters, explore our multidisciplinary offerings.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs uppercase tracking-wider font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-brand-olive text-brand-sand shadow-lg shadow-brand-olive/20 scale-105'
                    : 'bg-brand-stone/40 text-brand-charcoal hover:bg-brand-stone/70'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-brand-sage' : 'text-brand-earth'}`} />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Feature Panel */}
        <div className="bg-brand-sand rounded-3xl p-8 md:p-12 border border-brand-stone/70 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-stone/60 text-brand-terracotta text-[11px] font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{services[activeTab].badge}</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-medium text-brand-obsidian">
              {services[activeTab].title}
            </h3>

            <p className="text-base text-brand-earth font-medium italic border-l-2 border-brand-earth pl-4">
              &ldquo;{services[activeTab].description}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-brand-charcoal font-light leading-relaxed">
              {services[activeTab].details}
            </p>

            {/* Deliverables List */}
            <div className="space-y-3 pt-2">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-sage">
                Key Deliverables & Scope:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services[activeTab].deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-brand-obsidian font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-sage shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="#planner"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-obsidian text-brand-cream text-xs uppercase font-semibold tracking-wider hover:bg-brand-terracotta transition-colors shadow-md"
              >
                <span>Request {services[activeTab].title}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal hover:text-brand-terracotta underline underline-offset-4"
              >
                Schedule Site Visit
              </a>
            </div>
          </div>

          {/* Service Image Display */}
          <div className="lg:col-span-6 relative h-[380px] sm:h-[460px] w-full rounded-2xl overflow-hidden shadow-xl border border-brand-stone/60">
            <Image
              src={services[activeTab].image}
              alt={services[activeTab].title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-brand-sand">
              <p className="text-xs font-serif italic">Lutroo Spaces Service Portfolio</p>
              <p className="text-lg font-medium">{services[activeTab].title}</p>
            </div>
          </div>
        </div>

        {/* Services Summary Table (Directly matching issue requirements) */}
        <div className="mt-20 pt-12 border-t border-brand-stone/60">
          <h3 className="font-serif text-2xl font-medium text-brand-obsidian mb-6 text-center">
            Service Scope Quick Reference
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-brand-sand rounded-2xl overflow-hidden border border-brand-stone/60 shadow-sm">
              <thead>
                <tr className="bg-brand-olive text-brand-sand text-xs uppercase tracking-wider border-b border-brand-stone/40">
                  <th className="py-4 px-6 font-semibold">Service</th>
                  <th className="py-4 px-6 font-semibold">Description</th>
                  <th className="py-4 px-6 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-stone/50 text-xs sm:text-sm text-brand-charcoal">
                {services.map((s, idx) => (
                  <tr
                    key={s.id}
                    className="hover:bg-brand-cream/80 transition-colors group cursor-pointer"
                    onClick={() => setActiveTab(idx)}
                  >
                    <td className="py-4 px-6 font-semibold text-brand-obsidian flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-sage group-hover:scale-125 transition-transform" />
                      {s.title}
                    </td>
                    <td className="py-4 px-6 font-light">{s.description}</td>
                    <td className="py-4 px-6 text-right">
                      <button className="text-xs uppercase tracking-wider font-semibold text-brand-terracotta group-hover:underline">
                        Explore &rarr;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
