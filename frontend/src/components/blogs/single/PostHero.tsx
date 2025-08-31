import Image from 'next/image';

interface PostHeroProps {
  postImage: string;
}

export const PostHero = ({ postImage }: PostHeroProps) => {
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
          Deep Dive Into This Topic That Matters
        </h1>
        <nav className="mb-4 text-sm text-gray-500">
          <span>Home</span> / <span>Pages</span> /{' '}
          <span className="text-secundario font-medium">Single Post</span>
        </nav>
      </div>
      <div className="flex flex-col gap-4 md:w-1/2">
        <Image
          src={postImage}
          width={400}
          height={80}
          alt="Main"
          className="h-40 w-full rounded-2xl object-cover"
        />
        <div className="flex gap-4">
          <Image
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
            width={400}
            height={80}
            alt="Session"
            className="h-20 w-1/2 rounded-2xl object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80"
            width={400}
            height={80}
            alt="Session"
            className="h-20 w-1/2 rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};
