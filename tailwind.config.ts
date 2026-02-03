import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,.08), 0 24px 80px rgba(0,0,0,.35)"
      },
      backgroundImage: {
        mesh:
          "radial-gradient(1200px circle at 10% 10%, rgba(99,102,241,.18), transparent 40%), radial-gradient(900px circle at 90% 20%, rgba(236,72,153,.16), transparent 42%), radial-gradient(800px circle at 50% 90%, rgba(16,185,129,.14), transparent 45%)"
      }
    }
  },
  plugins: []
} satisfies Config;
