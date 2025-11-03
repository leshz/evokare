import { BlocksContent } from '@strapi/blocks-react-renderer';
import { SEO } from '../seo/types';

export interface ImageFormat {
  url: string;
  width: number;
  height: number;
  size: number;
  mime: string;
  name: string;
  hash: string;
  ext: string;
}

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  } | null;
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
  isUrlSigned: boolean;
}

export interface NavLink {
  id: number;
  texto: string;
  link: string;
}

export interface Navegacion {
  id: number;
  icono: StrapiImage;
}

export interface FooterColumn {
  id: number;
  titulo: string;
  contenido: BlocksContent;
}

export interface FooterInvitacion {
  id: number;
  titulo: string;
  contenido: BlocksContent;
}

export interface FooterSection {
  id: number;
  columnas: FooterColumn[];
  autor: BlocksContent;
  invitacion: FooterInvitacion;
}

export interface MenuSection {
  __component: 'shared.accion';
  id: number;
  texto: string;
  link: string;
  boton: boolean;
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
  menu: MenuSection[];
  seo: SEO;
  localizations: any[];
}

export interface GeneralgResponse {
  data: GeneralData;
  meta: object;
}
