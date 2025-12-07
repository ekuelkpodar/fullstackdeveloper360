import { AnswerBlock, Category, Question, Tag } from "./schema";

const categorySeeds = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "TypeScript", icon: "🔷" },
  { name: "System Design", icon: "🏗️" },
  { name: "Databases", icon: "🗄️" },
  { name: "SQL", icon: "📊" },
  { name: "DevOps", icon: "⚙️" },
  { name: "Cloud", icon: "☁️" },
  { name: "Caching", icon: "💾" },
  { name: "Algorithms", icon: "🧠" },
  { name: "Data Structures", icon: "🧱" },
  { name: "Testing", icon: "✅" },
  { name: "Security", icon: "🔐" },
  { name: "Behavioral", icon: "🗣️" },
  { name: "API Design", icon: "🔌" },
];

const tagSeeds = [
  "Hooks",
  "Rendering",
  "Performance",
  "Caching",
  "Consistency",
  "Transactions",
  "Indexes",
  "ACID",
  "Load Balancing",
  "Rate Limiting",
  "Queues",
  "Pub/Sub",
  "REST",
  "GraphQL",
  "gRPC",
  "Microservices",
  "Monoliths",
  "Kubernetes",
  "Docker",
  "CI/CD",
  "Testing",
  "Observability",
  "Tracing",
  "Metrics",
  "Logging",
  "Distributed Systems",
  "CAP",
  "Eventual Consistency",
  "Sharding",
  "Partitioning",
  "Indexing",
  "Windows Functions",
  "Algorithms",
  "Sorting",
  "Searching",
  "Graphs",
  "Trees",
  "Hash Tables",
  "Concurrency",
  "Locks",
  "Optimistic Concurrency",
  "Transactions",
  "Retries",
  "Circuit Breakers",
  "Resiliency",
  "OAuth",
  "JWT",
  "RBAC",
  "XSS",
  "CSRF",
  "SQL Injection",
  "Interviews",
  "Leadership",
  "Conflict Management",
  "Ownership",
  "Strategy",
  "Systems",
  "Scalability",
  "Reliability",
  "Postgres",
  "MongoDB",
  "Redis",
  "Elasticsearch",
  "Meilisearch",
  "Typesense",
  "Stripe",
  "Payments",
  "Feature Flags",
  "Rate Limits",
  "Workers",
  "Cron",
  "Backpressure",
  "Batching",
  "Streaming",
  "WebSockets",
  "Serverless",
  "ISR",
  "SEO",
  "Accessibility",
  "Lighthouse",
  "Tailwind",
  "Next.js",
  "Prisma",
  "PostgreSQL",
];

export const categories: Category[] = categorySeeds.map((cat, index) => {
  const slug = cat.name.toLowerCase().replace(/\s+/g, "-");
  return {
    id: `cat-${index + 1}`,
    name: cat.name,
    slug,
    description: `${cat.name} interview questions and answers with concise explanations and examples`,
    order: index + 1,
    icon: cat.icon,
  };
});

export const tags: Tag[] = tagSeeds.map((tag, index) => ({
  id: `tag-${index + 1}`,
  name: tag,
  slug: tag.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
}));

const sampleBlocks = (questionId: string): AnswerBlock[] => [
  {
    id: `${questionId}-b1`,
    questionId,
    blockType: "text",
    content:
      "Start with a crisp answer in 2-3 sentences, then expand with context, trade-offs, and when to use it.",
    order: 1,
  },
  {
    id: `${questionId}-b2`,
    questionId,
    blockType: "code",
    content: "const answer = craft({ concise: true, edgeCases: true });",
    order: 2,
    language: "typescript",
  },
  {
    id: `${questionId}-b3`,
    questionId,
    blockType: "list",
    content: "Key takeaways",
    items: ["Give a short headline answer", "Back it with examples", "State trade-offs"],
    order: 3,
  },
];

const now = new Date().toISOString();

const difficulties = ["easy", "medium", "hard"] as const;
const types = ["theory", "coding", "system-design", "behavioral"] as const;

const baseQuestions: Omit<Question, "id" | "contentBlocks" | "snippets">[] = [
  {
    title: "Explain React Server Components and when to prefer them.",
    slug: "react-server-components",
    summary: "How RSCs change data fetching and rendering on the server for better TTFB.",
    difficulty: "medium",
    type: "theory",
    categoryId: "cat-1",
    tagIds: ["tag-1", "tag-72", "tag-75"],
    estimatedTime: "6 min",
    isPremium: false,
    createdAt: now,
    updatedAt: now,
    publishedAt: now,
    followUps: ["How do you stream partial results?", "What is the cache model?"],
    pitfalls: ["Mixing client hooks inside server components", "Over-fetching data per request"],
    relatedIds: ["q-2", "q-3"],
  },
  {
    title: "Design a rate limiter for an API.",
    slug: "design-rate-limiter",
    summary: "Token bucket vs leaky bucket, storage options, and per-tenant fairness.",
    difficulty: "medium",
    type: "system-design",
    categoryId: "cat-4",
    tagIds: ["tag-10", "tag-11", "tag-40"],
    estimatedTime: "10 min",
    isPremium: true,
    createdAt: now,
    updatedAt: now,
    publishedAt: now,
    relatedIds: ["q-1"],
  },
  {
    title: "What is an index-only scan in PostgreSQL?",
    slug: "index-only-scan",
    summary: "How Postgres can satisfy a query using only the index with visibility map.",
    difficulty: "easy",
    type: "theory",
    categoryId: "cat-5",
    tagIds: ["tag-7", "tag-30", "tag-63"],
    estimatedTime: "4 min",
    isPremium: false,
    createdAt: now,
    updatedAt: now,
    publishedAt: now,
  },
  {
    title: "Implement an LRU cache.",
    slug: "implement-lru-cache",
    summary: "Combine a doubly linked list and hash map for O(1) get/put.",
    difficulty: "medium",
    type: "coding",
    categoryId: "cat-9",
    tagIds: ["tag-4", "tag-37", "tag-58"],
    estimatedTime: "12 min",
    isPremium: false,
    createdAt: now,
    updatedAt: now,
    publishedAt: now,
  },
  {
    title: "Behavioral: Tell me about a time you reduced production risk.",
    slug: "behavioral-reduced-risk",
    summary: "Narrative structure (STAR), impact, and what changed in your process.",
    difficulty: "easy",
    type: "behavioral",
    categoryId: "cat-14",
    tagIds: ["tag-54", "tag-56"],
    estimatedTime: "5 min",
    isPremium: false,
    createdAt: now,
    updatedAt: now,
    publishedAt: now,
  },
];

const languageSnippets = (questionId: string) => [
  {
    id: `${questionId}-s1`,
    questionId,
    language: "typescript",
    code: "// Keep the happy path small\nfunction handler(request) {\n  // ...\n}",
    explanation: "Lead with the main flow, then guard clauses for clarity.",
  },
  {
    id: `${questionId}-s2`,
    questionId,
    language: "python",
    code: "def answer():\n    return 'compose clear examples'",
  },
];

// Expand to a few hundred realistic-looking entries without hand writing each.
const generatedQuestions: Question[] = Array.from({ length: 500 }).map((_, i) => {
  const template = baseQuestions[i % baseQuestions.length];
  const id = `q-${i + 1}`;
  const difficulty = difficulties[i % difficulties.length];
  const type = types[i % types.length];
  const slug = `${template.slug}-${i + 1}`;
  return {
    ...template,
    id,
    slug,
    difficulty,
    type,
    title: `${template.title} (v${(i % 5) + 1})`,
    summary: template.summary,
    contentBlocks: sampleBlocks(id),
    snippets: languageSnippets(id),
  };
});

export const questions: Question[] = generatedQuestions;

export const featuredQuestions = questions.slice(0, 12);
export const trendingQuestions = questions.slice(12, 24);
export const newestQuestions = questions.slice(24, 36);
