import { phases } from '@/lib/site';

export default function Approach() {
  return (
    <section id="approach" className="bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <header className="grid gap-6 md:grid-cols-12">
          <p className="label md:col-span-3">Our approach</p>
          <div className="md:col-span-9">
            <h2 className="font-display text-3xl font-light leading-[1.15] text-ink sm:text-4xl lg:text-5xl">
              Every space tells a story. Our job is to listen first and draw second.
            </h2>
            <p className="mt-6 max-w-readable text-base leading-relaxed text-graphite">
              Research, empathy and artistry, applied in that order. Four phases take a project
              from a first walkthrough to a finished room, with nothing left to interpretation on
              site.
            </p>
          </div>
        </header>

        <ol className="mt-16 grid border-t border-linen md:mt-24 md:grid-cols-4">
          {phases.map((phase) => (
            <li
              key={phase.number}
              className="border-b border-linen py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <p className="font-display text-4xl font-light text-sage">{phase.number}</p>
              <h3 className="mt-5 font-display text-2xl font-normal text-ink">{phase.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite">{phase.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20 bg-forest px-8 py-14 text-bone md:mt-28 md:px-16 md:py-20">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <blockquote className="md:col-span-8">
              <p className="label text-sage">The Lutroo promise</p>
              <p className="mt-5 font-display text-2xl font-light leading-snug sm:text-3xl lg:text-4xl">
                &ldquo;From concept sketches to final execution, we deliver clarity, precision and
                elegance.&rdquo;
              </p>
            </blockquote>

            <div className="md:col-span-4 md:text-right">
              <a
                href="#contact"
                className="inline-block rounded-full bg-bone px-8 py-4 text-[11px] uppercase tracking-label text-ink transition-colors hover:bg-sand"
              >
                Book a site visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
