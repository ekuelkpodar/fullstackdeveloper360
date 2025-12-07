"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { getCategories, getTags } from "@/lib/content";

const types = [
  { label: "All", value: "all" },
  { label: "Theory", value: "theory" },
  { label: "Coding", value: "coding" },
  { label: "System Design", value: "system-design" },
  { label: "Behavioral", value: "behavioral" },
];

const difficulties = [
  { label: "All", value: "all" },
  { label: "Easy", value: "easy" },
  { label: "Medium", value: "medium" },
  { label: "Hard", value: "hard" },
];

export function FiltersBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categories = getCategories();
  const tags = getTags();

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "" || value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-3 rounded-2xl border bg-white p-4">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <label className="text-neutral-600">Type</label>
        {types.map((type) => (
          <button
            key={type.value}
            onClick={() => updateParam("type", type.value)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition hover:border-black/60 hover:text-black ${
              searchParams.get("type") === type.value || (!searchParams.get("type") && type.value === "all")
                ? "border-black text-black"
                : "border-neutral-200 text-neutral-700"
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <label className="text-neutral-600">Difficulty</label>
        {difficulties.map((diff) => (
          <button
            key={diff.value}
            onClick={() => updateParam("difficulty", diff.value)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition hover:border-black/60 hover:text-black ${
              searchParams.get("difficulty") === diff.value || (!searchParams.get("difficulty") && diff.value === "all")
                ? "border-black text-black"
                : "border-neutral-200 text-neutral-700"
            }`}
          >
            {diff.label}
          </button>
        ))}
      </div>
      <select
        className="min-w-[160px] rounded-full border px-3 py-2 text-sm"
        value={searchParams.get("category") ?? ""}
        onChange={(e) => updateParam("category", e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
      <select
        className="min-w-[160px] rounded-full border px-3 py-2 text-sm"
        value={searchParams.get("tag") ?? ""}
        onChange={(e) => updateParam("tag", e.target.value)}
      >
        <option value="">All Tags</option>
        {tags.slice(0, 50).map((tag) => (
          <option key={tag.id} value={tag.id}>
            {tag.name}
          </option>
        ))}
      </select>
    </div>
  );
}
