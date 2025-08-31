import Image from 'next/image';

export const BlogHero = () => {
  return (
    <div className="from-secundario to-terciario bg-gradient-to-r px-4 pt-16 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-8 p-10 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <div
              className="text-secundario absolute -z-10 text-6xl font-extrabold opacity-10 select-none"
              style={{ top: 0 }}
            >
              News & Article
            </div>
            <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">
              Your Trusted Source For Mental Health
            </h1>
            <nav className="mb-4 text-sm text-white">
              <span>Home</span> / <span>Pages</span> /{' '}
              <span className="font-medium text-white">News & Article</span>
            </nav>
          </div>
          <div className="flex flex-col gap-4 md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
              width={400}
              height={80}
              alt="Therapy"
              className="h-40 w-full rounded-2xl object-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80"
              width={400}
              height={80}
              alt="Session"
              className="h-20 w-1/2 self-end rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
