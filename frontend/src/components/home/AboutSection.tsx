export function AboutSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Evokare</h2>
          <div className="w-24 h-1 bg-secundario mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-secundario">150+</div>
            <p className="text-gray-600">Pacientes Atendidos</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secundario">5+</div>
            <p className="text-gray-600">Años de Experiencia</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secundario">98%</div>
            <p className="text-gray-600">Tasa de Satisfacción</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-principal rounded-2xl p-6 aspect-square flex items-center justify-center">
            <span className="text-secundario font-medium">Sesiones de Terapia</span>
          </div>
          <div className="bg-principal rounded-2xl p-6 aspect-square flex items-center justify-center">
            <span className="text-secundario font-medium">Apoyo Grupal</span>
          </div>
          <div className="bg-principal rounded-2xl p-6 aspect-square flex items-center justify-center">
            <span className="text-secundario font-medium">Recursos Digitales</span>
          </div>
        </div>
      </div>
    </section>
  );
} 