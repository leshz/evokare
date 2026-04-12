import Link from 'next/link';
import { PerspectivesComponent } from '@/services/inicio/types';
import { SectionHeader } from '@/components/shared/SectionHeader';

interface FreshPerspectivesSectionProps {
  data: PerspectivesComponent;
}

export function FreshPerspectivesSection({
  data,
}: FreshPerspectivesSectionProps) {
  const { titulo, subtitulo, resaltar } = data;

  return (
    <section className="bg-surface-soft py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader title={titulo} subtitle={subtitulo} decoration={false} />

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
              <div
                key={id}
                className="rounded-2xl bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-secundario/20 mb-4 text-5xl font-bold">
                  {resalto}
                </div>
                <h3 className="text-text-primary mb-4 text-xl font-semibold">
                  {itemTitulo}
                </h3>
                <p className="mb-6 text-gray-600">{itemSubtitulo}</p>
                <Link
                  href={link}
                  className="text-secundario hover:text-terciario inline-flex items-center font-medium transition-colors"
                >
                  {texto}
                  <span className="ml-1">&rarr;</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
