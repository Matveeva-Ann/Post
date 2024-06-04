import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "shadowGradient": "linear-gradient(0deg, #ffffff 0%, #ffffff 5%, rgba(255,255,255,0) 100%)",
        "shadowGradientDark": "linear-gradient(0deg, #000 0%, #000 20%, rgba(255,255,255,0) 100%)",
        "bodyGradientDark": "linear-gradient(94.3deg,  rgb(8, 13, 36) 10.9%, rgb(58, 61, 94) 87.1% )",
        "bodyGradient": "linear-gradient(94.3deg,  rgba(26,33,64,1) 10.9%, rgba(81,84,115,1) 87.1%)",
      },
    },
  },
  plugins: [],
};
export default config;
