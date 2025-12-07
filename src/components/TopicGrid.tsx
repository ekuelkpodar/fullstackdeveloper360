import Link from "next/link";
import { Category } from "@/data/schema";

export function TopicGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((cat) => (
        <Link
          href={`/topic/${cat.slug}`}
          key={cat.id}
          className="group rounded-2xl border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-lg">
              {cat.icon}
            </div>
            <div>
              <p className="font-semibold text-neutral-900">{cat.name}</p>
              <p className="text-sm text-neutral-600">{cat.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
