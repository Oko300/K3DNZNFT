import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "k3d-black": "#0D0D0D",
        "k3d-charcoal": "#1A1A1A",
        "k3d-concrete": "#3A3A3A",
        "k3d-orange": "#FF5C00",
        "k3d-fire": "#FF8C00",
        "k3d-amber": "#FFAA00",
        "k3d-red": "#CC2200",
        "k3d-gray": "#7A7A7A",
        "k3d-light": "#E8E4DC",
      },
    },
  },
  plugins: [],
};
export default config;