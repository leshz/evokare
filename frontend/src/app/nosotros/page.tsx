import type { Metadata } from 'next';
import { getNosotrosService } from '@/services/nosotros';
import { generateMetadataFromSEO } from '@/services/seo';
import { renderSection } from '@/lib/component-factory';
import { AboutHero } from '@/components/about/AboutHero';

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getNosotrosService();

  if (!data.seo) {
    return {
      title: 'Nosotros',
      description: 'Conoce nuestro enfoque y credenciales profesionales',
    };
  }

  return generateMetadataFromSEO(data.seo);
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
