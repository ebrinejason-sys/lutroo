'use client';

import React, { useState } from 'react';
import { Sparkles, Calculator, CheckCircle2, ArrowRight, RotateCcw, Send } from 'lucide-react';

export default function SpacePlanner() {
  const [step, setStep] = useState(1);
  const [spaceType, setSpaceType] = useState('Residential Sanctuary');
  const [sqft, setSqft] = useState(1200);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Interior Design',
    'Spatial Optimization',
  ]);
  const [submitted, setSubmitted] = useState(false);

  const spaceTypes = [
    { name: 'Residential Sanctuary', icon: '🏡', desc: 'Apartment, Villa, or Private Residence' },
    { name: 'Outdoor Landscape', icon: '🌿', desc: 'Garden, Courtyard, or Estate Grounds' },
    { name: 'Brand & Commercial Space', icon: '🏢', desc: 'Restaurant, Boutique Office, or Hotel' },
    { name: 'Site Advisory Only', icon: '📍', desc: 'On-site Assessment & Recommendations' },
  ];

  const availableServices = [
    'Interior Design',
    'Landscape Planning',
    'Spatial Optimization',
    'Brand Space Design',
    'Site Visits',
  ];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== service));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSpaceType('Residential Sanctuary');
    setSqft(1200);
    setSelectedServices(['Interior Design', 'Spatial Optimization']);
    setSubmitted(false);
  };

  const estimatedWeeks = Math.max(2, Math.round(sqft / 400) + selectedServices.length);

  return (
    <section id="planner" className="py-24 bg-brand-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-stone/60 text-brand-olive text-xs uppercase tracking-[0.2em] font-medium backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-terracotta" />
            <span>Smart Space Estimator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-brand-obsidian">
            Interactive <span className="italic font-light text-brand-earth">Consultation Planner</span>
          </h2>
          <p className="text-sm text-brand-charcoal/80 font-light leading-relaxed">
            Configure your project parameters below to generate a tailored design scope and instant consultation summary.
          </p>
        </div>

        {/* Multi-step Planner Card */}
        <div className="bg-brand-cream rounded-3xl p-8 md:p-12 border border-brand-stone/70 shadow-2xl max-w-4xl mx-auto relative">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-brand-stone/50">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                    step === s
                      ? 'bg-brand-olive text-brand-sand shadow-md'
                      : step > s
                      ? 'bg-brand-sage text-white'
                      : 'bg-brand-stone/50 text-brand-charcoal'
                  }`}
                >
                  {step > s ? '✓' : s}
                </div>
                <span className="text-xs font-medium text-brand-obsidian hidden sm:inline">
                  {s === 1 ? 'Space Type' : s === 2 ? 'Scale & Services' : 'Summary & Request'}
                </span>
              </div>
            ))}
          </div>

          {!submitted ? (
            <div>
              {/* Step 1: Space Type Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl font-medium text-brand-obsidian">
                    Select Your Space Category
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {spaceTypes.map((st) => (
                      <button
                        key={st.name}
                        onClick={() => setSpaceType(st.name)}
                        className={`p-6 rounded-2xl border text-left transition-all ${
                          spaceType === st.name
                            ? 'bg-brand-sand border-brand-olive ring-2 ring-brand-olive/20 shadow-md'
                            : 'bg-brand-cream border-brand-stone/60 hover:bg-brand-sand/50'
                        }`}
                      >
                        <span className="text-3xl block mb-2">{st.icon}</span>
                        <h4 className="font-serif text-lg font-semibold text-brand-obsidian">
                          {st.name}
                        </h4>
                        <p className="text-xs text-brand-charcoal/80 font-light mt-1">
                          {st.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                  <div className="pt-6 flex justify-end">
                    <button
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-obsidian text-brand-cream text-xs uppercase font-semibold tracking-wider hover:bg-brand-terracotta transition-colors"
                    >
                      <span>Next: Scale & Services</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Scale & Services Selection */}
              {step === 2 && (
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="font-serif text-xl font-medium text-brand-obsidian">
                        Approximate Floor / Plot Area (sq. ft.)
                      </label>
                      <span className="text-lg font-serif font-bold text-brand-terracotta">
                        {sqft.toLocaleString()} sq. ft.
                      </span>
                    </div>
                    <input
                      type="range"
                      min="200"
                      max="10000"
                      step="100"
                      value={sqft}
                      onChange={(e) => setSqft(Number(e.target.value))}
                      className="w-full h-2 bg-brand-stone rounded-lg appearance-none cursor-pointer accent-brand-olive"
                    />
                    <div className="flex justify-between text-[11px] text-brand-charcoal/70 mt-1">
                      <span>200 sq. ft. (Boutique Room)</span>
                      <span>10,000+ sq. ft. (Large Estate/Hotel)</span>
                    </div>
                  </div>

                  <div>
                    <label className="font-serif text-xl font-medium text-brand-obsidian block mb-3">
                      Select Required Services
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {availableServices.map((service) => {
                        const isSelected = selectedServices.includes(service);
                        return (
                          <button
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`p-4 rounded-xl border text-left flex items-center justify-between text-xs font-semibold uppercase tracking-wider transition-all ${
                              isSelected
                                ? 'bg-brand-olive text-brand-sand border-brand-olive shadow-sm'
                                : 'bg-brand-sand text-brand-charcoal border-brand-stone/60 hover:bg-brand-stone/40'
                            }`}
                          >
                            <span>{service}</span>
                            <CheckCircle2
                              className={`w-4 h-4 ${
                                isSelected ? 'text-brand-sage' : 'opacity-30'
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      onClick={() => setStep(1)}
                      className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal hover:text-brand-terracotta"
                    >
                      &larr; Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-obsidian text-brand-cream text-xs uppercase font-semibold tracking-wider hover:bg-brand-terracotta transition-colors"
                    >
                      <span>Review Consultation Scope</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Summary & Submission */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl font-medium text-brand-obsidian">
                    Project Brief Summary
                  </h3>

                  <div className="p-6 rounded-2xl bg-brand-sand border border-brand-stone/70 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-brand-stone/60">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-sage font-semibold block">
                          Space Category
                        </span>
                        <span className="font-serif text-base font-semibold text-brand-obsidian">
                          {spaceType}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-sage font-semibold block">
                          Scale
                        </span>
                        <span className="font-serif text-base font-semibold text-brand-obsidian">
                          ~{sqft.toLocaleString()} sq. ft.
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-sage font-semibold block">
                          Estimated Timeline
                        </span>
                        <span className="font-serif text-base font-semibold text-brand-terracotta">
                          {estimatedWeeks} Weeks Concept to Plan
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-brand-sage font-semibold block mb-2">
                        Included Service Modules
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedServices.map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1 rounded-full bg-brand-cream border border-brand-stone text-xs font-medium text-brand-obsidian"
                          >
                            ✓ {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Contact Inputs */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-4 pt-2"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        className="w-full px-4 py-3 rounded-xl bg-brand-sand border border-brand-stone/70 text-xs focus:outline-none focus:ring-2 focus:ring-brand-olive text-brand-obsidian placeholder:text-brand-charcoal/50"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address (e.g. client@domain.com)"
                        className="w-full px-4 py-3 rounded-xl bg-brand-sand border border-brand-stone/70 text-xs focus:outline-none focus:ring-2 focus:ring-brand-olive text-brand-obsidian placeholder:text-brand-charcoal/50"
                      />
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone Number (e.g. +25670745645)"
                      className="w-full px-4 py-3 rounded-xl bg-brand-sand border border-brand-stone/70 text-xs focus:outline-none focus:ring-2 focus:ring-brand-olive text-brand-obsidian placeholder:text-brand-charcoal/50"
                    />

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal hover:text-brand-terracotta"
                      >
                        &larr; Modify Parameters
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-olive text-brand-sand text-xs uppercase font-semibold tracking-wider hover:bg-brand-charcoal transition-colors shadow-lg"
                      >
                        <Send className="w-4 h-4 text-brand-sage" />
                        <span>Send Consultation Request</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12 space-y-6 animate-in fade-in duration-500">
              <div className="w-16 h-16 rounded-full bg-brand-sage/20 text-brand-moss flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-3xl font-medium text-brand-obsidian">
                Consultation Request Received!
              </h3>

              <p className="text-sm text-brand-charcoal/80 max-w-md mx-auto font-light leading-relaxed">
                Thank you for submitting your project brief. A senior Lutroo Spaces design director will review your ~{sqft} sq. ft. {spaceType} requirements and respond within 24 hours.
              </p>

              <div className="p-4 rounded-xl bg-brand-sand border border-brand-stone/60 inline-block text-xs text-brand-obsidian font-medium">
                Direct Contact: +25670745645 • lutroospaces@gmail.com
              </div>

              <div>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-stone/50 text-brand-obsidian text-xs uppercase font-semibold tracking-wider hover:bg-brand-stone transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Configure Another Project</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
