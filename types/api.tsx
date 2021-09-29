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

export type ProfileType = {
  name: string;
  body: string;
  sns_links: {
    fieldId: string;
    type: string;
    link: string;
  }[];
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}