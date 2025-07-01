import { notFound } from "next/navigation";
import { PostHero } from "@/components/blogs/single/PostHero";
import { PostContent } from "@/components/blogs/single/PostContent";
import { PostSidebar } from "@/components/blogs/single/PostSidebar";
import { getPost, extendedBlogs } from "@/components/blogs/single/PostData";

const SinglePostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-principal pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <PostHero postImage={post.image} />
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <PostContent title={post.title} image={post.image} content={post.content} />
          <div>
            <PostSidebar currentSlug={slug} blogs={extendedBlogs} />
          </div>
        </div>
      </section>
    </main>
  );
}


export default SinglePostPage;