import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        bone: '#FCFBF8',
        sand: '#F3F0EA',
        linen: '#E4DFD5',
        ink: '#1C1A17',
        graphite: '#55514B',
        forest: '#2F3A33',
        sage: '#8C9C8B',
        clay: '#A9724F',
        gold: '#C9A36A',
      },
      fontFamily: {
        display: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        label: '0.22em',
      },
      maxWidth: {
        readable: '68ch',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(1.25rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fade: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        fade: 'fade 0.4s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
