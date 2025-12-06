import Image from 'next/image';
import { SupportingComponent } from '@/services/inicio/types';

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
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            {titulo}
          </h2>
          {subtitulo && (
            <p className="text-xl text-gray-600">
              {subtitulo}
            </p>
          )}
        </div>

        <div className="mb-16 grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            {item.map(({ id, titulo: itemTitulo, contenido }) => (
              <div key={id} className="flex items-start">
                <div className="bg-secundario mt-1 h-6 w-6 shrink-0 rounded-full"></div>
                <div className="ml-4">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {itemTitulo}
                  </h3>
                  <p className="text-gray-600">
                    {contenido}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {imagen && (
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-principal flex aspect-square items-center justify-center overflow-hidden rounded-2xl">
                <Image
                  src={imagen.url}
                  alt={imagen.alternativeText ?? titulo}
                  width={imagen.width ?? 500}
                  height={imagen.height ?? 500}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-principal flex aspect-square items-center justify-center overflow-hidden rounded-2xl">
                <Image
                  src={imagen.url}
                  alt={imagen.alternativeText ?? titulo}
                  width={imagen.width ?? 500}
                  height={imagen.height ?? 500}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
