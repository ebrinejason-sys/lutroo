import Logo from '@/components/Logo';
import { contact, navigation, services, studio } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-forest text-bone">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <div className="grid gap-12 border-b border-bone/15 pb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo variant="footer" />
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-bone/70">
              {studio.summary}
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="label text-sage">Navigate</p>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-bone/70 transition-colors hover:text-bone"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <p className="label text-sage">Services</p>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm text-bone/70 transition-colors hover:text-bone"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="label text-sage">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-bone/70">
              <li>
                <a href={`tel:${contact.phone}`} className="transition-colors hover:text-bone">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all transition-colors hover:text-bone"
                >
                  {contact.email}
                </a>
              </li>
              <li>{contact.location}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs text-bone/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {studio.name}. All rights reserved.
          </p>
          <a href="#top" className="uppercase tracking-label transition-colors hover:text-bone">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
