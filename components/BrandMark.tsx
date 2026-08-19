/**
 * Split house-and-tree mark from the Lutroo Spaces lockup.
 * Gold roof + four-pane window on the left, canopy and ground on the right.
 * The centre rule uses currentColor so it holds on both dark and light grounds.
 */
export default function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M14 132C16 78 42 24 96 10C108 6 114 14 114 28V132C78 124 38 128 14 132Z"
        fill="#C9A36A"
      />
      <path
        d="M22 118C40 92 70 74 108 66"
        stroke="#A9844A"
        strokeWidth="1.35"
        strokeLinecap="round"
      />

      <g transform="translate(62 50)">
        <rect width="30" height="30" fill="#111" />
        <rect x="1.5" y="1.5" width="27" height="27" stroke="#C9A36A" strokeWidth="1.7" />
        <line x1="15" y1="1.5" x2="15" y2="28.5" stroke="#C9A36A" strokeWidth="1.5" />
        <line x1="1.5" y1="15" x2="28.5" y2="15" stroke="#C9A36A" strokeWidth="1.5" />
      </g>

      <line x1="120" y1="8" x2="120" y2="142" stroke="currentColor" strokeWidth="1.15" />

      <path
        d="M130 120C154 104 186 102 228 118C204 138 154 140 130 120Z"
        fill="#3E6B3A"
      />
      <rect x="178" y="78" width="8" height="42" rx="2.5" fill="#2F4F2C" />

      {LEAVES.map((leaf) => (
        <path
          key={`${leaf.x}-${leaf.y}-${leaf.r}`}
          d="M0 -13 C5.5 -8 7.5 2 0 16 C-7.5 2 -5.5 -8 0 -13Z"
          fill={leaf.fill}
          transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r}) scale(${leaf.s})`}
        />
      ))}
    </svg>
  );
}

const LEAVES = [
  { x: 182, y: 34, s: 1.15, r: -8, fill: '#4F7F3C' },
  { x: 198, y: 40, s: 1, r: 28, fill: '#6B9B4A' },
  { x: 166, y: 42, s: 0.95, r: -40, fill: '#5C8C42' },
  { x: 184, y: 50, s: 1.2, r: 6, fill: '#3F6E35' },
  { x: 206, y: 54, s: 0.85, r: 48, fill: '#7BA85A' },
  { x: 158, y: 56, s: 0.8, r: -58, fill: '#6B9B4A' },
  { x: 190, y: 24, s: 0.85, r: 12, fill: '#7BA85A' },
  { x: 172, y: 26, s: 0.8, r: -26, fill: '#5C8C42' },
  { x: 210, y: 42, s: 0.7, r: 56, fill: '#4F7F3C' },
  { x: 152, y: 48, s: 0.7, r: -72, fill: '#3F6E35' },
  { x: 196, y: 62, s: 0.8, r: 20, fill: '#5C8C42' },
  { x: 168, y: 64, s: 0.75, r: -16, fill: '#7BA85A' },
  { x: 182, y: 16, s: 0.7, r: 2, fill: '#6B9B4A' },
  { x: 216, y: 58, s: 0.65, r: 64, fill: '#6B9B4A' },
  { x: 146, y: 60, s: 0.6, r: -84, fill: '#4F7F3C' },
  { x: 178, y: 66, s: 0.9, r: -4, fill: '#3F6E35' },
  { x: 204, y: 30, s: 0.65, r: 36, fill: '#5C8C42' },
  { x: 160, y: 32, s: 0.65, r: -48, fill: '#7BA85A' },
] as const;
