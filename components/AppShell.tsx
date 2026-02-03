"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/50 dark:bg-zinc-950/40 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/" className="font-semibold tracking-tight text-lg">
              DietFlow<span className="text-indigo-500">.</span>
            </Link>
            <span className="ml-3 text-xs text-zinc-600 dark:text-zinc-300">
              fancy 2026 UI
            </span>
          </motion.div>

          <nav className="flex items-center gap-3 text-sm">
            <Link className="hover:opacity-80" href="/recommendations">
              Recommendations
            </Link>
            <Link className="hover:opacity-80" href="/plan">
              Weekly Plan
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

      <footer className="mx-auto max-w-6xl px-4 pb-10 pt-6 text-xs text-zinc-600 dark:text-zinc-400">
        CSV-powered • Next.js • Vercel-ready
      </footer>
    </div>
  );
}
