/** @type {import('tailwindcss').Config} */

import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    path.join(
      __dirname,
      "node_modules/custom-component-package/**/*.{js,ts,jsx,tsx}"
    ),
  ],
  theme: {
    fontFamily: {
      tt_demi: ["var(--demi-bold)", "sans-serif"],
      tt_light: ["var(--common-light)", "sans-serif"],
      tt_calli: ["var(--tacori-regular)", "sans-serif"],
      rubik: ["rubik_regular", "sans-serif"],
      rubik_light: ["rubik_light", "sans-serif"],
      tacori_regular: ["var(--tacori-regular)", "sans-serif"],
    },
    extend: {
      colors: {
        tacoriBlue: "#10069F",
        tacBlue: "#10069F",
        tacBrown: "#8d6c54",
        tacGray: "#555766",
        tacGray2: "#3C3834",
        tacRed: "#ff0000",
      },
      screens: {
        tbb: "800px",
        tb: "960px",
        om: "1200px",
      },
    },
  },
  plugins: [],
};
