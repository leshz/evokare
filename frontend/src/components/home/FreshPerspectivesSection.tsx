import Link from 'next/link';
import { PerspectivesComponent } from '@/services/inicio/types';

interface FreshPerspectivesSectionProps {
  data: PerspectivesComponent;
}

export function FreshPerspectivesSection({
  data,
}: FreshPerspectivesSectionProps) {
  const { titulo, subtitulo, resaltar } = data;

  return (
    <section className="bg-principal py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-secundario text-xl font-medium">{subtitulo}</p>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">{titulo}</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {resaltar.map(item => {
            const {
              id,
              resalto,
              titulo: itemTitulo,
              subtitulo: itemSubtitulo,
              boton,
            } = item;
            const { texto, link } = boton;

            return (
              <div key={id} className="text-center">
                <div className="text-secundario mb-4 text-6xl font-bold">
                  {resalto}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {itemTitulo}
                </h3>
                <p className="mb-6 text-gray-600">{itemSubtitulo}</p>
                <Link
                  href={link}
                  className="from-secundario to-terciario hover:from-terciario hover:to-secundario inline-block rounded-full bg-linear-to-br px-6 py-2 text-sm text-white transition-all hover:bg-linear-to-br"
                >
                  {texto}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
