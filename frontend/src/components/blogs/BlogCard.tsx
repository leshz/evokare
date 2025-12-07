import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BlogData } from '@/services/blogs/types';

import { AdaptiveImage } from '@/components/shared/AdaptiveImage';

export const BlogCard = ({ titulo, introduccion, media, slug }: BlogData) => {
  return (
    <div className="mb-6 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
      <Link href={`/blogs/${slug}`} className="block h-24 w-28">
        <AdaptiveImage image={media[0]} />
      </Link>
      <div className="flex-1">
        <Link
          href={`/blogs/${slug}`}
          className="hover:text-secundario mb-1 block text-lg font-semibold text-gray-900 transition-colors"
        >
          {titulo}
        </Link>
        <p className="mb-2 text-sm text-gray-600">{introduccion}</p>
        <Link
          href={`/blogs/${slug}`}
          className="text-secundario group inline-flex items-center font-medium hover:underline"
        >
          <span>Leer más</span>
          <span className="bg-secundario bg-opacity-10 group-hover:bg-opacity-20 ml-2 rounded-full p-1 transition">
            <ArrowRight className="h-4 w-4 text-white" />
          </span>
        </Link>
      </div>
    </div>
  );
};
