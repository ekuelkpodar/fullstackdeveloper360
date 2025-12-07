import { NextResponse } from "next/server";
import { Difficulty, QuestionType } from "@/data/schema";
import { applyFilters, getQuestions } from "@/lib/content";
import { searchQuestions } from "@/lib/search";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") ?? "";
  const category = searchParams.get("category") ?? undefined;
  const tag = searchParams.get("tag") ?? undefined;
  const difficulty = (searchParams.get("difficulty") as Difficulty | "all" | null) ?? "all";
  const type = (searchParams.get("type") as QuestionType | "all" | null) ?? "all";

  const base = q ? searchQuestions(q) : getQuestions();
  const results = applyFilters(
    { category, tags: tag ? [tag] : undefined, difficulty, type },
    base,
  );

  return NextResponse.json({ results });
}
