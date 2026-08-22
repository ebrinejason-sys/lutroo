import Image from 'next/image';
import { studio } from '@/lib/site';

type LogoProps = {
  /** Same official artwork everywhere — only the display size changes. */
  variant?: 'full' | 'nav' | 'footer';
  className?: string;
};

/**
 * The uploaded Lutroo lockup is used as a single image: house and tree,
 * LUTROO SPACES, and the gold script tagline. It is never rebuilt from
 * web fonts or a drawn mark.
 */
export default function Logo({ variant = 'full', className = '' }: LogoProps) {
  const sizes = {
    full: 'h-auto w-[min(88vw,22rem)]',
    nav: 'h-[4.25rem] w-auto sm:h-[5.25rem] lg:h-24',
    footer: 'h-auto w-44 sm:w-56',
  } as const;

  return (
    <Image
      src="/logo.png"
      alt={`${studio.name} — ${studio.tagline}`}
      width={1145}
      height={1374}
      priority={variant !== 'footer'}
      unoptimized
      className={`shrink-0 object-contain ${sizes[variant]} ${className}`}
    />
  );
}
