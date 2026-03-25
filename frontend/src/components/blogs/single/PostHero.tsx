import { AdaptiveImage } from '@/components/shared/AdaptiveImage';
import { StrapiImage } from '@/services/general/types';
import Link from 'next/link';

interface PostHeroProps {
  media: StrapiImage[];
  title: string;
}

export const PostHero = ({ media, title }: PostHeroProps) => {
  return (
    <div className="relative mb-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div className="flex-1">
        <h1 className="text-text-primary mb-4 text-3xl font-bold md:text-4xl">
          {title}
        </h1>
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-secundario transition-colors">
            Inicio
          </Link>{' '}
          /{' '}
          <Link
            href="/blogs"
            className="hover:text-secundario transition-colors"
          >
            Blog
          </Link>{' '}
          /{' '}
          <span className="text-secundario font-medium">Artículo</span>
        </nav>
      </div>
      {media?.length > 0 && (
        <div className="flex flex-col gap-3 md:w-1/2">
          <div className="overflow-hidden rounded-2xl">
            <AdaptiveImage
              image={media[0]}
              width={600}
              height={300}
              alt={title}
              className="h-52 w-full rounded-2xl object-cover md:h-64"
            />
          </div>
          {media?.length > 1 && (
            <div className="flex gap-3">
              {media.slice(1, 3).map((img, i) => (
                <div
                  key={img.id ?? i}
                  className="flex-1 overflow-hidden rounded-xl"
                >
                  <AdaptiveImage
                    image={img}
                    width={300}
                    height={150}
                    alt={`${title} - ${i + 2}`}
                    className="h-24 w-full rounded-xl object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
