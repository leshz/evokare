export function PricingSection() {
  return (
    <section className="py-20 bg-principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Planes y Precios</h2>
          <p className="text-xl text-gray-600">Elige el plan que mejor se adapte a tus necesidades</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Plan Básico</h3>
            <div className="text-3xl font-bold text-secundario mb-4">$99<span className="text-lg text-gray-600">/mes</span></div>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-center"><span className="text-secundario mr-2">✓</span> Sesiones semanales</li>
              <li className="flex items-center"><span className="text-secundario mr-2">✓</span> Apoyo por email</li>
              <li className="flex items-center"><span className="text-secundario mr-2">✓</span> Biblioteca de recursos</li>
            </ul>
            <button className="w-full bg-gradient-to-br from-secundario to-terciario text-white py-3 rounded-full hover:bg-gradient-to-br hover:from-terciario hover:to-secundario transition-all font-medium">
              Comenzar
            </button>
          </div>

          <div className="bg-secundario text-white rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-4">Plan Premium</h3>
            <div className="text-3xl font-bold mb-4">$199<span className="text-lg text-principal">/mes</span></div>
            <ul className="space-y-2 text-principal">
              <li className="flex items-center">
                <div className="w-6 h-6 bg-white rounded-full flex-shrink-0 mt-1"></div>
                <span className="ml-2">Todo del plan básico</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-white rounded-full flex-shrink-0 mt-1"></div>
                <span className="ml-2">Sesiones ilimitadas</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-white rounded-full flex-shrink-0 mt-1"></div>
                <span className="ml-2">Apoyo 24/7</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-white rounded-full flex-shrink-0 mt-1"></div>
                <span className="ml-2">Recursos exclusivos</span>
              </li>
            </ul>
            <button className="w-full bg-white text-secundario py-3 rounded-full mt-6 hover:bg-principal transition-colors font-medium">
              Comenzar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 