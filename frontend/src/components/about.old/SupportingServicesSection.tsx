export function SupportingServicesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-secundario">Apoyándote</span> En Cada Paso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestros servicios están diseñados para acompañarte en todo momento,
            desde la primera consulta hasta tu completa recuperación y más allá.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Consejería Individual
            </h3>
            <p className="text-gray-600 mb-6">
              Sesiones personalizadas uno a uno con nuestros terapeutas especializados,
              adaptadas a tus necesidades específicas y objetivos de tratamiento.
            </p>
            <div className="flex items-center text-secundario">
              <span className="text-sm font-medium">Disponible 24/7</span>
              <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Terapia Matrimonial
            </h3>
            <p className="text-gray-600 mb-6">
              Fortalece tu relación de pareja con sesiones especializadas en comunicación,
              resolución de conflictos y construcción de vínculos más sólidos.
            </p>
            <div className="flex items-center text-secundario">
              <span className="text-sm font-medium">Sesiones Flexibles</span>
              <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Terapia Familiar
            </h3>
            <p className="text-gray-600 mb-6">
              Mejora la dinámica familiar y fortalece los lazos entre todos los miembros
              con enfoques terapéuticos especializados en sistemas familiares.
            </p>
            <div className="flex items-center text-secundario">
              <span className="text-sm font-medium">Todas las Edades</span>
              <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Manejo del Estrés
            </h3>
            <p className="text-gray-600 mb-6">
              Aprende técnicas efectivas para manejar el estrés diario, la ansiedad y
              encontrar equilibrio en tu vida personal y profesional.
            </p>
            <div className="flex items-center text-secundario">
              <span className="text-sm font-medium">Técnicas Probadas</span>
              <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center bg-secundario text-white px-6 py-3 rounded-full">
            <span className="mr-2">Ver Todos los Servicios</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </section>
  );
} 