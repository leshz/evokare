import Image from "next/image";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-secundario to-terciario py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-principal">Reconectar</span> Con<br />
              Tu Bienestar Mental
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Descubre el poder de la terapia personalizada y reconecta con tu mejor versión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-principal text-secundario px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium">
                Comenzar Ahora
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-secundario transition-colors font-medium">
                Conocer Más
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl  aspect-square flex items-center justify-center shadow-xl">
              <div className="w-80 h-80 bg-principal rounded-2xl flex items-center justify-center">
                <Image src="https://picsum.photos/id/65/352/352" className=" w-full rounded-2xl overflow-hidden" alt="Apoyo Profesional" width={352} height={352} />
                {/* <span className="text-white text-lg">Apoyo Profesional</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 