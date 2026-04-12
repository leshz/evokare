import Image from 'next/image';
import { Check } from 'lucide-react';
import { SupportingComponent } from '@/services/inicio/types';
import { SectionHeader } from '@/components/shared/SectionHeader';

interface SupportingSectionProps {
  data: SupportingComponent;
}

export function SupportingSection({ data }: SupportingSectionProps) {
  if (!data) {
    console.error('SupportingSection: data is undefined');
    return null;
  }

  const { titulo, subtitulo, item = [], imagen } = data;

  if (!titulo || item.length === 0) {
    console.warn('SupportingSection: Missing required data (titulo or items)');
    return null;
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader title={titulo} subtitle={subtitulo} />

        <div className="mb-16 grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            {item.map(({ id, titulo: itemTitulo, contenido }) => (
              <div key={id} className="flex items-start">
                <div className="bg-secundario mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {itemTitulo}
                  </h3>
                  <p className="text-gray-600">{contenido}</p>
                </div>
              </div>
            ))}
          </div>

          {imagen && (
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src={imagen.url}
                  alt={imagen.alternativeText ?? titulo}
                  width={imagen.width ?? 500}
                  height={imagen.height ?? 500}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
