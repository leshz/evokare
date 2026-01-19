/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import type { ReflexionesComponent } from '@/services/inicio/types';

interface DailyQuotesSectionProps {
  data: ReflexionesComponent;
}

export function DailyQuotesSection({ data }: DailyQuotesSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Extract data with defaults
  const { titulo, reflexion = [] } = data || {};

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi || reflexion.length <= 1) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [emblaApi, reflexion.length]);

  // Early returns after all hooks
  if (!data) {
    console.error('DailyQuotesSection: data is undefined');
    return null;
  }

  if (!titulo || reflexion.length === 0) {
    console.warn('DailyQuotesSection: Missing required data (titulo or reflexion)');
    return null;
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            {titulo}
          </h2>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Navigation Buttons */}
          {reflexion.length > 1 && (
            <>
              <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:bg-gray-50 md:-translate-x-12"
                aria-label="Reflexión anterior"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>

              <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:bg-gray-50 md:translate-x-12"
                aria-label="Siguiente reflexión"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>
            </>
          )}

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reflexion.map((item) => {
                const { id, contenido, consejo, nombre, descripcion, emoji } = item;

                return (
                  <div key={id} className="min-w-0 flex-[0_0_100%]">
                    <div className="rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 text-gray-800 md:p-12">
                      <div className="text-center">
                        <div className="mb-6 text-6xl">{emoji}</div>
                        <blockquote className="mb-6 text-2xl font-medium">
                          &quot;{contenido}&quot;
                        </blockquote>
                        <p className="mb-6 text-lg text-gray-600">
                          {consejo}
                        </p>
                        <div className="text-gray-600">
                          <div className="font-semibold">{nombre}</div>
                          <div className="text-gray-600">{descripcion}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Slide Indicators */}
          {reflexion.length > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              {reflexion.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === selectedIndex
                      ? 'w-8 bg-indigo-600'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  aria-label={`Ir a reflexión ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
