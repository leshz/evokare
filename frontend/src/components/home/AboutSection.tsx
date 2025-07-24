export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Evokare</h2>
          <div className="w-24 h-1 bg-secundario mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conectando la brecha entre la ciencia y la sanación, ofreciendo un enfoque
            compasivo e integral para el bienestar mental y emocional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-gradient-to-br from-principal to-gray-50 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-secundario mb-2">150+</div>
            <p className="text-gray-600 font-medium">Pacientes Atendidos</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-principal to-gray-50 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-secundario mb-2">5+</div>
            <p className="text-gray-600 font-medium">Años de Experiencia</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-principal to-gray-50 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-secundario mb-2">98%</div>
            <p className="text-gray-600 font-medium">Tasa de Satisfacción</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-secundario to-terciario rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-white">
              <div className="text-2xl font-bold mb-2">Sesiones de Terapia</div>
              <p className="text-principal opacity-90">Acompañamiento individualizado</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-terciario to-secundario rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-white">
              <div className="text-2xl font-bold mb-2">Apoyo Grupal</div>
              <p className="text-principal opacity-90">Comunidad de sanación</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-secundario to-terciario rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-white">
              <div className="text-2xl font-bold mb-2">Recursos Digitales</div>
              <p className="text-principal opacity-90">Herramientas disponibles 24/7</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-br from-secundario to-terciario text-white px-8 py-4 rounded-full hover:bg-gradient-to-br hover:from-terciario hover:to-secundario transition-all font-medium text-lg shadow-lg">
            Conoce Más Sobre Nosotros
          </button>
        </div>
      </div>
    </section>
  );
} 