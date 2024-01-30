import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        // light: {
        //   ...require("daisyui/src/theming/themes")["light"],
        //   primary: "white",
        //   secondary: "teal",
        //   "base-100":"black",
        //   "neutral": "gray",
        //   background: "white"
        // },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#535353",
          secondary: "teal",
          text:"white",
          "base-100":"white",
          "neutral": "#C7C7C7",
          background:"#050505"
          
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
