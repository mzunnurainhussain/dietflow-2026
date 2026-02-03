import { loadCsv } from "@/lib/csv";
import { toNum } from "@/lib/nutrition";
import { WeeklyPlan } from "@/components/WeeklyPlan";

export const dynamic = "force-static";

export default function Page() {
  const rows = loadCsv<any>("data/weekly_plan.csv");

  const data = rows
    .map((r: any) => ({
      day: (r.Day ?? r.day ?? "").trim(),
      meal: (r.Meal ?? r.meal ?? "").trim(),
      name: (r.Name ?? r.name ?? "").trim(),
      category: (r.Category ?? r.category ?? "").trim(),
      calories: toNum(r.Calories ?? r.calories),
      protein: toNum(r.Protein ?? r.protein),
      carbs: toNum(r.Carbs ?? r.carbs),
      fat: toNum(r.Fat ?? r.fat),
      score: toNum(r.Score ?? r.final_score ?? r.score)
    }))
    .filter((x: any) => x.day && x.meal && x.name);

  const grouped = data.reduce<Record<string, typeof data>>((acc, r) => {
    acc[r.day] = acc[r.day] || [];
    acc[r.day].push(r);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div>
        <div className="text-2xl font-semibold tracking-tight">Weekly Plan</div>
        <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
          This is generated from your CSV output.
        </div>
      </div>

      <WeeklyPlan grouped={grouped} />
    </div>
  );
}
