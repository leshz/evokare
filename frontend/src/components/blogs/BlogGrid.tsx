import { BlogCard } from './BlogCard';

import { BlogData } from '@/services/blogs/types';

interface BlogGridProps {
  blogs: BlogData[];
}

export const BlogGrid = ({ blogs }: BlogGridProps) => {
  if (blogs.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-lg text-gray-500">
          No hay artículos disponibles en este momento.
        </p>
      </div>
    );
  }

  const gridCols =
    blogs.length === 1
      ? 'max-w-md mx-auto'
      : blogs.length === 2
        ? 'grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto'
        : 'grid gap-8 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={gridCols}>
      {blogs.map((blog, idx) => (
        <BlogCard key={idx} {...blog} />
      ))}
    </div>
  );
};
