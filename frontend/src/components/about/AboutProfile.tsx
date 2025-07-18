import { AboutHero } from './AboutHero';

export function AboutProfile() {
  return (
    <section className="py-20 bg-gradient-to-br from-principal to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <AboutHero />

        {/* Quote inspirador */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-secundario to-terciario rounded-2xl p-8 lg:p-12 text-white shadow-xl max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              &ldquo;La sanación es un viaje, no un destino&rdquo;
            </h2>
            <p className="text-xl text-principal opacity-90 mb-4">
              En Evokare, creemos que cada persona tiene la capacidad innata de sanar y crecer.
              Nuestro enfoque compasivo e integral está diseñado para acompañarte en cada paso de tu camino hacia el bienestar.
            </p>
            <div className="text-4xl lg:text-5xl font-serif italic text-yellow-300 opacity-80">
              EV
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 