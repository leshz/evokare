import { notFound } from 'next/navigation';
import { PostHero } from '@/components/blogs/single/PostHero';
import { PostContent } from '@/components/blogs/single/PostContent';
import { PostSidebar } from '@/components/blogs/single/PostSidebar';
import { extendedBlogs } from '@/components/blogs/single/PostData';
import { getBlogBySlugService } from '@/services/blogs';

const SinglePostPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const { data } = await getBlogBySlugService(slug);

  const { articulo, media, titulo } = data;

  return (
    <main className="bg-principal min-h-screen pb-20">
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
