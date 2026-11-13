'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { TestimonialComponent } from '@/services/inicio/types';
import { AdaptiveImage } from '@/components/shared/AdaptiveImage';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';

interface TestimonialSectionProps {
  data: TestimonialComponent;
}

const AUTOPLAY_INTERVAL_MS = 7000;
const FADE_MS = 250;

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function TestimonialSection({ data }: TestimonialSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const fadeTimer = useRef<number | undefined>(undefined);
  const total = data?.testimonio?.length ?? 0;

  // Fade the current testimonial out, swap it, and let it fade back in.
  // Reduced-motion users get an instant swap.
  const goTo = (index: number) => {
    if (index === currentIndex) return;
    window.clearTimeout(fadeTimer.current);

    if (prefersReducedMotion()) {
      setCurrentIndex(index);
      return;
    }

    setIsFading(true);
    fadeTimer.current = window.setTimeout(() => {
      setCurrentIndex(index);
      setIsFading(false);
    }, FADE_MS);
  };

  useEffect(() => () => window.clearTimeout(fadeTimer.current), []);

  // Advance automatically. Keyed on currentIndex so any manual navigation
  // restarts the full interval instead of jumping right after a click.
  useEffect(() => {
    if (total < 2 || isPaused || isFading) return;
    if (prefersReducedMotion()) return;

    const timer = window.setTimeout(() => {
      goTo((currentIndex + 1) % total);
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearTimeout(timer);
    // goTo is recreated each render; the deps that drive the timer are listed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isPaused, isFading, total]);

  if (!data) {
    console.error('TestimonialSection: data is undefined');
    return null;
  }

  const { titulo, testimonio = [] } = data;

  if (!titulo || testimonio.length === 0) {
    console.warn('TestimonialSection: Missing required data');
    return null;
  }

  const currentTestimonio = testimonio[currentIndex];

  const handlePrevious = () => {
    goTo(currentIndex === 0 ? testimonio.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    goTo(currentIndex === testimonio.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader title={titulo} />

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={event => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          <div
            className="bg-surface-soft rounded-3xl p-8 md:p-12"
            aria-live={isPaused ? 'polite' : 'off'}
          >
            <Quote className="text-secundario/20 mb-4 h-12 w-12" />
            <div
              className={`flex items-start space-x-6 transition-opacity duration-250 ease-in-out motion-reduce:transition-none ${
                isFading ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full">
                {currentTestimonio.foto?.url ? (
                  <AdaptiveImage
                    image={currentTestimonio.foto}
                    format="thumbnail"
                    alt={currentTestimonio.nombre}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <Image
                    src="/images/avatar-generico.png"
                    alt=""
                    width={64}
                    height={64}
                    className="h-full w-full object-cover object-center"
                  />
                )}
              </div>
              <div className="flex-1">
                <p className="text-text-primary mb-4 text-lg italic">
                  &quot;{currentTestimonio.contenido}&quot;
                </p>
                <div>
                  <div className="text-text-primary font-semibold">
                    {currentTestimonio.nombre}
                  </div>
                  <div className="text-gray-600">
                    {currentTestimonio.descripcion}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {testimonio.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="focus:ring-secundario absolute top-1/2 left-0 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-all hover:bg-gray-50 hover:shadow-lg focus:ring-2 focus:outline-none"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>

              <button
                onClick={handleNext}
                className="focus:ring-secundario absolute top-1/2 right-0 translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-all hover:bg-gray-50 hover:shadow-lg focus:ring-2 focus:outline-none"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>

              <div className="mt-8 flex justify-center gap-2">
                {testimonio.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-secundario w-8'
                        : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ir al testimonio ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
