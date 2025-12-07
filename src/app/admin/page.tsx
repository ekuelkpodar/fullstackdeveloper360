import Link from "next/link";
import { getCategories, getQuestions, getTags } from "@/lib/content";

export default function AdminPage() {
  const questions = getQuestions();
  const categories = getCategories();
  const tags = getTags();

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Admin</p>
        <h1 className="text-3xl font-semibold text-neutral-900">Content operations</h1>
        <p className="mt-2 text-neutral-700">
          Manage questions, categories, tags, and publishing. Designed to plug into a CMS or Prisma later.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Stat label="Questions" value={questions.length.toString()} />
          <Stat label="Categories" value={categories.length.toString()} />
          <Stat label="Tags" value={tags.length.toString()} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <AdminCard href="/admin/questions" title="Questions" description="Create, edit, publish, and set premium flags." />
        <AdminCard href="/admin/categories" title="Categories" description="Organize by topics with slugs and order." />
        <AdminCard href="/admin/tags" title="Tags" description="Cross-cutting tags for search and filters." />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-neutral-50 p-4">
      <p className="text-sm text-neutral-600">{label}</p>
      <p className="text-2xl font-semibold text-neutral-900">{value}</p>
    </div>
  );
}

function AdminCard({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link
      href={href}
      className="rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">{title}</p>
      <p className="mt-1 text-lg font-semibold text-neutral-900">{title} manager</p>
      <p className="mt-1 text-sm text-neutral-700">{description}</p>
    </Link>
  );
}
