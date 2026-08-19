import Image from 'next/image';
import { studio } from '@/lib/site';

type LogoProps = {
  /** Compact lockup for the nav and footer; full artwork for the intro. */
  variant?: 'full' | 'nav';
  className?: string;
};

export default function Logo({ variant = 'full', className = '' }: LogoProps) {
  if (variant === 'nav') {
    return (
      <span className={`flex items-center gap-3 ${className}`}>
        <Image
          src="/logo-mark.png"
          alt=""
          width={794}
          height={553}
          className="h-10 w-auto sm:h-12"
          priority
          unoptimized
        />
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
    <Image
      src="/logo.png"
      alt={`${studio.name} — ${studio.tagline}`}
      width={950}
      height={890}
      priority
      className={`h-auto w-[min(88vw,30rem)] sm:w-[min(72vw,36rem)] ${className}`}
      unoptimized
    />
  );
}
