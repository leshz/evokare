export function SupportingServicesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            <span className="text-secundario">Apoyándote</span> En Cada Paso
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Nuestros servicios están diseñados para acompañarte en todo momento,
            desde la primera consulta hasta tu completa recuperación y más allá.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              Consejería Individual
            </h3>
            <p className="mb-6 text-gray-600">
              Sesiones personalizadas uno a uno con nuestros terapeutas
              especializados, adaptadas a tus necesidades específicas y
              objetivos de tratamiento.
            </p>
            <div className="text-secundario flex items-center">
              <span className="text-sm font-medium">Disponible 24/7</span>
              <div className="ml-2 h-2 w-2 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              Terapia Matrimonial
            </h3>
            <p className="mb-6 text-gray-600">
              Fortalece tu relación de pareja con sesiones especializadas en
              comunicación, resolución de conflictos y construcción de vínculos
              más sólidos.
            </p>
            <div className="text-secundario flex items-center">
              <span className="text-sm font-medium">Sesiones Flexibles</span>
              <div className="ml-2 h-2 w-2 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              Terapia Familiar
            </h3>
            <p className="mb-6 text-gray-600">
              Mejora la dinámica familiar y fortalece los lazos entre todos los
              miembros con enfoques terapéuticos especializados en sistemas
              familiares.
            </p>
            <div className="text-secundario flex items-center">
              <span className="text-sm font-medium">Todas las Edades</span>
              <div className="ml-2 h-2 w-2 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              Manejo del Estrés
            </h3>
            <p className="mb-6 text-gray-600">
              Aprende técnicas efectivas para manejar el estrés diario, la
              ansiedad y encontrar equilibrio en tu vida personal y profesional.
            </p>
            <div className="text-secundario flex items-center">
              <span className="text-sm font-medium">Técnicas Probadas</span>
              <div className="ml-2 h-2 w-2 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-secundario inline-flex items-center rounded-full px-6 py-3 text-white">
            <span className="mr-2">Ver Todos los Servicios</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </section>
  );
}
