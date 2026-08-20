const LEAVES = [
  { x: 152, y: 36, s: 1.15, r: -6, tone: 'mid' },
  { x: 168, y: 44, s: 1, r: 28, tone: 'light' },
  { x: 136, y: 46, s: 0.98, r: -38, tone: 'light' },
  { x: 154, y: 52, s: 1.2, r: 8, tone: 'dark' },
  { x: 174, y: 58, s: 0.82, r: 48, tone: 'mid' },
  { x: 132, y: 60, s: 0.78, r: -58, tone: 'mid' },
  { x: 158, y: 26, s: 0.82, r: 14, tone: 'light' },
  { x: 142, y: 28, s: 0.78, r: -24, tone: 'mid' },
  { x: 166, y: 66, s: 0.72, r: 22, tone: 'dark' },
  { x: 140, y: 68, s: 0.7, r: -18, tone: 'light' },
] as const;

/**
 * Official Lutroo mark: gold gable and four-pane window on the left,
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
  const leaf = mono ? 'currentColor' : '#4F7F3C';
  const leafLight = mono ? 'currentColor' : '#6B9B4A';
  const leafDark = mono ? 'currentColor' : '#3E6B3A';
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
        d="M18 122 58 18l40 104H18Zm30-48h20v20H48V74Z"
      />
      <path
        d="M58 74v20M48 84h20"
        stroke={gold}
        strokeWidth="1.8"
        strokeLinecap="square"
      />

      <line
        x1="100"
        y1="16"
        x2="100"
        y2="124"
        stroke="currentColor"
        strokeWidth="1.15"
        opacity="0.85"
      />

      {LEAVES.map((item) => (
        <path
          key={`${item.x}-${item.y}-${item.r}`}
          d="M0 -14C6 -8 8 2 0 18C-8 2 -6 -8 0 -14Z"
          fill={item.tone === 'light' ? leafLight : item.tone === 'dark' ? leafDark : leaf}
          transform={`translate(${item.x} ${item.y}) rotate(${item.r}) scale(${item.s})`}
        />
      ))}
      <rect x="149" y="78" width="6" height="32" rx="1.6" fill={trunk} />
      <path
        d="M122 116c14-9 24-11 34-11s22 2 36 11"
        stroke={ground}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M128 124c12-6 20-8 28-8s18 2 30 8"
        stroke={ground}
        strokeWidth="1.45"
        strokeLinecap="round"
      />
    </svg>
  );
}
