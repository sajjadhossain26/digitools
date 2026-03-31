import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#1F2937',
        brand: '#7C3AED',
      },
      boxShadow: {
        card: '0 18px 40px rgba(15, 23, 42, 0.05)',
        cardHover: '0 20px 45px rgba(124, 58, 237, 0.12)',
        toggle: '0 8px 20px rgba(15, 23, 42, 0.06)',
      },
    },
  },
  daisyui: {
    themes: [
      {
        digitheme: {
          primary: '#7C3AED',
          secondary: '#A21CAF',
          accent: '#F59E0B',
          neutral: '#111827',
          'base-100': '#ffffff',
          info: '#3B82F6',
          success: '#22C55E',
          warning: '#F59E0B',
          error: '#EF4444',
        },
      },
    ],
  },
  plugins: [daisyui],
};
