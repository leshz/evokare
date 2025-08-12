import Image from "next/image";

export const BlogHero = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-16 pb-8 bg-gradient-to-r from-secundario to-terciario">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8 p-10">
          <div className="flex-1">
            <div className="text-6xl font-extrabold text-secundario opacity-10 absolute -z-10 select-none" style={{ top: 0 }}>News & Article</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Your Trusted Source For Mental Health</h1>
            <nav className="text-white text-sm mb-4">
              <span>Home</span> / <span>Pages</span> / <span className="text-white font-medium">News & Article</span>
            </nav>
          </div>
          <div className="flex flex-col gap-4 md:w-1/2">
            <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" width={400} height={80} alt="Therapy" className="rounded-2xl w-full h-40 object-cover" />
            <Image src="https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80" width={400} height={80} alt="Session" className="rounded-2xl w-1/2 h-20 object-cover self-end" />
          </div>
        </div>
      </div>
    </div>
  );
}; 