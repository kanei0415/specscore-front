import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: '#FF4500',
        yellow: '#FFFF00',
        gray: '#6C757D',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
export default config;
