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
        'plan-basic': '#FFA500',
        'plan-premium': '#007BFF',
        'plan-black': '#111111',
        'plan-general': '#6C757D',
        'plan-tooltip': '#F1F1F1',
      },
      gap: {
        '12': '12px',
      },
      borderRadius: {
        '4': '4px',
      },
    },
  },
  plugins: [],
  safelist: [{ pattern: /(plan-.*)/ }, { pattern: /([0-12])/ }],
};

export default config;
