import { StrapiImage } from '../general/types';

export type OgType =
  | 'website'
  | 'article'
  | 'blog'
  | 'book'
  | 'profile'
  | 'video.movie'
  | 'video.episode'
  | 'video.tv_show'
  | 'video.other'
  | 'music.song'
  | 'music.album'
  | 'music.playlist'
  | 'music.radio_station';

export interface OpenGraph {
  id: number;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogType: OgType;
  ogImage: StrapiImage;
}

export interface SEO {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  metaRobots: string;
  metaViewport: string | null;
  canonicalURL: string;
  structuredData: Record<string, any>;
  metaImage: StrapiImage;
  openGraph: OpenGraph;
}
