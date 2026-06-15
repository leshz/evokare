import { Metadata } from 'next';
import { SEO } from './types';

export const generateMetadataFromSEO = (seo: SEO | null): Metadata => {
  try {
    // Return fallback metadata if seo is null
    if (!seo) {
      return {
        title: 'Elisa Horta - Apoyo en Salud Mental y Bienestar',
        description:
          'Te ayudamos a reconectar con tu verdadero ser a través de apoyo profesional en salud mental y sesiones de terapia personalizadas.',
      };
    }

    const metadata: Metadata = {
      title: seo.metaTitle,
      description: seo.metaDescription,
      keywords: seo.keywords ?? undefined,
      robots: seo.metaRobots ?? undefined,
      viewport: seo.metaViewport ?? undefined,
      alternates: seo.canonicalURL
        ? {
            canonical: seo.canonicalURL,
          }
        : undefined,
    };

    // Add OpenGraph if available
    if (seo.openGraph) {
      metadata.openGraph = {
        title: seo.openGraph.ogTitle,
        description: seo.openGraph.ogDescription,
        url: seo.openGraph.ogUrl,
        type: (seo.openGraph.ogType ?? 'website') as
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
        images: seo.openGraph.ogImage
          ? [
              {
                url: seo.openGraph.ogImage.url,
                width: seo.openGraph.ogImage.width,
                height: seo.openGraph.ogImage.height,
                alt:
                  seo.openGraph.ogImage.alternativeText ??
                  seo.openGraph.ogTitle,
              },
            ]
          : undefined,
      };

      // Add Twitter metadata if OpenGraph is available
      metadata.twitter = {
        card: 'summary_large_image',
        title: seo.openGraph.ogTitle,
        description: seo.openGraph.ogDescription,
        images: seo.openGraph.ogImage?.url
          ? [seo.openGraph.ogImage.url]
          : undefined,
      };
    } else if (seo.metaImage) {
      // Fallback to metaImage if no OpenGraph
      metadata.openGraph = {
        title: seo.metaTitle,
        description: seo.metaDescription,
        type: 'website',
        images: [
          {
            url: seo.metaImage.url,
            width: seo.metaImage.width,
            height: seo.metaImage.height,
            alt: seo.metaImage.alternativeText ?? seo.metaTitle,
          },
        ],
      };

      metadata.twitter = {
        card: 'summary_large_image',
        title: seo.metaTitle,
        description: seo.metaDescription,
        images: [seo.metaImage.url],
      };
    }

    return metadata;
  } catch (error) {
    console.error('Error fetching SEO metadata:', error);
    // Fallback metadata
    return {
      title: 'Elisa Horta - Apoyo en Salud Mental y Bienestar',
      description:
        'Te ayudamos a reconectar con tu verdadero ser a través de apoyo profesional en salud mental y sesiones de terapia personalizadas.',
    };
  }
};

export const getStructuredData = (seo: SEO | null): object | null => {
  if (seo?.structuredData && Object.keys(seo.structuredData).length > 0) {
    return seo.structuredData;
  }
  return null;
};
