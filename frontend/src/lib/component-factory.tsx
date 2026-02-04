import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { UnderstandingSection } from '@/components/home/UnderstandingSection';
import { SupportingSection } from '@/components/home/SupportingSection';
import { SupportSystemSection } from '@/components/home/SupportSystemSection';
import { StatisticsSection } from '@/components/home/StatisticsSection';
import { TestimonialSection } from '@/components/home/TestimonialSection';
import { FreshPerspectivesSection } from '@/components/home/FreshPerspectivesSection';
import { DailyQuotesSection } from '@/components/home/DailyQuotesSection';
import { AboutBio } from '@/components/about/AboutBio';
import { AboutCredentials } from '@/components/about/AboutCredentials';
import { AboutMethodologies } from '@/components/about/AboutMethodologies';
import { ProductsBanner } from '@/components/products/ProductsBanner';
import { ProductsCategories } from '@/components/products/ProductsCategories';
import { SeccionInicio } from '@/services/inicio/types';
import { NosotrosSection } from '@/services/nosotros/types';
import {
  ProductosSection,
  Category,
  Product,
} from '@/services/productos/types';

interface RenderSectionOptions {
  categories?: Category[];
  products?: Product[];
}

type ComponentMap = {
  [key: string]: React.ComponentType<any>;
};

const COMPONENT_MAP: ComponentMap = {
  // Componentes de Inicio
  'inicio.hero': HeroSection,
  'shared.banner-comp': HeroSection,
  'inicio.acerca': AboutSection,
  'inicio.entendiendo': UnderstandingSection,
  'inicio.apoyo': SupportingSection,
  'inicio.sistemaintegral': SupportSystemSection,
  'inicio.datos': StatisticsSection,
  'inicio.que-dicen': TestimonialSection,
  'inicio.perspectivas': FreshPerspectivesSection,
  'inicio.reflexiones': DailyQuotesSection,
  // Componentes de Nosotros
  'nosotros.bio': AboutBio,
  'nosotros.credenciales': AboutCredentials,
  'nosotros.metodologias': AboutMethodologies,
  // Componentes de Productos
  'productos.banner': ProductsBanner,
  'productos.categorias': ProductsCategories,
};

export function renderSection(
  section: SeccionInicio | NosotrosSection | ProductosSection,
  index: number,
  options?: RenderSectionOptions
) {
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
      bannerGroup => bannerGroup.bannersa && bannerGroup.bannersa.length > 0
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
    return (
      <Component
        key={`${section.__component}-${index}`}
        banners={section.banners}
      />
    );
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

  // Para inicio.que-dicen, validamos que tenga los datos requeridos
  if (section.__component === 'inicio.que-dicen') {
    if (!section.testimonio || section.testimonio.length === 0) {
      console.warn('inicio.que-dicen: No testimonio array found');
      return null;
    }
    return <Component key={`${section.__component}-${index}`} data={section} />;
  }

  // Para inicio.perspectivas, validamos que tenga los datos requeridos
  if (section.__component === 'inicio.perspectivas') {
    if (!section.resaltar || section.resaltar.length === 0) {
      console.warn('inicio.perspectivas: No resaltar array found');
      return null;
    }
    return <Component key={`${section.__component}-${index}`} data={section} />;
  }

  // Para inicio.reflexiones, validamos que tenga los datos requeridos
  if (section.__component === 'inicio.reflexiones') {
    if (!section.reflexion || section.reflexion.length === 0) {
      console.warn('inicio.reflexiones: No reflexion array found');
      return null;
    }
    return <Component key={`${section.__component}-${index}`} data={section} />;
  }

  // Para nosotros.bio, validamos que tenga los datos requeridos
  if (section.__component === 'nosotros.bio') {
    if (!section.biografia || section.biografia.length === 0) {
      console.warn('nosotros.bio: No biografia content found');
      return null;
    }
    return <Component key={`${section.__component}-${index}`} data={section} />;
  }

  // Para nosotros.credenciales, validamos que tenga los datos requeridos
  if (section.__component === 'nosotros.credenciales') {
    if (!section.Credenciales || section.Credenciales.length === 0) {
      console.warn('nosotros.credenciales: No Credenciales array found');
      return null;
    }
    return <Component key={`${section.__component}-${index}`} data={section} />;
  }

  // Para nosotros.metodologias, validamos que tenga los datos requeridos
  if (section.__component === 'nosotros.metodologias') {
    if (!section.Metodologias || section.Metodologias.length === 0) {
      console.warn('nosotros.metodologias: No Metodologias array found');
      return null;
    }
    return <Component key={`${section.__component}-${index}`} data={section} />;
  }

  // Para productos.banner, validamos que tenga los datos requeridos
  if (section.__component === 'productos.banner') {
    if (!section.titulo || !section.introduccion) {
      console.warn('productos.banner: Missing titulo or introduccion');
      return null;
    }
    return <Component key={`${section.__component}-${index}`} data={section} />;
  }

  // Para productos.categorias, validamos que tenga el titulo y pasamos props adicionales
  if (section.__component === 'productos.categorias') {
    if (!section.titulo) {
      console.warn('productos.categorias: Missing titulo');
      return null;
    }
    return (
      <Component
        key={`${section.__component}-${index}`}
        data={section}
        categories={options?.categories || []}
        products={options?.products || []}
      />
    );
  }

  // Fallback genérico para futuros componentes
  return (
    <Component
      key={`${(section as SeccionInicio | NosotrosSection | ProductosSection).__component}-${index}`}
      data={section}
    />
  );
}
