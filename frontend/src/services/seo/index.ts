import { Metadata } from 'next';
import { SEO } from './types';

export const generateMetadataFromSEO = (seo: SEO): Metadata => {
  try {
    return {
      title: seo.metaTitle,
      description: seo.metaDescription,
      keywords: seo.keywords,
      robots: seo.metaRobots,
      viewport: seo.metaViewport || undefined,
      alternates: {
        canonical: seo.canonicalURL,
      },
      openGraph: {
        title: seo.openGraph.ogTitle,
        description: seo.openGraph.ogDescription,
        url: seo.openGraph.ogUrl,
        type: (seo.openGraph.ogType || 'website') as
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
        images: [
          {
            url: seo.openGraph.ogImage.url,
            width: seo.openGraph.ogImage.width,
            height: seo.openGraph.ogImage.height,
            alt: seo.openGraph.ogImage.alternativeText || seo.openGraph.ogTitle,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: seo.openGraph.ogTitle,
        description: seo.openGraph.ogDescription,
        images: [seo.openGraph.ogImage.url],
      },
      ...(Object.keys(seo.structuredData || {}).length > 0 && {
        other: {
          'application/ld+json': JSON.stringify(seo.structuredData),
        },
      }),
    };
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
