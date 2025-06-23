export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nosotros</h2>
          <div className="w-24 h-1 bg-fuchsia-800 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Empoderando mentes, transformando vidas a través del apoyo personalizado en salud mental
            </h3>
            <p className="text-gray-600 leading-relaxed">
              En Evokare, creemos que todos merecen acceso a apoyo de calidad en salud mental. Nuestro equipo de profesionales experimentados se dedica a ayudarte a navegar los desafíos de la vida y descubrir tu fortaleza interior.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-fuchsia-800">150+</div>
                <div className="text-sm text-gray-600">Pacientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fuchsia-800">5+</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-fuchsia-100 rounded-2xl p-6 aspect-square flex items-center justify-center">
              <span className="text-fuchsia-800 font-medium">Sesiones de Terapia</span>
            </div>
            <div className="bg-purple-100 rounded-2xl p-6 aspect-square flex items-center justify-center">
              <span className="text-purple-800 font-medium">Apoyo Grupal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 