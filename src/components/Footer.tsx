export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-neutral-600 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-neutral-900">FullStack.Cafe Remix</p>
          <p>Curated interview prep with categories, search, and premium-ready gating.</p>
        </div>
        <div className="flex gap-4">
          <a href="/topics" className="hover:text-black">Topics</a>
          <a href="/search" className="hover:text-black">Search</a>
          <a href="/admin" className="hover:text-black">Admin</a>
        </div>
      </div>
    </footer>
  );
}
