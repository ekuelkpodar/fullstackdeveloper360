import { categories, featuredQuestions, newestQuestions, questions, tags, trendingQuestions } from "@/data/sampleData";
import { Category, Difficulty, Question, QuestionType, Tag } from "@/data/schema";

export type QuestionFilters = {
  category?: string;
  tags?: string[];
  difficulty?: Difficulty | "all";
  type?: QuestionType | "all";
  sort?: "popular" | "newest";
};

export const getCategories = (): Category[] => categories;
export const getTags = (): Tag[] => tags;
export const getQuestions = (): Question[] => questions;
export const getFeaturedQuestions = (): Question[] => featuredQuestions;
export const getTrendingQuestions = (): Question[] => trendingQuestions;
export const getNewestQuestions = (): Question[] => newestQuestions;

export const getCategoryBySlug = (slug: string) =>
  categories.find((cat) => cat.slug === slug);

export const getTagBySlug = (slug: string) => tags.find((tag) => tag.slug === slug);

export const getQuestionBySlug = (slug: string) =>
  questions.find((question) => question.slug === slug);

export const getQuestionsByCategory = (categoryId: string) =>
  questions.filter((q) => q.categoryId === categoryId);

export const getQuestionsByTag = (tagId: string) =>
  questions.filter((q) => q.tagIds.includes(tagId));

export const applyFilters = (filters: QuestionFilters, list: Question[] = questions): Question[] => {
  const { category, tags: tagFilters, difficulty, type, sort } = filters;
  let result = [...list];

  if (category) {
    result = result.filter((q) => q.categoryId === category);
  }

  if (tagFilters && tagFilters.length > 0) {
    result = result.filter((q) => tagFilters.every((t) => q.tagIds.includes(t)));
  }

  if (difficulty && difficulty !== "all") {
    result = result.filter((q) => q.difficulty === difficulty);
  }

  if (type && type !== "all") {
    result = result.filter((q) => q.type === type);
  }

  if (sort === "newest") {
    result = result.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  }

  return result;
};
