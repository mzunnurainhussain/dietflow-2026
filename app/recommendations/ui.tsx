"use client";

import { useCallback, useMemo, useState } from "react";
import { Filters, FilterState } from "@/components/Filters";
import { RecipeCard } from "@/components/RecipeCard";

export default function RecommendationsClient({
  data
}: {
  data: {
    name: string;
    category: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    score: number;
  }[];
}) {
  const [filters, setFilters] = useState<FilterState | null>(null);
  const onChange = useCallback((s: FilterState) => setFilters(s), []);

  const filtered = useMemo(() => {
    if (!filters) return data.slice(0, 60);

    const q = filters.q.trim().toLowerCase();
    const out = data.filter((r) => {
      const hay = `${r.name} ${r.category}`.toLowerCase();
      const okQ = q ? hay.includes(q) : true;
      return (
        okQ &&
        r.calories <= filters.calMax &&
        r.protein >= filters.pMin &&
        r.carbs <= filters.cMax &&
        r.fat <= filters.fMax
      );
    });

    if (filters.sort === "score") out.sort((a, b) => b.score - a.score);
    if (filters.sort === "calories") out.sort((a, b) => a.calories - b.calories);
    if (filters.sort === "protein") out.sort((a, b) => b.protein - a.protein);

    return out.slice(0, 60);
  }, [data, filters]);

  return (
    <div className="space-y-6">
      <div>
        <div className="text-2xl font-semibold tracking-tight">Recommendations</div>
        <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
          Filter meals using macros and score.
        </div>
      </div>

      <Filters onChange={onChange} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((r) => (
          <RecipeCard
            key={`${r.name}-${r.category}`}
            name={r.name}
            category={r.category}
            calories={r.calories}
            protein={r.protein}
            carbs={r.carbs}
            fat={r.fat}
            score={r.score}
          />
        ))}
      </div>
    </div>
  );
}
