import type { BlogData } from '@/services/blogs/types';

export interface BlogPageContentProps {
  initialBlogs: BlogData[];
  initialPage: number;
  totalPages: number;
}
