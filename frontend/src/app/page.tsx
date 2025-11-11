import type { Metadata } from 'next';
import { SupportingSection } from '@/components/home/SupportingSection';
import { SupportSystemSection } from '@/components/home/SupportSystemSection';
import { StatisticsSection } from '@/components/home/StatisticsSection';
import { TestimonialSection } from '@/components/home/TestimonialSection';
import { FreshPerspectivesSection } from '@/components/home/FreshPerspectivesSection';
import { DailyQuotesSection } from '@/components/home/DailyQuotesSection';
import { getInicioService } from '@/services/inicio';
import { renderSection } from '@/lib/component-factory';
import { generateMetadataFromSEO } from '@/services/seo';
// import { PricingSection } from "@/components/home/PricingSection";

export async function generateMetadata(): Promise<Metadata> {
  const { data: { seo } } = await getInicioService();

  if (!seo) {
    return {
      title: 'Inicio',
      description: 'Bienvenido a nuestra plataforma de bienestar mental'
    };
  }

  return generateMetadataFromSEO(seo);
}

export default async function Home() {
  const { data: inicioData } = await getInicioService();

  return (
    <div className="min-h-screen bg-white">
      {/* Renderizado dinámico de secciones desde el CMS */}
      {inicioData.secciones.map((seccion, index) =>
        renderSection(seccion, index)
      )}

      {/* Secciones estáticas (temporalmente hasta que se migren al CMS) */}
      <SupportingSection />
      <SupportSystemSection />
      <StatisticsSection />
      <TestimonialSection />
      <FreshPerspectivesSection />
      <DailyQuotesSection />
      {/* <PricingSection /> */}
    </div>
  );
}
