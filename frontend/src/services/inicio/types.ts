import { StrapiImage } from '../general/types';

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

// Union type para todos los tipos de secciones
export type SeccionInicio = BannerComponent | AboutComponent;

export interface InicioData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  secciones: SeccionInicio[];
  localizations: any[];
}

export interface InicioResponse {
  data: InicioData;
  meta: object;
}
