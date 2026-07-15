export type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
};

export const posts: Post[] = [
  {
    slug: "one-to-one-tutoring",
    title: "How to get the most out of one-to-one tutoring",
    date: "15 July 2026",
    author: "Sam Thyr",
    excerpt: "One-to-one tutoring works differently from classroom teaching, and the students who benefit most understand that difference from the start.",
    category: "Study advice",
  },
];
