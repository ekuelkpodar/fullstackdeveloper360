import { Question } from "@/data/schema";
import { CodeBlock } from "./CodeBlock";
import { MarkAsStudied } from "./MarkAsStudied";
import { DifficultyBadge } from "./DifficultyBadge";
import { featureFlags } from "@/lib/featureFlags";

export function QuestionDetail({ question }: { question: Question }) {
  const gated = featureFlags.premiumEnabled && question.isPremium;

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start gap-4">
        <div className="grow">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Question</p>
          <h1 className="mt-1 text-2xl font-semibold text-neutral-900">{question.title}</h1>
          <p className="mt-2 text-neutral-700">{question.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2 text-sm text-neutral-600">
            <DifficultyBadge level={question.difficulty} />
            <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-semibold">
              {question.type}
            </span>
            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
              {question.estimatedTime}
            </span>
          </div>
        </div>
        <MarkAsStudied questionId={question.id} />
      </div>

      {gated ? (
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
          <p className="font-semibold">Premium content</p>
          <p className="text-sm">Unlock with a subscription to view the full explanation and examples.</p>
          <div className="mt-3 flex gap-2">
            <button className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">Upgrade</button>
            <button className="rounded-full border border-amber-300 px-4 py-2 text-sm font-semibold text-amber-900">
              See plans
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-6 space-y-6">
          {question.contentBlocks.map((block, idx) => {
            const anchor = `section-${idx + 1}`;
            if (block.blockType === "code") {
              return (
                <div key={block.id} id={anchor} className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-wide text-neutral-600">Code</p>
                  <CodeBlock code={block.content} language={block.language} />
                </div>
              );
            }
            if (block.blockType === "list") {
              return (
                <div key={block.id} id={anchor} className="space-y-2">
                  <p className="text-sm font-semibold text-neutral-900">{block.content}</p>
                  <ul className="list-disc space-y-1 pl-5 text-neutral-700">
                    {block.items?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            }
            if (block.blockType === "callout") {
              return (
                <div key={block.id} id={anchor} className="rounded-2xl border bg-blue-50 px-4 py-3 text-blue-900">
                  {block.content}
                </div>
              );
            }
            return (
              <p key={block.id} id={anchor} className="text-neutral-800">
                {block.content}
              </p>
            );
          })}

          {question.snippets.length > 0 && (
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-neutral-600">Code examples</p>
              <div className="grid gap-4 md:grid-cols-2">
                {question.snippets.map((snippet) => (
                  <CodeBlock key={snippet.id} code={snippet.code} language={snippet.language} />
                ))}
              </div>
            </div>
          )}

          {question.pitfalls && (
            <div className="rounded-2xl border bg-red-50 p-4 text-red-900">
              <p className="text-sm font-semibold uppercase tracking-wide">Common pitfalls</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {question.pitfalls.map((pitfall) => (
                  <li key={pitfall}>{pitfall}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {question.followUps && question.followUps.length > 0 && (
        <div className="mt-6 rounded-2xl border bg-neutral-50 p-4">
          <p className="text-sm font-semibold text-neutral-900">Follow-up questions</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-700">
            {question.followUps.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
