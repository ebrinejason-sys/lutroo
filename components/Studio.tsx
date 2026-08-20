import Image from 'next/image';
import { pillars, studio } from '@/lib/site';

export default function Studio() {
  return (
    <section id="studio" className="bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <header className="grid gap-6 md:grid-cols-12">
          <p className="label md:col-span-3">The studio</p>
          <h2 className="font-display text-3xl font-light leading-[1.15] text-ink md:col-span-9 sm:text-4xl lg:text-5xl">
            A well-designed environment can calm, inspire and energize — shaping how people feel,
            think and connect.
          </h2>
        </header>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden md:col-span-5">
            <Image
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
              alt="A quiet interior corner with linen upholstery and natural light"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 md:col-span-7">
            <p className="max-w-readable text-base leading-relaxed text-graphite">
              {studio.summary}
            </p>
            <p className="max-w-readable text-base leading-relaxed text-graphite">
              Our process blends research, empathy and artistry, so each design reflects the
              client&rsquo;s lifestyle, culture and aspirations. From concept sketches to final
              execution we deliver clarity, precision and elegance — across residential
              sanctuaries and commercial spaces alike.
            </p>

            <div className="mt-4 border-t border-linen pt-8">
              <p className="label">Our philosophy</p>
              <p className="mt-3 font-display text-3xl font-light italic text-ink sm:text-4xl">
                {studio.tagline}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden border-t border-linen md:mt-28 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article key={pillar.title} className="border-b border-linen py-10 md:border-b-0 md:pr-10">
              <p className="label text-sage">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-4 font-display text-2xl font-normal text-ink">{pillar.title}</h3>
              <p className="mt-3 max-w-readable text-sm leading-relaxed text-graphite">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
