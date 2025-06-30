export function UnderstandingSection() {
  return (
    <section className="py-20 bg-principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Entendiendo la Salud Mental</h2>
          <p className="text-xl text-secundario font-medium">Es La Forma Más Poderosa De Respeto Propio</p>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-secundario rounded-full flex items-center justify-center mb-6">
              <span className="text-white text-2xl">🧠</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ansiedad</h3>
            <p className="text-gray-600">
              Aprende a manejar la ansiedad con técnicas efectivas y apoyo profesional personalizado.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-secundario rounded-full flex items-center justify-center mb-6">
              <span className="text-white text-2xl">😔</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Depresión</h3>
            <p className="text-gray-600">
              Encuentra herramientas y estrategias para superar la depresión y recuperar tu vitalidad.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-secundario rounded-full flex items-center justify-center mb-6">
              <span className="text-white text-2xl">⚖️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Estrés</h3>
            <p className="text-gray-600">
              Desarrolla habilidades para manejar el estrés y mantener el equilibrio en tu vida diaria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 