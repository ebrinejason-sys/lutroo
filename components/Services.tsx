'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Minus, Plus } from 'lucide-react';
import { services } from '@/lib/site';

export default function Services() {
  const [openId, setOpenId] = useState<string>(services[0].id);
  const active = services.find((service) => service.id === openId) ?? services[0];

  return (
    <section id="services" className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <header className="grid gap-6 md:grid-cols-12">
          <p className="label md:col-span-3">Services</p>
          <div className="md:col-span-9">
            <h2 className="font-display text-3xl font-light leading-[1.15] text-ink sm:text-4xl lg:text-5xl">
              Five disciplines, one continuous conversation about how a space should feel.
            </h2>
          </div>
        </header>

        <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-16">
          <div className="hidden md:col-span-5 md:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-linen">
                <Image
                  key={active.id}
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="40vw"
                  className="animate-fade object-cover"
                />
              </div>
              <p className="label mt-4">
                {active.index} — {active.title}
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <ul className="border-t border-linen">
              {services.map((service) => {
                const isOpen = service.id === openId;
                return (
                  <li key={service.id} className="border-b border-linen">
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? '' : service.id)}
                        aria-expanded={isOpen}
                        aria-controls={`service-panel-${service.id}`}
                        className="group flex w-full items-start gap-5 py-7 text-left"
                      >
                        <span className="label mt-1.5 shrink-0 text-sage">{service.index}</span>
                        <span className="flex-1">
                          <span className="block font-display text-2xl font-normal text-ink transition-colors group-hover:text-clay sm:text-3xl">
                            {service.title}
                          </span>
                          <span className="mt-2 block max-w-readable text-sm leading-relaxed text-graphite">
                            {service.description}
                          </span>
                        </span>
                        <span
                          aria-hidden
                          className="mt-1.5 shrink-0 text-graphite transition-colors group-hover:text-ink"
                        >
                          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </span>
                      </button>
                    </h3>

                    {isOpen && (
                      <div
                        id={`service-panel-${service.id}`}
                        className="animate-fade pb-9 pl-0 sm:pl-[3.25rem]"
                      >
                        <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden bg-linen md:hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="100vw"
                            className="object-cover"
                          />
                        </div>

                        <p className="max-w-readable text-sm leading-relaxed text-graphite">
                          {service.detail}
                        </p>

                        <p className="label mt-7">What you receive</p>
                        <ul className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm text-graphite before:mt-2 before:h-px before:w-4 before:shrink-0 before:bg-sage before:content-['']"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>

                        <a
                          href="#planner"
                          className="mt-7 inline-block rounded-full border border-ink px-6 py-3 text-[11px] uppercase tracking-label text-ink transition-colors hover:bg-ink hover:text-bone"
                        >
                          Enquire about {service.title}
                        </a>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
