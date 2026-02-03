"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 border border-white/10 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl shadow-glow hover:opacity-90 transition"
      type="button"
    >
      {dark ? <Moon size={16} /> : <Sun size={16} />}
      <span className="text-xs">{dark ? "Dark" : "Light"}</span>
    </button>
  );
}
