import { Suspense } from "react";
import { Difficulty, QuestionType } from "@/data/schema";
import { FiltersBar } from "@/components/FiltersBar";
import { QuestionCard } from "@/components/QuestionCard";
import { applyFilters, getQuestions } from "@/lib/content";
import { searchQuestions } from "@/lib/search";

export default function SearchPage({ searchParams }: { searchParams: Record<string, string> }) {
  const query = searchParams.q ?? "";
  const base = query ? searchQuestions(query) : getQuestions();
  const finalList = applyFilters(
    {
      category: searchParams.category,
      tags: searchParams.tag ? [searchParams.tag] : undefined,
      difficulty: (searchParams.difficulty as Difficulty | "all" | null) ?? "all",
      type: (searchParams.type as QuestionType | "all" | null) ?? "all",
      sort: (searchParams.sort as "popular" | "newest" | null) ?? "popular",
    },
    base,
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Search</p>
          <h1 className="text-2xl font-semibold text-neutral-900">Search the library</h1>
          {query && <p className="text-sm text-neutral-600">Showing results for “{query}”</p>}
        </div>
      </div>

      <Suspense fallback={<div className="rounded-2xl border bg-white p-4 text-sm text-neutral-600">Loading filters…</div>}>
        <FiltersBar />
      </Suspense>

      <div className="space-y-3">
        {finalList.slice(0, 80).map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </div>
    </div>
  );
}
