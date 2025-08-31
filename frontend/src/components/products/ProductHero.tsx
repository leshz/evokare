export function ProductHero() {
  return (
    <section className="from-secundario to-terciario bg-gradient-to-r py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Productos Holísticos
          </h1>
          <p className="text-principal mx-auto mb-8 max-w-3xl text-xl">
            Descubre nuestra colección cuidadosamente seleccionada de productos
            naturales y holísticos para tu bienestar físico, mental y
            espiritual.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="text-secundario hover:bg-principal rounded-full bg-white px-8 py-3 font-medium transition-colors">
              Explorar Productos
            </button>
            <button className="hover:text-secundario rounded-full border-2 border-white px-8 py-3 font-medium text-white transition-colors hover:bg-white">
              Guía de Productos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
