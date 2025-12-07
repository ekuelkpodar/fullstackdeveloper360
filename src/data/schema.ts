export type Difficulty = "easy" | "medium" | "hard";
export type QuestionType = "theory" | "coding" | "system-design" | "behavioral";

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  order: number;
  icon: string;
};

export type Tag = {
  id: string;
  name: string;
  slug: string;
};

export type AnswerBlock = {
  id: string;
  questionId: string;
  blockType: "text" | "code" | "callout" | "list";
  content: string;
  order: number;
  items?: string[];
  language?: string;
};

export type LanguageSnippet = {
  id: string;
  questionId: string;
  language: string;
  code: string;
  explanation?: string;
};

export type Question = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  difficulty: Difficulty;
  type: QuestionType;
  categoryId: string;
  tagIds: string[];
  estimatedTime: string;
  isPremium: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  contentBlocks: AnswerBlock[];
  snippets: LanguageSnippet[];
  followUps?: string[];
  relatedIds?: string[];
  pitfalls?: string[];
};

export type UserProgressStatus = "new" | "in-progress" | "done";

export type UserProgress = {
  userId: string;
  questionId: string;
  status: UserProgressStatus;
  updatedAt: string;
};

export type Bookmark = {
  userId: string;
  questionId: string;
};
