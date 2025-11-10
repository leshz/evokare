import { HeroSection } from '@/components/home/HeroSection';
import { SeccionInicio } from '@/services/inicio/types';

type ComponentMap = {
  [key: string]: React.ComponentType<any>;
};

const COMPONENT_MAP: ComponentMap = {
  'shared.banner-comp': HeroSection,
  // Futuros componentes se agregarán aquí
  // 'shared.about-comp': AboutSection,
  // 'shared.understanding-comp': UnderstandingSection,
};

export function renderSection(section: SeccionInicio, index: number) {
  const Component = COMPONENT_MAP[section.__component];

  if (!Component) {
    console.warn(
      `Component not found for type: ${section.__component}. Please add it to COMPONENT_MAP.`
    );
    return null;
  }

  // Para banner-comp, extraemos el primer banner
  if (section.__component === 'shared.banner-comp') {
    const banner = section.banners[0];
    if (!banner) return null;
    return <Component key={`${section.__component}-${index}`} banner={banner} />;
  }

  return <Component key={`${section.__component}-${index}`} data={section} />;
}
