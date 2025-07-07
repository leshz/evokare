export function GrowingStorySection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Creciendo Con Cada
              <span className="text-secundario"> Historia Compartida</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Cada persona que llega a nosotros trae consigo una historia única.
              Creemos que al compartir experiencias y crear un espacio seguro,
              todos podemos crecer juntos en nuestro camino hacia el bienestar.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-secundario rounded-full mr-4"></div>
                <span className="text-gray-700">Historias reales de transformación</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-secundario rounded-full mr-4"></div>
                <span className="text-gray-700">Comunidad de apoyo mutuo</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-secundario rounded-full mr-4"></div>
                <span className="text-gray-700">Crecimiento personal continuo</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-principal rounded-2xl p-6 h-48 flex items-center justify-center shadow-md">
              <span className="text-secundario font-medium text-center">
                Sesiones<br />
                Individuales
              </span>
            </div>
            <div className="bg-gradient-to-br from-secundario to-terciario rounded-2xl p-6 h-48 flex items-center justify-center text-white">
              <span className="font-medium text-center">
                Terapia<br />
                Grupal
              </span>
            </div>
            <div className="bg-gradient-to-br from-terciario to-secundario rounded-2xl p-6 h-48 flex items-center justify-center text-white">
              <span className="font-medium text-center">
                Apoyo<br />
                Familiar
              </span>
            </div>
            <div className="bg-principal rounded-2xl p-6 h-48 flex items-center justify-center shadow-md">
              <span className="text-secundario font-medium text-center">
                Recursos<br />
                Digitales
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 