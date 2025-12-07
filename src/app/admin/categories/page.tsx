import { getCategories } from "@/lib/content";

export default function AdminCategoriesPage() {
  const categories = getCategories();
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Admin</p>
          <h1 className="text-2xl font-semibold text-neutral-900">Categories</h1>
          <p className="text-sm text-neutral-700">Define topic landing pages with order, slug, and icon.</p>
        </div>
        <button className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">New category</button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {categories.map((cat) => (
          <div key={cat.id} className="rounded-2xl border bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-lg">{cat.icon}</span>
              <div>
                <p className="text-lg font-semibold text-neutral-900">{cat.name}</p>
                <p className="text-sm text-neutral-600">/{cat.slug} • Order {cat.order}</p>
                <p className="text-sm text-neutral-700">{cat.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
