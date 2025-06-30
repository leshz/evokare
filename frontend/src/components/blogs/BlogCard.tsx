import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export const BlogCard = ({ title, description, image, slug }: BlogCardProps) => {
  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm mb-6">
      <Link href={`/blogs/${slug}`} className="w-28 h-24 block">
        <Image src={image} alt={title} width={112} height={96} className="w-28 h-24 object-cover rounded-xl" />
      </Link>
      <div className="flex-1">
        <Link href={`/blogs/${slug}`} className="font-semibold text-lg text-gray-900 mb-1 block hover:text-secundario transition-colors">{title}</Link>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <Link href={`/blogs/${slug}`} className="inline-flex items-center text-secundario font-medium hover:underline group">
          <span>Read More</span>
          <span className="ml-2 bg-secundario bg-opacity-10 rounded-full p-1 group-hover:bg-opacity-20 transition">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
          </span>
        </Link>
      </div>
    </div>
  );
}; 