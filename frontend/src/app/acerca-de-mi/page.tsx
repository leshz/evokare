import type { Metadata } from 'next';
import { getNosotrosService } from '@/services/nosotros';
import { generateMetadataFromSEO } from '@/services/seo';
import { renderSection } from '@/lib/component-factory';
import { AboutHero } from '@/components/about/AboutHero';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getNosotrosService();

  if (!data.seo) {
    return {
      title: 'Sobre Elisa Horta',
      description: 'Conoce el enfoque y las credenciales profesionales de Elisa Horta.',
      alternates: { canonical: '/acerca-de-mi' },
    };
  }

  return {
    alternates: { canonical: '/acerca-de-mi' },
    ...generateMetadataFromSEO(data.seo),
  };
}

export default async function AboutPage() {
  const { data } = await getNosotrosService();

  const hasHeroSection = data.secciones.some(
    s => s.__component === 'nosotros.hero'
  );

  return (
    <div className="min-h-screen">
      {!hasHeroSection && <AboutHero />}
      {data.secciones.map((seccion, index) => renderSection(seccion, index))}
    </div>
  );
}
