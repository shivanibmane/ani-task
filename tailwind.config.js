/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: { desktop: "1280px" },
      colors: {
        darkgray: "var(--color-gray-dark)",
        lightbule: "var(--color-blue-light)",
        bglistdark: "var(--color-bg-list-dark)",
        bglistlight: "var(--color-bg-list-light)",
        bottomline1: "var(--color-bottomline1)",
        bottomline2: "var(--color-bottomline2)",
      },
      animation: {
        rotate: "rotate 4s linear infinite",
        "loop-scroll": "loop-scroll 7s linear infinite",
        pingSlow: "ping 3s linear infinite",
        pingFast: "ping 500ms linear infinite",
      },

      keyframes: {
        rotate: {
          "0%": { transform: "rotate(-360deg) scale(10)" },
          "100%": { transform: "rotate(0deg) scale(10)" },
        },
        "loop-scroll": {
          from: { transform: "translateX(50)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
