import Link from "next/link";
import { Tag } from "@/data/schema";

export function TagPill({ tag }: { tag: Tag }) {
  return (
    <Link
      href={`/tag/${tag.slug}`}
      className="rounded-full border px-2.5 py-1 text-xs font-medium text-neutral-700 hover:bg-neutral-50"
    >
      {tag.name}
    </Link>
  );
}
