export function AboutBooks() {
  const resources = [
    {
      title: 'Técnicas de Terapia Cognitivo-Conductual',
      description:
        'Estrategias efectivas para identificar y modificar patrones de pensamiento negativos.',
    },
    {
      title: 'Mindfulness y Meditación',
      description:
        'Prácticas de atención plena para reducir el estrés y mejorar el bienestar emocional.',
    },
    {
      title: 'Procesamiento de Trauma (EMDR)',
      description:
        'Técnicas especializadas para el tratamiento de experiencias traumáticas.',
    },
    {
      title: 'Terapia Sistémica Familiar',
      description:
        'Enfoques terapéuticos que involucran a la familia en el proceso de sanación.',
    },
    {
      title: 'Herramientas de Autorregulación',
      description:
        'Recursos prácticos para el manejo de emociones y situaciones desafiantes.',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Recursos y Metodologías
          </h2>
          <div className="bg-secundario mx-auto mb-6 h-1 w-24"></div>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Utilizamos una variedad de enfoques terapéuticos y recursos basados
            en evidencia para proporcionar la mejor atención posible a nuestros
            pacientes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="from-principal rounded-xl bg-gradient-to-br to-gray-50 p-6 shadow-md transition-shadow hover:shadow-xl"
            >
              <h3 className="text-secundario mb-3 text-lg leading-tight font-semibold">
                {resource.title}
              </h3>
              <p className="text-sm text-gray-600">{resource.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 p-8 text-gray-800">
            <h3 className="mb-4 text-2xl font-bold">
              Nuestro Enfoque Integral
            </h3>
            <p className="mb-2 text-lg">
              <strong className="text-gray-800">
                Terapia Compasiva e Integrativa
              </strong>
            </p>
            <p className="text-gray-800 opacity-90">
              Combinamos múltiples enfoques terapéuticos para crear un plan de
              tratamiento personalizado que aborde las necesidades únicas de
              cada persona. Nuestro objetivo es proporcionar herramientas
              efectivas y apoyo continuo en el camino hacia la sanación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
