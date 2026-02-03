"use client";

import { RecipeCard } from "./RecipeCard";

export function WeeklyPlan({
  grouped
}: {
  grouped: Record<
    string,
    {
      day: string;
      meal: string;
      name: string;
      category: string;
      calories: number;
      protein: number;
      carbs: number;
      fat: number;
      score: number;
    }[]
  >;
}) {
  const dayOrder = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="space-y-6">
      {dayOrder.filter((d) => grouped[d]?.length).map((day) => {
        const items = grouped[day];

        const mealGroups = items.reduce<Record<string, typeof items>>((acc, it) => {
          acc[it.meal] = acc[it.meal] || [];
          acc[it.meal].push(it);
          return acc;
        }, {});

        return (
          <section key={day} className="space-y-3">
            <div className="flex items-end justify-between">
              <div className="text-xl font-semibold">{day}</div>
              <div className="text-xs text-zinc-600 dark:text-zinc-300">{items.length} meals</div>
            </div>

            <div className="grid lg:grid-cols-3 gap-4">
              {["Breakfast", "Lunch", "Dinner"].map((meal) => {
                const m = mealGroups[meal] || [];
                return (
                  <div
                    key={meal}
                    className="rounded-2xl border border-white/10 bg-white/35 dark:bg-zinc-900/15 p-4"
                  >
                    <div className="text-sm font-semibold">{meal}</div>
                    <div className="mt-3 space-y-3">
                      {m.map((r) => (
                        <RecipeCard
                          key={`${day}-${meal}-${r.name}`}
                          name={r.name}
                          category={r.category}
                          calories={r.calories}
                          protein={r.protein}
                          carbs={r.carbs}
                          fat={r.fat}
                          score={r.score}
                        />
                      ))}
                      {!m.length && (
                        <div className="text-xs text-zinc-600 dark:text-zinc-300">
                          No meal in CSV for this slot.
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
