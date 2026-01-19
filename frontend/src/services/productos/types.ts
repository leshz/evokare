import { SEO } from '../seo/types';
import { Boton, UnderstandingComponent } from '../inicio/types';
import { StrapiImage } from '../general/types';

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

export interface ProductPromotion {
  id: number;
  with_discount: boolean;
  price_with_discount: number | null;
  recommended: boolean;
  best_seller: boolean;
  new: boolean;
  discount_tag: string | null;
}

export interface ProductCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface Product {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  price: number;
  short_description: string;
  stock: number;
  middle_description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  sku: string;
  pictures: StrapiImage[];
  promotion: ProductPromotion;
  categories: ProductCategory[];
  information: unknown[];
  localizations: unknown[];
}

export interface ProductResponse {
  data: Product;
  meta: object;
}

export interface ProductsResponse {
  data: Product[];
  meta: object;
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface CategoriesResponse {
  data: Category[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
