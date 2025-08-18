export function TestimonialsAboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-300 mb-4">TESTIMONIOS</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-8">
            Lo Que Dicen <span className="text-secundario">Nuestros Pacientes</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Las historias reales de transformación y crecimiento de las personas que han
            confiado en nosotros para su camino hacia el bienestar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-secundario to-terciario rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-2xl">👩</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Ana Carmen</h4>
                <p className="text-gray-600 text-sm">Paciente desde 2023</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              &ldquo;Elisa me ayudó a encontrar herramientas que no sabía que tenía.
              La terapia personalizada realmente hizo la diferencia en mi vida diaria.&rdquo;
            </p>
            <div className="flex items-center">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <span className="text-gray-600 text-sm ml-2">5.0</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-terciario to-secundario rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-2xl">👨</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Carlos López</h4>
                <p className="text-gray-600 text-sm">Paciente desde 2022</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              &ldquo;El enfoque holístico de Elisa me permitió trabajar no solo mis síntomas,
              sino también las causas profundas de mi ansiedad. Excelente equipo profesional.&rdquo;
            </p>
            <div className="flex items-center">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <span className="text-gray-600 text-sm ml-2">5.0</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-br from-secundario to-terciario text-white px-8 py-3 rounded-full hover:bg-gradient-to-br hover:from-terciario hover:to-secundario transition-all font-medium">
            Ver Más Testimonios
          </button>
        </div>
      </div>
    </section>
  );
} 