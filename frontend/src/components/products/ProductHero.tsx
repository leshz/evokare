export function ProductHero() {
  return (
    <section className="py-20 bg-gradient-to-r from-secundario to-terciario">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Productos Holísticos
          </h1>
          <p className="text-xl text-principal mb-8 max-w-3xl mx-auto">
            Descubre nuestra colección cuidadosamente seleccionada de productos naturales
            y holísticos para tu bienestar físico, mental y espiritual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-secundario px-8 py-3 rounded-full font-medium hover:bg-principal transition-colors">
              Explorar Productos
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-secundario transition-colors">
              Guía de Productos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 