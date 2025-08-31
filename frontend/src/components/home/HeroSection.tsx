import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="from-secundario to-terciario bg-gradient-to-r py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              <span className="text-principal">Reconectar</span> Con
              <br />
              Tu Bienestar Mental
            </h1>
            <p className="mb-8 text-xl text-gray-100">
              Descubre el poder de la terapia personalizada y reconecta con tu
              mejor versión.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="bg-principal text-secundario rounded-full px-8 py-3 font-medium transition-colors hover:bg-gray-800">
                Comenzar Ahora
              </button>
              <button className="hover:text-secundario rounded-full border border-white px-8 py-3 font-medium text-white transition-colors hover:bg-white">
                Conocer Más
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex aspect-square items-center justify-center rounded-3xl bg-white shadow-xl">
              <div className="bg-principal flex h-80 w-80 items-center justify-center rounded-2xl">
                <Image
                  src="https://picsum.photos/id/65/352/352"
                  className="w-full overflow-hidden rounded-2xl"
                  alt="Apoyo Profesional"
                  width={352}
                  height={352}
                />
                {/* <span className="text-white text-lg">Apoyo Profesional</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
