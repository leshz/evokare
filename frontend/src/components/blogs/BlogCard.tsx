import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
          <span>Leer Más</span>
          <span className="ml-2 bg-secundario bg-opacity-10 rounded-full p-1 group-hover:bg-opacity-20 transition">
            <ArrowRight className="w-4 h-4 text-white" />
          </span>
        </Link>
      </div>
    </div>
  );
}; 