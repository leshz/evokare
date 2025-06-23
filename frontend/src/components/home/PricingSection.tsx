export function PricingSection() {
  return (
    <section className="py-20 bg-fuchsia-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Invierte En Tu<br />
              Bienestar
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Plan Básico</h3>
                <div className="text-3xl font-bold text-fuchsia-800 mb-4">$99<span className="text-lg text-gray-600">/mes</span></div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-fuchsia-800 mr-2">✓</span> Sesiones semanales</li>
                  <li className="flex items-center"><span className="text-fuchsia-800 mr-2">✓</span> Apoyo por email</li>
                  <li className="flex items-center"><span className="text-fuchsia-800 mr-2">✓</span> Biblioteca de recursos</li>
                </ul>
              </div>
              <div className="bg-fuchsia-800 text-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">Plan Premium</h3>
                <div className="text-3xl font-bold mb-4">$199<span className="text-lg text-fuchsia-200">/mes</span></div>
                <ul className="space-y-2 text-fuchsia-100">
                  <li className="flex items-center"><span className="text-white mr-2">✓</span> Sesiones ilimitadas</li>
                  <li className="flex items-center"><span className="text-white mr-2">✓</span> Apoyo 24/7</li>
                  <li className="flex items-center"><span className="text-white mr-2">✓</span> Terapia grupal</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Esto Es Lo Que<br />
              Necesitas Saber
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-fuchsia-800 rounded-full flex-shrink-0 mt-1"></div>
                <p className="text-gray-600">Horarios flexibles para adaptarse a tu estilo de vida</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-fuchsia-800 rounded-full flex-shrink-0 mt-1"></div>
                <p className="text-gray-600">Profesionales licenciados con años de experiencia</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-fuchsia-800 rounded-full flex-shrink-0 mt-1"></div>
                <p className="text-gray-600">Sesiones confidenciales y seguras</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-fuchsia-800 rounded-full flex-shrink-0 mt-1"></div>
                <p className="text-gray-600">Planes de tratamiento personalizados</p>
              </div>
            </div>
            <button className="w-full bg-fuchsia-800 text-white py-3 rounded-full mt-6 hover:bg-fuchsia-900 transition-colors font-medium">
              Comienza Hoy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 