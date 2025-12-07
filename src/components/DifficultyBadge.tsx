import { Difficulty } from "@/data/schema";

const colorMap: Record<Difficulty, string> = {
  easy: "bg-emerald-50 text-emerald-700 border-emerald-200",
  medium: "bg-amber-50 text-amber-700 border-amber-200",
  hard: "bg-rose-50 text-rose-700 border-rose-200",
};

export function DifficultyBadge({ level }: { level: Difficulty }) {
  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-wide ${colorMap[level]}`}
    >
      {level}
    </span>
  );
}
