import { CheckCircle } from "lucide-react";

export function SupportSystemSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-principal to-principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sistema de Apoyo Integral</h2>
          <p className="text-xl text-gray-600">
            Nuestro enfoque holístico combina terapia tradicional con herramientas modernas para tu bienestar completo.
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Terapia Personalizada y Apoyo Continuo
          </h3>
          <p className="text-gray-600 mb-8">
            Nuestro programa de terapia personalizada está diseñado para
            adaptarse a tus necesidades específicas, ofrecerte soporte de vida.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-indigo-600 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                Sesiones individuales personalizadas
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-indigo-600 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">Apoyo entre sesiones</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-indigo-600 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">Recursos digitales accesibles</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-indigo-600 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">Seguimiento de progreso personal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 