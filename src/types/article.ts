/**
 * Article type definitions
 */

export interface Article {
  id: string;
  title: string;
  image: string;
  type?: "video" | "date" | "question" | "default";
  date?: string;
  hashtag?: string;
}
