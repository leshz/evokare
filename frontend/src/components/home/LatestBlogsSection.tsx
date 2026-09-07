import { getBlogsService } from '@/services/blogs';
import { BlogData } from '@/services/blogs/types';
import { BlogsComponent } from '@/services/inicio/types';
import { BlogGrid } from '@/components/blogs/BlogGrid';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Button } from '@/components/shared/Button';
import { RELATED_POSTS_LIMIT } from '@/constants';

interface LatestBlogsSectionProps {
  data: BlogsComponent;
}

export async function LatestBlogsSection({ data }: LatestBlogsSectionProps) {
  const { titulo, subtitulo, boton, cantidad } = data;

  let blogs: BlogData[] = [];

  try {
    const response = await getBlogsService({
      pageSize: cantidad ?? RELATED_POSTS_LIMIT,
    });
    blogs = response.data;
  } catch (error) {
    // Un CMS caído degrada la sección, no tumba el build estático del home.
    console.warn('inicio.blogs: no se pudieron cargar los artículos', error);
  }

  if (blogs.length === 0) {
    return null;
  }

  return (
    <section className="bg-surface-soft py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader title={titulo} subtitle={subtitulo} decoration={false} />

        <BlogGrid blogs={blogs} />

        {boton && (
          <div className="mt-12 text-center">
            <Button href={boton.link} variant="outline">
              {boton.texto}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
