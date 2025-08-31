export function AboutHeroSection() {
  return (
    <section className="from-principal to-principal bg-gradient-to-br py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
              <span className="text-secundario">Conectando</span> La Brecha
              <br />
              En El Cuidado De La
              <br />
              <span className="text-terciario">Salud Mental</span>
            </h1>
            <p className="mb-8 text-xl text-gray-600">
              Creemos que todos merecen acceso a apoyo de salud mental de
              calidad. Nuestra misión es hacer que la terapia y el bienestar
              sean accesibles, comprensibles y efectivos para cada persona.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="from-secundario to-terciario hover:from-terciario hover:to-secundario rounded-full bg-gradient-to-br px-8 py-3 font-medium text-white transition-all hover:bg-gradient-to-br">
                Conoce Nuestro Enfoque
              </button>
              <button className="border-secundario text-secundario hover:bg-secundario rounded-full border px-8 py-3 font-medium transition-colors hover:text-white">
                Nuestros Servicios
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-principal flex aspect-square items-center justify-center rounded-3xl p-8 shadow-lg">
              <div className="from-secundario to-terciario flex h-64 w-64 items-center justify-center rounded-2xl bg-gradient-to-br">
                <span className="text-center text-lg text-white">
                  Conectando
                  <br />
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
