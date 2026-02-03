"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/55 dark:bg-zinc-950/45 backdrop-blur-xl shadow-glow p-8 md:p-12">
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(800px circle at 20% 20%, rgba(99,102,241,.22), transparent 45%), radial-gradient(700px circle at 80% 30%, rgba(236,72,153,.18), transparent 46%)"
        }}
      />

      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs border border-white/10 bg-white/40 dark:bg-zinc-900/30">
          <Sparkles size={14} className="text-indigo-500" />
          Smart • Fast • Beautiful
        </div>

        <h1 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight">
          Diet recommendations, <span className="text-indigo-500">but premium</span>.
        </h1>

        <p className="mt-4 max-w-2xl text-sm md:text-base text-zinc-700 dark:text-zinc-300">
          Explore top meals, filter by macros, and follow a weekly plan — all generated from your dataset outputs.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/recommendations"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-indigo-600 text-white hover:opacity-90 transition"
          >
            Explore recommendations <ArrowRight size={16} />
          </Link>

          <Link
            href="/plan"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/10 bg-white/40 dark:bg-zinc-900/30 hover:opacity-90 transition"
          >
            View weekly plan
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
