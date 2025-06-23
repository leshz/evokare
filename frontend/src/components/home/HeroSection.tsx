export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-fuchsia-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Te Ayudamos A<br />
              <span className="text-fuchsia-800">Reconectar</span> Con<br />
              Tu Verdadero Ser
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Descubre un camino hacia el bienestar mental y el crecimiento personal a través de nuestro sistema integral de apoyo y orientación experta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-fuchsia-800 text-white px-8 py-3 rounded-full hover:bg-fuchsia-900 transition-colors font-medium">
                Inicia Tu Proceso
              </button>
              <button className="border border-fuchsia-800 text-fuchsia-800 px-8 py-3 rounded-full hover:bg-fuchsia-800 hover:text-white transition-colors font-medium">
                Conoce Más
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-fuchsia-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="w-64 h-64 bg-fuchsia-200 rounded-2xl flex items-center justify-center">
                <span className="text-fuchsia-800 text-lg">Apoyo Profesional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 