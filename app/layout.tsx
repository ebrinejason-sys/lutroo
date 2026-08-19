import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Great_Vibes, Inter } from 'next/font/google';
import Intro from '@/components/Intro';
import { contact, studio } from '@/lib/site';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const script = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(studio.url),
  title: {
    default: `${studio.name} — Wellness-Focused Interior & Landscape Design`,
    template: `%s — ${studio.name}`,
  },
  description: studio.summary,
  keywords: [
    'interior design',
    'landscape design',
    'spatial planning',
    'brand space design',
    'wellness design',
    'Kampala',
    'Uganda',
  ],
  openGraph: {
    type: 'website',
    url: studio.url,
    siteName: studio.name,
    title: `${studio.name} — Wellness-Focused Interior & Landscape Design`,
    description: studio.summary,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${studio.name} — Wellness-Focused Interior & Landscape Design`,
    description: studio.summary,
  },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: '#2F3A33',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: studio.name,
  description: studio.summary,
  url: studio.url,
  telephone: contact.phone,
  email: contact.email,
  areaServed: 'Uganda',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kampala',
    addressCountry: 'UG',
  },
  slogan: studio.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${script.variable} scroll-smooth`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-xs focus:uppercase focus:tracking-label focus:text-bone"
        >
          Skip to content
        </a>
        <noscript>
          <style>{`.intro-overlay{display:none!important}`}</style>
        </noscript>
        <Intro />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
