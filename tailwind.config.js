/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(56, 189, 248, 0.22)',
      },
      minHeight: {
        13: '3.25rem',
      },
      backgroundImage: {
        'mesh-light':
          'radial-gradient(circle at 18% 20%, rgba(14,165,233,.16), transparent 28%), radial-gradient(circle at 82% 14%, rgba(168,85,247,.14), transparent 30%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        'mesh-dark':
          'radial-gradient(circle at 18% 20%, rgba(14,165,233,.18), transparent 28%), radial-gradient(circle at 82% 14%, rgba(168,85,247,.16), transparent 30%), linear-gradient(180deg, #030712 0%, #0f172a 100%)',
      },
    },
  },
  plugins: [],
};
