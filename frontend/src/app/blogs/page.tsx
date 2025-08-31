import { BlogHero } from '@/components/blogs/BlogHero';
import { BlogGrid } from '@/components/blogs/BlogGrid';
import { blogs } from '@/components/blogs/BlogData';
import { ArrowRight } from 'lucide-react';

export default function BlogsPage() {
  return (
    <main className="bg-principal min-h-screen pb-20">
      {/* Hero Section */}
      <BlogHero />
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        {/* Blog Grid */}
        <BlogGrid blogs={blogs} />
        <div className="mt-10 flex justify-center">
          <button className="from-secundario to-terciario hover:from-terciario hover:to-secundario flex items-center gap-2 rounded-full bg-gradient-to-br px-8 py-3 font-medium text-white transition-all hover:bg-gradient-to-br">
            Todos los Servicios
            <span className="bg-opacity-30 ml-2 inline-block rounded-full bg-white p-2">
              <ArrowRight className="h-4 w-4 text-gray-800" />
            </span>
          </button>
        </div>
      </section>
    </main>
  );
}
