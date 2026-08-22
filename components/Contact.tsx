'use client';

import { useState } from 'react';
import { Check, ChevronDown, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { submitEnquiry } from '@/app/actions/enquiry';
import { contact, faqs, services } from '@/lib/site';
import { whatsappHref } from '@/lib/enquiry';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(services[0].title);
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const sent = status === 'sent';
  const sending = status === 'sending';

  return (
    <section id="contact" className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <header className="grid gap-6 md:grid-cols-12">
          <p className="label md:col-span-3">Get in touch</p>
          <div className="md:col-span-9">
            <h2 className="font-display text-3xl font-light leading-[1.15] text-ink sm:text-4xl lg:text-5xl">
              Let&rsquo;s bring your vision to life.
            </h2>
            <p className="mt-6 max-w-readable text-base leading-relaxed text-graphite">
              Call, write, or send a short note below to schedule a consultation. A senior designer
              reads every enquiry.
            </p>
          </div>
        </header>

        <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <ul className="border-t border-linen">
              <ChannelRow
                icon={<Phone className="h-4 w-4" />}
                label="Call or WhatsApp"
                value={contact.phoneDisplay}
                href={`tel:${contact.phone}`}
              />
              <ChannelRow
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value={contact.email}
                href={`mailto:${contact.email}`}
              />
              <ChannelRow
                icon={<MapPin className="h-4 w-4" />}
                label="Studio"
                value={contact.location}
              />
              <ChannelRow
                icon={<Clock className="h-4 w-4" />}
                label="Hours"
                value={contact.hours}
              />
            </ul>

            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full border border-ink px-8 py-4 text-[11px] uppercase tracking-label text-ink transition-colors hover:bg-ink hover:text-bone"
            >
              Message on WhatsApp
            </a>
          </div>

          <div className="md:col-span-7">
            {sent ? (
              <div className="animate-fade border border-linen bg-bone p-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-sage text-sage">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="mt-8 font-display text-2xl font-light text-ink">
                  Thank you for reaching out
                </h3>
                <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-graphite">
                  We have emailed a confirmation to you and passed your note to a senior designer.
                  If anything is urgent, reach us at {contact.email} or {contact.phoneDisplay}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setError('');
                  }}
                  className="mt-8 text-[11px] uppercase tracking-label text-graphite underline underline-offset-4 hover:text-ink"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form
                className="space-y-6 border border-linen bg-bone p-6 sm:p-10"
                onSubmit={async (event) => {
                  event.preventDefault();
                  setError('');
                  setStatus('sending');
                  const result = await submitEnquiry({
                    name,
                    email,
                    spaceType: service,
                    services: [service],
                    message,
                    source: 'contact',
                    website,
                  });
                  if (result.ok) {
                    setStatus('sent');
                    setName('');
                    setEmail('');
                    setMessage('');
                    setWebsite('');
                    return;
                  }
                  setStatus('idle');
                  setError(result.error);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="label">
                      Full name
                    </label>
                    <input
                      id="contact-name"
                      required
                      minLength={2}
                      maxLength={120}
                      autoComplete="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="mt-2 w-full border border-linen bg-sand px-4 py-3 text-sm text-ink"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="label">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      autoComplete="email"
                      maxLength={254}
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="mt-2 w-full border border-linen bg-sand px-4 py-3 text-sm text-ink"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="label">
                    Service of interest
                  </label>
                  <select
                    id="contact-service"
                    value={service}
                    onChange={(event) => setService(event.target.value)}
                    className="mt-2 w-full border border-linen bg-sand px-4 py-3 text-sm text-ink"
                  >
                    {services.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="label">
                    Your message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    minLength={8}
                    maxLength={4000}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Tell us about the space, your timeline, and how you want it to feel…"
                    className="mt-2 w-full resize-none border border-linen bg-sand px-4 py-3 text-sm text-ink placeholder:text-graphite/60"
                  />
                </div>

                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                  />
                </div>

                {error ? (
                  <p role="alert" className="text-sm leading-relaxed text-clay">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-full bg-forest px-8 py-4 text-[11px] uppercase tracking-label text-bone transition-colors hover:bg-ink disabled:cursor-wait disabled:opacity-70"
                >
                  {sending ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-24 grid gap-10 border-t border-linen pt-16 md:grid-cols-12">
          <h3 className="label md:col-span-3">Common questions</h3>
          <dl className="md:col-span-9">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className="border-b border-linen first:border-t">
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${index}`}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-xl text-ink transition-colors hover:text-clay"
                    >
                      {faq.question}
                      <ChevronDown
                        aria-hidden
                        className={`h-4 w-4 shrink-0 text-graphite transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </dt>
                  {isOpen && (
                    <dd
                      id={`faq-${index}`}
                      className="animate-fade max-w-readable pb-7 text-sm leading-relaxed text-graphite"
                    >
                      {faq.answer}
                    </dd>
                  )}
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}

function ChannelRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="mt-1 text-sage">{icon}</span>
      <span>
        <span className="label block">{label}</span>
        <span className="mt-1 block font-display text-xl text-ink">{value}</span>
      </span>
    </>
  );

  return (
    <li className="border-b border-linen">
      {href ? (
        <a href={href} className="flex gap-4 py-6 transition-opacity hover:opacity-70">
          {content}
        </a>
      ) : (
        <div className="flex gap-4 py-6">{content}</div>
      )}
    </li>
  );
}
