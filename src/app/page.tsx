import Link from "next/link";
import { TopicGrid } from "@/components/TopicGrid";
import { QuestionCard } from "@/components/QuestionCard";
import { SearchInput } from "@/components/SearchInput";
import {
  getCategories,
  getFeaturedQuestions,
  getTrendingQuestions,
  getNewestQuestions,
} from "@/lib/content";

export default function Home() {
  const categories = getCategories().slice(0, 6);
  const featured = getFeaturedQuestions();
  const trending = getTrendingQuestions();
  const newest = getNewestQuestions();

  return (
    <div className="space-y-12">
      <section className="rounded-3xl border bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
          <div className="lg:max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Interview prep</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Curated full-stack interview questions with answers that stick.
            </h1>
            <p className="mt-3 text-lg text-neutral-700">
              Browse by topic, search across 500+ prompts, and read concise answers with examples.
              Premium-ready gating, SEO-friendly pages, and admin curation built-in.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-neutral-700">
              <span className="rounded-full bg-neutral-100 px-3 py-1">Frontend</span>
              <span className="rounded-full bg-neutral-100 px-3 py-1">Backend</span>
              <span className="rounded-full bg-neutral-100 px-3 py-1">System Design</span>
              <span className="rounded-full bg-neutral-100 px-3 py-1">Behavioral</span>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/topics"
                className="rounded-full bg-black px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Explore topics
              </Link>
              <Link
                href="/search"
                className="rounded-full border border-neutral-200 px-5 py-3 text-center text-sm font-semibold text-neutral-900"
              >
                Browse all questions
              </Link>
            </div>
          </div>
          <div className="grow space-y-4 rounded-2xl border bg-neutral-50 p-4">
            <SearchInput />
            <div className="grid gap-3 sm:grid-cols-2">
              {featured.slice(0, 4).map((q) => (
                <QuestionCard key={q.id} question={q} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Featured categories</h2>
          <Link href="/topics" className="text-sm font-semibold text-neutral-700 hover:text-black">
            View all
          </Link>
        </div>
        <TopicGrid categories={categories} />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Trending</h3>
            <Link href="/search?sort=popular" className="text-sm font-semibold text-neutral-700">
              See more
            </Link>
          </div>
          <div className="space-y-3">
            {trending.slice(0, 6).map((q) => (
              <QuestionCard key={q.id} question={q} />
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Newest</h3>
            <Link href="/search?sort=newest" className="text-sm font-semibold text-neutral-700">
              See more
            </Link>
          </div>
          <div className="space-y-3">
            {newest.slice(0, 6).map((q) => (
              <QuestionCard key={q.id} question={q} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
