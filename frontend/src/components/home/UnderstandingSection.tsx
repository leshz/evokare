import { AlertCircle, CloudRain, BrainCircuit } from 'lucide-react';


export function UnderstandingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Entendiendo la Salud Mental</h2>
          <p className="text-xl font-medium text-gray-600">Es La Forma Más Poderosa De Respeto Propio</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
              <AlertCircle className="text-red-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ansiedad</h3>
            <p className="text-gray-600">
              Aprende a manejar la ansiedad con técnicas efectivas y apoyo profesional personalizado.
            </p>
          </div>

          <div className="text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
              <CloudRain className="text-blue-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Depresión</h3>
            <p className="text-gray-600">
              Encuentra herramientas y estrategias para superar la depresión y recuperar tu vitalidad.
            </p>
          </div>

          <div className="text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
              <BrainCircuit className="text-purple-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Estrés</h3>
            <p className="text-gray-600">
              Desarrolla habilidades para manejar el estrés y mantener el equilibrio en tu vida diaria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 