import { MetodologiasSection } from '@/services/nosotros/types';

interface AboutMethodologiesProps {
  data: MetodologiasSection;
}

export function AboutMethodologies({ data }: AboutMethodologiesProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            {data.titulo}
          </h2>
          <div className="bg-secundario mx-auto mb-6 h-1 w-24"></div>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            {data.subtitulo}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.Metodologias.map(metodologia => (
            <div
              key={metodologia.id}
              className="rounded-xl bg-gray-50 p-6 shadow-md transition-shadow hover:shadow-lg"
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
