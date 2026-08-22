import Image from 'next/image';
import { studio } from '@/lib/site';

type LogoProps = {
  /** Horizontal mark + wordmark in the header; stacked lockup elsewhere. */
  variant?: 'full' | 'nav' | 'footer';
  className?: string;
};

const lockupSizes = {
  full: 'h-auto w-[min(78vw,17.5rem)] sm:w-[19rem] md:w-[21rem] lg:w-[23rem]',
  footer: 'h-auto w-40 sm:w-48 md:w-56 lg:w-64',
} as const;

/**
 * Official Lutroo artwork, sized for where it sits.
 *
 * The uploaded lockup is cream and gold on a transparent field, so it is
 * reserved for dark grounds (the opening splash and the forest footer).
 * The header uses the house-and-tree mark from that same file, with the
 * name set in the site serif so it can switch between bone and ink.
 */
export default function Logo({ variant = 'full', className = '' }: LogoProps) {
  if (variant === 'nav') {
    return (
      <span className={`flex items-center gap-2.5 sm:gap-3.5 ${className}`}>
        <Image
          src="/logo-mark.png"
          alt=""
          width={671}
          height={376}
          priority
          unoptimized
          className="h-8 w-auto shrink-0 object-contain sm:h-9 md:h-10 lg:h-11"
        />
        <span className="whitespace-nowrap font-display text-[0.75rem] font-medium uppercase leading-none tracking-[0.16em] sm:text-[0.9rem] sm:tracking-[0.2em] lg:text-[1.05rem] lg:tracking-[0.22em]">
          Lutroo Spaces
        </span>
      </span>
    );
  }

  return (
    <Image
      src="/logo.png"
      alt={`${studio.name} — ${studio.tagline}`}
      width={966}
      height={637}
      priority={variant === 'full'}
      unoptimized
      className={`shrink-0 object-contain ${lockupSizes[variant]} ${className}`}
    />
  );
}
