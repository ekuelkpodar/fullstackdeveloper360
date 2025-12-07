"use client";

import { useState } from "react";

const KEY = "fs-studied";

const readStudied = (questionId: string) => {
  if (typeof window === "undefined") return false;
  const stored = JSON.parse(localStorage.getItem(KEY) || "[]") as string[];
  return stored.includes(questionId);
};

export function MarkAsStudied({ questionId }: { questionId: string }) {
  const [studied, setStudied] = useState(() => readStudied(questionId));

  const toggle = () => {
    const stored = new Set<string>(JSON.parse(localStorage.getItem(KEY) || "[]"));
    if (stored.has(questionId)) {
      stored.delete(questionId);
      setStudied(false);
    } else {
      stored.add(questionId);
      setStudied(true);
    }
    localStorage.setItem(KEY, JSON.stringify(Array.from(stored)));
  };

  return (
    <button
      onClick={toggle}
      className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
        studied
          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
          : "border-neutral-200 bg-white text-neutral-800 hover:border-neutral-400"
      }`}
    >
      {studied ? "Studied" : "Mark as studied"}
    </button>
  );
}
