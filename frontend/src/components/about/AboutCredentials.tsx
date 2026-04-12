import { AdaptiveImage } from '@/components/shared/AdaptiveImage';
import { CredencialesSection } from '@/services/nosotros/types';

interface AboutCredentialsProps {
  data: CredencialesSection;
}

export function AboutCredentials({ data }: AboutCredentialsProps) {
  return (
    <section className="bg-surface-soft py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Imagen profesional */}
          <div className="relative">
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <AdaptiveImage
                image={data.imagen}
                format="medium"
                alt={data.imagen.alternativeText ?? data.titulo}
                className="h-auto w-full rounded-xl"
                width={data.imagen.width}
                height={data.imagen.height}
              />
            </div>
          </div>

          {/* Contenido de credenciales */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                {data.titulo}
              </h2>
              <div className="bg-secundario mb-8 h-1 w-24"></div>
            </div>

            <div className="space-y-6">
              {data.Credenciales.map(credencial => (
                <div
                  key={credencial.id}
                  className="rounded-xl bg-white p-6 shadow-md"
                >
                  <h3 className="text-secundario mb-3 text-xl font-semibold">
                    {credencial.certificado}
                  </h3>
                  <p className="text-gray-600">{credencial.contenido}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
