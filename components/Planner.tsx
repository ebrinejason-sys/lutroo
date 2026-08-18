'use client';

import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, RotateCcw } from 'lucide-react';
import { services, spaceTypes } from '@/lib/site';
import { buildEnquiry, estimateTimeline, mailtoHref, whatsappHref, type Brief } from '@/lib/enquiry';

const STEPS = ['Space', 'Scope', 'Details'] as const;

export default function Planner() {
  const [step, setStep] = useState(0);
  const [spaceType, setSpaceType] = useState<string>(spaceTypes[0].title);
  const [areaSqm, setAreaSqm] = useState(120);
  const [selected, setSelected] = useState<string[]>([services[0].title, services[2].title]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const brief: Brief = useMemo(
    () => ({ name, email, phone, spaceType, areaSqm, services: selected, message }),
    [name, email, phone, spaceType, areaSqm, selected, message]
  );

  const timeline = estimateTimeline(areaSqm, selected.length);

  const toggleService = (title: string) =>
    setSelected((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title]
    );

  const reset = () => {
    setStep(0);
    setSent(false);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <section id="planner" className="bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <header className="grid gap-6 md:grid-cols-12">
          <p className="label md:col-span-3">Project planner</p>
          <div className="md:col-span-9">
            <h2 className="font-display text-3xl font-light leading-[1.15] text-ink sm:text-4xl lg:text-5xl">
              Tell us about the space. We&rsquo;ll come back with a scope.
            </h2>
            <p className="mt-6 max-w-readable text-base leading-relaxed text-graphite">
              Three short steps build a brief we can act on, along with an indicative programme
              for the design stage. Nothing here is a quotation — it is a starting point for the
              conversation.
            </p>
          </div>
        </header>

        <div className="mx-auto mt-16 max-w-4xl border border-linen bg-sand p-6 sm:p-10 md:mt-20 md:p-14">
          {sent ? (
            <Confirmation brief={brief} onReset={reset} />
          ) : (
            <>
              <ol className="mb-10 flex items-center gap-3 border-b border-linen pb-6 text-[11px] uppercase tracking-label">
                {STEPS.map((label, index) => (
                  <li key={label} className="flex items-center gap-3">
                    <span
                      className={
                        index === step
                          ? 'text-ink'
                          : index < step
                            ? 'text-sage'
                            : 'text-graphite/50'
                      }
                    >
                      {String(index + 1).padStart(2, '0')} {label}
                    </span>
                    {index < STEPS.length - 1 && (
                      <span aria-hidden className="h-px w-6 bg-linen sm:w-10" />
                    )}
                  </li>
                ))}
              </ol>

              {step === 0 && (
                <fieldset className="animate-fade">
                  <legend className="font-display text-2xl font-normal text-ink">
                    What are we designing?
                  </legend>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {spaceTypes.map((type) => {
                      const isActive = spaceType === type.title;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setSpaceType(type.title)}
                          aria-pressed={isActive}
                          className={`border p-6 text-left transition-colors ${
                            isActive
                              ? 'border-ink bg-bone'
                              : 'border-linen bg-bone/40 hover:border-graphite'
                          }`}
                        >
                          <span className="block font-display text-xl text-ink">{type.title}</span>
                          <span className="mt-1 block text-sm text-graphite">{type.detail}</span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              )}

              {step === 1 && (
                <div className="animate-fade space-y-10">
                  <div>
                    <label
                      htmlFor="area"
                      className="flex items-baseline justify-between font-display text-2xl font-normal text-ink"
                    >
                      Approximate area
                      <span className="font-sans text-sm tracking-label text-clay">
                        {areaSqm.toLocaleString('en-GB')} m²
                      </span>
                    </label>
                    <input
                      id="area"
                      type="range"
                      min={20}
                      max={1000}
                      step={10}
                      value={areaSqm}
                      onChange={(event) => setAreaSqm(Number(event.target.value))}
                      className="mt-6 w-full accent-forest"
                    />
                    <div className="mt-2 flex justify-between text-xs text-graphite">
                      <span>20 m²</span>
                      <span>1,000 m²+</span>
                    </div>
                  </div>

                  <fieldset>
                    <legend className="font-display text-2xl font-normal text-ink">
                      Which services do you need?
                    </legend>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {services.map((service) => {
                        const isActive = selected.includes(service.title);
                        return (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => toggleService(service.title)}
                            aria-pressed={isActive}
                            className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[11px] uppercase tracking-label transition-colors ${
                              isActive
                                ? 'border-forest bg-forest text-bone'
                                : 'border-linen text-graphite hover:border-ink hover:text-ink'
                            }`}
                          >
                            {isActive && <Check className="h-3.5 w-3.5" />}
                            {service.title}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <p className="border-t border-linen pt-6 text-sm text-graphite">
                    Indicative design programme:{' '}
                    <span className="text-ink">
                      {timeline.min}–{timeline.max} weeks
                    </span>{' '}
                    from concept to documented design.
                  </p>
                </div>
              )}

              {step === 2 && (
                <form
                  className="animate-fade space-y-8"
                  onSubmit={(event) => {
                    event.preventDefault();
                    window.location.href = mailtoHref(brief);
                    setSent(true);
                  }}
                >
                  <div>
                    <h3 className="font-display text-2xl font-normal text-ink">Your brief</h3>
                    <dl className="mt-6 grid gap-4 border-y border-linen py-6 sm:grid-cols-3">
                      <div>
                        <dt className="label">Space</dt>
                        <dd className="mt-1 text-sm text-ink">{spaceType}</dd>
                      </div>
                      <div>
                        <dt className="label">Area</dt>
                        <dd className="mt-1 text-sm text-ink">
                          {areaSqm.toLocaleString('en-GB')} m²
                        </dd>
                      </div>
                      <div>
                        <dt className="label">Programme</dt>
                        <dd className="mt-1 text-sm text-ink">
                          {timeline.min}–{timeline.max} weeks
                        </dd>
                      </div>
                      <div className="sm:col-span-3">
                        <dt className="label">Services</dt>
                        <dd className="mt-1 text-sm text-ink">
                          {selected.length ? selected.join(', ') : 'To be discussed'}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      id="planner-name"
                      label="Full name"
                      value={name}
                      onChange={setName}
                      required
                      autoComplete="name"
                    />
                    <Field
                      id="planner-email"
                      label="Email"
                      type="email"
                      value={email}
                      onChange={setEmail}
                      required
                      autoComplete="email"
                    />
                  </div>

                  <Field
                    id="planner-phone"
                    label="Phone (optional)"
                    type="tel"
                    value={phone}
                    onChange={setPhone}
                    autoComplete="tel"
                  />

                  <div>
                    <label htmlFor="planner-message" className="label">
                      Anything else we should know?
                    </label>
                    <textarea
                      id="planner-message"
                      rows={4}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      className="mt-2 w-full resize-none border border-linen bg-bone px-4 py-3 text-sm text-ink placeholder:text-graphite/60"
                      placeholder="Timelines, budget range, how you want the space to feel…"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-linen pt-8">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-label text-graphite transition-colors hover:text-ink"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-[11px] uppercase tracking-label text-bone transition-colors hover:bg-ink"
                    >
                      Send brief
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}

              {step < 2 && (
                <div className="mt-10 flex items-center justify-between border-t border-linen pt-8">
                  <button
                    type="button"
                    onClick={() => setStep((current) => Math.max(0, current - 1))}
                    disabled={step === 0}
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-label text-graphite transition-colors hover:text-ink disabled:invisible"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep((current) => Math.min(2, current + 1))}
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-[11px] uppercase tracking-label text-bone transition-colors hover:bg-forest"
                  >
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = 'text',
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full border border-linen bg-bone px-4 py-3 text-sm text-ink placeholder:text-graphite/60"
      />
    </div>
  );
}

function Confirmation({ brief, onReset }: { brief: Brief; onReset: () => void }) {
  const { body } = buildEnquiry(brief);

  return (
    <div className="animate-fade py-6 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-sage text-sage">
        <Check className="h-6 w-6" />
      </div>

      <h3 className="mt-8 font-display text-3xl font-light text-ink">Your brief is ready</h3>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-graphite">
        We&rsquo;ve opened an email addressed to the studio with your brief attached. If your mail
        app didn&rsquo;t open, send it over WhatsApp instead — we reply to both within a day.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={whatsappHref(brief)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-forest px-8 py-4 text-[11px] uppercase tracking-label text-bone transition-colors hover:bg-ink"
        >
          Send on WhatsApp
        </a>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-full border border-ink px-8 py-4 text-[11px] uppercase tracking-label text-ink transition-colors hover:bg-ink hover:text-bone"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Start again
        </button>
      </div>

      <details className="mx-auto mt-10 max-w-md text-left">
        <summary className="cursor-pointer text-[11px] uppercase tracking-label text-graphite hover:text-ink">
          View brief
        </summary>
        <pre className="mt-4 whitespace-pre-wrap border border-linen bg-bone p-5 text-left text-xs leading-relaxed text-graphite">
          {body}
        </pre>
      </details>
    </div>
  );
}
