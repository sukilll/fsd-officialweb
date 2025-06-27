
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author_name: string;
  author_email: string | null;
  author_avatar: string | null;
  published_at: string;
  updated_at: string;
  reading_time: number;
  slug: string;
  tags: string[];
}
