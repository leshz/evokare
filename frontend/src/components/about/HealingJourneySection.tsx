export function HealingJourneySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-secundario to-terciario">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Comienza Tu Viaje De<br />
            <span className="text-yellow-300">Sanación Hoy</span>
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            No esperes más para comenzar tu transformación. Cada paso que tomes hacia
            tu bienestar es una inversión en tu futuro y en las personas que amas.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-secundario px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-medium text-lg">
              Agendar Primera Sesión
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-secundario transition-colors font-medium text-lg">
              Conocer Nuestros Planes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 