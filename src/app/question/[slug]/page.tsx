import Link from "next/link";
import type { Metadata } from "next";
import { QuestionDetail } from "@/components/QuestionDetail";
import { TableOfContents } from "@/components/TableOfContents";
import { QuestionCard } from "@/components/QuestionCard";
import { getQuestionBySlug, getQuestions } from "@/lib/content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getQuestions().map((q) => ({ slug: q.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const question = getQuestionBySlug(params.slug);
  if (!question) return { title: "Question not found" };
  return {
    title: `${question.title} | Interview Q&A`,
    description: question.summary,
    openGraph: {
      title: question.title,
      description: question.summary,
      type: "article",
    },
  };
}

export default function QuestionPage({ params }: { params: { slug: string } }) {
  const question = getQuestionBySlug(params.slug);
  if (!question) return notFound();

  const related = question.relatedIds
    ?.map((id) => getQuestions().find((q) => q.id === id))
    .filter(Boolean) as typeof question[];

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-6">
        <QuestionDetail question={question} />
        {related && related.length > 0 && (
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-neutral-900">Related questions</h2>
              <Link href="/search" className="text-sm font-semibold text-neutral-700">
                Browse all
              </Link>
            </div>
            <div className="mt-3 space-y-3">
              {related.map((q) => (
                <QuestionCard key={q.id} question={q} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="space-y-4">
        <TableOfContents blocks={question.contentBlocks} />
        <div className="rounded-2xl border bg-neutral-900 p-4 text-white">
          <p className="text-sm font-semibold">Interview mode</p>
          <p className="mt-1 text-sm text-neutral-200">Practice timed questions by topic and difficulty.</p>
          <button className="mt-3 w-full rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-900">
            Start session
          </button>
        </div>
      </div>
    </div>
  );
}
