import { AdaptiveImage } from '@/components/shared/AdaptiveImage';
import { StrapiImage } from '@/services/general/types';


interface PostHeroProps {
  media: StrapiImage[];
  title: string;
}

export const PostHero = ({ media, title }: PostHeroProps) => {
  return (
    <div className="relative mb-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div className="flex-1">
        <div
          className="text-secundario absolute -z-10 text-6xl font-extrabold opacity-10 select-none"
          style={{ top: 0 }}
        >
          Single Post
        </div>
        <h1 className="mb-2 text-4xl font-bold text-gray-900 md:text-5xl">
          {title}
        </h1>
        <nav className="mb-4 text-sm text-gray-500">
          <span>Inicio</span> / <span>Blogs</span> /{' '}
          <span className="text-secundario font-medium">Single Post</span>
        </nav>
      </div>
      <div className="flex flex-col gap-4 md:w-1/2">
        {media.length > 0 ?
          <AdaptiveImage
            image={media[0]}
            width={400}
            height={80}
            alt="Main"
            className="h-40 w-full rounded-2xl object-cover"
          />
          : null}
        <div className="flex gap-4">
          {media.length > 1 ?
            <AdaptiveImage
              image={media[1]}
              width={400}
              height={80}
              alt="Session"
              className="h-20 w-1/2 rounded-2xl object-cover"
            /> : null}
          {media.length > 2 ?
            <AdaptiveImage
              image={media[2]}
              width={400}
              height={80}
              alt="Session"
              className="h-20 w-1/2 rounded-2xl object-cover"
            />
            : null}
        </div>
      </div>
    </div>
  );
};
