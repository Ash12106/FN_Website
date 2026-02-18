import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
	darkMode: "class",
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			"primary": "#D4AF37",
  			"secondary": "#8B7355",
  			"background-light": "#f6f8f8",
  			"background-dark": "#020202",
        "border": "rgba(212, 175, 55, 0.2)",
  		},
  		fontFamily: {
  			"display": ["Playfair Display", "serif"],
  			"sans": ["Space Grotesk", "sans-serif"]
  		},
      backgroundImage: {
        'circuit': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 H90 V90 H10 Z M20 20 H80 V80 H20 Z' fill='none' stroke='rgba(212,175,55,0.05)' stroke-width='0.5'/%3E%3Ccircle cx='10' cy='10' r='1' fill='rgba(212,175,55,0.1)'/%3E%3C/svg%3E\")"
      }
  	}
  },
  plugins: [animate],
} satisfies Config;
