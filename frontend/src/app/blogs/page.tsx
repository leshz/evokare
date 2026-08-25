import { Suspense } from 'react';
import type { Metadata } from 'next';
import { BlogHero } from '@/components/blogs/BlogHero';
import { BlogGrid } from '@/components/blogs/BlogGrid';
import { PAGINATION_PAGE_SIZE } from '@/constants';
import { getBlogsService } from '@/services/blogs';
import { DEFAULT_OG_IMAGE } from '@/services/seo';
import { Pagination } from '@/components/shared/Pagination';

export const dynamic = 'force-dynamic';

interface BlogsPageProps {
  searchParams: Promise<{ page?: string }>;
}

const BLOG_TITLE = 'Blog — Bienestar Mental y Emocional';
const BLOG_DESCRIPTION =
  'Artículos, consejos y recursos sobre salud mental, bienestar emocional y desarrollo personal.';

export async function generateMetadata({
  searchParams,
}: BlogsPageProps): Promise<Metadata> {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const canonical = page > 1 ? `/blogs?page=${page}` : '/blogs';

  return {
    title: BLOG_TITLE,
    description:
      'Artículos, consejos y recursos sobre salud mental, bienestar emocional y desarrollo personal. Aprende a reconectar con tu verdadero ser.',
    alternates: { canonical },
    openGraph: {
      title: BLOG_TITLE,
      description: BLOG_DESCRIPTION,
      type: 'website',
      url: canonical,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: BLOG_TITLE,
      description: BLOG_DESCRIPTION,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
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
          <Suspense fallback={null}>
            <Pagination meta={meta} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
