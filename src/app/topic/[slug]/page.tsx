import { Suspense } from "react";
import { QuestionCard } from "@/components/QuestionCard";
import { FiltersBar } from "@/components/FiltersBar";
import { getCategoryBySlug, getQuestionsByCategory } from "@/lib/content";
import { notFound } from "next/navigation";

export default function TopicDetail({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) return notFound();

  const questions = getQuestionsByCategory(category.id);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">{category.icon} {category.name}</p>
        <h1 className="mt-2 text-3xl font-semibold text-neutral-900">{category.name} interview questions</h1>
        <p className="mt-2 text-neutral-700">{category.description}</p>
      </div>

      <Suspense fallback={<div className="rounded-2xl border bg-white p-4 text-sm text-neutral-600">Loading filters…</div>}>
        <FiltersBar />
      </Suspense>

      <div className="space-y-3">
        {questions.slice(0, 60).map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </div>
    </div>
  );
}
