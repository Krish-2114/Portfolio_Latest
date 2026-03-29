/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#6B21A8', dark: '#581C87', light: '#A78BFA' },
        secondary: { DEFAULT: '#1E40AF', dark: '#1E3A8A', light: '#3B82F6' },
        accent: { DEFAULT: '#06B6D4', dark: '#0891B2', light: '#22D3EE' },
        space: { darkest: '#0C1844', dark: '#1E3A8A', medium: '#2E1065' },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.6)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.6)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.6)',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        'spin-slow': 'spin 60s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(6,182,212,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(6,182,212,0.8)' },
        },
      },
    },
  },
  plugins: [],
}
