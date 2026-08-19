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
        cream: '#E8D9B6',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
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
        'intro-mark': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'intro-exit': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        fade: 'fade 0.4s ease-out both',
        'intro-mark': 'intro-mark 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both',
        'intro-exit': 'intro-exit 0.9s ease-in both',
      },
    },
  },
  plugins: [],
};

export default config;
