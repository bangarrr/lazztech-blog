export type ArticleType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  category: string[];
}

export type ArticleListType = {
  contents: ArticleType[];
}