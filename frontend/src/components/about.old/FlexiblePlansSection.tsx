export function FlexiblePlansSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Planes Flexibles Para<br />
            <span className="text-secundario">Cada Necesidad</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creemos que el acceso a la salud mental no debe ser un privilegio.
            Por eso ofrecemos planes accesibles que se adaptan a tu situación.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Plan Básico */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Plan Básico</h3>
            <div className="text-4xl font-bold text-secundario mb-2">$100</div>
            <p className="text-gray-600 mb-6">por mes</p>
            <ul className="space-y-3 text-left mb-8">
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-600">2 sesiones mensuales</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-600">Chat de apoyo</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-600">Recursos digitales</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-600">Seguimiento básico</span>
              </li>
            </ul>
            <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-full hover:bg-gray-300 transition-colors font-medium">
              Comenzar
            </button>
          </div>

          {/* Plan Estándar */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-secundario relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secundario text-white px-4 py-2 rounded-full text-sm">
              Más Popular
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Plan Estándar</h3>
            <div className="text-4xl font-bold text-secundario mb-2">$180</div>
            <p className="text-gray-600 mb-6">por mes</p>
            <ul className="space-y-3 text-left mb-8">
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-600">4 sesiones mensuales</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-600">Chat de apoyo 24/7</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-600">Recursos premium</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-600">Seguimiento personalizado</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-600">Acceso a talleres</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-br from-secundario to-terciario text-white py-3 rounded-full hover:bg-gradient-to-br hover:from-terciario hover:to-secundario transition-all font-medium">
              Comenzar
            </button>
          </div>

          {/* Plan Premium */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Plan Premium</h3>
            <div className="text-4xl font-bold text-secundario mb-2">$300</div>
            <p className="text-gray-600 mb-6">por mes</p>
            <ul className="space-y-3 text-left mb-8">
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-600">8 sesiones mensuales</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-600">Chat prioritario 24/7</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-600">Todos los recursos</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-600">Terapeuta dedicado</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-600">Acceso completo</span>
              </li>
            </ul>
            <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-full hover:bg-gray-300 transition-colors font-medium">
              Comenzar
            </button>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center bg-secundario text-white px-6 py-3 rounded-full">
            <span className="mr-2">Ponerse en Contacto</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </section>
  );
} 