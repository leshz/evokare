export const BlogHero = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
      <div className="flex-1">
        <div className="text-6xl font-extrabold text-secundario opacity-10 absolute -z-10 select-none" style={{ top: 0 }}>News & Article</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Your Trusted Source For Mental Health</h1>
        <nav className="text-gray-500 text-sm mb-4">
          <span>Home</span> / <span>Pages</span> / <span className="text-secundario font-medium">News & Article</span>
        </nav>
      </div>
      <div className="flex flex-col gap-4 md:w-1/2">
        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Therapy" className="rounded-2xl w-full h-40 object-cover" />
        <img src="https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80" alt="Session" className="rounded-2xl w-1/2 h-20 object-cover self-end" />
      </div>
    </div>
  );
}; 