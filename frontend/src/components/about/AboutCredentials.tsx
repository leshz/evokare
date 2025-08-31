import Image from 'next/image';

export function AboutCredentials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Imagen profesional */}
          <div className="relative">
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <Image
                src="https://picsum.photos/500/600"
                alt="Profesional de la salud mental en sesión"
                className="h-auto w-full rounded-xl"
                width={500}
                height={600}
              />
            </div>
          </div>

          {/* Contenido de credenciales */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Credenciales y Certificaciones
              </h2>
              <div className="bg-secundario mb-8 h-1 w-24"></div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h3 className="text-secundario mb-3 text-xl font-semibold">
                  Licenciatura en Psicología
                </h3>
                <p className="text-gray-600">
                  Formación académica sólida en fundamentos de la psicología
                  clínica y terapéutica.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md">
                <h3 className="text-secundario mb-3 text-xl font-semibold">
                  Certificación en Terapia Cognitivo-Conductual
                </h3>
                <p className="text-gray-600">
                  Especialización en técnicas de TCC para el tratamiento de
                  trastornos de ansiedad, depresión y trauma.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md">
                <h3 className="text-secundario mb-3 text-xl font-semibold">
                  Capacitación en Mindfulness y EMDR
                </h3>
                <p className="text-gray-600">
                  Formación especializada en técnicas de mindfulness y
                  procesamiento de trauma mediante EMDR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
