import type { Metadata } from 'next';
import { PostHero } from '@/components/blogs/single/PostHero';
import { PostContent } from '@/components/blogs/single/PostContent';
import { PostSidebar } from '@/components/blogs/single/PostSidebar';
import {
  getBlogBySlugService,
  getRelatedBlogsService,
  getBlogsService,
} from '@/services/blogs';
import { generateMetadataFromSEO } from '@/services/seo';
import { getBlogPostingSchema } from '@/lib/structured-data';
import { JsonLd } from '@/components/shared/JsonLd';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  try {
    const { data } = await getBlogsService({ pageSize: 100 });
    return (data ?? []).map(({ slug }) => ({ slug }));
  } catch (error) {
    // Un CMS caído degrada el build (posts generados on-demand), no lo tumba.
    console.warn('[build] No se pudieron prerenderizar los blogs:', error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { data } = await getBlogBySlugService(slug);
    const canonical = `/blogs/${slug}`;
    if (data.seo) {
      return { alternates: { canonical }, ...generateMetadataFromSEO(data.seo) };
    }
    return {
      title: data.titulo,
      alternates: { canonical },
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
    return { title: 'Blog', alternates: { canonical: `/blogs/${slug}` } };
  }
}

const SinglePostPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const { data } = await getBlogBySlugService(slug);

  const slugsEtiquetas = data.etiquetas?.map(etiqueta => etiqueta.slug) ?? [];
  const { data: relacionados } = await getRelatedBlogsService({
    slugsEtiquetas,
    slugActual: slug,
  });

  const { articulo, media, titulo } = data;
  const jsonLd = getBlogPostingSchema(data);

  return (
    <main className="bg-principal min-h-screen pb-20">
      <JsonLd data={jsonLd} />
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <PostHero title={titulo} media={media} />
        <div className="grid items-start gap-8 md:grid-cols-3">
          <PostContent articulo={articulo} />
          <div>
            <PostSidebar relacionados={relacionados} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SinglePostPage;
