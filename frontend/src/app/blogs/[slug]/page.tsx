import { notFound } from 'next/navigation';
import { PostHero } from '@/components/blogs/single/PostHero';
import { PostContent } from '@/components/blogs/single/PostContent';
import { PostSidebar } from '@/components/blogs/single/PostSidebar';
import { getPost, extendedBlogs } from '@/components/blogs/single/PostData';

const SinglePostPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return notFound();

  return (
    <main className="bg-principal min-h-screen pb-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <PostHero postImage={post.image} />
        <div className="grid items-start gap-8 md:grid-cols-3">
          <PostContent
            title={post.title}
            image={post.image}
            content={post.content}
          />
          <div>
            <PostSidebar currentSlug={slug} blogs={extendedBlogs} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SinglePostPage;
