export function TestimonialsAboutSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-6xl font-bold text-gray-300">TESTIMONIOS</h2>
          <h3 className="mb-8 text-4xl font-bold text-gray-900">
            Lo Que Dicen{' '}
            <span className="text-secundario">Nuestros Pacientes</span>
          </h3>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Las historias reales de transformación y crecimiento de las personas
            que han confiado en nosotros para su camino hacia el bienestar.
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <div className="mb-6 flex items-center">
              <div className="from-secundario to-terciario mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br">
                <span className="text-2xl text-white">👩</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Ana Carmen</h4>
                <p className="text-sm text-gray-600">Paciente desde 2023</p>
              </div>
            </div>
            <p className="mb-4 text-gray-600">
              &ldquo;Elisa me ayudó a encontrar herramientas que no sabía que
              tenía. La terapia personalizada realmente hizo la diferencia en mi
              vida diaria.&rdquo;
            </p>
            <div className="flex items-center">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">5.0</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <div className="mb-6 flex items-center">
              <div className="from-terciario to-secundario mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br">
                <span className="text-2xl text-white">👨</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Carlos López</h4>
                <p className="text-sm text-gray-600">Paciente desde 2022</p>
              </div>
            </div>
            <p className="mb-4 text-gray-600">
              &ldquo;El enfoque holístico de Elisa me permitió trabajar no solo
              mis síntomas, sino también las causas profundas de mi ansiedad.
              Excelente equipo profesional.&rdquo;
            </p>
            <div className="flex items-center">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">5.0</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="from-secundario to-terciario hover:from-terciario hover:to-secundario rounded-full bg-gradient-to-br px-8 py-3 font-medium text-white transition-all hover:bg-gradient-to-br">
            Ver Más Testimonios
          </button>
        </div>
      </div>
    </section>
  );
}
