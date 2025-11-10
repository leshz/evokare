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

// Interfaces para futuros componentes
// export interface AboutComponent {
//   __component: 'shared.about-comp';
//   id: number;
//   // ... propiedades específicas
// }

// Union type para todos los tipos de secciones
// A medida que se agreguen más componentes, expandir este tipo:
// export type SeccionInicio = BannerComponent | AboutComponent | ...;
export type SeccionInicio = BannerComponent;

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
