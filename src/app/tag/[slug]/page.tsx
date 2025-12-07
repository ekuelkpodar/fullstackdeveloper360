import { QuestionCard } from "@/components/QuestionCard";
import { getQuestionsByTag, getTagBySlug } from "@/lib/content";
import { notFound } from "next/navigation";

export default function TagDetail({ params }: { params: { slug: string } }) {
  const tag = getTagBySlug(params.slug);
  if (!tag) return notFound();

  const questions = getQuestionsByTag(tag.id);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Tag</p>
        <h1 className="mt-2 text-3xl font-semibold text-neutral-900">{tag.name} questions</h1>
        <p className="mt-2 text-neutral-700">
          Cross-topic references tagged with {tag.name}. Great for cross-cutting concerns.
        </p>
      </div>

      <div className="space-y-3">
        {questions.slice(0, 60).map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </div>
    </div>
  );
}
