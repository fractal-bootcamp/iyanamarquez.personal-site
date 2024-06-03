import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f5f0f5",

          secondary: "#e9d5ff",

          accent: "#c4b5fd",

          neutral: "#c4b5fd",

          "base-100": "#f3f4f6",

          info: "#93c5fd",

          success: "#c4b5fd",

          warning: "#fb7185",

          error: "#ec4899",
        },
      },
    ],
  },
  theme: {
    extend: {
      animationDuration: {
        "1s": "1s",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
