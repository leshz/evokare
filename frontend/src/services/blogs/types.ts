import { StrapiImage } from '../general/types';
import { SEO } from '../seo/types';
import type { BlocksContent } from '@strapi/blocks-react-renderer';
import { Pagination } from '../restclient/types';

export interface Etiqueta {
  id: number;
  documentId: string;
  nombre: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface BlogData {
  id: number;
  documentId: string;
  titulo: string;
  introduccion: string;
  articulo: BlocksContent;
  slug: string;
  media: StrapiImage[];
  etiquetas: Etiqueta[];
  seo: SEO | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  localizations: any[];
}

export interface BlogsResponse {
  data: BlogData[];
  meta: Pagination;
}

export interface BlogResponse {
  data: BlogData;
  meta: Pagination;
}
