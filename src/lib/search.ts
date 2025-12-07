import { Question } from "@/data/schema";
import { getCategories, getQuestions, getTags } from "./content";

export type SearchResult = Question & { score: number; highlights?: string[] };

const normalize = (value: string) => value.toLowerCase();

const tagLookup = () => {
  const tagMap = new Map<string, string>();
  getTags().forEach((tag) => tagMap.set(tag.id, tag.name.toLowerCase()));
  return tagMap;
};

const categoryLookup = () => {
  const catMap = new Map<string, string>();
  getCategories().forEach((cat) => catMap.set(cat.id, cat.name.toLowerCase()));
  return catMap;
};

const scoreQuestion = (question: Question, query: string): number => {
  const q = normalize(query);
  let score = 0;

  if (normalize(question.title).includes(q)) score += 8;
  if (normalize(question.summary).includes(q)) score += 4;
  if (question.contentBlocks.some((b) => normalize(b.content).includes(q))) score += 3;

  const tags = tagLookup();
  const tagMatch = question.tagIds.some((tagId) => (tags.get(tagId) ?? "").includes(q));
  if (tagMatch) score += 2;

  const categories = categoryLookup();
  if ((categories.get(question.categoryId) ?? "").includes(q)) score += 2;

  // Boost recency slightly
  const recencyBoost = Date.parse(question.publishedAt) / 1_000_000_000_000;
  return score + recencyBoost;
};

export const searchQuestions = (query: string): SearchResult[] => {
  if (!query.trim()) return [];
  const questions = getQuestions();
  return questions
    .map((q) => ({ ...q, score: scoreQuestion(q, query) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 50);
};

export const suggest = (query: string): string[] => {
  if (!query.trim()) return [];
  const q = normalize(query);
  return getQuestions()
    .filter((question) => normalize(question.title).includes(q))
    .slice(0, 5)
    .map((question) => question.title);
};
