export function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Sobre Elisa Horta
          </h2>
          <div className="bg-secundario mx-auto mb-6 h-1 w-24"></div>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Conectando la brecha entre la ciencia y la sanación, ofreciendo un
            enfoque compasivo e integral para el bienestar mental y emocional.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          <div className="from-principal rounded-xl bg-gradient-to-br to-gray-50 p-8 text-center shadow-md">
            <div className="text-secundario mb-2 text-4xl font-bold">150+</div>
            <p className="font-medium text-gray-600">Pacientes Atendidos</p>
          </div>
          <div className="from-principal rounded-xl bg-gradient-to-br to-gray-50 p-8 text-center shadow-md">
            <div className="text-secundario mb-2 text-4xl font-bold">5+</div>
            <p className="font-medium text-gray-600">Años de Experiencia</p>
          </div>
          <div className="from-principal rounded-xl bg-gradient-to-br to-gray-50 p-8 text-center shadow-md">
            <div className="text-secundario mb-2 text-4xl font-bold">98%</div>
            <p className="font-medium text-gray-600">Tasa de Satisfacción</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="from-secundario to-terciario rounded-xl bg-gradient-to-br p-8 text-center shadow-lg transition-shadow hover:shadow-xl">
            <div className="text-white">
              <div className="mb-2 text-2xl font-bold">Sesiones de Terapia</div>
              <p className="text-principal opacity-90">
                Acompañamiento individualizado
              </p>
            </div>
          </div>
          <div className="from-terciario to-secundario rounded-xl bg-gradient-to-br p-8 text-center shadow-lg transition-shadow hover:shadow-xl">
            <div className="text-white">
              <div className="mb-2 text-2xl font-bold">Apoyo Grupal</div>
              <p className="text-principal opacity-90">Comunidad de sanación</p>
            </div>
          </div>
          <div className="from-secundario to-terciario rounded-xl bg-gradient-to-br p-8 text-center shadow-lg transition-shadow hover:shadow-xl">
            <div className="text-white">
              <div className="mb-2 text-2xl font-bold">Recursos Digitales</div>
              <p className="text-principal opacity-90">
                Herramientas disponibles 24/7
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="from-secundario to-terciario hover:from-terciario hover:to-secundario rounded-full bg-gradient-to-br px-8 py-4 text-lg font-medium text-white shadow-lg transition-all hover:bg-gradient-to-br">
            Conoce Más Sobre Nosotros
          </button>
        </div>
      </div>
    </section>
  );
}
