'use client';

import { useState } from 'react';
import { TestimonialComponent } from '@/services/inicio/types';
import { AdaptiveImage } from '@/components/shared/AdaptiveImage';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialSectionProps {
  data: TestimonialComponent;
}

export function TestimonialSection({ data }: TestimonialSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? testimonio.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === testimonio.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">{titulo}</h2>
        </div>

        <div className="relative">
          <div className="bg-principal rounded-3xl p-8 md:p-12">
            <div className="flex items-start space-x-6">
              <div className="shrink-0">
                {currentTestimonio.foto?.url ? (
                  <AdaptiveImage
                    image={currentTestimonio.foto}
                    format="thumbnail"
                    alt={currentTestimonio.nombre}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="bg-secundario flex h-16 w-16 shrink-0 items-center justify-center rounded-full">
                    <span className="text-2xl text-white">👤</span>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <p className="mb-4 text-lg text-gray-700 italic">
                  &quot;{currentTestimonio.contenido}&quot;
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {currentTestimonio.nombre}
                  </div>
                  <div className="text-gray-600">
                    {currentTestimonio.descripcion}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons - only show if there's more than one testimonial */}
          {testimonio.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="focus:ring-secundario absolute top-1/2 left-0 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-50 focus:ring-2 focus:outline-none"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>

              <button
                onClick={handleNext}
                className="focus:ring-secundario absolute top-1/2 right-0 translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-50 focus:ring-2 focus:outline-none"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>

              {/* Pagination dots */}
              <div className="mt-8 flex justify-center gap-2">
                {testimonio.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-secundario w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
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
