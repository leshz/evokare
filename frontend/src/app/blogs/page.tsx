import type { Metadata } from 'next';
import { BlogHero } from '@/components/blogs/BlogHero';
import { BlogGrid } from '@/components/blogs/BlogGrid';
import { PAGINATION_PAGE_SIZE } from '@/constants';
import { getBlogsService } from '@/services/blogs';
import { Pagination } from '@/components/shared/Pagination';
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Blog — Bienestar Mental y Emocional',
  description: 'Artículos, consejos y recursos sobre salud mental, bienestar emocional y desarrollo personal. Aprende a reconectar con tu verdadero ser.',
  openGraph: {
    title: 'Blog — Bienestar Mental y Emocional',
    description: 'Artículos, consejos y recursos sobre salud mental, bienestar emocional y desarrollo personal.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Bienestar Mental y Emocional',
    description: 'Artículos, consejos y recursos sobre salud mental, bienestar emocional y desarrollo personal.',
  },
};

interface BlogsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  const { data, meta } = await getBlogsService({
    page: currentPage,
    pageSize: PAGINATION_PAGE_SIZE,
  });

  return (
    <main className="bg-principal min-h-screen pb-20">
      <BlogHero />
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="transition-opacity">
          <BlogGrid blogs={data} />
        </div>
        <div className="mt-12">
          <Pagination meta={meta} />
        </div>
      </section>
    </main>
  );
}
