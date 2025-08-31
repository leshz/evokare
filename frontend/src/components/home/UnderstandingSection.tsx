import { AlertCircle, CloudRain, BrainCircuit } from 'lucide-react';

export function UnderstandingSection() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black text-gray-900">
            Entendiendo la Salud Mental
          </h2>
          <p className="text-xl font-medium text-gray-600">
            Es La Forma Más Poderosa De Respeto Propio
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 transition-colors group-hover:bg-red-200">
              <AlertCircle className="text-red-500" size={32} />
            </div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Ansiedad
            </h3>
            <p className="text-gray-600">
              Aprende a manejar la ansiedad con técnicas efectivas y apoyo
              profesional personalizado.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 transition-colors group-hover:bg-blue-200">
              <CloudRain className="text-blue-500" size={32} />
            </div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Depresión
            </h3>
            <p className="text-gray-600">
              Encuentra herramientas y estrategias para superar la depresión y
              recuperar tu vitalidad.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 transition-colors group-hover:bg-purple-200">
              <BrainCircuit className="text-purple-500" size={32} />
            </div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">Estrés</h3>
            <p className="text-gray-600">
              Desarrolla habilidades para manejar el estrés y mantener el
              equilibrio en tu vida diaria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
