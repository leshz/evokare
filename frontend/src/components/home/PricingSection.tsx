export function PricingSection() {
  return (
    <section className="bg-principal py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Planes y Precios
          </h2>
          <p className="text-xl text-gray-600">
            Elige el plan que mejor se adapte a tus necesidades
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Plan Básico
            </h3>
            <div className="text-secundario mb-4 text-3xl font-bold">
              $99<span className="text-lg text-gray-600">/mes</span>
            </div>
            <ul className="mb-6 space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-secundario mr-2">✓</span> Sesiones
                semanales
              </li>
              <li className="flex items-center">
                <span className="text-secundario mr-2">✓</span> Apoyo por email
              </li>
              <li className="flex items-center">
                <span className="text-secundario mr-2">✓</span> Biblioteca de
                recursos
              </li>
            </ul>
            <button className="from-secundario to-terciario hover:from-terciario hover:to-secundario w-full rounded-full bg-gradient-to-br py-3 font-medium text-white transition-all hover:bg-gradient-to-br">
              Comenzar
            </button>
          </div>

          <div className="bg-secundario rounded-2xl p-6 text-white">
            <h3 className="mb-4 text-2xl font-bold">Plan Premium</h3>
            <div className="mb-4 text-3xl font-bold">
              $199<span className="text-principal text-lg">/mes</span>
            </div>
            <ul className="text-principal space-y-2">
              <li className="flex items-center">
                <div className="mt-1 h-6 w-6 flex-shrink-0 rounded-full bg-white"></div>
                <span className="ml-2">Todo del plan básico</span>
              </li>
              <li className="flex items-center">
                <div className="mt-1 h-6 w-6 flex-shrink-0 rounded-full bg-white"></div>
                <span className="ml-2">Sesiones ilimitadas</span>
              </li>
              <li className="flex items-center">
                <div className="mt-1 h-6 w-6 flex-shrink-0 rounded-full bg-white"></div>
                <span className="ml-2">Apoyo 24/7</span>
              </li>
              <li className="flex items-center">
                <div className="mt-1 h-6 w-6 flex-shrink-0 rounded-full bg-white"></div>
                <span className="ml-2">Recursos exclusivos</span>
              </li>
            </ul>
            <button className="text-secundario hover:bg-principal mt-6 w-full rounded-full bg-white py-3 font-medium transition-colors">
              Comenzar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
