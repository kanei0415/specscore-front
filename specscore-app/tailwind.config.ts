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
      gap: {
        '12': '12px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
export default config;
