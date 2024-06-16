/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-countdown': "url('/assets/image2.jpeg')",
        'hero-flower': "url('/assets/flowers.jpg')",
        'hero-about': "url('/assets/image9.jpeg')",
        'section-about': "url('/assets/bg-about.webp')",
      },
      fontFamily: {
        title: ['Gilda Display', 'serif'],
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
