import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BlogData } from '@/services/blogs/types';
import { AdaptiveImage } from '@/components/shared/AdaptiveImage';

export const BlogCard = ({ titulo, introduccion, media, slug }: BlogData) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <Link href={`/blogs/${slug}`} className="block aspect-video overflow-hidden">
        <AdaptiveImage
          image={media[0]}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="p-6">
        <Link
          href={`/blogs/${slug}`}
          className="text-text-primary hover:text-secundario mb-2 block text-lg font-semibold transition-colors"
        >
          {titulo}
        </Link>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">
          {introduccion}
        </p>
        <Link
          href={`/blogs/${slug}`}
          className="text-secundario group/link inline-flex items-center text-sm font-medium hover:underline"
        >
          <span>Leer más</span>
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
