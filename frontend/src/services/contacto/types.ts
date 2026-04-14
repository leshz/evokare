import { BlocksContent } from '@strapi/blocks-react-renderer';
import { SEO } from '../seo/types';

export type RedSocialTipo =
  | 'twitter'
  | 'instagram'
  | 'linkedin'
  | 'facebook'
  | 'whatsapp';

export interface RedSocial {
  id: number;
  red: RedSocialTipo;
  link: string;
}

export interface ContactoData {
  id: number;
  documentId: string;
  titulo?: string;
  subtitulo?: string;
  informacion_contacto?: BlocksContent;
  redes_sociales: RedSocial[];
  mapa?: boolean;
  latitud?: number;
  longitud?: number;
  seo?: SEO;
}

export interface ContactoResponse {
  data: ContactoData;
  meta: object;
}

export interface ContactFormPayload {
  nombre?: string;
  email: string;
  telefono?: string;
  asunto: string;
  mensaje: string;
}
