'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, X, Sparkles, Filter, Check } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Mirage Wellness Sanctuary',
      category: 'Residential',
      location: 'Private Residential Villa',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Warm • Modern • Timeless',
      description:
        'An organic interior architecture project featuring raw stone accents, floor-to-ceiling natural light diffusion, and bespoke linen furnishings that instill profound emotional calm.',
      highlights: [
        'Biophilic indoor garden court',
        'Custom acoustic wood ceiling paneling',
        'Natural travertine stone surfaces',
      ],
    },
    {
      id: 2,
      title: 'Stonehaven Botanical Courtyard',
      category: 'Landscape',
      location: 'Private Estate',
      image:
        'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Eco-Responsive Outdoor Living',
      description:
        'Inspired by Makao Kwetu landscape principles, this project integrates indigenous drought-tolerant flora, sunken fire pits, stone walkways, and subtle night mood lighting.',
      highlights: [
        '100% native plant species selection',
        'Rainwater harvesting irrigation',
        'Permeable natural stone pathways',
      ],
    },
    {
      id: 3,
      title: 'Lofty Skies Boutique Retreat',
      category: 'Commercial',
      location: 'Boutique Hotel & Lounge',
      image:
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Architecture Meets Human Presence',
      description:
        'A hospitality brand space designed to foster connection. Features ergonomic spatial flow, acoustic zoning for quiet conversations, and earthy tone palettes.',
      highlights: [
        'Spatial traffic optimization for 200+ guests',
        'Custom bronze & timber bar counter',
        'Integrated ambient light zones',
      ],
    },
    {
      id: 4,
      title: 'Serenita Mindful Workspace',
      category: 'Commercial',
      location: 'Creative Agency Studio',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Calm, Focused & Collaborative',
      description:
        'Transforming a corporate office into a high-performance wellness sanctuary with biophilic plant partitions, standing research desks, and meditation break pods.',
      highlights: [
        'Air-purifying botanical wall installation',
        'Circadian rhythm LED lighting',
        'Modular collaborative spatial layouts',
      ],
    },
    {
      id: 5,
      title: 'Aura Living Pavilion',
      category: 'Residential',
      location: 'Luxury Penthouse',
      image:
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Spaces That Breathe',
      description:
        'Unifying indoor comfort with sweeping outdoor terraces through frameless sliding glass doors, organic earth-tone plaster walls, and custom low-slung seating.',
      highlights: [
        'Custom micro-cement wall finishes',
        'Seamless indoor-outdoor terrace flow',
        'Integrated smart shade automation',
      ],
    },
    {
      id: 6,
      title: 'Verdant Hillside Gardens',
      category: 'Landscape',
      location: 'Eco Sanctuary Hillside',
      image:
        'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Restoring Natural Harmony',
      description:
        'Terraced botanical planning utilizing local volcanic stone retainers, aromatic native lavender and sage, and contemplative water reflection basins.',
      highlights: [
        'Soil erosion stabilization with native fauna',
        'Cascading solar-powered water basin',
        'Contemplative outdoor yoga deck',
      ],
    },
  ];

  const categories = ['All', 'Residential', 'Landscape', 'Commercial'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-brand-stone pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-brand-sage font-semibold">
              ✨ Curated Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-brand-obsidian mt-2">
              Featured <span className="italic font-light text-brand-earth">Sanctuaries & Landscapes</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter className="w-4 h-4 text-brand-earth mr-2 shrink-0 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all whitespace-nowrap ${
                  filter === cat
                    ? 'bg-brand-obsidian text-brand-cream shadow-md'
                    : 'bg-brand-stone/40 text-brand-charcoal hover:bg-brand-stone/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className="group cursor-pointer bg-brand-sand rounded-2xl overflow-hidden border border-brand-stone/60 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian/80 via-brand-obsidian/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-cream/90 backdrop-blur-md text-brand-obsidian text-[10px] font-semibold uppercase tracking-wider">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-brand-sand/90 backdrop-blur-md text-brand-obsidian flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4 text-brand-terracotta" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-brand-sand">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brand-sage font-medium">
                    {project.location}
                  </span>
                  <h3 className="font-serif text-xl font-medium mt-0.5">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <p className="text-xs font-serif italic text-brand-earth font-medium">
                  &ldquo;{project.tagline}&rdquo;
                </p>
                <p className="text-xs text-brand-charcoal/80 font-light line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-2 flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold text-brand-terracotta group-hover:underline">
                  <span>Explore Project Story</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox for Project Details */}
        {selectedProject !== null && (
          <div className="fixed inset-0 z-50 bg-brand-obsidian/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
            {(() => {
              const proj = projects.find((p) => p.id === selectedProject);
              if (!proj) return null;

              return (
                <div className="bg-brand-cream rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-brand-stone relative max-h-[90vh] overflow-y-auto">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-brand-obsidian/80 text-brand-cream flex items-center justify-center hover:bg-brand-terracotta transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="relative h-72 sm:h-96 w-full">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-brand-sand">
                      <span className="text-xs uppercase tracking-[0.2em] text-brand-sage font-semibold">
                        {proj.category} • {proj.location}
                      </span>
                      <h3 className="font-serif text-3xl font-medium mt-1">
                        {proj.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-8 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-stone/60 text-brand-earth text-xs font-semibold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-brand-terracotta" />
                      <span>{proj.tagline}</span>
                    </div>

                    <p className="text-sm text-brand-charcoal leading-relaxed font-light">
                      {proj.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-sage block">
                        Project Design Highlights:
                      </span>
                      <div className="space-y-2">
                        {proj.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-3 text-xs text-brand-obsidian font-medium">
                            <div className="w-5 h-5 rounded-full bg-brand-sage/20 text-brand-moss flex items-center justify-center shrink-0">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-brand-stone/60 flex items-center justify-between">
                      <a
                        href="#planner"
                        onClick={() => setSelectedProject(null)}
                        className="px-6 py-3 rounded-full bg-brand-olive text-brand-sand text-xs uppercase font-semibold tracking-wider hover:bg-brand-charcoal transition-colors"
                      >
                        Request Similar Concept
                      </a>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-xs uppercase tracking-wider text-brand-charcoal font-semibold hover:text-brand-terracotta"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
}
