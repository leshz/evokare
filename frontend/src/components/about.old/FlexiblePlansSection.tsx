export function FlexiblePlansSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Planes Flexibles Para
            <br />
            <span className="text-secundario">Cada Necesidad</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Creemos que el acceso a la salud mental no debe ser un privilegio.
            Por eso ofrecemos planes accesibles que se adaptan a tu situación.
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {/* Plan Básico */}
          <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              Plan Básico
            </h3>
            <div className="text-secundario mb-2 text-4xl font-bold">$100</div>
            <p className="mb-6 text-gray-600">por mes</p>
            <ul className="mb-8 space-y-3 text-left">
              <li className="flex items-center">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <span className="text-xs text-white">✓</span>
                </div>
                <span className="text-gray-600">2 sesiones mensuales</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <span className="text-xs text-white">✓</span>
                </div>
                <span className="text-gray-600">Chat de apoyo</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <span className="text-xs text-white">✓</span>
                </div>
                <span className="text-gray-600">Recursos digitales</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <span className="text-xs text-white">✓</span>
                </div>
                <span className="text-gray-600">Seguimiento básico</span>
              </li>
            </ul>
            <button className="w-full rounded-full bg-gray-200 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-300">
              Comenzar
            </button>
          </div>

          {/* Plan Estándar */}
          <div className="border-secundario relative rounded-2xl border-2 bg-white p-8 text-center shadow-lg">
            <div className="bg-secundario absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full px-4 py-2 text-sm text-white">
              Más Popular
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              Plan Estándar
            </h3>
            <div className="text-secundario mb-2 text-4xl font-bold">$180</div>
            <p className="mb-6 text-gray-600">por mes</p>
            <ul className="mb-8 space-y-3 text-left">
              <li className="flex items-center">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <span className="text-xs text-white">✓</span>
                </div>
                <span className="text-gray-600">4 sesiones mensuales</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <span className="text-xs text-white">✓</span>
                </div>
                <span className="text-gray-600">Chat de apoyo 24/7</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <span className="text-xs text-white">✓</span>
                </div>
                <span className="text-gray-600">Recursos premium</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <span className="text-xs text-white">✓</span>
                </div>
                <span className="text-gray-600">Seguimiento personalizado</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <span className="text-xs text-white">✓</span>
                </div>
                <span className="text-gray-600">Acceso a talleres</span>
              </li>
            </ul>
            <button className="from-secundario to-terciario hover:from-terciario hover:to-secundario w-full rounded-full bg-gradient-to-br py-3 font-medium text-white transition-all hover:bg-gradient-to-br">
              Comenzar
            </button>
          </div>

          {/* Plan Premium */}
          <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              Plan Premium
            </h3>
            <div className="text-secundario mb-2 text-4xl font-bold">$300</div>
            <p className="mb-6 text-gray-600">por mes</p>
            <ul className="mb-8 space-y-3 text-left">
              <li className="flex items-center">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <span className="text-xs text-white">✓</span>
                </div>
                <span className="text-gray-600">8 sesiones mensuales</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <span className="text-xs text-white">✓</span>
                </div>
                <span className="text-gray-600">Chat prioritario 24/7</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <span className="text-xs text-white">✓</span>
                </div>
                <span className="text-gray-600">Todos los recursos</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <span className="text-xs text-white">✓</span>
                </div>
                <span className="text-gray-600">Terapeuta dedicado</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <span className="text-xs text-white">✓</span>
                </div>
                <span className="text-gray-600">Acceso completo</span>
              </li>
            </ul>
            <button className="w-full rounded-full bg-gray-200 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-300">
              Comenzar
            </button>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-secundario inline-flex items-center rounded-full px-6 py-3 text-white">
            <span className="mr-2">Ponerse en Contacto</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </section>
  );
}
