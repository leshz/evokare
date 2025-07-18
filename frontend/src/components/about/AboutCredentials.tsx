import Image from "next/image";

export function AboutCredentials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Imagen profesional */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <Image
                src="https://picsum.photos/500/600"
                alt="Profesional de la salud mental en sesión"
                className="w-full h-auto rounded-xl"
                width={500}
                height={600}
              />
            </div>
          </div>

          {/* Contenido de credenciales */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Credenciales y Certificaciones
              </h2>
              <div className="w-24 h-1 bg-secundario mb-8"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-secundario mb-3">
                  Licenciatura en Psicología
                </h3>
                <p className="text-gray-600">
                  Formación académica sólida en fundamentos de la psicología clínica
                  y terapéutica.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-secundario mb-3">
                  Certificación en Terapia Cognitivo-Conductual
                </h3>
                <p className="text-gray-600">
                  Especialización en técnicas de TCC para el tratamiento de trastornos
                  de ansiedad, depresión y trauma.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-secundario mb-3">
                  Capacitación en Mindfulness y EMDR
                </h3>
                <p className="text-gray-600">
                  Formación especializada en técnicas de mindfulness y procesamiento
                  de trauma mediante EMDR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 