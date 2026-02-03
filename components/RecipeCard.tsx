"use client";

import { motion } from "framer-motion";
import { MacroChips } from "./MacroChips";

export function RecipeCard(props: {
  name: string;
  category: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  score?: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="rounded-2xl border border-white/10 bg-white/55 dark:bg-zinc-950/45 backdrop-blur-xl shadow-glow p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-base font-semibold leading-tight">{props.name}</div>
          <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">{props.category}</div>
        </div>
      </div>

      <div className="mt-4">
        <MacroChips
          calories={props.calories}
          protein={props.protein}
          carbs={props.carbs}
          fat={props.fat}
          score={props.score}
        />
      </div>
    </motion.div>
  );
}
