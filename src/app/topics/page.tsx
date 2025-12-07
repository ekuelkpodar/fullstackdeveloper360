import { TopicGrid } from "@/components/TopicGrid";
import { getCategories } from "@/lib/content";

export default function TopicsPage() {
  const categories = getCategories();
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Topics</p>
          <h1 className="text-2xl font-semibold text-neutral-900">Browse curated categories</h1>
        </div>
      </div>
      <TopicGrid categories={categories} />
    </div>
  );
}
