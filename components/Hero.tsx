import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { contact, studio } from '@/lib/site';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80"
        alt="An open living space in warm timber opening onto a planted terrace"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Two layers: a flat wash to hold light photography, plus a vertical
          ramp so the headline and footer copy always clear contrast. */}
      <div className="absolute inset-0 bg-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/85" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-14 pt-32 md:px-10">
        <p className="label animate-rise text-bone/80">
          {studio.discipline} · {contact.location}
        </p>

        <h1 className="animate-rise mt-6 max-w-5xl font-display text-[2.75rem] font-light leading-[1.05] text-bone sm:text-6xl lg:text-[5.25rem]">
          Every space has the ability to{' '}
          <em className="font-normal italic text-sand">affect the mind.</em>
        </h1>

        <div className="mt-10 grid gap-10 border-t border-bone/20 pt-8 md:grid-cols-12">
          <p className="animate-rise max-w-readable text-sm leading-relaxed text-bone/90 md:col-span-6 lg:text-base">
            We design wellness-focused interiors and landscapes that blend functionality,
            aesthetics and emotional balance — environments that inspire calm, creativity and
            connection.
          </p>

          <div className="animate-rise flex flex-wrap items-start gap-3 md:col-span-6 md:justify-end">
            <a
              href="#planner"
              className="rounded-full bg-bone px-8 py-4 text-[11px] uppercase tracking-label text-ink transition-colors hover:bg-sand"
            >
              Plan your space
            </a>
            <a
              href="#work"
              className="rounded-full border border-bone/50 px-8 py-4 text-[11px] uppercase tracking-label text-bone transition-colors hover:bg-bone hover:text-ink"
            >
              See our work
            </a>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-bone/20 pt-6">
          <p className="font-script text-xl text-bone/80">{studio.tagline}</p>
          <a
            href="#studio"
            aria-label="Scroll to studio introduction"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/40 text-bone transition-colors hover:bg-bone hover:text-ink"
          >
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
