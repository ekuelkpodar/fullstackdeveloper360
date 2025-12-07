# FullStack.Cafe Remix (Interview Prep Platform)

A Next.js (App Router, TypeScript, Tailwind) MVP for a FullStack.Cafe-style interview prep library. Includes topic-first browsing, fuzzy search + filters, rich question detail pages, premium gating hooks, and an admin shell ready for a real database/CMS.

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind v4
- In-memory content model for MVP (Postgres/Prisma ready)

## Run locally
```bash
npm install
npm run dev
```
Visit http://localhost:3000.

## Core features
- Home hero with featured topics, trending/newest rails, and inline search suggestions.
- Topic pages (`/topics`, `/topic/[slug]`), tag pages (`/tag/[slug]`).
- Question detail (`/question/[slug]`): concise answer blocks, code examples with copy, TOC, follow-ups, pitfalls, related questions, “mark as studied” (local storage).
- Search (`/search`): instant suggestions, keyword scoring, filters (category, tag, difficulty, type, sort), API endpoint `/api/search`.
- Admin shell (`/admin` + subpages) with tables/forms for categories, tags, questions and premium-ready toggles.
- Premium/Stripe ready: feature flag scaffold in `src/lib/featureFlags.ts` (gates premium answers, toggle stripe/search providers).

## Content model
Types live in `src/data/schema.ts`; seed data in `src/data/sampleData.ts` (15 categories, 80 tags, 500 sample questions with answer blocks + snippets). Utility helpers in `src/lib/content.ts` and search scoring in `src/lib/search.ts`.

## Next steps
- Swap in a real database (Prisma + Postgres) and move seeds to a migration + seed script.
- Wire admin forms to CRUD APIs with validation and slug uniqueness checks.
- Add Auth (NextAuth) and payments (Stripe) using `featureFlags` toggles.
- Replace in-memory search with Postgres FTS/Meilisearch + caching; add rate limits.
- Expand E2E tests for browse → search → open question + admin publish flow.
