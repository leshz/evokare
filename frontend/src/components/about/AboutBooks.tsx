export function AboutBooks() {
  const resources = [
    {
      title: "Técnicas de Terapia Cognitivo-Conductual",
      description: "Estrategias efectivas para identificar y modificar patrones de pensamiento negativos."
    },
    {
      title: "Mindfulness y Meditación",
      description: "Prácticas de atención plena para reducir el estrés y mejorar el bienestar emocional."
    },
    {
      title: "Procesamiento de Trauma (EMDR)",
      description: "Técnicas especializadas para el tratamiento de experiencias traumáticas."
    },
    {
      title: "Terapia Sistémica Familiar",
      description: "Enfoques terapéuticos que involucran a la familia en el proceso de sanación."
    },
    {
      title: "Herramientas de Autorregulación",
      description: "Recursos prácticos para el manejo de emociones y situaciones desafiantes."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Recursos y Metodologías
          </h2>
          <div className="w-24 h-1 bg-secundario mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Utilizamos una variedad de enfoques terapéuticos y recursos basados en evidencia
            para proporcionar la mejor atención posible a nuestros pacientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gradient-to-br from-principal to-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-secundario mb-3 leading-tight">
                {resource.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {resource.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-secundario to-terciario rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Nuestro Enfoque Integral</h3>
            <p className="text-lg mb-2">
              <strong>Terapia Compasiva e Integrativa</strong>
            </p>
            <p className="text-principal opacity-90">
              Combinamos múltiples enfoques terapéuticos para crear un plan de tratamiento
              personalizado que aborde las necesidades únicas de cada persona. Nuestro objetivo
              es proporcionar herramientas efectivas y apoyo continuo en el camino hacia la sanación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 