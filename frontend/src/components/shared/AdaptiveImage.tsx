'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { StrapiImage } from '@/services/general/types';

type ImageFormatType = 'thumbnail' | 'small' | 'medium' | 'large';

const FALLBACK_SRC = '/images/placeholder.svg';

export interface AdaptiveImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  image: string | StrapiImage | null | undefined;
  format?: ImageFormatType;
  alt?: string;
  fallbackSrc?: string;
}

function Placeholder({
  alt,
  className,
  width,
  height,
}: {
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex items-center justify-center bg-indigo-50 text-indigo-300 ${className ?? ''}`}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '100%',
        minHeight: 80,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    </div>
  );
}

export function AdaptiveImage({
  image,
  format = 'medium',
  alt,
  fallbackSrc,
  sizes: customSizes,
  className,
  ...props
}: AdaptiveImageProps) {
  const [hasError, setHasError] = useState(false);

  const resolvedFallback = fallbackSrc ?? FALLBACK_SRC;
  const hasFill = 'fill' in props && props.fill === true;

  // Case 0: image is null/undefined — render placeholder
  if (!image) {
    return (
      <Placeholder
        alt={alt ?? 'Image'}
        className={className}
        width={hasFill ? undefined : (props.width as number)}
        height={hasFill ? undefined : (props.height as number)}
      />
    );
  }

  // Case 1: image is a string URL
  if (typeof image === 'string') {
    if (hasError) {
      return (
        <Image
          src={resolvedFallback}
          alt={alt ?? 'Image'}
          sizes={customSizes}
          className={className}
          onError={() => {}}
          {...props}
        />
      );
    }
    return (
      <Image
        src={image}
        alt={alt ?? 'Image'}
        sizes={customSizes}
        className={className}
        onError={() => setHasError(true)}
        {...props}
      />
    );
  }

  // Case 2: StrapiImage object — resolve format
  const selectedFormat = image.formats?.[format];
  const imageSrc = selectedFormat?.url ?? image.url;
  const imageWidth = selectedFormat?.width ?? image.width;
  const imageHeight = selectedFormat?.height ?? image.height;

  const autoAlt =
    alt ?? image.alternativeText ?? image.caption ?? image.name ?? 'Image';

  // If no valid URL at all, render placeholder
  if (!imageSrc) {
    return (
      <Placeholder
        alt={autoAlt}
        className={className}
        width={hasFill ? undefined : imageWidth}
        height={hasFill ? undefined : imageHeight}
      />
    );
  }

  if (hasError) {
    return (
      <Image
        src={resolvedFallback}
        alt={autoAlt}
        sizes={customSizes}
        className={className}
        onError={() => {}}
        {...props}
      />
    );
  }

  if (hasFill) {
    return (
      <Image
        src={imageSrc}
        alt={autoAlt}
        sizes={customSizes}
        className={className}
        onError={() => setHasError(true)}
        {...props}
      />
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={autoAlt}
      width={imageWidth}
      height={imageHeight}
      sizes={customSizes}
      className={className}
      onError={() => setHasError(true)}
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
