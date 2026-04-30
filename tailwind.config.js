/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f0fdf4', // Soft green background
        surface: 'rgba(255, 255, 255, 0.65)',
        primary: {
          light: '#6ee7b7',
          DEFAULT: '#10b981', // Emerald
          dark: '#047857',
        },
        secondary: {
          light: '#bae6fd',
          DEFAULT: '#0ea5e9', // Sky blue
          dark: '#0369a1',
        },
        accent: '#f59e0b', // Amber for warnings/streaks
        textMain: '#0f172a',
        textMuted: '#64748b'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        md: '12px',
        lg: '16px',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(16, 185, 129, 0.3)',
      }
    },
  },
  plugins: [],
}
