import { BlogCard } from './BlogCard';

import { BlogData } from '@/services/blogs/types';

interface BlogGridProps {
  blogs: BlogData[];
}

export const BlogGrid = ({ blogs }: BlogGridProps) => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {blogs.map((blog, idx) => (
        <BlogCard key={idx} {...blog} />
      ))}
    </div>
  );
};
