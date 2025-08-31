import Image from 'next/image';

export function SupportingSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Cómo Te Apoyamos
          </h2>
          <p className="text-xl text-gray-600">
            Nuestro enfoque integral combina diferentes modalidades para tu
            bienestar completo.
          </p>
        </div>

        <div className="mb-16 grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-secundario mt-1 h-6 w-6 flex-shrink-0 rounded-full"></div>
              <div className="ml-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Terapia Individual
                </h3>
                <p className="text-gray-600">
                  Sesiones personalizadas adaptadas a tus necesidades
                  específicas y objetivos de crecimiento personal.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-secundario mt-1 h-6 w-6 flex-shrink-0 rounded-full"></div>
              <div className="ml-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Apoyo Grupal
                </h3>
                <p className="text-gray-600">
                  Conecta con otros en un ambiente seguro y de apoyo para
                  compartir experiencias y aprender juntos.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-secundario mt-1 h-6 w-6 flex-shrink-0 rounded-full"></div>
              <div className="ml-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Recursos Digitales
                </h3>
                <p className="text-gray-600">
                  Acceso a herramientas, ejercicios y contenido educativo para
                  continuar tu crecimiento entre sesiones.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-principal flex aspect-square items-center justify-center overflow-hidden rounded-2xl">
              <Image
                src="https://picsum.photos/500/500"
                alt="Sesiones de Terapia"
                width={500}
                height={500}
              />
            </div>
            <div className="bg-principal flex aspect-square items-center justify-center overflow-hidden rounded-2xl">
              <Image
                src="https://picsum.photos/500/500"
                alt="Sesiones de Terapia"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
