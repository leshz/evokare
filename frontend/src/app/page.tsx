import type { Metadata } from 'next';
import { getInicioService } from '@/services/inicio';
import { renderSection } from '@/lib/component-factory';
import { generateMetadataFromSEO } from '@/services/seo';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const {
    data: { seo },
  } = await getInicioService();

  if (!seo) {
    return {
      title: 'Inicio',
      description: 'Bienvenido a nuestra plataforma de bienestar mental',
    };
  }

  return generateMetadataFromSEO(seo);
}

export default async function Home() {
  const { data: inicioData } = await getInicioService();

  return (
    <div className="min-h-screen bg-white">
      {inicioData.secciones.map((seccion, index) =>
        renderSection(seccion, index)
      )}
    </div>
  );
}
