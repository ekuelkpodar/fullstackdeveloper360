"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { suggest } from "@/lib/search";

export function SearchInput({ compact = false }: { compact?: boolean }) {
  const [value, setValue] = useState("");
  const suggestions = useMemo(() => {
    if (!value.trim()) return [];
    return suggest(value);
  }, [value]);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    router.push(`/search?q=${encodeURIComponent(value.trim())}`);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-full border px-3 py-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={compact ? "Search" : "Search questions, topics, tags"}
          className="w-full bg-transparent text-sm outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white"
        >
          Go
        </button>
      </form>
      {suggestions.length > 0 && (
        <div className="absolute mt-2 w-full rounded-xl border bg-white shadow-xl">
          {suggestions.map((item) => (
            <button
              key={item}
              onClick={() => router.push(`/search?q=${encodeURIComponent(item)}`)}
              className="block w-full px-4 py-2 text-left text-sm hover:bg-neutral-50"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
