import { Hero } from "@/components/Hero";

export default function Page() {
  return (
    <div className="space-y-8">
      <Hero />

      <section className="grid md:grid-cols-3 gap-4">
        {[
          { t: "Macro filters", d: "Filter by calories, protein, carbs, and fat." },
          { t: "Weekly structure", d: "Breakfast/Lunch/Dinner organized by day." },
          { t: "Vercel-ready", d: "No DB. Reads CSV. Fast deploys." }
        ].map((x) => (
          <div
            key={x.t}
            className="rounded-2xl border border-white/10 bg-white/55 dark:bg-zinc-950/45 backdrop-blur-xl shadow-glow p-5"
          >
            <div className="font-medium">{x.t}</div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{x.d}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
