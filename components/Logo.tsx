import BrandMark from '@/components/BrandMark';
import { studio } from '@/lib/site';

type LogoProps = {
  /** Compact lockup for the nav; full stacked lockup for the intro. */
  variant?: 'full' | 'nav';
  className?: string;
};

/**
 * Brand lockup. Swap the mark for an uploaded file later by replacing BrandMark
 * with an <img src="/logo.png"> — the wordmark and tagline stay the same.
 */
export default function Logo({ variant = 'full', className = '' }: LogoProps) {
  if (variant === 'nav') {
    return (
      <span className={`flex items-center gap-3 ${className}`}>
        <BrandMark className="h-9 w-auto sm:h-10" />
        <span className="text-left">
          <span className="block font-display text-sm font-medium uppercase tracking-[0.28em] sm:text-base">
            Lutroo <span className="font-light opacity-70">Spaces</span>
          </span>
          <span className="mt-1 hidden font-script text-[13px] normal-case tracking-normal opacity-80 sm:block">
            {studio.tagline}
          </span>
        </span>
      </span>
    );
  }

  return (
    <div className={`flex flex-col items-center text-center text-bone ${className}`}>
      <BrandMark className="h-[7.5rem] w-auto sm:h-40" />
      <p className="mt-8 font-display text-[2rem] font-medium uppercase leading-none tracking-[0.28em] text-bone sm:text-5xl">
        Lutroo Spaces
      </p>
      <p className="mt-6 flex items-center gap-4 text-cream">
        <span className="hidden h-px w-10 bg-gold sm:block" />
        <span className="font-script text-2xl sm:text-3xl">{studio.tagline}</span>
        <span className="hidden h-px w-10 bg-gold sm:block" />
      </p>
    </div>
  );
}
