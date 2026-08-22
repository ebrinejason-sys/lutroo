/**
 * Official Lutroo house-and-tree mark.
 * Sourced from the studio SVG: gold gable and four-pane window on the left,
 * green tree and ground on the right. The centre rule uses currentColor so
 * it holds on both the dark hero and the light scrolled header.
 */
export default function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        fill="#C9A36A"
        fillRule="evenodd"
        d="M18 122 58 18l40 104H18Zm30-48h20v20H48V74Z"
      />
      <path
        d="M58 74v20M48 84h20"
        stroke="#C9A36A"
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
      />
      <path
        fill="#4F7F3C"
        d="M152 22c8-1 18 5 22 14 9 2 16 12 14 23 5 8 1 18-9 24H125c-10-6-14-16-9-24-2-11 5-21 14-23 4-9 14-15 22-14Z"
      />
      <path
        fill="#6B9B4A"
        opacity=".9"
        d="M136 48c6-10 16-16 26-14 4-7 12-11 20-10 7 1 14 7 16 14 6 2 10 9 8 16-2 6-8 10-14 11H128c-7-2-12-8-10-15 1-6 6-10 12-12 2-4 5-7 6-4Z"
      />
      <rect x="149" y="78" width="6" height="32" rx="1.6" fill="#2F4F2C" />
      <path
        d="M122 116c14-9 24-11 34-11s22 2 36 11"
        stroke="#3E6B3A"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M128 124c12-6 20-8 28-8s18 2 30 8"
        stroke="#3E6B3A"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
    </svg>
  );
}
