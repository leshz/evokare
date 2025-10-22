import { BlocksContent } from '@strapi/blocks-react-renderer';

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface NavLink {
  id: number;
  Texto: string;
  Link: string;
}

export interface Navegacion {
  id: number;
  Icono: StrapiImage;
  Link: NavLink;
}

export interface FooterColumn {
  id: number;
  titulo: string;
  contenido: string;
}

export interface FooterAuthor {
  id: number;
  autor: string;
}

export interface FooterSection {
  id: number;
  columnas: FooterColumn[];
  autor: BlocksContent;
}

export interface GeneralData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  navegacion: Navegacion;
  pie_de_pagina: FooterSection;
  localizations: any[];
}

export interface GeneralgResponse {
  data: GeneralData;
  meta: object;
}
