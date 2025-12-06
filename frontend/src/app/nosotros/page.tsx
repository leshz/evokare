import type { Metadata } from 'next';
import { getNosotrosService } from '@/services/nosotros';
import { generateMetadataFromSEO } from '@/services/seo';
import { renderSection } from '@/lib/component-factory';

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

  return (
    <div className="min-h-screen">
      {data.secciones.map((seccion, index) => renderSection(seccion, index))}
    </div>
  );
}
