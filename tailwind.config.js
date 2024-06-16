/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-countdown': "url('src/assets/image2.jpeg')",
        'hero-flower': "url('src/assets/flowers.jpg')",
        'hero-about': "url('src/assets/image9.jpeg')",
        'section-about': "url('src/assets/bg-about.webp')",
      },
      fontFamily: {
        title: ['Gilda Display', 'serif'],
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
