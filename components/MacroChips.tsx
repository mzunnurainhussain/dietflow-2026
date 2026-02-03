import { fmt } from "@/lib/nutrition";

export function MacroChips(props: {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  score?: number;
}) {
  const Chip = ({ label, value }: { label: string; value: string }) => (
    <span className="rounded-full border border-white/10 bg-white/40 dark:bg-zinc-900/30 px-2.5 py-1 text-xs">
      <span className="text-zinc-600 dark:text-zinc-300">{label}:</span>{" "}
      <span className="font-medium">{value}</span>
    </span>
  );

  return (
    <div className="flex flex-wrap gap-2">
      <Chip label="Cal" value={fmt(props.calories)} />
      <Chip label="P" value={fmt(props.protein)} />
      <Chip label="C" value={fmt(props.carbs)} />
      <Chip label="F" value={fmt(props.fat)} />
      {typeof props.score === "number" && (
        <span className="rounded-full px-2.5 py-1 text-xs bg-indigo-600/15 border border-indigo-500/25 text-indigo-700 dark:text-indigo-100">
          Score: <span className="font-semibold">{fmt(props.score)}</span>
        </span>
      )}
    </div>
  );
}
