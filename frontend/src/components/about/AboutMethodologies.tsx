import { MetodologiasSection } from '@/services/nosotros/types';
import { SectionHeader } from '@/components/shared/SectionHeader';

interface AboutMethodologiesProps {
  data: MetodologiasSection;
}

export function AboutMethodologies({ data }: AboutMethodologiesProps) {
  const colCount = Math.min(data.Metodologias.length, 3);
  const gridClass =
    colCount === 1
      ? 'max-w-md mx-auto'
      : colCount === 2
        ? 'grid gap-8 md:grid-cols-2 max-w-3xl mx-auto'
        : 'grid gap-8 md:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title={data.titulo} subtitle={data.subtitulo} />

        <div className={gridClass}>
          {data.Metodologias.map(metodologia => (
            <div
              key={metodologia.id}
              className="rounded-2xl bg-surface-soft p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-secundario mb-4 text-xl font-semibold">
                {metodologia.certificado}
              </h3>
              <p className="text-gray-600">{metodologia.contenido}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
