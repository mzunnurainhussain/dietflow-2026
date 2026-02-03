import { loadCsv } from "@/lib/csv";
import { toNum } from "@/lib/nutrition";
import RecommendationsClient from "./ui";

export const dynamic = "force-static";

export default function Page() {
  const rows = loadCsv<any>("data/top_recommendations_lunch.csv");

  const data = rows
    .map((r: any) => ({
      name: (r.Name ?? r.name ?? "").trim(),
      category: (r.Category ?? r.category ?? "").trim(),
      calories: toNum(r.Calories ?? r.calories),
      protein: toNum(r.Protein ?? r.protein),
      carbs: toNum(r.Carbs ?? r.carbs),
      fat: toNum(r.Fat ?? r.fat),
      score: toNum(r.Score ?? r.final_score ?? r.score)
    }))
    .filter((x: any) => x.name);

  return <RecommendationsClient data={data} />;
}
