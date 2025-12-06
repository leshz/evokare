import Image, { ImageProps } from 'next/image';
import { StrapiImage } from '@/services/general/types';

type ImageFormatType = 'thumbnail' | 'small' | 'medium' | 'large';

export interface AdaptiveImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  image: string | StrapiImage;
  format?: ImageFormatType;
  alt?: string;
}


export function AdaptiveImage({
  image,
  format = 'medium',
  alt,
  sizes: customSizes,
  ...props
}: AdaptiveImageProps) {
  // Case 1: image is a string URL
  if (typeof image === 'string') {
    return (
      <Image
        src={image}
        alt={alt ?? 'Image'}
        sizes={customSizes}
        {...props}
      />
    );
  }

  // Case 2: image is a StrapiImage object
  const selectedFormat = image.formats?.[format];

  // Use selected format if available, otherwise fallback to original URL
  const imageSrc = selectedFormat?.url ?? image.url;
  const imageWidth = selectedFormat?.width ?? image.width;
  const imageHeight = selectedFormat?.height ?? image.height;

  // Auto-generate alt text from Strapi metadata
  const autoAlt =
    alt ?? image.alternativeText ?? image.caption ?? image.name ?? 'Image';

  // Auto-generate sizes attribute based on available formats
  // const autoSizes = customSizes || generateResponsiveSizes(image, format);

  return (
    <Image
      src={imageSrc}
      alt={autoAlt}
      width={imageWidth}
      height={imageHeight}
      // sizes={autoSizes}
      {...props}
    />
  );
}

/**
 * Generates responsive sizes attribute based on available Strapi image formats
 */
// function generateResponsiveSizes(image: StrapiImage, requestedFormat: ImageFormatType): string {
//   const formats = image.formats;

//   if (!formats) {
//     return '100vw';
//   }

//   // Define breakpoints for each format
//   const formatBreakpoints: Record<ImageFormatType, string> = {
//     thumbnail: '100px',
//     small: '(max-width: 640px) 100vw, 640px',
//     medium: '(max-width: 1024px) 100vw, 1024px',
//     large: '(max-width: 1920px) 100vw, 1920px',
//   };

//   // Return the sizes for the requested format
//   return formatBreakpoints[requestedFormat] || '100vw';
// }
