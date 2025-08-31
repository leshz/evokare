export function GrowingStorySection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              Creciendo Con Cada
              <span className="text-secundario"> Historia Compartida</span>
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Cada persona que llega a nosotros trae consigo una historia única.
              Creemos que al compartir experiencias y crear un espacio seguro,
              todos podemos crecer juntos en nuestro camino hacia el bienestar.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-secundario mr-4 h-6 w-6 rounded-full"></div>
                <span className="text-gray-700">
                  Historias reales de transformación
                </span>
              </div>
              <div className="flex items-center">
                <div className="bg-secundario mr-4 h-6 w-6 rounded-full"></div>
                <span className="text-gray-700">Comunidad de apoyo mutuo</span>
              </div>
              <div className="flex items-center">
                <div className="bg-secundario mr-4 h-6 w-6 rounded-full"></div>
                <span className="text-gray-700">
                  Crecimiento personal continuo
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-principal flex h-48 items-center justify-center rounded-2xl p-6 shadow-md">
              <span className="text-secundario text-center font-medium">
                Sesiones
                <br />
                Individuales
              </span>
            </div>
            <div className="from-secundario to-terciario flex h-48 items-center justify-center rounded-2xl bg-gradient-to-br p-6 text-white">
              <span className="text-center font-medium">
                Terapia
                <br />
                Grupal
              </span>
            </div>
            <div className="from-terciario to-secundario flex h-48 items-center justify-center rounded-2xl bg-gradient-to-br p-6 text-white">
              <span className="text-center font-medium">
                Apoyo
                <br />
                Familiar
              </span>
            </div>
            <div className="bg-principal flex h-48 items-center justify-center rounded-2xl p-6 shadow-md">
              <span className="text-secundario text-center font-medium">
                Recursos
                <br />
                Digitales
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
