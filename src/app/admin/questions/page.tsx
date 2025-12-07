import { getCategories, getQuestions, getTags } from "@/lib/content";

export default function AdminQuestionsPage() {
  const questions = getQuestions().slice(0, 30);
  const categories = getCategories();
  const tags = getTags();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Admin</p>
          <h1 className="text-2xl font-semibold text-neutral-900">Questions</h1>
          <p className="text-sm text-neutral-700">Draft → review → publish workflow is ready for back-end wiring.</p>
        </div>
        <button className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">New question</button>
      </div>

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        <table className="min-w-full text-sm">
          <thead className="bg-neutral-50 text-left text-xs font-semibold uppercase tracking-wide text-neutral-500">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Difficulty</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Premium</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((q) => (
              <tr key={q.id} className="border-t text-neutral-800">
                <td className="px-4 py-3 font-semibold">{q.title}</td>
                <td className="px-4 py-3">{categories.find((c) => c.id === q.categoryId)?.name}</td>
                <td className="px-4 py-3 capitalize">{q.difficulty}</td>
                <td className="px-4 py-3">{q.type}</td>
                <td className="px-4 py-3">{q.isPremium ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Create</p>
        <h2 className="text-lg font-semibold text-neutral-900">Question editor (local-only demo)</h2>
        <p className="text-sm text-neutral-700">
          Wire this form to your API or Prisma models. Slug uniqueness, content validation, and publish flow belong here.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <input className="rounded-xl border px-3 py-2" placeholder="Title" />
          <input className="rounded-xl border px-3 py-2" placeholder="Slug" />
          <select className="rounded-xl border px-3 py-2">
            <option>Category</option>
            {categories.map((c) => (
              <option key={c.id}>{c.name}</option>
            ))}
          </select>
          <select className="rounded-xl border px-3 py-2">
            <option>Difficulty</option>
            <option>easy</option>
            <option>medium</option>
            <option>hard</option>
          </select>
          <select className="rounded-xl border px-3 py-2">
            <option>Type</option>
            <option>theory</option>
            <option>coding</option>
            <option>system-design</option>
            <option>behavioral</option>
          </select>
          <select className="rounded-xl border px-3 py-2">
            <option>Tags</option>
            {tags.slice(0, 20).map((t) => (
              <option key={t.id}>{t.name}</option>
            ))}
          </select>
          <textarea className="rounded-xl border px-3 py-2 sm:col-span-2" rows={4} placeholder="Summary / short answer" />
        </div>
        <div className="mt-4 flex gap-3">
          <button className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">Save draft</button>
          <button className="rounded-full border px-4 py-2 text-sm font-semibold text-neutral-800">Publish</button>
        </div>
      </div>
    </div>
  );
}
