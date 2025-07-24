export function FreshPerspectivesSection() {
  return (
    <section className="py-20 bg-principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xl text-secundario font-medium">Sobre Salud Mental</p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Nuevas Perspectivas</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-6xl font-bold text-secundario mb-4">01</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Terapia Individual</h3>
            <p className="text-gray-600 mb-6">
              Sesiones personalizadas adaptadas a tus necesidades específicas y objetivos de crecimiento personal.
            </p>
            <button className="bg-gradient-to-br from-secundario to-terciario text-white px-6 py-2 rounded-full text-sm hover:bg-gradient-to-br hover:from-terciario hover:to-secundario transition-all">
              Saber Más
            </button>
          </div>

          <div className="text-center">
            <div className="text-6xl font-bold text-secundario mb-4">02</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Apoyo Grupal</h3>
            <p className="text-gray-600 mb-6">
              Conecta con otros en un ambiente seguro y de apoyo para compartir experiencias y aprender juntos.
            </p>
            <button className="bg-gradient-to-br from-secundario to-terciario text-white px-6 py-2 rounded-full text-sm hover:bg-gradient-to-br hover:from-terciario hover:to-secundario transition-all">
              Saber Más
            </button>
          </div>

          <div className="text-center">
            <div className="text-6xl font-bold text-secundario mb-4">03</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recursos Digitales</h3>
            <p className="text-gray-600 mb-6">
              Acceso a herramientas, ejercicios y contenido educativo para continuar tu crecimiento entre sesiones.
            </p>
            <button className="bg-gradient-to-br from-secundario to-terciario text-white px-6 py-2 rounded-full text-sm hover:bg-gradient-to-br hover:from-terciario hover:to-secundario transition-all">
              Saber Más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 