export function SupportingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Te Apoyamos En<br />
              Cada Paso Del Camino
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-fuchsia-800 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Consejería Individual</h4>
                  <p className="text-gray-600">Sesiones de terapia personalizadas</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-fuchsia-800 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Terapia Familiar</h4>
                  <p className="text-gray-600">Fortalece las relaciones familiares</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-fuchsia-800 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Manejo del Estrés</h4>
                  <p className="text-gray-600">Estrategias efectivas de afrontamiento</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-fuchsia-100 rounded-2xl aspect-square flex items-center justify-center">
              <span className="text-fuchsia-800 font-medium text-center">Sesiones de<br />Terapia</span>
            </div>
            <div className="bg-purple-100 rounded-2xl aspect-square flex items-center justify-center">
              <span className="text-purple-800 font-medium text-center">Programas de<br />Bienestar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 