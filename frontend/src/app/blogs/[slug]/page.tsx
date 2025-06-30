import { notFound } from "next/navigation";
import { PostHero } from "@/components/blogs/single/PostHero";
import { PostContent } from "@/components/blogs/single/PostContent";
import { PostSidebar } from "@/components/blogs/single/PostSidebar";
import { getPost, extendedBlogs } from "@/components/blogs/single/PostData";

export default function SinglePostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-principal pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <PostHero postImage={post.image} />
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <PostContent title={post.title} image={post.image} content={post.content} />
          <div>
            <PostSidebar currentSlug={params.slug} blogs={extendedBlogs} />
          </div>
        </div>
      </section>
    </main>
  );
} 