import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { SeccionInicio } from '@/services/inicio/types';

type ComponentMap = {
  [key: string]: React.ComponentType<any>;
};

const COMPONENT_MAP: ComponentMap = {
  'shared.banner-comp': HeroSection,
  'inicio.acerca': AboutSection,
  // Futuros componentes se agregarán aquí
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

  // Para banner-comp, pasamos el array completo de banners para el slider
  if (section.__component === 'shared.banner-comp') {
    if (!section.banners || section.banners.length === 0) {
      console.warn('banner-comp: No banners found');
      return null;
    }
    return <Component key={`${section.__component}-${index}`} banners={section.banners} />;
  }

  // Para inicio.acerca, validamos que tenga los datos requeridos
  if (section.__component === 'inicio.acerca') {
    if (!section.destacado || section.destacado.length === 0) {
      console.warn('inicio.acerca: No destacado items found');
      return null;
    }
    // Type narrowing: TypeScript ahora sabe que section es AboutComponent
    return <Component key={`${section.__component}-${index}`} data={section} />;
  }

  // Fallback genérico para futuros componentes
  return <Component key={`${section.__component}-${index}`} data={section} />;
}
