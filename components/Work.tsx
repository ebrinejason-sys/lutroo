'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projectCategories, projects, type Project } from '@/lib/site';

export default function Work() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>('All');
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <header className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="label">Selected work</p>
            <h2 className="mt-6 font-display text-3xl font-light leading-[1.15] text-ink sm:text-4xl lg:text-5xl">
              Sanctuaries, landscapes and the spaces brands are remembered for.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 md:col-span-5 md:justify-end">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
                className={`rounded-full border px-5 py-2.5 text-[11px] uppercase tracking-label transition-colors ${
                  filter === category
                    ? 'border-ink bg-ink text-bone'
                    : 'border-linen text-graphite hover:border-ink hover:text-ink'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </header>

        <div className="mt-16 space-y-16 md:mt-24 md:space-y-28">
          {visible.map((project, index) => (
            <article
              key={project.id}
              className="animate-fade grid gap-8 md:grid-cols-12 md:items-center md:gap-16"
            >
              <ProjectMedia
                project={project}
                className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}
              />

              <div className="md:col-span-5">
                <p className="label">
                  {project.category} · {project.year}
                </p>
                <h3 className="mt-4 font-display text-3xl font-light text-ink sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-2 font-display text-xl font-light text-clay">
                  {project.statement}
                </p>
                <p className="mt-5 max-w-readable text-sm leading-relaxed text-graphite">
                  {project.description}
                </p>

                <ul className="mt-6 space-y-2 border-t border-linen pt-6">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm text-graphite before:mt-2 before:h-px before:w-4 before:shrink-0 before:bg-sage before:content-['']"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-xs uppercase tracking-label text-graphite">
                  {project.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectMedia({ project, className }: { project: Project; className?: string }) {
  const shots = project.gallery ?? [project.image];
  const [activeIndex, setActiveIndex] = useState(0);
  const active = shots[activeIndex];
  const dense = shots.length > 4;

  const show = (index: number) => {
    setActiveIndex((index + shots.length) % shots.length);
  };

  return (
    <div className={className}>
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-linen">
        <Image
          key={active}
          src={active}
          alt={`${project.title} — view ${activeIndex + 1} of ${shots.length}`}
          fill
          sizes="(min-width: 768px) 58vw, 100vw"
          className="animate-fade object-cover"
        />
        {shots.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => show(activeIndex - 1)}
              aria-label={`Previous image of ${project.title}`}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-bone/85 text-ink backdrop-blur-sm transition-colors hover:bg-bone"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => show(activeIndex + 1)}
              aria-label={`Next image of ${project.title}`}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-bone/85 text-ink backdrop-blur-sm transition-colors hover:bg-bone"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <p className="absolute bottom-3 right-3 rounded-full bg-ink/70 px-3 py-1 text-[10px] uppercase tracking-label text-bone backdrop-blur-sm">
              {activeIndex + 1} / {shots.length}
            </p>
          </>
        )}
      </div>
      {shots.length > 1 && (
        <div
          className={
            dense
              ? 'mt-3 flex gap-2 overflow-x-auto no-scrollbar sm:grid sm:grid-cols-5 sm:overflow-visible'
              : 'mt-3 grid grid-cols-3 gap-3'
          }
        >
          {shots.map((src, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
                aria-label={`View image ${index + 1} of ${project.title}`}
                className={`relative aspect-[4/3] overflow-hidden bg-linen ${
                  dense ? 'w-[4.5rem] shrink-0 sm:w-auto' : ''
                } ${isActive ? 'ring-1 ring-ink' : 'opacity-70 hover:opacity-100'}`}
              >
                <Image src={src} alt="" fill sizes="18vw" className="object-cover" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
