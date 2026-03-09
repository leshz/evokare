import { BlocksContent } from '@strapi/blocks-react-renderer';
import { StrapiImage } from '../general/types';
import { SEO } from '../seo/types';

export interface Credencial {
  id: number;
  certificado: string;
  contenido: string;
}

export interface Metodologia {
  id: number;
  certificado: string;
  contenido: string;
}

export interface BioSection {
  __component: 'nosotros.bio';
  id: number;
  titulo: string;
  biografia: BlocksContent;
}

export interface CredencialesSection {
  __component: 'nosotros.credenciales';
  id: number;
  titulo: string;
  imagen: StrapiImage;
  Credenciales: Credencial[];
}

export interface MetodologiasSection {
  __component: 'nosotros.metodologias';
  id: number;
  titulo: string;
  subtitulo: string;
  Metodologias: Metodologia[];
}

export interface HeroSection {
  __component: 'nosotros.hero';
  id: number;
  titulo?: string;
  subtitulo?: string;
}

export type NosotrosSection =
  | HeroSection
  | BioSection
  | CredencialesSection
  | MetodologiasSection;

export interface NosotrosData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  secciones: NosotrosSection[];
  seo: SEO;
}

export interface NosotrosResponse {
  data: NosotrosData;
  meta: object;
}
