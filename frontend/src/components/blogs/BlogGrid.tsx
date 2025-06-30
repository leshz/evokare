import { BlogCard } from './BlogCard';

interface Blog {
  slug: string;
  title: string;
  description: string;
  image: string;
}

interface BlogGridProps {
  blogs: Blog[];
}

export const BlogGrid = ({ blogs }: BlogGridProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {blogs.map((blog, idx) => (
        <BlogCard key={idx} {...blog} />
      ))}
    </div>
  );
}; 