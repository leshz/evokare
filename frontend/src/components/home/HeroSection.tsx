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
  const banners =
    data?.banners?.flatMap(bannerGroup => bannerGroup.bannersa ?? []) ?? [];

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
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
    }, 7000);
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
    <section className="from-secundario to-terciario grainy relative bg-linear-to-r py-20">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {banners.map((banner, bannerIndex) => {
            const { titulo, contenido, imagen, botones } = banner;
            const TitleTag = bannerIndex === 0 ? 'h1' : 'h2';

            if (!imagen || !imagen.url) {
              return null;
            }

            const { url, alternativeText, width, height } = imagen;

            return (
              <div key={banner.id} className="min-w-0 flex-[0_0_100%]">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                  <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:items-center md:gap-12">
                    {/* Texto: siempre primero */}
                    <div className="order-1">
                      <TitleTag className="mb-4 text-4xl font-bold text-white sm:text-5xl md:mb-6 md:text-6xl">
                        {titulo}
                      </TitleTag>
                      <p className="mb-0 text-lg text-gray-100 md:mb-8 md:text-xl">{contenido}</p>
                      {/* Botones: hidden en mobile aquí, visibles en desktop */}
                      <div className="mt-6 hidden flex-col gap-3 sm:flex-row sm:gap-4 md:flex md:flex-row">
                        {botones.map(({ id, texto, link }, index) =>
                          index === 0 ? (
                            <Link
                              key={id}
                              href={link}
                              className="bg-principal text-secundario rounded-full px-8 py-3 text-center font-semibold shadow-lg transition-all hover:shadow-xl hover:brightness-95"
                            >
                              {texto}
                            </Link>
                          ) : (
                            <Link
                              key={id}
                              href={link}
                              className="rounded-full border border-white/60 px-8 py-3 text-center font-medium text-white/90 transition-all hover:border-white hover:bg-white/10 hover:text-white"
                            >
                              {texto}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                    {/* Imagen: segundo en mobile */}
                    <div className="order-2 flex justify-center md:order-2">
                      <div className="relative w-full max-w-md lg:max-w-lg">
                        <div className="absolute -inset-3 rounded-[2rem] bg-white/10" />
                        <div className="relative overflow-hidden rounded-3xl bg-white/20 p-2 shadow-xl backdrop-blur-sm">
                          <Image
                            src={url}
                            className="h-auto w-full rounded-2xl object-cover"
                            alt={alternativeText ?? titulo}
                            width={width}
                            height={height}
                          />
                        </div>
                      </div>
                    </div>
                    {/* Botones: visibles solo en mobile, debajo de la imagen */}
                    <div className="order-3 flex flex-col gap-3 md:hidden">
                      {botones.map(({ id, texto, link }, index) =>
                        index === 0 ? (
                          <Link
                            key={id}
                            href={link}
                            className="bg-principal text-secundario rounded-full px-8 py-3 text-center font-semibold shadow-lg transition-all hover:shadow-xl hover:brightness-95"
                          >
                            {texto}
                          </Link>
                        ) : (
                          <Link
                            key={id}
                            href={link}
                            className="rounded-full border border-white/60 px-8 py-3 text-center font-medium text-white/90 transition-all hover:border-white hover:bg-white/10 hover:text-white"
                          >
                            {texto}
                          </Link>
                        )
                      )}
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
              className={`h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'bg-principal w-10'
                  : 'w-3 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
