import Link from "next/link";
import { AnswerBlock } from "@/data/schema";

export function TableOfContents({ blocks }: { blocks: AnswerBlock[] }) {
  const anchors = blocks.map((block, idx) => ({
    id: `section-${idx + 1}`,
    label: block.content.slice(0, 50) || `Section ${idx + 1}`,
  }));

  return (
    <div className="rounded-2xl border bg-white p-4">
      <h3 className="text-sm font-semibold text-neutral-900">Table of contents</h3>
      <nav className="mt-3 flex flex-col gap-2 text-sm text-neutral-700">
        {anchors.map((anchor) => (
          <Link key={anchor.id} href={`#${anchor.id}`} className="hover:text-black">
            {anchor.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
