import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lutroo Spaces | Multidisciplinary Wellness & Interior Design Studio',
  description: 'Lutroo Spaces is a multidisciplinary design studio redefining how people experience space with wellness-focused environments that blend functionality, aesthetics, and emotional balance.',
};

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="antialiased bg-brand-cream text-brand-obsidian selection:bg-brand-sage selection:text-white">
        {children}
      </body>
    </html>
  );
}
