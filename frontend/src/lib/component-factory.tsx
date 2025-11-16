import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { UnderstandingSection } from '@/components/home/UnderstandingSection';
import { SupportingSection } from '@/components/home/SupportingSection';
import { SupportSystemSection } from '@/components/home/SupportSystemSection';
import { StatisticsSection } from '@/components/home/StatisticsSection';
import { SeccionInicio } from '@/services/inicio/types';

type ComponentMap = {
  [key: string]: React.ComponentType<any>;
};

const COMPONENT_MAP: ComponentMap = {
  'inicio.hero': HeroSection,
  'shared.banner-comp': HeroSection,
  'inicio.acerca': AboutSection,
  'inicio.entendiendo': UnderstandingSection,
  'inicio.apoyo': SupportingSection,
  'inicio.sistemaintegral': SupportSystemSection,
  'inicio.datos': StatisticsSection,
  // Futuros componentes se agregarán aquí
};

export function renderSection(section: SeccionInicio, index: number) {
  const Component = COMPONENT_MAP[section.__component];

  if (!Component) {
    console.warn(
      `Component not found for type: ${section.__component}. Please add it to COMPONENT_MAP.`
    );
    return null;
  }

  // Para inicio.hero, validamos que tenga banners y pasamos el componente completo
  if (section.__component === 'inicio.hero') {
    if (!section.banners || section.banners.length === 0) {
      console.warn('inicio.hero: No banners found');
      return null;
    }
    // Verificar que al menos un bannerGroup tenga bannersa
    const hasValidBanners = section.banners.some(
      (bannerGroup) => bannerGroup.bannersa && bannerGroup.bannersa.length > 0
    );
    if (!hasValidBanners) {
      console.warn('inicio.hero: No valid bannersa found in banner groups');
      return null;
    }
    return <Component key={`${section.__component}-${index}`} data={section} />;
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
    return <Component key={`${section.__component}-${index}`} data={section} />;
  }

  // Para inicio.entendiendo, validamos que tenga los datos requeridos
  if (section.__component === 'inicio.entendiendo') {
    if (!section.punto || section.punto.length === 0) {
      console.warn('inicio.entendiendo: No punto items found');
      return null;
    }
    return <Component key={`${section.__component}-${index}`} data={section} />;
  }

  // Para inicio.apoyo, validamos que tenga los datos requeridos
  if (section.__component === 'inicio.apoyo') {
    if (!section.item || section.item.length === 0) {
      console.warn('inicio.apoyo: No item array found');
      return null;
    }
    return <Component key={`${section.__component}-${index}`} data={section} />;
  }

  // Para inicio.sistemaintegral, validamos que tenga los datos requeridos
  if (section.__component === 'inicio.sistemaintegral') {
    if (!section.contenido || section.contenido.length === 0) {
      console.warn('inicio.sistemaintegral: No contenido array found');
      return null;
    }
    return <Component key={`${section.__component}-${index}`} data={section} />;
  }

  // Para inicio.datos, validamos que tenga los datos requeridos
  if (section.__component === 'inicio.datos') {
    if (!section.datos || section.datos.length === 0) {
      console.warn('inicio.datos: No datos array found');
      return null;
    }
    return <Component key={`${section.__component}-${index}`} data={section} />;
  }

  // Fallback genérico para futuros componentes
  return <Component key={`${(section as SeccionInicio).__component}-${index}`} data={section} />;
}
