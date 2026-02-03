"use client";

import { useMemo, useState } from "react";

export type FilterState = {
  q: string;
  calMax: number;
  pMin: number;
  cMax: number;
  fMax: number;
  sort: "score" | "calories" | "protein";
};

export function Filters({ onChange }: { onChange: (s: FilterState) => void }) {
  const [state, setState] = useState<FilterState>({
    q: "",
    calMax: 1200,
    pMin: 0,
    cMax: 200,
    fMax: 120,
    sort: "score"
  });

  useMemo(() => onChange(state), [state, onChange]);

  const Slider = (props: {
    label: string;
    value: number;
    min: number;
    max: number;
    step?: number;
    onChange: (n: number) => void;
  }) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-zinc-700 dark:text-zinc-300">
        <span>{props.label}</span>
        <span className="font-medium">{props.value}</span>
      </div>
      <input
        className="w-full accent-indigo-500"
        type="range"
        min={props.min}
        max={props.max}
        step={props.step ?? 1}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
      />
    </div>
  );

  return (
    <div className="rounded-2xl border border-white/10 bg-white/55 dark:bg-zinc-950/45 backdrop-blur-xl shadow-glow p-5">
      <div className="text-sm font-semibold">Filters</div>

      <div className="mt-3 grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="text-xs text-zinc-700 dark:text-zinc-300">Search</div>
          <input
            value={state.q}
            onChange={(e) => setState((s) => ({ ...s, q: e.target.value }))}
            placeholder="Try: salad, chicken, rice..."
            className="w-full rounded-xl border border-white/10 bg-white/40 dark:bg-zinc-900/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/40"
          />
        </div>

        <div className="space-y-2">
          <div className="text-xs text-zinc-700 dark:text-zinc-300">Sort</div>
          <select
            value={state.sort}
            onChange={(e) => setState((s) => ({ ...s, sort: e.target.value as any }))}
            className="w-full rounded-xl border border-white/10 bg-white/40 dark:bg-zinc-900/30 px-3 py-2 text-sm outline-none"
          >
            <option value="score">Best score</option>
            <option value="calories">Lowest calories</option>
            <option value="protein">Highest protein</option>
          </select>
        </div>

        <Slider label="Max calories" value={state.calMax} min={200} max={2000} step={10}
          onChange={(n) => setState((s) => ({ ...s, calMax: n }))} />
        <Slider label="Min protein" value={state.pMin} min={0} max={150} step={1}
          onChange={(n) => setState((s) => ({ ...s, pMin: n }))} />
        <Slider label="Max carbs" value={state.cMax} min={0} max={300} step={5}
          onChange={(n) => setState((s) => ({ ...s, cMax: n }))} />
        <Slider label="Max fat" value={state.fMax} min={0} max={200} step={5}
          onChange={(n) => setState((s) => ({ ...s, fMax: n }))} />
      </div>
    </div>
  );
}
