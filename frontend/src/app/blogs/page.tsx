import { BlogHero } from '@/components/blogs/BlogHero';
import { BlogIntro } from '@/components/blogs/BlogIntro';
import { BlogGrid } from '@/components/blogs/BlogGrid';
import { blogs } from '@/components/blogs/BlogData';

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-principal pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <BlogHero />
        <BlogIntro />
        {/* Blog Grid */}
        <BlogGrid blogs={blogs} />
        <div className="flex justify-center mt-10">
          <button className="bg-secundario text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-terciario transition-colors font-medium">
            All Services
            <span className="inline-block bg-white bg-opacity-30 rounded-full p-2 ml-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
            </span>
          </button>
        </div>
      </section>
    </main>
  );
} 