import { Metadata } from 'next';
import { SEO } from './types';
import { SITE_URL } from '@/lib/site';

const BRAND_NAME = 'Elisa Horta';

export const DEFAULT_OG_IMAGE = {
  url: 'https://pub-b4dc89a0ffb742f7980aa9d5dd6ac8b5.r2.dev/2/og_elisa_horta_20523438c2.jpg',
  width: 1200,
  height: 630,
  alt: 'Elisa Horta - Psicóloga Clínica en Bogotá',
};

const toCanonicalOrigin = (url?: string | null): string | undefined => {
  if (!url) return undefined;
  try {
    const parsed = new URL(url, SITE_URL);
    return (
      `${SITE_URL}${parsed.pathname}${parsed.search}`.replace(/\/$/, '') ||
      SITE_URL
    );
  } catch {
    return undefined;
  }
};

const resolveTitle = (metaTitle: string): Metadata['title'] => {
  if (metaTitle.includes(BRAND_NAME)) {
    return { absolute: metaTitle };
  }
  return metaTitle;
};

type OgImage = { url: string; width?: number; height?: number; alt?: string };

const resolveOgImage = (seo: SEO): OgImage => {
  if (seo.openGraph?.ogImage?.url) {
    return {
      url: seo.openGraph.ogImage.url,
      width: seo.openGraph.ogImage.width,
      height: seo.openGraph.ogImage.height,
      alt: seo.openGraph.ogImage.alternativeText ?? seo.openGraph.ogTitle,
    };
  }
  if (seo.metaImage?.url) {
    return {
      url: seo.metaImage.url,
      width: seo.metaImage.width,
      height: seo.metaImage.height,
      alt: seo.metaImage.alternativeText ?? seo.metaTitle,
    };
  }
  return DEFAULT_OG_IMAGE;
};

export const generateMetadataFromSEO = (seo: SEO | null): Metadata => {
  try {
    // Return fallback metadata if seo is null
    if (!seo) {
      return {
        title: 'Elisa Horta - Apoyo en Salud Mental y Bienestar',
        description:
          'Te ayudamos a reconectar con tu verdadero ser a través de apoyo profesional en salud mental y sesiones de terapia personalizadas.',
        openGraph: {
          title: 'Elisa Horta - Apoyo en Salud Mental y Bienestar',
          description:
            'Te ayudamos a reconectar con tu verdadero ser a través de apoyo profesional en salud mental y sesiones de terapia personalizadas.',
          type: 'website',
          images: [DEFAULT_OG_IMAGE],
        },
        twitter: {
          card: 'summary_large_image',
          title: 'Elisa Horta - Apoyo en Salud Mental y Bienestar',
          description:
            'Te ayudamos a reconectar con tu verdadero ser a través de apoyo profesional en salud mental y sesiones de terapia personalizadas.',
          images: [DEFAULT_OG_IMAGE.url],
        },
      };
    }

    const ogTitle = seo.openGraph?.ogTitle ?? seo.metaTitle;
    const ogDescription = seo.openGraph?.ogDescription ?? seo.metaDescription;
    const ogImage = resolveOgImage(seo);
    const ogUrl = toCanonicalOrigin(seo.openGraph?.ogUrl ?? seo.canonicalURL);

    const metadata: Metadata = {
      title: resolveTitle(seo.metaTitle),
      description: seo.metaDescription,
      keywords: seo.keywords ?? undefined,
      robots: seo.metaRobots ?? undefined,
      ...(seo.canonicalURL
        ? { alternates: { canonical: toCanonicalOrigin(seo.canonicalURL) } }
        : {}),
      openGraph: {
        title: ogTitle,
        description: ogDescription,
        ...(ogUrl ? { url: ogUrl } : {}),
        type: (seo.openGraph?.ogType ?? 'website') as
          | 'website'
          | 'article'
          | 'book'
          | 'profile'
          | 'music.song'
          | 'music.album'
          | 'music.playlist'
          | 'music.radio_station'
          | 'video.movie'
          | 'video.episode'
          | 'video.tv_show'
          | 'video.other',
        images: [ogImage],
      },
      twitter: {
        card: 'summary_large_image',
        title: ogTitle,
        description: ogDescription,
        images: [ogImage.url],
      },
    };

    return metadata;
  } catch (error) {
    console.error('Error fetching SEO metadata:', error);
    // Fallback metadata
    return {
      title: 'Elisa Horta - Apoyo en Salud Mental y Bienestar',
      description:
        'Te ayudamos a reconectar con tu verdadero ser a través de apoyo profesional en salud mental y sesiones de terapia personalizadas.',
      openGraph: {
        title: 'Elisa Horta - Apoyo en Salud Mental y Bienestar',
        description:
          'Te ayudamos a reconectar con tu verdadero ser a través de apoyo profesional en salud mental y sesiones de terapia personalizadas.',
        type: 'website',
        images: [DEFAULT_OG_IMAGE],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Elisa Horta - Apoyo en Salud Mental y Bienestar',
        description:
          'Te ayudamos a reconectar con tu verdadero ser a través de apoyo profesional en salud mental y sesiones de terapia personalizadas.',
        images: [DEFAULT_OG_IMAGE.url],
      },
    };
  }
};

const isValidStructuredData = (data: unknown): data is Record<string, any> => {
  if (typeof data !== 'object' || data === null || Array.isArray(data)) {
    return false;
  }

  const record = data as Record<string, unknown>;
  const hasContext = typeof record['@context'] === 'string';
  const hasGraph = '@graph' in record;

  if (!hasContext && !hasGraph) {
    return false;
  }

  if (hasGraph) {
    const graph = record['@graph'];
    if (!Array.isArray(graph) || graph.length === 0) {
      return false;
    }
    return graph.every(
      node => typeof node === 'object' && node !== null && '@type' in node
    );
  }

  return true;
};

export const getStructuredData = (seo: SEO | null): object | null => {
  if (!seo?.structuredData) return null;
  if (Object.keys(seo.structuredData).length === 0) return null;

  if (!isValidStructuredData(seo.structuredData)) {
    console.warn(
      '[seo] structuredData del CMS no tiene forma válida (falta @context/@graph, o @graph vacío/sin @type). Se omite JSON-LD.',
      seo.structuredData
    );
    return null;
  }

  return seo.structuredData;
};
