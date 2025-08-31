export function HealingJourneySection() {
  return (
    <section className="from-secundario to-terciario bg-gradient-to-br py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            Comienza Tu Viaje De
            <br />
            <span className="text-yellow-300">Sanación Hoy</span>
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-xl opacity-90">
            No esperes más para comenzar tu transformación. Cada paso que tomes
            hacia tu bienestar es una inversión en tu futuro y en las personas
            que amas.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <button className="text-secundario rounded-full bg-white px-8 py-4 text-lg font-medium transition-colors hover:bg-gray-100">
              Agendar Primera Sesión
            </button>
            <button className="hover:text-secundario rounded-full border-2 border-white px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-white">
              Conocer Nuestros Planes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
