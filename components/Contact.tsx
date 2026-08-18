'use client';

import React, { useState } from 'react';
import { Phone, Mail, Clock, Send, CheckCircle2, ChevronDown } from 'lucide-react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do I schedule an on-site consultation?',
      a: 'You can reach us directly at +25670745645, email lutroospaces@gmail.com, or use our interactive Space Planner to submit a project brief. Our team will coordinate a convenient site visit.',
    },
    {
      q: 'What types of projects does Lutroo Spaces specialize in?',
      a: 'We specialize in residential sanctuaries, biophilic outdoor landscape planning, commercial brand environments (offices, hospitality, restaurants), and spatial flow optimization.',
    },
    {
      q: 'What is Lutroo Spaces design philosophy?',
      a: 'Our philosophy — Design, Innovate, Elevate — guides every project. We blend research, empathy, and artistry to ensure each space promotes well-being and emotional balance.',
    },
    {
      q: 'Do you offer site visits before starting a full design project?',
      a: 'Yes! Professional on-site consultations and assessments are one of our core standalone services. We evaluate sunlight, airflow, traffic flow, and offer immediate actionable recommendations.',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-sage font-semibold">
            💬 Get in Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-brand-obsidian">
            Let’s Bring Your <span className="italic font-light text-brand-earth">Vision to Life</span>
          </h2>
          <p className="text-sm text-brand-charcoal/80 font-light leading-relaxed">
            Reach out to schedule an on-site consultation or discuss your interior architecture and landscape aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-brand-sand border border-brand-stone/70 shadow-lg space-y-6">
              <h3 className="font-serif text-2xl font-medium text-brand-obsidian">
                Direct Channels
              </h3>

              <div className="space-y-4">
                <a
                  href="tel:+25670745645"
                  className="p-4 rounded-2xl bg-brand-cream border border-brand-stone/60 flex items-center gap-4 hover:border-brand-sage transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-olive text-brand-sand flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-brand-sage" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-sage block">
                      Call or WhatsApp
                    </span>
                    <span className="font-serif text-base font-semibold text-brand-obsidian">
                      +256 707 456 45
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:lutroospaces@gmail.com"
                  className="p-4 rounded-2xl bg-brand-cream border border-brand-stone/60 flex items-center gap-4 hover:border-brand-sage transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-olive text-brand-sand flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-brand-sage" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-sage block">
                      Email Us
                    </span>
                    <span className="font-serif text-base font-semibold text-brand-obsidian">
                      lutroospaces@gmail.com
                    </span>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-brand-cream border border-brand-stone/60 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-olive text-brand-sand flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-brand-sage" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-sage block">
                      Studio Hours
                    </span>
                    <span className="font-serif text-sm font-medium text-brand-obsidian">
                      Mon - Sat: 8:00 AM - 6:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Motto Banner */}
            <div className="p-8 rounded-3xl bg-brand-olive text-brand-sand shadow-xl space-y-2">
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-brand-sage">
                Design • Innovate • Elevate
              </span>
              <p className="font-serif text-lg font-light italic leading-relaxed">
                &ldquo;A well‑designed environment can calm, inspire, and energize — shaping how people feel, think, and connect.&rdquo;
              </p>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-7 bg-brand-sand rounded-3xl p-8 md:p-12 border border-brand-stone/70 shadow-2xl">
            <h3 className="font-serif text-2xl font-medium text-brand-obsidian mb-2">
              Schedule a Consultation
            </h3>
            <p className="text-xs text-brand-charcoal/80 font-light mb-8">
              Fill out the form below and our design team will contact you promptly.
            </p>

            {!formSubmitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-brand-obsidian block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-brand-cream border border-brand-stone/70 text-xs focus:outline-none focus:ring-2 focus:ring-brand-olive text-brand-obsidian"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-brand-obsidian block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+25670745645"
                      className="w-full px-4 py-3 rounded-xl bg-brand-cream border border-brand-stone/70 text-xs focus:outline-none focus:ring-2 focus:ring-brand-olive text-brand-obsidian"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-brand-obsidian block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="lutroospaces@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-brand-cream border border-brand-stone/70 text-xs focus:outline-none focus:ring-2 focus:ring-brand-olive text-brand-obsidian"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-brand-obsidian block mb-1">
                    Service of Interest
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-brand-cream border border-brand-stone/70 text-xs focus:outline-none focus:ring-2 focus:ring-brand-olive text-brand-obsidian">
                    <option>Interior Design Sanctuary</option>
                    <option>Landscape Planning & Botanical Gardens</option>
                    <option>Spatial Optimization & Layout Re-engineering</option>
                    <option>Brand Space Design (Hospitality/Office)</option>
                    <option>On-Site Visit & Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-brand-obsidian block mb-1">
                    Project Overview / Aspirations
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your space, lifestyle goals, or timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-brand-cream border border-brand-stone/70 text-xs focus:outline-none focus:ring-2 focus:ring-brand-olive text-brand-obsidian resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-brand-obsidian text-brand-cream text-xs uppercase font-semibold tracking-wider hover:bg-brand-terracotta transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-brand-sage" />
                  <span>Send Consultation Request</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-brand-sage/20 text-brand-moss flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-medium text-brand-obsidian">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-brand-charcoal/80 max-w-sm mx-auto font-light leading-relaxed">
                  Thank you for reaching out to Lutroo Spaces. Our team will review your inquiry and connect with you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs uppercase tracking-wider font-semibold text-brand-terracotta underline"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-20 pt-12 border-t border-brand-stone/60 max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-brand-obsidian mb-8 text-center">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-brand-sand border border-brand-stone/60 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between font-serif text-base font-semibold text-brand-obsidian hover:text-brand-terracotta transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-sage transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs text-brand-charcoal/80 font-light leading-relaxed border-t border-brand-stone/40 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
