import { StrapiImage } from '../general/types';
import { SEO } from '../seo/types';
import type { BlocksContent } from '@strapi/blocks-react-renderer';

export interface Boton {
  id: number;
  texto: string;
  link: string;
  boton: boolean;
}

export interface Banner {
  id: number;
  titulo: string;
  contenido: string;
  imagen: StrapiImage;
  botones: Boton[];
}

export interface BannerComponent {
  __component: 'shared.banner-comp';
  id: number;
  banners: Banner[];
}

export interface Destacado {
  id: number;
  dato: string;
  descripcion: string;
}

export interface AboutComponent {
  __component: 'inicio.acerca';
  id: number;
  titulo: string;
  descripcion: string;
  destacado: Destacado[];
  botones: Boton[];
}

export type IconName = 'AlertCircle' | 'CloudRain' | 'BrainCircuit' | 'Heart' | 'Zap' | 'Shield';

export interface Punto {
  id: number;
  titulo: string;
  subtitulo: string;
  icono: IconName;
}

export interface UnderstandingComponent {
  __component: 'inicio.entendiendo';
  id: number;
  titulo: string;
  subtitulo: string;
  punto: Punto[];
}

export interface ItemApoyo {
  id: number;
  titulo: string;
  contenido: string;
}

export interface SupportingComponent {
  __component: 'inicio.apoyo';
  id: number;
  titulo: string;
  subtitulo: string;
  item: ItemApoyo[];
  imagen: StrapiImage;
}

export interface SupportSystemComponent {
  __component: 'inicio.sistemaintegral';
  id: number;
  titulo: string;
  subtitulo: string;
  contenido: BlocksContent;
}

// Union type para todos los tipos de secciones
export type SeccionInicio = BannerComponent | AboutComponent | UnderstandingComponent | SupportingComponent | SupportSystemComponent;

export interface InicioData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  secciones: SeccionInicio[];
  seo: SEO | null;
  localizations: any[];
}

export interface InicioResponse {
  data: InicioData;
  meta: object;
}
