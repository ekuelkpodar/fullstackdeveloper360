import Link from "next/link";
import { TagPill } from "./TagPill";
import { DifficultyBadge } from "./DifficultyBadge";
import { Question } from "@/data/schema";
import { tags as allTags } from "@/data/sampleData";

export function QuestionCard({ question }: { question: Question }) {
  const questionTags = allTags.filter((tag) => question.tagIds.includes(tag.id));
  return (
    <article className="group rounded-2xl border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="grow">
          <Link href={`/question/${question.slug}`} className="block text-lg font-semibold text-neutral-900">
            {question.title}
          </Link>
          <p className="mt-1 text-sm text-neutral-600">{question.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <DifficultyBadge level={question.difficulty} />
            <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700">
              {question.type.replace("-", " ")}
            </span>
            {questionTags.slice(0, 4).map((tag) => (
              <TagPill key={tag.id} tag={tag} />
            ))}
          </div>
        </div>
        <span className="text-xs text-neutral-500">{question.estimatedTime}</span>
      </div>
    </article>
  );
}
