"use client";

import { useState } from "react";

export function CodeBlock({ code, language }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden rounded-xl border bg-neutral-950 text-neutral-50">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs uppercase tracking-wide text-neutral-200">
        <span>{language ?? "code"}</span>
        <button
          onClick={handleCopy}
          className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-semibold"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-3 text-sm leading-7">
        <code>{code}</code>
      </pre>
    </div>
  );
}
