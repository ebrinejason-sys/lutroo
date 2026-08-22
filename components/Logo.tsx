import BrandMark from '@/components/BrandMark';
import { studio } from '@/lib/site';

type LogoProps = {
  /** Horizontal lockup for the header; stacked lockup for the footer. */
  variant?: 'full' | 'nav';
  className?: string;
};

/**
 * Brand lockup from the official SVG mark. Wordmark and tagline share the
 * site serif so the header, footer and hero read as one type family.
 */
export default function Logo({ variant = 'full', className = '' }: LogoProps) {
  if (variant === 'nav') {
    return (
      <span className={`flex items-center gap-3 sm:gap-4 ${className}`}>
        <BrandMark className="h-11 w-auto shrink-0 sm:h-14 lg:h-16" />
        <span className="whitespace-nowrap font-display text-[0.95rem] font-medium uppercase leading-none tracking-[0.16em] sm:text-lg sm:tracking-[0.24em] lg:text-xl lg:tracking-[0.26em]">
          Lutroo Spaces
        </span>
      </span>
    );
  }

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <BrandMark className="h-16 w-auto" />
      <p className="mt-4 font-display text-lg font-medium uppercase leading-none tracking-[0.28em]">
        Lutroo Spaces
      </p>
      <p className="mt-3 flex items-center gap-3 text-gold">
        <span className="hidden h-px w-8 bg-gold sm:block" />
        <span className="font-display text-lg">{studio.tagline}</span>
        <span className="hidden h-px w-8 bg-gold sm:block" />
      </p>
    </div>
  );
}
