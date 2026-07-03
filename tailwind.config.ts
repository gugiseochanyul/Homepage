import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sola: {
          yellow: "#FFDD66",
          yellowLight: "#FFF3D1",
          pink: "#FFB6C9",
          pinkLight: "#FFE6EE",
          sky: "#8FD3F4",
          skyLight: "#E3F6FF",
          cream: "#FFFDF7",
          brown: "#6B4F3B",
        },
      },
      fontFamily: {
        round: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Apple SD Gothic Neo",
          "Pretendard",
          "Malgun Gothic",
          "sans-serif",
        ],
      },
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-10vh) translateX(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(110vh) translateX(var(--drift, 40px)) rotate(360deg)", opacity: "0.9" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        fall: "fall linear infinite",
        wiggle: "wiggle 1.2s ease-in-out infinite",
        bounceSlow: "bounceSlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
