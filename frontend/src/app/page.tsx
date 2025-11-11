import { UnderstandingSection } from '@/components/home/UnderstandingSection';
import { SupportingSection } from '@/components/home/SupportingSection';
import { SupportSystemSection } from '@/components/home/SupportSystemSection';
import { StatisticsSection } from '@/components/home/StatisticsSection';
import { TestimonialSection } from '@/components/home/TestimonialSection';
import { FreshPerspectivesSection } from '@/components/home/FreshPerspectivesSection';
import { DailyQuotesSection } from '@/components/home/DailyQuotesSection';
import { getInicioService } from '@/services/inicio';
import { renderSection } from '@/lib/component-factory';
// import { PricingSection } from "@/components/home/PricingSection";

export default async function Home() {
  const { data: inicioData } = await getInicioService();

  return (
    <div className="min-h-screen bg-white">
      {/* Renderizado dinámico de secciones desde el CMS */}
      {inicioData.secciones.map((seccion, index) =>
        renderSection(seccion, index)
      )}

      {/* Secciones estáticas (temporalmente hasta que se migren al CMS) */}
      <UnderstandingSection />
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
