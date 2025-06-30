export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-principal to-principal py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-secundario">Reconectar</span> Con<br />
              Tu Bienestar Mental
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Descubre el poder de la terapia personalizada y reconecta con tu mejor versión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secundario text-white px-8 py-3 rounded-full hover:bg-terciario transition-colors font-medium">
                Comenzar Ahora
              </button>
              <button className="border border-secundario text-secundario px-8 py-3 rounded-full hover:bg-secundario hover:text-white transition-colors font-medium">
                Conocer Más
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-principal rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="w-64 h-64 bg-secundario rounded-2xl flex items-center justify-center">
                <span className="text-white text-lg">Apoyo Profesional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 