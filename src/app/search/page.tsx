import { Suspense } from "react";
import { SearchInput } from "@/components/SearchInput";
import { Difficulty, QuestionType } from "@/data/schema";
import { FiltersBar } from "@/components/FiltersBar";
import { QuestionCard } from "@/components/QuestionCard";
import { applyFilters, getQuestions } from "@/lib/content";
import { searchQuestions } from "@/lib/search";

const allowedTypes: (QuestionType | "all")[] = ["theory", "coding", "system-design", "behavioral", "all"];
const allowedDifficulties: (Difficulty | "all")[] = ["easy", "medium", "hard", "all"];

const parseType = (value: string | undefined): QuestionType | "all" => {
  if (!value) return "all";
  return allowedTypes.includes(value as QuestionType | "all") ? (value as QuestionType | "all") : "all";
};

const parseDifficulty = (value: string | undefined): Difficulty | "all" => {
  if (!value) return "all";
  return allowedDifficulties.includes(value as Difficulty | "all") ? (value as Difficulty | "all") : "all";
};

export default function SearchPage({ searchParams }: { searchParams: Record<string, string> }) {
  const query = searchParams.q ?? "";
  const activeType = parseType(searchParams.type);
  const activeDifficulty = parseDifficulty(searchParams.difficulty);
  const base = query ? searchQuestions(query) : getQuestions();
  const finalList = applyFilters(
    {
      category: searchParams.category,
      tags: searchParams.tag ? [searchParams.tag] : undefined,
      difficulty: activeDifficulty,
      type: activeType,
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
          <p className="text-sm text-neutral-600">
            {query ? `Showing results for “${query}”` : "Find questions by topic, tag, difficulty, or type."}
          </p>
          {activeType !== "all" && (
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
              Filtering by type: {activeType.replace("-", " ")}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-2xl">
        <SearchInput defaultValue={query} />
      </div>

      <Suspense fallback={<div className="rounded-2xl border bg-white p-4 text-sm text-neutral-600">Loading filters…</div>}>
        <FiltersBar />
      </Suspense>

      <div className="space-y-3">
        {finalList.length === 0 ? (
          <div className="rounded-2xl border bg-white p-6 text-sm text-neutral-700">
            No results yet. Try adjusting filters or using a different keyword.
          </div>
        ) : (
          <>
            <p className="text-sm text-neutral-600">{finalList.length} results</p>
            {finalList.slice(0, 80).map((q) => (
              <QuestionCard key={q.id} question={q} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
