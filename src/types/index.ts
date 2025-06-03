export type { RootState } from "@/store";
export interface Post {
  id: number;
  image: string;
  title: string;
  body: string;
  date: string;
  author: string;
}

export interface Social {
  id: number;
  image: string;
  description: string;
}
