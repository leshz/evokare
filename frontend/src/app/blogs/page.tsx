import { BlogHero } from '@/components/blogs/BlogHero';
import { BlogIntro } from '@/components/blogs/BlogIntro';
import { BlogGrid } from '@/components/blogs/BlogGrid';
import { blogs } from '@/components/blogs/BlogData';
import { ArrowRight } from 'lucide-react';

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
          <button className="bg-gradient-to-br from-secundario to-terciario text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-gradient-to-br hover:from-terciario hover:to-secundario transition-all font-medium">
            Todos los Servicios
            <span className="inline-block bg-white bg-opacity-30 rounded-full p-2 ml-2">
              <ArrowRight className="w-4 h-4 text-gray-800" />
            </span>
          </button>
        </div>
      </section>
    </main>
  );
} 