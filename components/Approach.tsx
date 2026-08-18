'use client';

import React from 'react';
import { Search, Heart, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

export default function Approach() {
  const steps = [
    {
      number: '01',
      title: 'Research & Discovery',
      icon: Search,
      subtitle: 'Analyzing Context & Micro-Ecology',
      description:
        'We begin with deep spatial research—studying natural light angles, wind circulation, topography, native flora, and acoustic profiles to establish environmental harmony.',
    },
    {
      number: '02',
      title: 'Empathy & Lifestyle Mapping',
      icon: Heart,
      subtitle: 'Understanding Mind & Aspirations',
      description:
        'We immerse ourselves in the client’s lifestyle, culture, and emotional needs. Every layout is calibrated to evoke calm, spark creative thought, and facilitate seamless social flow.',
    },
    {
      number: '03',
      title: 'Artistry & Concept Sketching',
      icon: Sparkles,
      subtitle: 'Crafting Natural Material Palettes',
      description:
        'Guided by an artist’s touch, we pair warm natural woods, raw travertine, organic textiles, and native plant life to form photorealistic 3D renders and tactile physical moodboards.',
    },
    {
      number: '04',
      title: 'Precision Execution',
      icon: CheckCircle,
      subtitle: 'Turnkey Delivery & Quality Assurance',
      description:
        'From site visits and structural coordination to final interior styling, we ensure every detail is executed with clarity, structural integrity, and timeless elegance.',
    },
  ];

  return (
    <section id="approach" className="py-24 bg-brand-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-brand-stone pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-brand-sage font-semibold">
              🌿 Our Approach
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-brand-obsidian mt-2">
              Every Space Tells a <span className="italic font-light text-brand-earth">Story</span>
            </h2>
          </div>
          <p className="text-sm text-brand-charcoal/80 max-w-md font-light leading-relaxed">
            Our process combines research, empathy, and artistry — ensuring each design reflects the client’s lifestyle, culture, and aspirations. From concept sketches to final execution, we deliver clarity, precision, and elegance.
          </p>
        </div>

        {/* Step-by-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative bg-brand-cream rounded-2xl p-8 border border-brand-stone/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-light text-brand-terracotta">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-brand-stone/40 text-brand-olive flex items-center justify-center group-hover:bg-brand-olive group-hover:text-brand-sand transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-sage block mb-1">
                    {step.subtitle}
                  </span>

                  <h3 className="font-serif text-xl font-medium text-brand-obsidian mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs text-brand-charcoal/80 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-stone/40 flex items-center justify-between text-[11px] uppercase tracking-wider font-semibold text-brand-earth group-hover:text-brand-terracotta transition-colors">
                  <span>Phase {index + 1}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Quote Callout */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-brand-olive text-brand-sand relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-sage font-semibold">
              The Lutroo Promise
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug">
              &ldquo;From concept sketches to final execution, we deliver clarity, precision, and elegance.&rdquo;
            </h3>
            <p className="text-xs text-brand-sand/80 font-light">
              Schedule a site visit to experience our research and empathy-led process firsthand.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-8 py-4 rounded-full bg-brand-sand text-brand-obsidian text-xs uppercase font-semibold tracking-wider hover:bg-brand-terracotta hover:text-brand-cream transition-colors shadow-lg"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
