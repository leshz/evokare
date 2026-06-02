import type { Metadata } from 'next';
import { PostHero } from '@/components/blogs/single/PostHero';
import { PostContent } from '@/components/blogs/single/PostContent';
import { PostSidebar } from '@/components/blogs/single/PostSidebar';
import { extendedBlogs } from '@/components/blogs/single/PostData';
import { getBlogBySlugService, getBlogsService } from '@/services/blogs';
import { generateMetadataFromSEO } from '@/services/seo';
import { getBlogPostingSchema } from '@/lib/structured-data';

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  const { data } = await getBlogsService({ pageSize: 100 });
  return data.map(blog => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { data } = await getBlogBySlugService(slug);
    if (data.seo) {
      return generateMetadataFromSEO(data.seo);
    }
    return {
      title: data.titulo,
      description: data.introduccion,
      openGraph: {
        title: data.titulo,
        description: data.introduccion,
        type: 'article',
        ...(data.media?.[0]?.url
          ? {
              images: [
                {
                  url: data.media[0].url,
                  width: data.media[0].width,
                  height: data.media[0].height,
                  alt: data.media[0].alternativeText ?? data.titulo,
                },
              ],
            }
          : {}),
      },
      twitter: {
        card: 'summary_large_image',
        title: data.titulo,
        description: data.introduccion,
        ...(data.media?.[0]?.url ? { images: [data.media[0].url] } : {}),
      },
    };
  } catch {
    return { title: 'Blog' };
  }
}

const SinglePostPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const { data } = await getBlogBySlugService(slug);

  const { articulo, media, titulo } = data;
  const jsonLd = getBlogPostingSchema(data);

  return (
    <main className="bg-principal min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <PostHero title={titulo} media={media} />
        <div className="grid items-start gap-8 md:grid-cols-3">
          <PostContent articulo={articulo} />
          <div>
            <PostSidebar currentSlug={slug} blogs={extendedBlogs} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SinglePostPage;
