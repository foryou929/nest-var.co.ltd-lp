import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        '2xs': '10px',
        'xs': '12px',
        'sm': '14px',
        'md': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '40px',
        '6xl': '48px',
        '7xl': '56px',
        '8xl': '64px',
        '9xl': '80px',
      },
      colors: {
        'primary': '#CBF34D',
        'secondary': '#FFFFFF',
        'orange': '#F3894D',
        'aqua': '#4DD5F3',
        'blue': '#4D5EF3',
        'purple': '#BE4DF3',
        'black': '#212121',
        'gray-900': '#333333',
        'gray-800': '#666666',
        'gray-700': '#999999',
        'gray-600': '#CCCCCC',
        'gray-100': '#EEEEEE',
      },
    },
  },
  plugins: [],
};
export default config;
