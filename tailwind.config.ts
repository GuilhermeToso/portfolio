import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3d': '5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.5)',
        'inner': 'inset 5px 5px 10px rgba(0, 0, 0, 0.5), inset -5px -5px 10px rgba(255, 255, 255, 0.5)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'roboto': ['Roboto'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
      // Example: custom color for active tab border
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [
      {
        'portfolio': {
          'primary' : '#a78bfa',
          'primary-focus' : '#8b5cf6',
          'primary-content' : '#7c3aed',
          'secondary' : '#e879f9',
          'secondary-focus' : '#d946ef',
          'secondary-content' : '#c026d3',
          'accent' : '#22d3ee',
          'accent-focus' : '#06b6d4',
          'accent-content' : '#0891b2',
          'neutral' : '#fafafa',
          'neutral-focus' : '#d4d4d4',
          'neutral-content' : '#0a0a0a',
          'base-100' : '#050326',
          'base-200' : '#8582BF',
          'base-300' : '#D7D5F2',
          'base-content' : '#F0F2F7',
          'info' : '#38bdf8',
          'success' : '#4ade80',
          'warning' : '#fbbf24',
          'error' : '#f87171',
          '--rounded-box': '1rem',
          '--rounded-btn': '.5rem',
          '--rounded-badge': '1.9rem',
          '--animation-btn': '.25s',
          '--animation-input': '.2s',
          '--btn-text-case': 'uppercase',
          '--navbar-padding': '.5rem',
          '--border-btn': '1px',
        },
      },
    ],
  },
};
export default config;
