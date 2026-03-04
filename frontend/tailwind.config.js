/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        muted: '#94A3B8',
        navbar: {
          Primary:    '#0B1F3B',
          Secondary:  '#1E3A8A',
          Accent:     '#00D4FF',
          Background: '#0F172A',
          TextPrimary:'#E2E8F0',
          Muted:      '#94A3B8',
        },
      },
    },
  },
  plugins: [],
}
