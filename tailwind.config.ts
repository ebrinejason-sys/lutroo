import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          stone: '#EAE6DF',
          sand: '#F7F5F0',
          cream: '#FAF9F5',
          sage: '#8A9A86',
          moss: '#5C6B57',
          olive: '#3B4438',
          earth: '#8C6F56',
          terracotta: '#A65D43',
          obsidian: '#1A1C19',
          charcoal: '#2D302C',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
