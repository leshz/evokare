export function AboutHeroSection() {
  return (
    <section className="bg-gradient-to-br from-principal to-principal py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-secundario">Conectando</span> La Brecha<br />
              En El Cuidado De La<br />
              <span className="text-terciario">Salud Mental</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Creemos que todos merecen acceso a apoyo de salud mental de calidad.
              Nuestra misión es hacer que la terapia y el bienestar sean accesibles,
              comprensibles y efectivos para cada persona.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-br from-secundario to-terciario text-white px-8 py-3 rounded-full hover:bg-gradient-to-br hover:from-terciario hover:to-secundario transition-all font-medium">
                Conoce Nuestro Enfoque
              </button>
              <button className="border border-secundario text-secundario px-8 py-3 rounded-full hover:bg-secundario hover:text-white transition-colors font-medium">
                Nuestros Servicios
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-principal rounded-3xl p-8 aspect-square flex items-center justify-center shadow-lg">
              <div className="w-64 h-64 bg-gradient-to-br from-secundario to-terciario rounded-2xl flex items-center justify-center">
                <span className="text-white text-lg text-center">
                  Conectando<br />
                  Corazones y Mentes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 