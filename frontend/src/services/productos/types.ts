import { SEO } from '../seo/types';
import { Boton, UnderstandingComponent } from '../inicio/types';

export interface ProductosBannerComponent {
  __component: 'productos.banner';
  id: number;
  titulo: string;
  introduccion: string;
  acciones: Boton[];
}

export interface ProductosCategoriasComponent {
  __component: 'productos.categorias';
  id: number;
  titulo: string;
  subtitulo: string;
}

export type ProductosSection =
  | ProductosBannerComponent
  | ProductosCategoriasComponent
  | UnderstandingComponent;

export interface ProductosData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  secciones: ProductosSection[];
  seo?: SEO | null;
  localizations: any[];
}

export interface ProductosResponse {
  data: ProductosData;
  meta: object;
}
