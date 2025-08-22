import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F7E135", // Yellow
        secondary: "#000000", // Black
      },
      fontfamily: {
        opensauce: ["OpenSauceSans", "san-serif"],
        texgyrebonum: ["TexGyreBonum", "san-serif"],
        inter: ["Inter", "san-serif"],
        norwester: ["Norwester", "san-serif"],
      },
    },
  },
} satisfies Config;
