/**
 * Official Lutroo mark: gold house and four-pane window on the left,
 * green tree and ground on the right, split by a centre rule.
 *
 * The window is a true knockout (not a black square) so the mark stays
 * clean on both dark photography and the light scrolled header.
 * The rule uses currentColor so it follows the surrounding type.
 */
export default function BrandMark({
  className,
  variant = 'color',
}: {
  className?: string;
  variant?: 'color' | 'mono';
}) {
  const mono = variant === 'mono';
  const gold = mono ? 'currentColor' : '#C9A36A';
  const goldShade = mono ? 'currentColor' : '#A9844A';
  const canopy = mono ? 'currentColor' : '#4F7F3C';
  const canopyLight = mono ? 'currentColor' : '#6B9B4A';
  const canopyDark = mono ? 'currentColor' : '#3E6B3A';
  const trunk = mono ? 'currentColor' : '#2F4F2C';
  const ground = mono ? 'currentColor' : '#3E6B3A';

  return (
    <svg
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        fill={gold}
        fillRule="evenodd"
        d="M12 128V60L56 12l40 48v68H12Zm34-60h20v20H46V68Z"
      />
      <path
        d="M20 68C32 48 44 32 56 22"
        stroke={goldShade}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity={mono ? 0 : 0.55}
      />
      <path
        d="M56 68v20M46 78h20"
        stroke={gold}
        strokeWidth="1.7"
        strokeLinecap="square"
      />

      <line
        x1="100"
        y1="12"
        x2="100"
        y2="128"
        stroke="currentColor"
        strokeWidth="1.25"
      />

      <ellipse cx="152" cy="44" rx="30" ry="28" fill={canopy} />
      <ellipse cx="134" cy="54" rx="16" ry="15" fill={canopyLight} />
      <ellipse cx="172" cy="52" rx="17" ry="16" fill={canopyLight} />
      <ellipse cx="152" cy="28" rx="14" ry="13" fill={canopyLight} />
      <ellipse cx="152" cy="58" rx="12" ry="10" fill={canopyDark} />
      <rect x="149" y="72" width="6" height="36" rx="1.5" fill={trunk} />

      <path
        d="M120 118c12-8 22-10 32-10s22 2 34 10"
        stroke={ground}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M126 126c10-6 18-7 26-7s18 1 28 7"
        stroke={ground}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
