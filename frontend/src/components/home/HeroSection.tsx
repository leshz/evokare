'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HeroComponent } from '@/services/inicio/types';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

interface HeroSectionProps {
  data: HeroComponent;
}

export function HeroSection({ data }: HeroSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Flatten the nested banners structure
  const banners = data?.banners?.flatMap((bannerGroup) => bannerGroup.bannersa || []) || [];

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  if (!data) {
    console.error('HeroSection: data is undefined');
    return null;
  }

  if (!banners || banners.length === 0) {
    console.warn('HeroSection: No banners found');
    return null;
  }

  return (
    <section className="from-secundario to-terciario relative bg-linear-to-r py-20">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {banners.map((banner) => {
            const { titulo, contenido, imagen, botones } = banner;

            if (!imagen || !imagen.url) {
              return null;
            }

            const { url, alternativeText, width, height } = imagen;

            return (
              <div key={banner.id} className="min-w-0 flex-[0_0_100%]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="grid items-center gap-12 md:grid-cols-2">
                    <div>
                      <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
                        {titulo}
                      </h1>
                      <p className="mb-8 text-xl text-gray-100">{contenido}</p>
                      <div className="flex flex-col gap-4 sm:flex-row">
                        {botones.map(({ id, texto, link }, index) =>
                          index === 0 ? (
                            <Link
                              key={id}
                              href={link}
                              className="bg-principal text-secundario rounded-full px-8 py-3 font-medium text-center transition-colors hover:bg-gray-800"
                            >
                              {texto}
                            </Link>
                          ) : (
                            <Link
                              key={id}
                              href={link}
                              className="hover:text-secundario rounded-full border border-white px-8 py-3 font-medium text-center text-white transition-colors hover:bg-white"
                            >
                              {texto}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex aspect-square items-center justify-center rounded-3xl bg-white shadow-xl">
                        <div className="bg-principal flex h-80 w-80 items-center justify-center rounded-2xl">
                          <Image
                            src={url}
                            className="w-full overflow-hidden rounded-2xl"
                            alt={alternativeText || titulo}
                            width={width}
                            height={height}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots Indicators */}
      {banners.length > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                index === selectedIndex
                  ? 'bg-principal w-8'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
