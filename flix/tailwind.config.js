/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./constants/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Popflix Brand Colors
        brand: {
          crimson: '#BF092F',      // Primary brand color - bold, energetic
          navy: '#132440',        // Deep professional navy
          ocean: '#16476A',       // Calm ocean blue
          teal: '#3B9797',        // Fresh teal accent
        },
        // Semantic color system based on brand colors
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#BF092F',         // Brand crimson as primary-500
          600: '#a8082a',
          700: '#910725',
          800: '#7a0620',
          900: '#63051b',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#16476A',         // Brand ocean as secondary-500
          600: '#133d5c',
          700: '#10344d',
          800: '#0d2a3e',
          900: '#0a212f',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#3B9797',         // Brand teal as accent-500
          600: '#358888',
          700: '#2f7979',
          800: '#296a6a',
          900: '#235b5b',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#132440',         // Brand navy as neutral-800
          900: '#0f172a',
        },
      },
      fontFamily: {
        // Custom fonts
        'sans': ['system-ui', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
        'mono': ['Menlo', 'monospace'],
      },
      spacing: {
        // Custom spacing
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}