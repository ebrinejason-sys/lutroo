import Image from 'next/image';
import { studio } from '@/lib/site';

type LogoProps = {
  /** Same artwork everywhere — only the display size changes. */
  variant?: 'full' | 'nav' | 'footer';
  className?: string;
};

/**
 * The official lockup is a single image: gold roof and window, green tree,
 * LUTROO SPACES, and the gold script tagline on black. It is never rebuilt
 * from web fonts or a cropped mark, so every designed detail stays put.
 */
export default function Logo({ variant = 'full', className = '' }: LogoProps) {
  const sizes = {
    full: 'h-auto w-[min(88vw,34rem)]',
    nav: 'h-[4.75rem] w-auto sm:h-24',
    footer: 'h-auto w-52 sm:w-64',
  } as const;

  return (
    <Image
      src="/logo.png"
      alt={`${studio.name} — ${studio.tagline}`}
      width={1024}
      height={960}
      priority={variant !== 'footer'}
      unoptimized
      className={`${sizes[variant]} ${className}`}
    />
  );
}
