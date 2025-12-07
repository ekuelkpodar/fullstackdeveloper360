import { getTags } from "@/lib/content";

export default function AdminTagsPage() {
  const tags = getTags();
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Admin</p>
          <h1 className="text-2xl font-semibold text-neutral-900">Tags</h1>
          <p className="text-sm text-neutral-700">Cross-cutting labels for filtering and search weighting.</p>
        </div>
        <button className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">New tag</button>
      </div>

      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4 md:grid-cols-5">
          {tags.map((tag) => (
            <span key={tag.id} className="rounded-full border px-3 py-1 text-center text-neutral-800">
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
